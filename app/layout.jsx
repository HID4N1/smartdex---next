import './globals.css'
import ClientLayout from '../components/ClientLayout'

export const metadata = {
  title: {
    default: 'SmartDex — Solutions Digitales pour Entreprises',
    template: '%s — SmartDex',
  },
  description: 'Agence de développement web, mobile et SaaS à Casablanca, Maroc.',
  metadataBase: new URL('https://smartdex.ma'),
  openGraph: {
    siteName: 'SmartDex',
    locale: 'fr_MA',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'SmartDex',
    url: 'https://smartdex.ma',
    logo: 'https://smartdex.ma/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Casablanca',
      addressCountry: 'MA',
    },
    description: 'Agence de développement web, mobile et SaaS à Casablanca, Maroc.',
    email: 'contact@smartdex.ma',
    telephone: '+212-70745-8386',
  }

  return (
    <html lang="fr">
      <head>
        <meta name="theme-color" content="#0a0a0f" />
        <link rel="icon" type="image/png" href="/logo.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
