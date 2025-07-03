import {GlobalConfig} from "payload";

export const Contacts: GlobalConfig = {
    slug: 'contacts',
    label: 'Contacts Info',

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
            required: true,
        },
    ],
}