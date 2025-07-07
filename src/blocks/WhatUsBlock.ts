import type { Block } from 'payload'

export const WhatUsBlock: Block = {
  slug: 'what-us-block',
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      label: 'Показувати цей блок',
      defaultValue: true,
      admin: { position: 'sidebar' },
    },
  ],
}
