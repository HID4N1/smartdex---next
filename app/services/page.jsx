import Services from '../../components/Services'
import { getCanonicalPath } from '../../lib/seo'

export const metadata = {
  title: 'Services digitaux au Maroc | SmartDex',
  description: 'Découvrez nos services web, mobile, ERP, SaaS et IA conçus sur mesure pour les entreprises et organisations au Maroc.',
  alternates: {
    canonical: getCanonicalPath('/services'),
  },
  openGraph: {
    title: 'Nos Services — SmartDex',
    description: 'Développement web, mobile, SaaS et solutions cloud. Agence digitale Casablanca.',
    url: 'https://www.smartdex.ma/services',
    siteName: 'SmartDex',
    locale: 'fr_MA',
    type: 'website',
  },
}

export default function ServicesPage() {
  return <Services compact={false} />
}
