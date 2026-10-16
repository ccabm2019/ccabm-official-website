import React from 'react'
import { useThemeLanguage } from '../contexts/ThemeLanguageContext'
import ContentWrap from '../components/ContentWrap'

export default function Activities() {
  const { lang } = useThemeLanguage()
  const t = (zh: string, en: string) => (lang === 'zh' ? zh : en)

  return (
    <ContentWrap>
      <h1 className="text-2xl font-bold">{t('我们的活动', 'Our Activities')}</h1>

      <section className="mt-4">
        <h2 className="font-semibold">{t('文化庆典', 'Cultural Celebrations')}</h2>
        <p>{t('举办春节、端午节、中秋节及冬至等传统节日庆祝活动，让视障人士感受中华文化的魅力。', 'Hosting Chinese New Year, the Dragon Boat Festival, the Mid-Autumn Festival, and the Winter Solstice Festival, allowing our members to engage in meaningful cultural traditions.')}</p>
      </section>

      <section className="mt-4">
        <h2 className="font-semibold">{t('文化艺术表演', 'Performing Arts & Talent Development')}</h2>
        <p>{t('鼓励会员参与音乐、戏曲、朗诵等艺术表演，培养才艺并提升自信心。', 'Encouraging members to participate in music, drama, recitation, and other artistic performances, boosting their confidence and talents.')}</p>
      </section>

      <section className="mt-4">
        <h2 className="font-semibold">{t('技能发展', 'Skill Development & Employment Training')}</h2>
        <p>{t('提供传统中医推拿及其他职业技能培训，以提高视障人士的就业能力。', 'Providing training in traditional Chinese medicine (TCM), massage therapy, and other vocational skills to enhance career opportunities.')}</p>
      </section>

      <section className="mt-4">
        <h2 className="font-semibold">{t('社会融合', 'Social Inclusion & Community Engagement')}</h2>
        <p>{t('通过各种交流活动，促进视障群体与社会大众的互动与理解，推动包容性社会的发展。', 'Organizing various interactive programs to bridge the gap between the visually impaired community and the general public, fostering greater understanding and inclusion.')}</p>
      </section>

      <section className="mt-6">
        <h2 className="font-semibold">{t('活动图库', 'Activity Gallery')}</h2>
        <p className="mt-2">{t('请管理员通过后台上传活动照片与详情，系统支持标题、日期、地点、中英描述与多张照片及替代文本。', 'Please upload activity photos and details via the administrator interface. The system supports title, date, location, bilingual descriptions, multiple photos and alt text.')}</p>
      </section>
    </ContentWrap>
  )
}
