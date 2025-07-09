import type { CollectionConfig } from 'payload'

export const FAQ: CollectionConfig = {
  slug: 'faq',
  admin: {
    useAsTitle: 'question',
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
      localized: true,
      label: {
        en: 'Question',
      },
    },
    {
      name: 'answer',
      type: 'text',
      required: true,
      localized: true,
      label: {
        en: 'Answer',
      },
    },
  ],
}
