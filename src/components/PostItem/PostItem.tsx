import s from './PostItem.module.css'

export default function PostItem({ post }: { post: any }) {
  return (
    <div>
      <h1 className={s.title}>{post.title}</h1>
      <div className={s.content} dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}
