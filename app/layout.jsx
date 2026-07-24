import './globals.css'
import Script from 'next/script'
import ClientLayout from '../components/ClientLayout'

export const metadata = {
  title: {
    default: 'SmartDex — Agence Digitale au Maroc',
    template: '%s — SmartDex',
  },
  description: 'SmartDex est une agence digitale au Maroc spécialisée en développement web, SaaS, applications mobiles et solutions IA pour entreprises.',
  metadataBase: new URL('https://smartdex.ma'),
  applicationName: 'SmartDex',
  authors: [{ name: 'SmartDex', url: 'https://smartdex.ma' }],
  creator: 'SmartDex',
  publisher: 'SmartDex',
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SmartDex — Agence Digitale au Maroc',
    description: 'Développement web, SaaS, applications mobiles et solutions IA pour entreprises au Maroc.',
    url: 'https://smartdex.ma',
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

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': 'https://smartdex.ma/#organization',
    name: 'SmartDex',
    url: 'https://smartdex.ma',
    logo: 'https://smartdex.ma/logo.png',
    image: 'https://smartdex.ma/og-image.png',
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

  return (
    <html lang="fr">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C6DMPKL8X7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-C6DMPKL8X7');
`}
        </Script>
        <meta name="theme-color" content="#0a0a0f" />
        <link rel="icon" type="image/png" href="/logo.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/logo.png" />
        
        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xr7gyktzxs");
`,
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ClientLayout>
          {children}
        </ClientLayout>
  
      </body>
    </html>
  )
}
