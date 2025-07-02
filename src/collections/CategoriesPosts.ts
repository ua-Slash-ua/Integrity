import type { CollectionConfig } from 'payload'

export const CategoriesPosts: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
        name: 'title',
        type: 'text',
        localized: true,
    },
    {
        name: 'icon',
        type: 'upload',
        relationTo: 'media',
        localized: true,
    },
    {
        name: 'description',
        type: 'text',
        localized: true,
    },
    {
        name: 'posts',
        type: 'join',
        on: 'categories',
        collection: 'posts'
    },
  ],
}
