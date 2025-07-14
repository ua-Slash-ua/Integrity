import type { GlobalConfig } from 'payload';

export const Menu: GlobalConfig = {
  slug: 'menu',
  fields: [
    {
        type: 'row',
        fields: [
            {
                type: 'array',
                name: 'header-menu',
                fields: [
                    {
                        type: 'text',
                        name: 'label',
                        required: true,
                        localized: true
                    },
                    {
                        type: 'text',
                        name: 'link',
                        required: true
                    }
                ]
            },
            {
                type: 'array',
                name: 'footer-menu',
                fields: [
                    {
                        type: 'text',
                        name: 'label',
                        required: true,
                        localized: true
                    },
                    {
                        type: 'text',
                        name: 'link',
                        required: true
                    }
                ]
            }
        ]
    }
  ],
};