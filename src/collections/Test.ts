import { CollectionConfig } from 'payload'

export const Test: CollectionConfig = {
  slug: 'test',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: { en: 'Title' },
      type: 'text',
      required: false,
    },
    {
      name: 'titles',
      label: { en: 'Title' },
      type: 'textarea',
      required: false,
    },
    // {
    //   name: 'customField',
    //   label: { en: 'Моє кастомне поле' },
    //   type: 'text',
    //   required: false,
    //   admin: {
    //     components: {
    //       Field: PreviewSvg,
    //     },
    //   },
    // },
  ]}