import {CollectionConfig} from "payload";

export const Reviews: CollectionConfig = {
    slug: 'reviews',
    labels: {
        singular: {
            en: 'Reviews',
            uk: 'Відгуки',
        },
        plural: {
            en: 'Reviews',
            uk: 'Відгуки',
        },
    },
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'full_name',
    },
    fields: [
        {
            name:'full_name',
            type:"text",
            required: true,
            localized: true,
            label: {
                en: 'Full name',
                uk: 'ПІБ',
            },
        },
        {
            name:'location',
            type:"text",
            required: true,
            localized: true,
            label: {
                en: 'Location',
                uk: 'Локація',
            },
        },
        {
            name:'quote',
            type:"text",
            required: true,
            localized: true,
            label: {
                en: 'Quote',
                uk: 'Цитата',
            },
        },
        {
            name:'review_content',
            type:"text",
            required: true,
            localized: true,
            label: {
                en: 'Review Content',
                uk: 'Текст відгуку',
            },
        },
        {
            name:'rating',
            type:"textarea",
            required: true,
            label: {
                en: 'Rating',
                uk: 'Оцінка',
            },
        },
        {
            name: 'client_photo',
            type: 'upload',
            required: true,
            relationTo: 'media',
            label: {
                en: 'Client Photo',
                uk: 'Фото клієнта',
            },
        }

    ]
}