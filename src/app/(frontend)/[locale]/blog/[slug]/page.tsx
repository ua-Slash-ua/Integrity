import { getPayload } from 'payload'
import config from '@/payload.config'
import PostCard from '@/components/PostCard'

type Props = {
  params: { slug: string; locale: string }
}

export default async function PostPage({ params }: Props) {
  const payload = await getPayload({ config: await config })
  const { slug, locale } = await params; // await!
  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    locale: locale as 'en',
  });
  const post = docs[0];

  if (!post) {
    return <div>Пост не знайдено</div>;
  }
  return <PostCard post={post} />;
}