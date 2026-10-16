import React from 'react'
import { useThemeLanguage } from '../contexts/ThemeLanguageContext'
import ContentWrap from '../components/ContentWrap'

export default function Home() {
  const { lang } = useThemeLanguage()
  const t = (zh: string, en: string) => (lang === 'zh' ? zh : en)

  return (
    <ContentWrap>
      <section aria-labelledby="hero-heading" className="py-6">
        <h1 id="hero-heading" className="text-3xl md:text-4xl font-bold">{t('文化传承，社会共融', 'Cultural Heritage and Social Inclusion')}</h1>
        <p className="mt-2 text-lg">{t('马来西亚视障华人文化协会（CCABM）是一家非政府组织（NGO），成立于 2019 年，并正式注册于社团注册局（Registrar of Society, ROS）。本会致力于推广华人社会文化活动，并关注视障群体在经济领域的参与。', 'The Chinese Cultural Association of the Blind Malaysia (CCABM) is a non-governmental organization (NGO) established in 2019 and officially registered with the Registrar of Societies (ROS). Our association is dedicated to promoting Chinese cultural and social activities while advocating for the participation of visually impaired individuals in the economic sector.')}</p>

        <div className="mt-4 flex gap-3">
          <a href="/about" className="inline-block px-4 py-2 bg-ccabmRed text-white rounded" aria-label="About us">{t('了解我们', 'About Us')}</a>
          <a href="/support-us" className="inline-block px-4 py-2 border rounded" aria-label="Support us">{t('支持我们', 'Support Us')}</a>
        </div>
      </section>

      <section aria-labelledby="highlights" className="py-6">
        <h2 id="highlights" className="text-2xl font-semibold">{t('重点项目', 'Highlights')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          <article className="p-4 rounded shadow bg-white dark:bg-gray-800" aria-label="Cultural Celebrations">
            <h3 className="font-bold">{t('文化庆典', 'Cultural Celebrations')}</h3>
            <p className="mt-2">{t('传统节日庆祝活动', 'Traditional festival celebrations')}</p>
          </article>
          <article className="p-4 rounded shadow bg-white dark:bg-gray-800">
            <h3 className="font-bold">{t('文化艺术表演', 'Performing Arts')}</h3>
            <p className="mt-2">{t('音乐、戏曲、朗诵等', 'Music, drama, recitation')}</p>
          </article>
          <article className="p-4 rounded shadow bg-white dark:bg-gray-800">
            <h3 className="font-bold">{t('技能发展', 'Skills Development')}</h3>
            <p className="mt-2">{t('职训与推拿课程', 'Vocational and TCM training')}</p>
          </article>
          <article className="p-4 rounded shadow bg-white dark:bg-gray-800">
            <h3 className="font-bold">{t('社会融合', 'Social Inclusion')}</h3>
            <p className="mt-2">{t('社区参与与交流', 'Community engagement and inclusion')}</p>
          </article>
        </div>
      </section>

      <section aria-labelledby="latest" className="py-6">
        <h2 id="latest" className="text-2xl font-semibold">{t('最新活动', 'Latest Activities')}</h2>
        <p className="mt-2">{t('最新活动将在此更新。请管理员上传真实活动信息与照片。', 'Latest activities will be listed here. Administrators should upload real activity information and photos.')}</p>
      </section>
    </ContentWrap>
  )
}
