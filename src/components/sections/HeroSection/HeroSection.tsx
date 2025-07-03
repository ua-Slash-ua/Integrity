'use client'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import s from './HeroSection.module.css'
import IconHero from '../../icons/IconHero/IconHero' // ваш SVG-компонент

type HeroBlock = {
  title?: string
  subtitle?: string
  description?: string
  firstButton?: string
  lastButton?: string
}

export default function HeroSection({ block }: { block: HeroBlock }) {
  const ICON_MAP: Record<string, React.ReactNode> = {
    icon: <IconHero />,
  }

  const parts = block.title?.split(/(\{icon\})/g) || []

  const t = useTranslations('HomePage')
  return (
    <div className={s.section}>
      <div className={s.subtitle}>
        <span>{block.subtitle}</span>
      </div>
      <h1>
        {parts?.map((part, i) =>
          part === '{icon}' ? (
            <span key={i} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
              {ICON_MAP.icon}
            </span>
          ) : (
            part
          ),
        )}
      </h1>
      <p>
        {block.description
          ? block.description.split(/(\[\[.*?\]\])/g).map((part, i) => {
              if (part.startsWith('[[') && part.endsWith(']]')) {
                return (
                  <span key={i} style={{ fontWeight: 'bold' }}>
                    {part.slice(2, -2)}
                  </span>
                )
              }
              return part
            })
          : null}
      </p>
      <Link href="/blog">{t('about')}</Link>
    </div>
  )
}
