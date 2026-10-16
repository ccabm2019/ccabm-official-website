import React from 'react'
import ContentWrap from '../components/ContentWrap'
import { useThemeLanguage } from '../contexts/ThemeLanguageContext'

export default function MemberPortal() {
  const { lang } = useThemeLanguage()
  const t = (zh: string, en: string) => (lang === 'zh' ? zh : en)

  return (
    <ContentWrap>
      <h1 className="text-2xl font-bold">{t('会员专区', 'Member Portal')}</h1>
      <p className="mt-2">{t('会员专区界面已创建为前端占位。真实认证需要配置 Supabase 并设置环境变量。', 'A front-end member portal has been created as a placeholder. Real authentication requires Supabase configuration and environment variables.')}</p>

      <section className="mt-4">
        <h2 className="font-semibold">{t('示范登录', 'Demo Login')}</h2>
        <p>{t('此处将来集成会员登录（会员ID + 密码 或 第三方认证）。当前为演示页面。', 'This area will integrate member login (membership ID + password or third-party auth). Currently this is a demo skeleton.')}</p>
      </section>
    </ContentWrap>
  )
}
