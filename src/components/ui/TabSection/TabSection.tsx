import React from 'react'
import s from './TabSection.module.css'

const TabSection = ({ style, text }: { style: string; text: string }) => {
  return (
    <div className={`${s[style]} ${s.tabSection}`}>
      <h2>{text}</h2>
    </div>
  )
}

export default TabSection
