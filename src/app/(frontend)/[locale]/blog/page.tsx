import { getPayload } from 'payload'
import config from '@/payload.config'
import BlogPosts from '@/components/BlogPosts'

type Props = {
  params: { locale: string }
}

export default async function PostsPage({ params }: Props) {
  const payload = await getPayload({ config: await config })
  const { locale } = await params;
  const { docs: posts } = await payload.find({ 
    collection: 'posts',
    locale: locale as 'en',
  })

  return <BlogPosts posts={posts} />
}