import React from 'react'
import ContentWrap from '../components/ContentWrap'
import { useThemeLanguage } from '../contexts/ThemeLanguageContext'

export default function Committee() {
  const { lang } = useThemeLanguage()
  const t = (zh: string, en: string) => (lang === 'zh' ? zh : en)

  return (
    <ContentWrap>
      <h1 className="text-2xl font-bold">{t('理事会', 'Committee')}</h1>
      <p className="mt-2">{t('请管理员补充理事会成员信息与照片。此处保留可编辑的理事会结构：主席、副主席、秘书、司库与理事。', 'Please add committee member information and photos via the admin interface. This page reserves editable committee structure: President, Vice President, Secretary, Treasurer and Members.')}</p>

      <section className="mt-4">
        <h2 className="font-semibold">{t('当前届别', 'Committee Term')}</h2>
        <p className="mt-1">{t('请填写届别（例如：2024-2026）', 'Please specify the committee term (eg: 2024-2026)')}</p>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded shadow bg-white dark:bg-gray-800">{t('主席：请上传姓名与照片', 'President: please upload name and photo')}</div>
          <div className="p-4 rounded shadow bg-white dark:bg-gray-800">{t('副主席：占位', 'Vice President: placeholder')}</div>
          <div className="p-4 rounded shadow bg-white dark:bg-gray-800">{t('秘书：占位', 'Secretary: placeholder')}</div>
        </div>
      </section>
    </ContentWrap>
  )
}
