import Link from 'next/link';
import { getBlogPosts, getPages } from '@/lib/cosmic';
import BlogPostCard from '@/components/BlogPostCard';
import PageCard from '@/components/PageCard';

export default async function HomePage() {
  const [posts, pages] = await Promise.all([getBlogPosts(), getPages()]);
  const recentPosts = posts.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
              Welcome to My Content
            </h1>
            <p className="text-xl sm:text-2xl text-brand-100 mb-8 leading-relaxed">
              Discover articles, pages, and resources powered by a modern headless CMS.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-white text-brand-700 font-semibold rounded-lg hover:bg-brand-50 transition-colors"
              >
                Read Blog →
              </Link>
              <Link
                href="/pages"
                className="inline-flex items-center px-6 py-3 bg-brand-800 text-white font-semibold rounded-lg hover:bg-brand-900 transition-colors border border-brand-500"
              >
                Browse Pages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      {recentPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Latest Posts</h2>
              <p className="text-gray-600 mt-2">Fresh insights and updates</p>
            </div>
            <Link href="/blog" className="text-brand-600 hover:text-brand-700 font-semibold">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Pages Section */}
      {pages.length > 0 && (
        <section className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Explore Pages</h2>
                <p className="text-gray-600 mt-2">Learn more about our content</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pages.map((page) => (
                <PageCard key={page.id} page={page} />
              ))}
            </div>
          </div>
        </section>
      )}

      {posts.length === 0 && pages.length === 0 && (
        <section className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No content yet</h2>
          <p className="text-gray-600">
            Add some pages or blog posts in your Cosmic dashboard to see them here.
          </p>
        </section>
      )}
    </div>
  );
}