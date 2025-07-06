import type { CollectionBeforeChangeHook } from 'payload'

export function maxCollectionsHook(count: number): CollectionBeforeChangeHook {
    return async ({ operation, req, collection }) => {
        if (operation === 'create') {
            const existing = await req.payload.find({
                collection: collection.slug,
                limit: 0,
            })

            if (existing.totalDocs > count) {
                throw new Error(`Максимальна кількість записів — ${count}`)
            }
        }
    }
}
