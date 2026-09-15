import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  image?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function SEO({
  title,
  description,
  name = 'Morphnex',
  type = 'website',
  image = 'https://morphnex.in/images/preview.jpg',
  jsonLd,
}: SEOProps) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  const canonicalPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const canonicalUrl = `https://morphnex.in${canonicalPath}`;

  const defaultJsonLd = jsonLd || {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: canonicalUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Morphnex Technologies',
      url: 'https://morphnex.in/',
      logo: 'https://morphnex.in/images/logo.webp',
    },
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph tags (Facebook, LinkedIn, etc.) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={name} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(defaultJsonLd)}
      </script>
    </Helmet>
  );
}
