import React from 'react'

import config from '@/payload.config'
import { getPayload } from 'payload'
import './styles.css'
import HeroSection from '@/components/sections/HeroSection/HeroSection'
import AchievementsSection from '@/components/sections/AchievementsSection/AchievementsSection'
import s from './page.module.css'
import CasesSection from '@/components/sections/CasesSection/CasesSection'
import ServicesSection from '@/components/sections/ServicesSection/ServicesSection'
import SectionUnique from '@/components/sections/SectionUnique/SectionUnique'
import IndustriesSection from '@/components/sections/IndustriesSection/IndustriesSection'
import AboutTheFounderSection from '@/components/sections/AboutTheFounderSection/AboutTheFounderSection'
import ApproachSection from '@/components/sections/ApproachSection/ApproachSection'
import ReviewsSection from '@/components/sections/ReviewsSection/ReviewsSection'
import TariffsSection from '@/components/sections/TariffsSection/TariffsSection'

import FaqSection from '@/components/sections/FaqSection/FaqSection'
import FormSection from '@/components/sections/FormSection/FormSection'

import LatestInsightsSection from '@/components/sections/LatestInsightsSection/LatestInsightsSection'
import OutcomesSection from '@/components/sections/OutcomesSection/OutcomesSection'
import { addFaqs } from '@/action/addFaqs'

const BLOCK_COMPONENTS = {
  'hero-block': HeroSection,
  'achievements-block': AchievementsSection,
  'cases-block': CasesSection,
  'what-us-block': SectionUnique,
  'expertise-block': IndustriesSection,
  'services-block': ServicesSection,
  'form-block': FormSection,
  'about-founder-block': AboutTheFounderSection,
  'our-team-block': ApproachSection,
  'reviews-block': ReviewsSection,
  'tariffs-block': TariffsSection,
  'articles-block': LatestInsightsSection,
  'outcomes-block': OutcomesSection,
  'order-call-extend-block': FormSection,
  'faq-block': FaqSection,
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const faqs = await addFaqs(locale)

  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'main' } },
    locale: locale as 'en',
  })
  const page = docs[0]

  return (
    <div className={s.page}>
      {page?.blocks?.map((block, i) => {
        if (block.enabled === false) return null
        const BlockComponent = BLOCK_COMPONENTS[
          block.blockType as keyof typeof BLOCK_COMPONENTS
        ] as any
        if (!BlockComponent) return null

        if (block.blockType === 'faq-block') {
          // Кастимо до типу, який приймає faqs
          const FaqBlockComponent = BlockComponent as React.ComponentType<{
            block: any
            locale: string
            faqs: any
          }>
          return <FaqBlockComponent key={block.id || i} block={block} locale={locale} faqs={faqs} />
        }

        return <BlockComponent key={block.id || i} block={block} locale={locale} />
      })}
    </div>
  )
}
