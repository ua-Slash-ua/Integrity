'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function HomePageClient() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/blog">{t('about')}</Link>
    </div>
  );
}