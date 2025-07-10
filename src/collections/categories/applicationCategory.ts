import type { CollectionConfig } from 'payload'

const applicationCategory: CollectionConfig = {
  slug: 'category-app',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
}

export default applicationCategory
