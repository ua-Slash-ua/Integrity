import type { Block } from 'payload'

export const Expertise: Block = {
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
