// globals/ContactInfo.ts

import {GlobalConfig} from "payload";

const Contact: GlobalConfig = {
    slug: 'contact-info',
    label: 'Контактна інформація',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'email',
            type: 'email',
            required: true,
        },
        {
            name: 'phone',
            type: 'text',
        },
        {
            name: 'address',
            type: 'textarea',
        },
        {
            name: 'facebook',
            type: 'text',
            label: 'Facebook URL',
        },
        {
            name: 'telegram',
            type: 'text',
            label: 'Telegram Username',
        },
    ],
}

export default Contact
