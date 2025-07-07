import type { Block } from 'payload'

export const OurTeamBlock: Block = {
  slug: 'our-team-block',
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
