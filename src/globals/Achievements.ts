import {GlobalConfig} from "payload";

export const Achievements: GlobalConfig = {
    slug: 'achievements',
    label: {
        en: 'Achievements',
        uk: 'Контентні блоки',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: {
                        en: 'Content Blocks',
                        uk: 'Блоки контенту',
                    },
                    fields: [
                        {
                            name: 'blocks',
                            type: 'array',
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
                    ],
                },
                {
                    label: {
                        en: 'Icons Row',
                        uk: 'Ряд іконок',
                    },
                    fields: [
                        {
                            name: 'icons',
                            type: 'array',
                            label: {
                                en: 'Icons',
                                uk: 'Іконки',
                            },
                            minRows: 4,
                            maxRows: 4,
                            labels: {
                                singular: {
                                    en: 'Icon',
                                    uk: 'Іконка',
                                },
                                plural: {
                                    en: 'Icons',
                                    uk: 'Іконки',
                                },
                            },
                            admin: {
                                description: 'Має бути рівно 4 іконки. Можна змінювати порядок.',
                            },
                            fields: [
                                {
                                    name: 'svg',
                                    type: 'textarea',
                                    label: 'SVG Icon',
                                    required: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
}