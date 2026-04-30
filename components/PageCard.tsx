import Link from 'next/link';
import { Page } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function PageCard({ page }: { page: Page }) {
  const heroImage = page.metadata?.hero_image;
  const description = getMetafieldValue(page.metadata?.description);

  return (
    <Link
      href={`/pages/${page.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-300 hover:shadow-xl transition-all duration-300"
    >
      {heroImage ? (
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            src={`${heroImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={page.title}
            width="400"
            height="225"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
          <span className="text-white text-4xl font-bold opacity-50">
            {page.title.charAt(0)}
          </span>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
          {page.title}
        </h3>
        {description && (
          <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
        )}
        <div className="mt-4 text-sm font-semibold text-brand-600 group-hover:text-brand-700">
          Read more →
        </div>
      </div>
    </Link>
  );
}