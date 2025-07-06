import {CollectionConfig} from "payload";
import {maxCollectionsHook} from "@/hooks/maxCollections";

export const Tariffs: CollectionConfig = {
    slug: 'tariffs',
    labels: {
        singular: {
            en: 'Tariffs',
            uk: 'Досягнення',
        },
        plural: {
            en: 'Tariffs',
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
        useAsTitle: 'tariff',
    },
    fields: [
        {
            name: 'tariff',
            type: 'text',
            required: true,
            localized: true,
            label: {
                en: 'Tariff Name',
                uk: 'Назва тарифу',
            },
        },
        {
            name: 'title',
            type: 'text',
            required: true,
            localized: true,
            label: {
                en: 'Tariff Title',
                uk: 'Заголовок тарифу',
            },
        },
        {
            name: 'description',
            type: 'text',
            required: true,
            localized: true,
            label: {
                en: 'Tariff Description',
                uk: 'Опис',
            },
        },
        {
            type:"array",
            name:'result',
            fields:[
                {
                    type:"text",
                    name:'point'
                }
            ]
        }
    ]}