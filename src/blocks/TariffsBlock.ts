import type { Block } from 'payload'

export const TariffsBlock: Block = {
  slug: 'tariffs-block',
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      label: 'Показувати цей блок',
      defaultValue: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
      label: {
        en: 'Subtitle',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: {
        en: 'Title',
      },
    },
    {
      name: 'tariff',
      type: 'array',
      label: {
        en: 'Tariff',
      },
      minRows:4,
      maxRows:4,
      fields: [

        {
          name: 'name_tariff',
          type: 'text',
          required: true,
          label: {
            en: 'Name Tariff',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: {
            en: 'Title',
          },
        },
        {
          name: 'description',
          type: 'text',
          required: true,
          label: {
            en: 'Description',
          },
        },
        {
          name: 'result',
          type: 'array',
          required: true,
          label: {
            en: 'Result',
          },
          fields: [
            {
              name: 'points',
              type: 'text',
              required: true,
              label: {
                en: 'Points',
              },
            },
          ],
        },
      ],
    },
  ],
}
