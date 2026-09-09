export const SITE_URL = 'https://www.smartdex.ma'
export const SITE_NAME = 'SmartDex'
export const DEFAULT_OG_IMAGE = '/og-image.png'
export const DEFAULT_LOCALE = 'fr_MA'

export const indexableRoutes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/projects', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/devis', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/ai-chatbot-morocco', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/saas-development-morocco', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/agence-web-casablanca', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/creation-application-mobile-maroc', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/developpement-erp-crm-maroc', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/politique-de-confidentialite', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/politique-de-cookies', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/conditions-generales', priority: 0.3, changeFrequency: 'yearly' },
]

export function getCanonicalUrl(pathname = '/') {
  const cleanPath = pathname
    .split('?')[0]
    .split('#')[0]
    .replace(/^\/+/, '')
    .replace(/\/+$/, '')

  return cleanPath ? `${SITE_URL}/${cleanPath}` : `${SITE_URL}/`
}

export function getCanonicalPath(pathname = '/') {
  const url = getCanonicalUrl(pathname)

  return url === `${SITE_URL}/` ? '/' : url.replace(SITE_URL, '')
}

export function getAbsoluteUrl(pathname = '/') {
  return getCanonicalUrl(pathname)
}

export function createPageMetadata({
  path,
  title,
  description,
  ogTitle = title,
  ogDescription = description,
  type = 'website',
  images = [
    {
      url: DEFAULT_OG_IMAGE,
      width: 1200,
      height: 630,
      alt: `${SITE_NAME} - Agence digitale au Maroc`,
    },
  ],
  keywords,
  robots,
  publishedTime,
}) {
  const url = getAbsoluteUrl(path)
  const metadata = {
    title,
    description,
    alternates: {
      canonical: getCanonicalPath(path),
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url,
      siteName: SITE_NAME,
      locale: DEFAULT_LOCALE,
      type,
      images,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: images.map((image) => image.url),
    },
    ...(keywords ? { keywords } : {}),
    ...(robots ? { robots } : {}),
  }

  return metadata
}

export function createNoIndexMetadata({ path, title, description }) {
  return createPageMetadata({
    path,
    title,
    description,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  })
}
