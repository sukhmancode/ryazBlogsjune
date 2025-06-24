
import BlogEntry from '@/app/components/blogentry';
import { getBlogByDate } from '@/app/lib/getBlogByDate';
import { notFound } from 'next/navigation';

type Props = {
  params: { date: string };
};

export default function BlogPage({ params }: Props) {
  const post = getBlogByDate(params.date);
  if (!post) return notFound();

  return <BlogEntry title={post.title} date={post.date} content={post.content} />;
}
