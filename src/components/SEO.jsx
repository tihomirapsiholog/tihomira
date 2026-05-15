import { Helmet } from 'react-helmet-async';

const defaultImage = 'https://tihomira.info/portrait.jpg';

function SEO({
  title,
  description,
  url = 'https://tihomira.info/',
  image = defaultImage,
  type = 'website',
  language = 'en',
  alternateUrls,
}) {
  const defaultAlternateUrls = {
    en: url,
    sr: url,
    xDefault: 'https://tihomira.info/en',
  };

  const alternates = alternateUrls || defaultAlternateUrls;

  return (
    <Helmet htmlAttributes={{ lang: language }}>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />

      {alternates.en && (
        <link rel="alternate" hrefLang="en" href={alternates.en} />
      )}

      {alternates.sr && (
        <link rel="alternate" hrefLang="sr" href={alternates.sr} />
      )}

      {alternates.xDefault && (
        <link rel="alternate" hrefLang="x-default" href={alternates.xDefault} />
      )}
    </Helmet>
  );
}

export default SEO;