import {GlobalConfig} from "payload";

export const Menus: GlobalConfig = {
    slug: 'menus',
    label: {
        en: 'Menus',
        uk: 'Меню',
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
                        en: 'Main Menu',
                        uk: 'Головне меню',
                    },
                    fields: [
                        {
                            name: 'mainMenuItems',
                            label: {
                                en: 'Menu Items',
                                uk: 'Пункти меню',
                            },
                            type: 'array',
                            labels: {
                                singular: {
                                    en: 'Menu Item',
                                    uk: 'Пункт меню',
                                },
                                plural: {
                                    en: 'Menu Items',
                                    uk: 'Пункти меню',
                                },
                            },
                            fields: [
                                {
                                    name: 'label',
                                    label: {
                                        en: 'Label',
                                        uk: 'Назва',
                                    },
                                    type: 'text',
                                    required: true,
                                    localized: true,
                                },
                                {
                                    name: 'url',
                                    label: 'URL',
                                    type: 'text',
                                    required: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    label: {
                        en: 'Footer Menu',
                        uk: 'Меню в футері',
                    },
                    fields: [
                        {
                            name: 'footerMenuItems',
                            label: {
                                en: 'Menu Items',
                                uk: 'Пункти меню',
                            },
                            type: 'array',
                            labels: {
                                singular: {
                                    en: 'Menu Item',
                                    uk: 'Пункт меню',
                                },
                                plural: {
                                    en: 'Menu Items',
                                    uk: 'Пункти меню',
                                },
                            },
                            fields: [
                                {
                                    name: 'label',
                                    label: {
                                        en: 'Label',
                                        uk: 'Назва',
                                    },
                                    type: 'text',
                                    required: true,
                                    localized: true,
                                },
                                {
                                    name: 'url',
                                    label: 'URL',
                                    type: 'text',
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
