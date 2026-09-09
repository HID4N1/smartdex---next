import './globals.css'
import ClientLayout from '../components/ClientLayout'
import { SITE_URL } from '../lib/seo'

export const metadata = {
  title: {
    default: 'SmartDex — Agence Digitale au Maroc',
    template: '%s',
  },
  description: 'SmartDex est une agence digitale au Maroc spécialisée en développement web, SaaS, applications mobiles et solutions IA pour entreprises.',
  metadataBase: new URL(SITE_URL),
  applicationName: 'SmartDex',
  authors: [{ name: 'SmartDex', url: 'https://www.smartdex.ma' }],
  creator: 'SmartDex',
  publisher: 'SmartDex',
  category: 'technology',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/logo.png' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'SmartDex — Agence Digitale au Maroc',
    description: 'Développement web, SaaS, applications mobiles et solutions IA pour entreprises au Maroc.',
    url: 'https://www.smartdex.ma',
    siteName: 'SmartDex',
    locale: 'fr_MA',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SmartDex',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartDex — Agence Digitale au Maroc',
    description: 'Développement web, SaaS, applications mobiles et solutions IA pour entreprises au Maroc.',
    images: ['/og-image.png'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0f',
}

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': 'https://www.smartdex.ma/#organization',
    name: 'SmartDex',
    url: 'https://www.smartdex.ma',
    logo: 'https://www.smartdex.ma/logo.png',
    image: 'https://www.smartdex.ma/og-image.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Casablanca',
      addressCountry: 'MA',
    },
    description: 'Agence digitale au Maroc spécialisée en développement web, SaaS, applications mobiles et solutions IA pour entreprises.',
    email: 'contact@smartdex.ma',
    telephone: '+212-70745-8386',
    areaServed: {
      '@type': 'Country',
      name: 'Morocco',
    },
    sameAs: [
      'https://www.linkedin.com/company/smartdex-ma/',
    ],
  }
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.smartdex.ma/#website',
    name: 'SmartDex',
    url: SITE_URL,
    inLanguage: 'fr-MA',
    publisher: {
      '@id': 'https://www.smartdex.ma/#organization',
    },
  }

  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, '\\u003c') }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd).replace(/</g, '\\u003c') }}
        />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
