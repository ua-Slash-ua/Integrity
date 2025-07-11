'use client'

import React from 'react'
import MainTitle from '@/components/ui/MainTitle/MainTitle'
import s from './ServicesSection.module.css'
import TabSection from '@/components/ui/TabSection/TabSection'
import Image from 'next/image'
import ArrowIcon from 'public/images/icons/arrow-2.svg'
import SliderIcon from 'public/images/icons/slider.svg'
import ContainerIcon from 'public/images/icons/container.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import { useRef, useState, useEffect } from 'react'
import FillForm from '@/components/FillForm/FillForm'

export default function ServicesSection() {
  const services = [
    {
      image: '/images/services1.png',
      title: 'META ADS',
      description:
        'Fast-loading, goal-driven sites that look good and work even better. From one-pagers to fully custom builds',
    },
    {
      image: '/images/services2.png',
      title: 'SALES FUNNEL DEVELOPMENT',
      description:
        'Step-by-step paths that move people from interest to action. Built to feel natural and stay aligned with how people decide',
    },
    {
      image: '/images/services3.png',
      title: 'WEBSITES',
      description:
        'Fast-loading, goal-driven sites that look good and work even better. From one-pagers to fully custom builds',
    },
    {
      image: '/images/services1.png',
      title: 'SEO OPTIMIZATION',
      description: 'Improve your site ranking and visibility with our SEO services.',
    },
    {
      image: '/images/services2.png',
      title: 'BRANDING',
      description: 'Create a strong brand identity that stands out in the market.',
    },
    {
      image: '/images/services3.png',
      title: 'CONTENT MARKETING',
      description: 'Engage your audience with high-quality content tailored to your business.',
    },
    {
      image: '/images/services1.png',
      title: 'EMAIL MARKETING',
      description: 'Reach your audience directly with personalized email campaigns.',
    },
    {
      image: '/images/services2.png',
      title: 'ANALYTICS',
      description: 'Track and analyze your business performance with our analytics tools.',
    },
    {
      image: '/images/services3.png',
      title: 'SUPPORT',
      description: 'Get 24/7 support for all your digital marketing needs.',
    },
  ]

  const swiperRef = useRef<any>(null)
  const [swiperIndex, setSwiperIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className={s.section}>
      <div className={s.headWrapper}>
        <TabSection style="white" text="Services" />
        <div className={s.wrapHeading}>
          <MainTitle title="Our tools > [[to accelerate your growth]]" />
          <div className={s.count}>(7)</div>
        </div>
      </div>
      <div className={s.services}>
        <div className={s.sliderWindow}>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            spaceBetween={8}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 0.5,
              scale: 0.9,
              slideShadows: false,
            }}
            pagination={false}
            navigation={{
              nextEl: '.navSwiperNext',
              prevEl: '.navSwiperPrev',
            }}
            observer={true}
            observeParents={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className={s.swiperCustom}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setSwiperIndex(swiper.realIndex)}
          >
            {services.map((service, idx) => {
              const lastIdx = (swiperIndex - 2 + services.length) % services.length
              const lastIdxRight = (swiperIndex + 2) % services.length
              let slideClass = ''
              if (idx === lastIdx || idx === lastIdxRight) {
                slideClass = s.lastSlide
              }
              let title: string | React.ReactElement = service.title
              if (service.title === 'SALES FUNNEL DEVELOPMENT') {
                title = (
                  <>
                    <span>SALES FUNNEL</span>
                    <br />
                    <span>DEVELOPMENT</span>
                  </>
                )
              }
              return (
                <SwiperSlide key={idx} className={slideClass} style={{ width: 573, height: 652 }}>
                  <div className={s.serviceCard}>
                    <div className={s.serviceIconWrapper}>
                      <Image
                        className={s.serviceIcon}
                        src={service.image}
                        alt={typeof title === 'string' ? title : service.title}
                        width={450}
                        height={280}
                        style={{ width: 'auto', height: 'auto' }}
                      />
                    </div>
                    <div className={s.serviceTextBlock}>
                      <div className={s.serviceTitle}>{title}</div>
                      <div className={s.serviceDescription}>{service.description}</div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <div className="swiper-pagination"></div>
          <div className={s.sliderOverlayLeft}></div>
          <div className={s.sliderOverlayRight}></div>
        </div>
        <div className={s.sliderDotsRow}>
          {services.map((_, idx) =>
            idx === swiperIndex ? (
              <span
                key={idx}
                className={s.sliderActiveDot}
                onClick={() => swiperRef.current?.slideToLoop(idx)}
                style={{ cursor: 'pointer' }}
              ></span>
            ) : (
              <span
                key={idx}
                className={s.sliderDot}
                onClick={() => swiperRef.current?.slideToLoop(idx)}
                style={{ cursor: 'pointer' }}
              ></span>
            ),
          )}
        </div>
        <div className={s.sliderNavWrapper}>
          <div className={s.arrowContainer}>
            <button className={'navSwiperPrev ' + s.arrowBtn} aria-label="Previous slide">
              <Image
                src={ArrowIcon}
                alt="prev"
                width={48}
                height={48}
                style={{ transform: 'rotate(180deg)', width: 'auto', height: 'auto' }}
              />
            </button>
          </div>
          <div className={s.arrowContainer}>
            <button className={'navSwiperNext ' + s.arrowBtn} aria-label="Next slide">
              <Image
                src={ArrowIcon}
                alt="next"
                width={48}
                height={48}
                style={{ width: 'auto', height: 'auto' }}
              />
            </button>
          </div>
        </div>
      </div>
      <div className={s.fillFormSection}>
        <FillForm />
      </div>
    </div>
  )
}
