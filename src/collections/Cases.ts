import {CollectionConfig} from "payload";
import {lexicalEditor} from "@payloadcms/richtext-lexical";

export const Cases: CollectionConfig = {
    slug: 'cases',
    labels: {
        singular: {
            en: 'Case',
            uk: 'Кейс',
        },
        plural: {
            en: 'Cases',
            uk: 'Кейси',
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
            name: 'title',
            type: 'text',
            required: true,
            localized: true,
            label: {
                en: 'Title',
                uk: 'Назва',
            },
        },
        {
            name: 'location',
            type: 'text',
            required: true,
            localized: true,
            label: {
                en: 'Location',
                uk: 'Локація',
            },
        },
        {
            name: 'client',
            type: 'text',
            required: true,
            localized: true,
            label: {
                en: 'Client',
                uk: 'Клієнт',
            },
        },
        {
            name: 'client_website',
            type: 'text',
            required: true,
            localized: true,
            label: {
                en: 'Client WebSite',
                uk: 'Сайт клієнта',
            },
        },
        {
            name: 'goal',
            type: 'text',
            required: true,
            localized: true,
            label: {
                en: 'Goal',
                uk: 'Ціль',
            },
        },
        {
            type:'richText',
            name:'What we did:',
            editor:lexicalEditor()
        },
        {
            name: 'duration',
            type: 'text',
            required: true,
            localized: true,
            label: {
                en: 'Duration',
                uk: 'Тривалість',
            },
        },
    ],
}
