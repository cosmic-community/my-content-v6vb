import Link from 'next/link';
import { BlogPost } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function BlogPostCard({ post }: { post: BlogPost }) {
  const featuredImage = post.metadata?.featured_image;
  const excerpt = getMetafieldValue(post.metadata?.excerpt);
  const author = post.metadata?.author;
  const category = post.metadata?.category;
  const publishedDate = getMetafieldValue(post.metadata?.published_date);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-300 hover:shadow-xl transition-all duration-300"
    >
      {featuredImage ? (
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={post.title}
            width="400"
            height="225"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="aspect-video bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center">
          <span className="text-white text-4xl font-bold opacity-50">
            {post.title.charAt(0)}
          </span>
        </div>
      )}
      <div className="p-6">
        {category && (
          <span className="inline-block px-2.5 py-0.5 bg-brand-100 text-brand-700 text-xs font-medium rounded-full mb-3">
            {category.title}
          </span>
        )}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
          {post.title}
        </h3>
        {excerpt && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{excerpt}</p>
        )}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          {author && <span>{author.title}</span>}
          {publishedDate && (
            <>
              <span>•</span>
              <span>{new Date(publishedDate).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}