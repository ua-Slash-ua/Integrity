import React from 'react'

import config from '@/payload.config'
import './styles.css'
import HomePageClient from '@/components/pages/HomePage/HomePage';

export default async function HomePage() {
  const payloadConfig = await config

  return <HomePageClient />;
}
