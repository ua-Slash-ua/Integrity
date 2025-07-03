import type { Block } from 'payload';

export const AchievementsBlock: Block = {
  slug: 'achievements-block',
  fields: [
    {
        name: 'enabled',
        type: 'checkbox',
        label: 'Показувати цей блок',
        defaultValue: true,
        admin: { position: 'sidebar' }
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
        type: 'array',
        name: 'cards',
        minRows: 2,
        maxRows: 4,
        fields: [
            {
                type: 'row',
                fields: [
                    {
                        name: 'icon',
                        type: 'upload',
                        relationTo: 'media',
                    },
                    {
                        name: 'icon-text',
                        type: 'text',
                        localized: true,
                    },
                ]
            },
            {
                name: 'title',
                type: 'text',
                localized: true,
            },
            {
                name: 'description',
                type: 'text',
                localized: true,
            },
        ]
    }
  ],
};