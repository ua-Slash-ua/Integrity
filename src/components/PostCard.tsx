export default function PostCard({ post }: { post: any }) {
    return (
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    )
}