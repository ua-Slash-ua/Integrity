import type { Block } from 'payload'

export const OutcomesBlock: Block = {
  slug: 'outcomes-block',
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
