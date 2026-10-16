import React from 'react'
import ContentWrap from '../components/ContentWrap'
import { useThemeLanguage } from '../contexts/ThemeLanguageContext'

export default function Contact() {
  const { lang } = useThemeLanguage()
  const t = (zh: string, en: string) => (lang === 'zh' ? zh : en)

  return (
    <ContentWrap>
      <h1 className="text-2xl font-bold">{t('联系我们', 'Contact Us')}</h1>

      <section className="mt-4">
        <h2 className="font-semibold">{t('会所地址', 'Association Office')}</h2>
        <p>67, Jalan Midah 7, Taman Midah, 56000 Kuala Lumpur.</p>
        <div className="mt-2 flex gap-2">
          <a className="px-3 py-2 border rounded" href="https://maps.app.goo.gl/ZhJTP4aBQxBexC4R8?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer">Google Maps</a>
          <a className="px-3 py-2 border rounded" href="https://waze.com/ul/hw283dutwh" target="_blank" rel="noopener noreferrer">Waze</a>
          <a className="px-3 py-2 border rounded" href="mailto:ccabm2019@gmail.com">Send Email</a>
          <a className="px-3 py-2 border rounded" href="tel:+60126767328">Call Us</a>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="font-semibold">{t('联系方式', 'Contact Details')}</h2>
        <p className="mt-1">{t('电子邮箱：ccabm2019@gmail.com', 'Email: ccabm2019@gmail.com')}</p>
        <p className="mt-1">{t('电话：+60 12 676 7328', 'Telephone: +60 12 676 7328')}</p>
      </section>

      <section className="mt-6">
        <h2 className="font-semibold">{t('联系方式表格', 'Contact Form')}</h2>
        <p>{t('以下为表单界面占位。提交功能需要配置后端邮件/数据库服务。', 'The contact form below is a UI placeholder. Submissions require a backend mail/database service to function.')}</p>
        <form className="mt-3 grid grid-cols-1 gap-3 max-w-md" onSubmit={(e) => e.preventDefault()}>
          <label>
            <span className="sr-only">{t('姓名', 'Name')}</span>
            <input className="w-full border rounded px-2 py-2" placeholder={t('姓名', 'Name')} aria-label={t('姓名', 'Name')} />
          </label>
          <label>
            <span className="sr-only">{t('邮箱', 'Email')}</span>
            <input className="w-full border rounded px-2 py-2" placeholder={t('邮箱', 'Email')} aria-label={t('邮箱', 'Email')} />
          </label>
          <label>
            <span className="sr-only">{t('信息', 'Message')}</span>
            <textarea className="w-full border rounded px-2 py-2" placeholder={t('信息', 'Message')} aria-label={t('信息', 'Message')} />
          </label>
          <button type="submit" className="px-3 py-2 bg-ccabmRed text-white rounded">{t('发送', 'Send')}</button>
        </form>
      </section>
    </ContentWrap>
  )
}
