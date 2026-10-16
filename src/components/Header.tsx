import React from 'react'
import { useThemeLanguage } from '../contexts/ThemeLanguageContext'

const NAV = [
  { to: '/', zh: '首页', en: 'Home' },
  { to: '/about', zh: '关于我们', en: 'About Us' },
  { to: '/activities', zh: '我们\u7684活动', en: 'Our Activities' },
  { to: '/committee', zh: '理事会', en: 'Committee' },
  { to: '/membership', zh: '加入会员', en: 'Membership' },
  { to: '/member-portal', zh: '会员专区', en: 'Member Portal' },
  { to: '/support-us', zh: '支持我们', en: 'Support Us' },
  { to: '/contact', zh: '联系我们', en: 'Contact Us' }
]

export default function Header({ navigate }: { navigate: (to: string) => void }) {
  const { lang, setLang, theme, setTheme } = useThemeLanguage()

  const t = (zh: string, en: string) => (lang === 'zh' ? zh : en)

  const onNav = (to: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    navigate(to)
  }

  return (
    <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo-placeholder.svg" alt="CCABM logo placeholder" className="w-14 h-14 rounded" />
          <div>
            <div className="font-semibold text-lg">马来西亚视障华人文化协会</div>
            <div className="text-sm">PERSATUAN KEBUDAYAAN CINA OKU PENGLIHATAN MALAYSIA</div>
            <div className="text-sm">CHINESE CULTURAL ASSOCIATION OF THE BLIND IN MALAYSIA (CCABM)</div>
          </div>
        </div>

        <nav aria-label="Primary" className="flex items-center gap-4">
          <ul className="hidden md:flex gap-2 items-center">
            {NAV.map((n) => (
              <li key={n.to}>
                <a href={n.to} onClick={onNav(n.to)} className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2">
                  {t(n.zh, n.en)}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <label className="sr-only">Language</label>
            <select aria-label="Language switcher" value={lang} onChange={(e) => setLang(e.target.value as any)} className="border rounded px-2 py-1 bg-white dark:bg-gray-700">
              <option value="zh">中文</option>
              <option value="en">English</option>
            </select>

            <div role="group" aria-label="Theme switcher" className="ml-2">
              <button aria-pressed={theme === 'light'} onClick={() => setTheme('light')} className="px-2" title="Light Mode">☀️</button>
              <button aria-pressed={theme === 'dark'} onClick={() => setTheme('dark')} className="px-2" title="Dark Mode">🌙</button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden border-t dark:border-gray-700">
        <div className="container mx-auto px-4 py-2 flex overflow-x-auto gap-2">
          {NAV.map((n) => (
            <a key={n.to} href={n.to} onClick={onNav(n.to)} className="px-3 py-2 rounded bg-white dark:bg-gray-800 border dark:border-gray-700 whitespace-nowrap">
              {t(n.zh, n.en)}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
