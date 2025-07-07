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
      required: true,
      localized: true,
      label: {
        en: 'Subtitle',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      label: {
        en: 'Title',
      },
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
          name: 'firstButton',
          type: 'text',
          localized: true,
        },
        {
          name: 'lastButton',
          type: 'text',
          localized: true,
        },
      ],
    },
  ],
}
