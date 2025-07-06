import type {  Field } from 'payload'

export const Achievemants:Field[] = [
    {
        type: 'checkbox',
        name: 'include',
        label: {
            en: 'Include',
            uk: 'Відображення',
        },
        defaultValue: true,
    },
    {
        type: "text",
        name: 'block_name',
        label: {
            en: 'Block name',
            uk: 'Назва блоку',
        },
        localized:true
    },
    {
        type: "textarea",
        name: 'title',
        label: {
            en: 'Title ???',
            uk: 'Заголовок',
        },
        localized:true
    },
    {
        name: 'blocks',
        type: 'array',
        minRows: 4,
        maxRows: 4,
        label: {
            en: 'Blocks',
            uk: 'Блоки',
        },
        labels: {
            singular: {
                en: 'Block',
                uk: 'Блок',
            },
            plural: {
                en: 'Blocks',
                uk: 'Блоки',
            },
        },
        fields: [
            {
                name: 'title',
                type: 'text',
                required: true,
                localized: true,
                label: {
                    en: 'Title',
                    uk: 'Заголовок',
                },
            },
            {
                name: 'svgIcon',
                type: 'textarea',
                label: 'SVG Icon',
                admin: {
                    description: 'Paste raw SVG code here',
                },
            },
            {
                name: 'bigText',
                type: 'textarea',
                label: {
                    en: 'Big Text',
                    uk: 'Великий текст',
                },
                localized: true,
            },
            {
                name: 'context',
                type: 'textarea',
                label: {
                    en: 'Context',
                    uk: 'Контекст',
                },
                localized: true,
            },
        ],
    },
    {
        name: 'icons',
        type: 'array',
        label: {
            en: 'Icon svg',
            uk: 'SVG іконка',
        },
        minRows: 4,
        maxRows: 4,
        fields: [
            {
                name: 'svg',
                type: 'textarea',
                label: 'SVG Icon',
            },
        ],
    }

]