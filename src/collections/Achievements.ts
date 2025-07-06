import {CollectionConfig} from "payload";
import {maxCollectionsHook} from "@/hooks/maxCollections";

export const Achievements: CollectionConfig = {
    slug: 'achievements',
    labels: {
        singular: {
            en: 'Achievements',
            uk: 'Досягнення',
        },
        plural: {
            en: 'Achievements',
            uk: 'Досягнення',
        },
    },
    access: {
        read: () => true,
        create: () => true,
    },
    hooks: {
        beforeChange: [maxCollectionsHook(4)],
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
        {
            name: 'svgIcon_second',
            type: 'textarea',
            label: 'SVG Icon second',
            admin: {
                description: 'Paste raw SVG code here',
            },
        },
    ]
}