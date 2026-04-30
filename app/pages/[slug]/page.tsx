// app/pages/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPage, getMetafieldValue } from '@/lib/cosmic';

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await getPage(slug);

  if (!page) {
    notFound();
  }

  const heroImage = page.metadata?.hero_image;
  const description = getMetafieldValue(page.metadata?.description);
  const content = getMetafieldValue(page.metadata?.content) || page.content || '';

  return (
    <div>
      {heroImage && (
        <div className="relative h-[40vh] sm:h-[60vh] overflow-hidden">
          <img
            src={`${heroImage.imgix_url}?w=2400&h=1200&fit=crop&auto=format,compress`}
            alt={page.title}
            width="1600"
            height="800"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-4 pb-12 w-full">
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4">
                {page.title}
              </h1>
              {description && (
                <p className="text-xl text-white/90 max-w-3xl">{description}</p>
              )}
            </div>
          </div>
        </div>
      )}

      <article className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/pages"
          className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium mb-8"
        >
          ← All Pages
        </Link>

        {!heroImage && (
          <header className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              {page.title}
            </h1>
            {description && (
              <p className="text-xl text-gray-600 leading-relaxed">{description}</p>
            )}
          </header>
        )}

        {content && (
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-brand-600 hover:prose-a:text-brand-700"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </article>
    </div>
  );
}