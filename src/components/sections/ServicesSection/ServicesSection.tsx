import MainTitle from '@/components/ui/MainTitle/MainTitle'
import s from './ServicesSection.module.css'
import TabSection from '@/components/ui/TabSection/TabSection'

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
    </div>
  )
}
