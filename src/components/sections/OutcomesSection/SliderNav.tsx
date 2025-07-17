import React from 'react'
import s from './SliderNav.module.css'
import Image from 'next/image'

export default function SliderNav({
  onPrev,
  onNext,
}: {
  onPrev?: () => void
  onNext?: () => void
}) {
  return (
    <div className={s.navContainer}>
      <button className={s.arrowBtn} onClick={onPrev} aria-label="Previous slide">
        <span className={s.iconLeft}>
          <Image
            src="/images/icons/arrow-1.svg"
            alt="prev"
            width={20}
            height={16}
            style={{ transform: 'rotate(180deg)', width: '1.042vw', height: '0.833vw' }}
          />
        </span>
      </button>
      <button className={s.arrowBtn} onClick={onNext} aria-label="Next slide">
        <span className={s.iconRight}>
          <Image
            src="/images/icons/arrow-2.svg"
            alt="next"
            width={20}
            height={16}
            style={{ width: '1.042vw', height: '0.833vw' }}
          />
        </span>
      </button>
    </div>
  )
}
