'use client'

import TabSection from '@/components/ui/TabSection/TabSection'
import MainTitle from '@/components/ui/MainTitle/MainTitle'
import s from './FaqSection.module.css'
import { Accordion, AccordionItem } from '@szhsin/react-accordion'

type FaqSection = {
  title: string
  subtitle: string
}

type Faqs = {
  docs: {
    id: string
    question: string
    answer: string
  }[]
}

export default async function FaqSection({
  block,
  locale,
  faqs,
}: {
  block: FaqSection
  locale: string
  faqs: Faqs
}) {
  return (
    <section className={s.section}>
      <div className={s.topBlock}>
        <TabSection text={block.subtitle} style="white" />
        <MainTitle title={block.title} />
      </div>
      <div className={s.accordionCont}>
        {faqs.docs.map((faq) => (
          <Accordion className={s.accordion} key={faq.id}>
            <AccordionItem
              className={s.accordionItem}
              header={
                <div className={s.itemHeader}>
                  <p className={s.question}>{faq.question}</p>
                  <button>
                    <span>{accordionArrow}</span>
                  </button>
                </div>
              }
              buttonProps={{
                className: ({ isEnter }) => `${s.itemBtn} ${isEnter && s.itemBtnExpanded}`,
              }}
              contentProps={{ className: s.itemContent }}
              panelProps={{ className: s.itemPanel }}
            >
              <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  )
}

const accordionArrow = (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
    <path
      d="M6.75 1C6.75 0.585786 6.41421 0.25 6 0.25C5.58579 0.25 5.25 0.585786 5.25 1H6.75ZM5.46967 15.5303C5.76256 15.8232 6.23744 15.8232 6.53033 15.5303L11.3033 10.7574C11.5962 10.4645 11.5962 9.98959 11.3033 9.6967C11.0104 9.40381 10.5355 9.40381 10.2426 9.6967L6 13.9393L1.75736 9.6967C1.46447 9.40381 0.989593 9.40381 0.696699 9.6967C0.403806 9.98959 0.403806 10.4645 0.696699 10.7574L5.46967 15.5303ZM6 1H5.25L5.25 15H6H6.75L6.75 1H6Z"
      fill="#222222"
    />
  </svg>
)
