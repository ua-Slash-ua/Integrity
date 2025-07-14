import type { Block } from 'payload'

export const CasesBlock: Block = {
  slug: 'cases-block',
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
      localized:true,
      label: {
        en: 'Subtitle',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized:true,
      label: {
        en: 'Title',
      },
    },
    {
      type:'array',
      name:'case',
      fields:[
        {
          name: 'case_title',
          type: 'text',
          localized: true,
          label:'Case Title'
        },
        {
          name: 'case_location',
          type: 'text',
          localized: true,
          label:'Case Location'
        },
        {
          name: 'case_client_website',
          type: 'text',
          localized: true,
          label:'Case Client'
        },
        {
          name: 'case_client',
          type: 'text',
          localized: true,
          label:'Case Client WebSite'
        },
        {
          name: 'case_goal',
          type: 'text',
          localized: true,
          label:'Case Goal'
        },
        {
          name: 'case_time',
          type: 'text',
          localized: true,
          label:'Case Time'
        },
        {
          name: 'case_wwd',
          type: 'array',
          localized: true,
          label:'What we did',
          fields:[
            {
              name:'point',
              type:'text',
              label:'Point',
            }
          ]
        },
        {
          name: 'case_image',
          type: 'upload',
          relationTo: 'media', // назва колекції, де зберігаються зображення
          label: 'Case Image',
          localized: false // якщо потрібно мати різні зображення для різних мов — постав true
        }

      ]
    }
  ]}