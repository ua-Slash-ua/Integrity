import { HeroBlock } from '@/blocks/HeroBlock';
import { AchievementsBlock } from '@/blocks/AchievementsBlock';
import type { CollectionConfig } from 'payload'
import { CasesBlock } from '@/blocks/CasesBlock'
import { ServicesBlock } from '@/blocks/ServicesBlock'
import { OrderCallBlock } from '@/blocks/OrderCallBlock'

export const Pages: CollectionConfig = {
    slug: 'pages',
    admin: {
      useAsTitle: 'title',
    },
    fields: [
      {
        name: 'slug',
        type: 'text',
        required: true,
        unique: true,
        label: 'Slug',
        hooks: {
          beforeValidate: [
            ({ value, data }) => {
              if (value) return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              if (data?.title) {
                return data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              }
              return value;
            }
          ]
        }
      },
      {
        name: 'title',
        type: 'text',
        localized: true,
        required: true,
      },
      {
        name: 'description',
        type: 'text',
        localized: true,
      },
      {
        type: 'blocks',
        name: 'blocks',
        blocks: [
          HeroBlock,
          AchievementsBlock,
          CasesBlock,
          ServicesBlock,
          OrderCallBlock,
        ],
      }
    ],
    
}