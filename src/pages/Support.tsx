import React from 'react'
import ContentWrap from '../components/ContentWrap'
import { useThemeLanguage } from '../contexts/ThemeLanguageContext'

export default function Support() {
  const { lang } = useThemeLanguage()
  const t = (zh: string, en: string) => (lang === 'zh' ? zh : en)

  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText('6309017210')
      alert(t('已复制账号号码', 'Account number copied'))
    } catch (e) {
      alert(t('无法复制，请手动选择并复制', 'Unable to copy; please select and copy manually'))
    }
  }

  return (
    <ContentWrap>
      <h1 className="text-2xl font-bold">{t('支持我们', 'Support Us')}</h1>
      <p className="mt-2">{t('捐款将用于本会的文化活动、社区项目与技能培训。', 'Contributions support the association’s cultural activities, community programmes, skills development and social inclusion initiatives.')}</p>

      <section className="mt-4 p-4 rounded bg-white dark:bg-gray-800 shadow">
        <h2 className="font-semibold">{t('银行资料', 'Banking Details')}</h2>
        <p className="mt-2">{t('户名：Persatuan Kebudayaan Cina OKU Penglihatan Malaysia', 'Account Name: Persatuan Kebudayaan Cina OKU Penglihatan Malaysia')}</p>
        <p className="mt-1">{t('银行：Public Bank', 'Bank: Public Bank')}</p>
        <p className="mt-1">{t('账号：6309017210', 'Account Number: 6309017210')}</p>
        <div className="mt-3">
          <button onClick={copyAccount} className="px-3 py-2 bg-ccabmRed text-white rounded">{t('复制账号号码', 'Copy Account Number')}</button>
        </div>
      </section>

      <section className="mt-4">
        <h2 className="font-semibold">{t('赞助与合作', 'Sponsorship & Collaboration')}</h2>
        <p>{t('请通过邮箱联系以洽谈赞助与合作事宜。', 'Please contact us via email for sponsorship and collaboration enquiries.')}</p>
      </section>
    </ContentWrap>
  )
}
