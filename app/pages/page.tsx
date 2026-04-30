import { getPages } from '@/lib/cosmic';
import PageCard from '@/components/PageCard';

export const metadata = {
  title: 'Pages - My Content',
  description: 'Browse all our pages',
};

export default async function PagesIndex() {
  const pages = await getPages();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Pages</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our collection of pages and resources
        </p>
      </header>

      {pages.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-600">No pages yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pages.map((page) => (
            <PageCard key={page.id} page={page} />
          ))}
        </div>
      )}
    </div>
  );
}