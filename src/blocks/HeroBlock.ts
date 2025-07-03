import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero-block',
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      label: 'Показувати цей блок',
      defaultValue: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'subtitle',
      type: 'text',
      localized: true,
    },
    {
      name: 'title',
      type: 'text',
      localized: true,
    },
    {
      name: 'description',
      type: 'text',
      localized: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'first-button',
          type: 'text',
          localized: true,
        },
        {
          name: 'last-button',
          type: 'text',
          localized: true,
        },
      ],
    },
  ],
}
