// storage-adapter-import-placeholder
import {mongooseAdapter} from '@payloadcms/db-mongodb'
import {payloadCloudPlugin} from '@payloadcms/payload-cloud'
import {lexicalEditor} from '@payloadcms/richtext-lexical'
import path from 'path'
import {buildConfig} from 'payload'
import {fileURLToPath} from 'url'
import sharp from 'sharp'

import {Users} from './collections/Users'
import {Media} from './collections/Media'
import {Contacts} from "@/globals/Contacts";
import {Menus} from "@/globals/Menus";
import {Cases} from "@/collections/Cases";
import {Services} from "@/collections/Services";
import {Achievements} from "@/collections/Achievements";
import {Reviews} from "@/collections/Reviews";
import {Tariffs} from "@/collections/Tariffs";

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },
    localization: {
        locales: [
            {
                label: 'English',
                code: 'en'
            },
            {
                label: 'Ukraine',
                code: 'uk'
            }],
        defaultLocale: 'en',
        fallback: true,
    },

    collections: [
        Users,
        Media,
        Cases,
        Services,
        Achievements,
        Reviews,
        Tariffs,
    ],
    globals: [
        Contacts,
        Menus,
    ],
    editor: lexicalEditor(),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: mongooseAdapter({
        url: process.env.DATABASE_URI || '',
    }),
    sharp,
    plugins: [
        payloadCloudPlugin(),
        // storage-adapter-placeholder
    ],
})
