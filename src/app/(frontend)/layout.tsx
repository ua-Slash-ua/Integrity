import React from 'react'
import './styles.css'

import { getPayload } from 'payload';
import config from '@/payload.config';
import Header from '@/components/Header/Header';

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  const payload = await getPayload({ config: await config });
  const main = await payload.findGlobal({ slug: 'main' });


  return (
    <html lang="en">
      <body>
        <Header logo={main.logo || ''} buttonText={main.button || ''} />
        <main>{children}</main>
      </body>
    </html>
  )
}
