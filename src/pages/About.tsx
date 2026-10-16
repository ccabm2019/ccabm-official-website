import React from 'react'
import { useThemeLanguage } from '../contexts/ThemeLanguageContext'
import ContentWrap from '../components/ContentWrap'

export default function About() {
  const { lang } = useThemeLanguage()
  const t = (zh: string, en: string) => (lang === 'zh' ? zh : en)

  return (
    <ContentWrap>
      <h1 className="text-2xl font-bold">{t('关于我们', 'About Us')}</h1>

      <section>
        <h2 className="mt-4 font-semibold">{t('我们的愿景', 'Our Vision')}</h2>
        <p>{t('本会的愿景是让视障人士能够在一个包容的社会中生活，并在社会、经济及文化等各方面获得平等的机会。', 'Our vision is to create an inclusive society where visually impaired individuals have equal opportunities in social, economic, and cultural aspects of life.')}</p>
      </section>

      <section>
        <h2 className="mt-4 font-semibold">{t('我们的使命', 'Our Mission')}</h2>
        <p>{t('本会的使命是通过倡导与各方合作，赋权、融合、参与并维护视障人士的权益和福祉，确保他们能够过上独立、快乐和安稳的生活。', 'Our mission is to empower, integrate, engage, and safeguard the rights and well-being of visually impaired individuals through advocacy and collaboration, ensuring they can lead independent, happy, and stable lives.')}</p>
      </section>

      <section>
        <h2 className="mt-4 font-semibold">{t('我们的目标', 'Our Goals')}</h2>
        <ol className="list-decimal ml-6">
          <li>{t('鼓励视障人士参与社会、艺术及文化活动；', 'Encourage visually impaired individuals to participate in social, artistic, and cultural activities.')}</li>
          <li>{t('支持视障人士在表演艺术、文化及传统音乐方面的发展与技能提升；', 'Support the development and enhancement of their skills in performing arts, culture, and traditional music.')}</li>
          <li>{t('提高视障人士的社会地位与经济水平；', 'Improve the social status and economic well-being of visually impaired individuals.')}</li>
          <li>{t('促进视障人士与社会大众之间的融合与合作；', 'Foster integration and collaboration between visually impaired individuals and the wider community.')}</li>
          <li>{t('通过倡导工作及与相关机构合作，帮助视障人士实现独立和安稳的生活。', 'Advocate and collaborate with relevant organizations to help visually impaired individuals achieve independent and stable lives.')}</li>
        </ol>
      </section>

      <section>
        <h2 className="mt-4 font-semibold">{t('我们的运营', 'Our Operations')}</h2>
        <p>{t('CCABM 的运营办公室设立于吉隆坡蕉赖美达园（Taman Midah Cheras），不仅是我们的行政中心，也为会员提供场地，以便他们能向公众提供免费按摩服务和中医传统医疗服务。', "CCABM’s operational office is located in Taman Midah, Cheras, Kuala Lumpur, serving as both an administrative center and a training space for our members. Here, we provide free massage and traditional Chinese medicine (TCM) services to the public, allowing our members to practice their skills while engaging with the community.")}</p>
      </section>

      <section>
        <h2 className="mt-4 font-semibold">{t('我们的挑战与努力', 'Our Challenges & Determination')}</h2>
        <p>{t('作为一个由视障人士领导和管理的协会，我们在运营过程中面临诸多挑战。由于会员多为全盲或低视力者，在文书处理方面需要额外的支持，例如阅读及撰写文件。然而，我们始终坚持不懈，通过团队合作和社会资源的整合，努力克服困难，以实现我们的愿景与使命。', 'As an organization founded and managed by visually impaired individuals, CCABM faces numerous challenges, particularly in administrative tasks that require reading and writing. We often rely on individuals with low vision for assistance in documentation. However, our unwavering dedication and teamwork have enabled us to overcome these obstacles and continue striving towards our mission.')}</p>
      </section>
    </ContentWrap>
  )
}
