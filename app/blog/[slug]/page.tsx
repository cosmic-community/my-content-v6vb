// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPost } from '@/lib/cosmic';
import { getMetafieldValue } from '@/lib/cosmic';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const featuredImage = post.metadata?.featured_image;
  const excerpt = getMetafieldValue(post.metadata?.excerpt);
  const content = getMetafieldValue(post.metadata?.content) || post.content || '';
  const author = post.metadata?.author;
  const category = post.metadata?.category;
  const publishedDate = getMetafieldValue(post.metadata?.published_date);

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/blog"
        className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium mb-8"
      >
        ← Back to Blog
      </Link>

      <header className="mb-10">
        {category && (
          <span className="inline-block px-3 py-1 bg-brand-100 text-brand-700 text-sm font-medium rounded-full mb-4">
            {category.title}
          </span>
        )}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          {post.title}
        </h1>
        {excerpt && (
          <p className="text-xl text-gray-600 leading-relaxed mb-6">{excerpt}</p>
        )}
        <div className="flex items-center gap-4 text-sm text-gray-500">
          {author && <span>By {author.title}</span>}
          {publishedDate && (
            <>
              <span>•</span>
              <span>{new Date(publishedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}</span>
            </>
          )}
        </div>
      </header>

      {featuredImage && (
        <div className="mb-10 rounded-2xl overflow-hidden">
          <img
            src={`${featuredImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={post.title}
            width="1200"
            height="675"
            className="w-full h-auto"
          />
        </div>
      )}

      {content && (
        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-brand-600 hover:prose-a:text-brand-700"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </article>
  );
}