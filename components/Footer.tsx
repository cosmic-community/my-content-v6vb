import { SiteSettings } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function Footer({ settings }: { settings: SiteSettings | null }) {
  const siteName = getMetafieldValue(settings?.metadata?.site_name) || 'My Content';
  const footerText = getMetafieldValue(settings?.metadata?.footer_text);
  const description = getMetafieldValue(settings?.metadata?.site_description);

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">{siteName}</h3>
            {description && (
              <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
            )}
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Navigate</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="/pages" className="hover:text-white transition-colors">Pages</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Powered by</h4>
            <p className="text-sm text-gray-400">
              Built with Next.js and Cosmic CMS
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 text-center">
          {footerText || `© ${new Date().getFullYear()} ${siteName}. All rights reserved.`}
        </div>
      </div>
    </footer>
  );
}