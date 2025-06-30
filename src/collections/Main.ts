import type { GlobalConfig } from 'payload';

export const MainInfo: GlobalConfig = {
  slug: 'main',
  fields: [
    {
        name: 'contact-info',
        type: 'group',
        fields: [
            {
                name: 'phone',
                type: 'text',
                label: 'Phone number'
            },
            {
                name: 'email',
                type: 'text',
                label: 'E-mail'
            }
        ]
    },
    {
        name: 'social-items',
        type: 'group',
        fields: [
            {
                name: 'whatsapp',
                type: 'text',
                label: 'whatsapp'
            },
            {
                name: 'telegram',
                type: 'text',
                label: 'Telegram'
            },
            {
                name: 'youtube',
                type: 'text',
                label: 'YouTube'
            },
        ]
    },
    {
        name: 'button',
        type: "text",
        label: 'Button Text'
    },
    {
        name: 'logo',
        type: 'code',
        label: 'SVG logo'
    }
  ],
};