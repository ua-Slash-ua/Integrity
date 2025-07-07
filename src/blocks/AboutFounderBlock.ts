import type { Block } from 'payload'

export const AboutFounderBlock: Block = {
  slug: 'about-founder-block',
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
