'use client'

import MainTitle from '@/components/ui/MainTitle/MainTitle'
import s from './ServicesSection.module.css'
import TabSection from '@/components/ui/TabSection/TabSection'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import NavSwiper from '@/components/NavSwiper/NavSwiper'

export default function ServicesSection() {
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
        <Swiper
          spaceBetween={32}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: '.navSwiperPrev',
            nextEl: '.navSwiperNext',
          }}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <div className={s.serviceCard}>
              <div
                className={s.serviceIcon}
                style={{ backgroundImage: 'url(/images/bg-services.png)' }}
              >
                {/* <Image className={s.serviceIcon} src="/images/icon-meta-ads.png" alt="adsgd" /> */}
              </div>
              <div className={s.serviceTitle}>Meta Ads</div>
              <div className={s.serviceDescription}>
                Fast-loading, goal-driven sites that look good and work even better. From one-pagers
                to fully custom builds
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.serviceCard}>
              <div
                className={s.serviceIcon}
                style={{ backgroundImage: 'url(/images/bg-services.png)' }}
              >
                {/* <Image className={s.serviceIcon} src="/images/icon-meta-ads.png" alt="adsgd" /> */}
              </div>
              <div className={s.serviceTitle}>Meta Ads</div>
              <div className={s.serviceDescription}>
                Fast-loading, goal-driven sites that look good and work even better. From one-pagers
                to fully custom builds
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.serviceCard}>
              <div
                className={s.serviceIcon}
                style={{ backgroundImage: 'url(/images/bg-services.png)' }}
              >
                {/* <Image className={s.serviceIcon} src="/images/icon-meta-ads.png" alt="adsgd" /> */}
              </div>
              <div className={s.serviceTitle}>Meta Ads</div>
              <div className={s.serviceDescription}>
                Fast-loading, goal-driven sites that look good and work even better. From one-pagers
                to fully custom builds
              </div>
            </div>
          </SwiperSlide>
          <div className="swiper-pagination"></div>
          <NavSwiper />
        </Swiper>
      </div>
    </div>
  )
}
