import Services from '../../components/Services'
import { createPageMetadata } from '../../lib/seo'

export const metadata = createPageMetadata({
  path: '/services',
  title: 'Services digitaux au Maroc | SmartDex',
  description: 'Découvrez nos services web, mobile, ERP, SaaS et IA conçus sur mesure pour les entreprises et organisations au Maroc.',
  ogTitle: 'Nos Services — SmartDex',
  ogDescription: 'Développement web, mobile, SaaS, ERP, CRM, IA et solutions cloud pour entreprises au Maroc.',
})

export default function ServicesPage() {
  return <Services compact={false} />
}
