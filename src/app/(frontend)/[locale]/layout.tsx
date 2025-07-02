import React from 'react'
import './styles.css'

import { getPayload } from 'payload';
import config from '@/payload.config';
import Header from '@/components/Header/Header';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const payload = await getPayload({ config: await config });
  const main = await payload.findGlobal({ slug: 'main' });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Header logo={main.logo || ''} buttonText={main.button || ''} />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
