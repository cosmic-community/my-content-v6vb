import { getBlogPosts } from '@/lib/cosmic';
import BlogPostCard from '@/components/BlogPostCard';

export const metadata = {
  title: 'Blog - My Content',
  description: 'Read our latest blog posts',
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Blog</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Insights, tutorials, and updates from our team
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-600">No blog posts yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}