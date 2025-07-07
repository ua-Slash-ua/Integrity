import type { Block } from 'payload'

export const ExpertiseBlock: Block = {
  slug: 'expertise-block',
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      label: 'Показувати цей блок',
      defaultValue: true,
      admin: { position: 'sidebar' },
    },
  ],
}
