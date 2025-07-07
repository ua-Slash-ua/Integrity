import type { Block } from 'payload'

export const ServicesBlock: Block = {
  slug: 'services-block',
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
      type:'array',
      name:'service',
      fields:[
        {
          name: 'service_title',
          type: 'text',
          localized: true,
          label:'Service Title'
        },
        {
          name: 'service_description',
          type: 'text',
          localized: true,
          label:'Service description'
        },
        {
          name: 'service_icon',
          type: 'textarea',
          localized: true,
          label:'Service SVG icon'
        }

      ]
    }
  ]}