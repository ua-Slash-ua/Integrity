import {CollectionConfig} from "payload";
import {lexicalEditor} from "@payloadcms/richtext-lexical";

export const Services: CollectionConfig = {
    slug: 'services',
    labels: {
        singular: {
            en: 'Services',
            uk: 'Сервіси',
        },
        plural: {
            en: 'Services',
            uk: 'Сервіси',
        },
    },
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            type: "textarea",
            name: 'icon',
            label: {
                en: 'SVG Icon',
                uk: 'SVG іконка',
            },
        },
        {
            type: "text",
            name: 'title',
            label: {
                en: 'Title',
                uk: 'Заголовок',
            },
        },
        {
            type: "textarea",
            name: 'description',
            label: {
                en: 'Description',
                uk: 'Опис',
            },
        }
    ]
}