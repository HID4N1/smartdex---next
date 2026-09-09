import Projects from '../../components/Projects'
import { createPageMetadata } from '../../lib/seo'

export const metadata = createPageMetadata({
  path: '/projects',
  title: 'Nos Projets & Réalisations | SmartDex',
  description: 'Découvrez les réalisations SmartDex : sites web, applications mobiles, SaaS et logiciels métier sur mesure pour entreprises au Maroc.',
  ogTitle: 'Nos Projets — SmartDex',
  ogDescription: 'Réalisations web, mobile, SaaS et logiciels sur mesure développées par SmartDex.',
})

export default function ProjectsPage() {
  return <Projects teaser={false} />
}
