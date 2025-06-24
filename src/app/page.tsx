
import BlogEntry from '@/app/components/blogentry';
import { getBlogByDate } from '@/app/lib/getBlogByDate';

export default function Home() {
  const today = new Date().toISOString().split('T')[0];
  const post = getBlogByDate(today);

  if (!post) return <p>No blog post for today ({today})</p>;

  return (
    <div className="flex justify-center w-full items-center self-center px-4">
    <div className="max-w-2xl w-full">
      <BlogEntry title={post.title} date={post.date} content={post.content} />
    </div>
  </div>
  )
}
