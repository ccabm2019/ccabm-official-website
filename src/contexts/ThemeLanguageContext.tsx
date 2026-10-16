import React from 'react'

type Lang = 'zh' | 'en'
type Theme = 'light' | 'dark'

const KEY_LANG = 'ccabm_lang'
const KEY_THEME = 'ccabm_theme'

export function usePref<T>(key: string, fallback: T) {
  const [state, setState] = React.useState<T>(() => {
    try {
      const raw = localStorage.getItem(key)
      return raw ? (JSON.parse(raw) as T) : fallback
    } catch {
      return fallback
    }
  })

  React.useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state))
    } catch {}
  }, [key, state])

  return [state, setState] as const
}

export const ThemeLanguageContext = React.createContext<any>(null)

export const ThemeLanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = usePref<Lang>(KEY_LANG, (navigator.language || 'zh').startsWith('zh') ? 'zh' : 'en')
  const [theme, setTheme] = usePref<Theme>(KEY_THEME, window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

  React.useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
  }, [lang])

  React.useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [theme])

  return (
    <ThemeLanguageContext.Provider value={{ lang, setLang, theme, setTheme }}>{children}</ThemeLanguageContext.Provider>
  )
}

export function useThemeLanguage() {
  const ctx = React.useContext(ThemeLanguageContext)
  if (!ctx) throw new Error('useThemeLanguage must be used within ThemeLanguageProvider')
  return ctx
}
