import Link from 'next/link';
import { SiteSettings } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function Header({ settings }: { settings: SiteSettings | null }) {
  const siteName = getMetafieldValue(settings?.metadata?.site_name) || 'My Content';
  const logo = settings?.metadata?.logo;

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            {logo ? (
              <img
                src={`${logo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                alt={siteName}
                width="40"
                height="40"
                className="w-10 h-10 rounded-lg"
              />
            ) : (
              <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-700 rounded-lg flex items-center justify-center text-white font-bold">
                M
              </div>
            )}
            <span className="font-bold text-gray-900 text-lg">{siteName}</span>
          </Link>

          <nav className="flex items-center gap-1 sm:gap-6">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/pages"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors"
            >
              Pages
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}