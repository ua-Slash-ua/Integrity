import { getPayload } from 'payload'
import config from '@/payload.config'
import BlogPosts from '@/components/BlogPosts'

export default async function PostsPage() {
  const payload = await getPayload({ config: await config })
  const { docs: posts } = await payload.find({ collection: 'posts' })

  return <BlogPosts posts={posts} />
}