import Link from "next/link"

export default function BlogPosts({ posts }: { posts: any[] }) {
    return (
      <div>
        {posts.map(post => (
            <Link href={`/blog/${post.slug}`} key={post.id}>
                <img src={post.featuredImage?.url} alt={post.title} />
                {post.title}
            </Link>
        ))}
      </div>
    )
}