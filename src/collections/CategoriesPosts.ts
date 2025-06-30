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
    },
    {
        name: 'icon',
        type: 'upload',
        relationTo: 'media',
    },
    {
        name: 'description',
        type: 'text',
    },
    {
        name: 'posts',
        type: 'join',
        on: 'categories',
        collection: 'posts'
    },
  ],
}
