import TabSection from '@/components/ui/TabSection/TabSection'
import s from './CasesSection.module.css'
import MainTitle from '@/components/ui/MainTitle/MainTitle'

export default function CasesSection() {
  return (
    <div className={s.section}>
      <div className={s.headWrapper}>
        <TabSection style="gray" text="Case studies" />
        <div className={s.wrapHeading}>
          <MainTitle title="Marketing [[in Action]]" />
          <div className={s.count}>
            <span>(07)</span>
          </div>
        </div>
      </div>
    </div>
  )
}
