import React from 'react'
import ContentWrap from '../components/ContentWrap'
import { useThemeLanguage } from '../contexts/ThemeLanguageContext'

export default function Membership() {
  const { lang } = useThemeLanguage()
  const t = (zh: string, en: string) => (lang === 'zh' ? zh : en)

  return (
    <ContentWrap>
      <h1 className="text-2xl font-bold">{t('加入会员', 'Membership')}</h1>

      <p className="mt-2">{t('CCABM 诚邀符合条件的华裔人士加入我们的大家庭，共同推动华人文化的传承，并促进视障群体的社会融合。', 'CCABM welcomes Malaysian Chinese individuals who share our vision of cultural preservation and social inclusion. We offer two types of membership.')}</p>

      <section className="mt-4">
        <h2 className="font-semibold">{t('普通会员', 'Ordinary Member')}</h2>
        <p>{t('资格：年满 18 岁的马来西亚华裔视障人士或永久居民。', 'Eligibility: Visually impaired Malaysian Chinese citizens or permanent residents aged 18 and above.')}</p>
      </section>

      <section className="mt-4">
        <h2 className="font-semibold">{t('准会员', 'Associate Member')}</h2>
        <p>{t('资格：年满 18 岁的马来西亚华裔非视障人士，认同本会宗旨并愿意提供支持。', 'Eligibility: Non-visually impaired Malaysian Chinese individuals aged 18 and above who support our mission.')}</p>
      </section>

      <div className="mt-6">
        <a className="px-4 py-2 bg-ccabmRed text-white rounded inline-block" href="https://docs.google.com/forms/d/e/1FAIpQLSeESoxvHCHhPoLHF_w-PnDmq71dIfKl0iemcCEvQsuIW1_5gQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">{t('立即申请', 'Apply for Membership')}</a>
      </div>
    </ContentWrap>
  )
}
