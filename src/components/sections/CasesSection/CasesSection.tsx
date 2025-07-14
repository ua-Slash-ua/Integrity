'use client'

import TabSection from '@/components/ui/TabSection/TabSection'
import s from './CasesSection.module.css'
import MainTitle from '@/components/ui/MainTitle/MainTitle'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import { useState } from 'react'

// Мокові дані для кейсів
const cases = [
  {
    title: 'Розробка мобільного додатку для доставки їжі',
    location: 'Київ, Україна',
    client: 'FoodExpress',
    goal: 'Збільшити кількість замовлень через мобільний канал',
    whatWeDid: [
      'UI/UX дизайн',
      'Розробка iOS та Android додатків',
      'Інтеграція з платіжними системами',
      'Тестування та запуск',
    ],
    stats: [
      { label: 'Кількість завантажень', value: '50 000+' },
      { label: 'Час розробки', value: '4 місяці' },
      { label: 'Збільшення замовлень', value: '+35%' },
    ],
  },
  {
    title: 'Автоматизація документообігу для юридичної компанії',
    location: 'Львів, Україна',
    client: 'LawPro',
    goal: 'Оптимізувати внутрішні процеси та зменшити час на обробку документів',
    whatWeDid: ['Бізнес-аналіз', 'Розробка веб-платформи', 'Навчання персоналу'],
    stats: [
      { label: 'Скорочення часу обробки', value: '-60%' },
      { label: 'Кількість користувачів', value: '120+' },
      { label: 'Тривалість проекту', value: '3 місяці' },
    ],
  },
  {
    title: 'E-commerce платформа для fashion-бренду',
    location: 'Одеса, Україна',
    client: 'StyleHub',
    goal: 'Запуск онлайн-продажів та вихід на нові ринки',
    whatWeDid: [
      'Розробка інтернет-магазину',
      'Інтеграція з CRM',
      'SEO-оптимізація',
      'Підтримка після запуску',
    ],
    stats: [
      { label: 'Перший місяць продажів', value: '1 200+ замовлень' },
      { label: 'Зростання трафіку', value: '+80%' },
      { label: 'Час розробки', value: '5 місяців' },
    ],
  },
]

function CasePagination({
  cases: caseData,
  activeIndex,
  onClick,
}: {
  cases: any[]
  activeIndex: number
  onClick: (idx: number) => void
}) {
  return (
    <div className={s.pagination}>
      {caseData.map((c, idx) => (
        <div
          key={idx}
          className={s.paginationItem + (idx === activeIndex ? ' ' + s.active : '')}
          onClick={() => onClick(idx)}
        >
          <div className={s.paginationCase}>CASE {idx + 1}</div>
          <div className={s.paginationTitle}>{c.title}</div>
        </div>
      ))}
    </div>
  )
}

export default function CasesSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className={s.section}>
      <div className={s.headWrapper}>
        <TabSection style="gray" text="Case studies" />
        <div className={s.wrapHeading}>
          <MainTitle title="Marketing [[in Action]]" />
          <div className={s.count}>
            <span>({cases.length})</span>
          </div>
        </div>
      </div>
      <div className={s.casesLayout}>
        <CasePagination cases={cases} activeIndex={activeIndex} onClick={setActiveIndex} />
        <Swiper
          spaceBetween={32}
          slidesPerView={1}
          loop={false}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => swiper.slideTo(activeIndex)}
        >
          {cases.map((card, idx) => (
            <SwiperSlide key={idx}>
              <div className={s.caseContentWrap}>
                <div className={s.caseMain}>
                  <div className={s.caseTitle}>{card.title}</div>
                  <div className={s.caseInfoRow}>
                    <div className={s.caseInfoCard}>
                      <div className={s.caseInfoLabel}>Location:</div>
                      <div>{card.location}</div>
                    </div>
                    <div className={s.caseInfoCard}>
                      <div className={s.caseInfoLabel}>Client:</div>
                      <div>{card.client}</div>
                    </div>
                    <div className={s.caseInfoCard}>
                      <div className={s.caseInfoLabel}>Goal:</div>
                      <div>{card.goal}</div>
                    </div>
                  </div>
                  <div className={s.caseWhatWeDid}>
                    <div className={s.caseInfoLabel}>Що ми зробили:</div>
                    <ul>
                      {card.whatWeDid?.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={s.caseStatsBlock}>
                  {card.stats?.map((stat: any, i: number) => (
                    <div key={i} className={s.caseStatItem}>
                      <div className={s.caseStatValue}>{stat.value}</div>
                      <div className={s.caseStatLabel}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
