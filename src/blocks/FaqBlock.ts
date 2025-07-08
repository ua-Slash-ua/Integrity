import type { Block } from 'payload'

export const FaqBlock: Block = {
  slug: 'faq-block',
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
      type:'array',
      name:'faq',
      label:{
        en: 'FAQ'
      },
      fields:[
        {
          name: 'faq_question',
          type: 'text',
          required: true,
          localized: true,
          label: {
            en: 'Question',
          },
        },
        {
          name: 'faq_answer',
          type: 'text',
          required: true,
          localized: true,
          label: {
            en: 'Answer',
          },
        },

      ]
    },
  ],
}
