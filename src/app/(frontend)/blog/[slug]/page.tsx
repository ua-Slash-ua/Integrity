import { getPayload } from 'payload'
import config from '@/payload.config'
import PostCard from '@/components/PostCard'

export default async function PostPage({ params }: { params: { slug: string } }) {
  const payload = await getPayload({ config: await config })
  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: params.slug } }
  });
  const post = docs[0];

  if (!post) {
    return <div>Пост не знайдено</div>;
  }
  return <PostCard post={post} />;
}