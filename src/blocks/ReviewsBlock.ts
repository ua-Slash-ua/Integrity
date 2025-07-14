import type { Block } from 'payload'

export const ReviewsBlock: Block = {
  slug: 'reviews-block',
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
      name:'review',
      label:{
        en:'Review'
      },
      fields:[
        {
          name: 'rating',
          type: 'textarea',
          localized: true,
          label: {
            en: 'Rating',
          },
        },
        {
          name: 'client_name',
          type: 'text',
          localized: true,
          label: {
            en: 'Client Name',
          },
        },
        {
          name: 'location',
          type: 'text',
          localized: true,
          label: {
            en: 'Location',
          },
        },
        {
          name: 'client_image',
          type: 'upload',
          relationTo: 'media',
          label: 'Client Image',
          localized: false,
        },
        {
          name: 'quote',
          type: 'textarea',
          localized: true,
          label: {
            en: 'Quote',
          },
        },
        {
          name: 'review_content',
          type: 'textarea',
          localized: true,
          label: {
            en: 'Review',
          },
        },
      ]
    }
  ],
}
