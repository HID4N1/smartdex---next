import { createNoIndexMetadata } from '../../lib/seo'

export const metadata = createNoIndexMetadata({
  path: '/business-card',
  title: 'Carte de visite SmartDex',
  description: 'Carte de visite digitale SmartDex.',
})

export default function BusinessCardLayout({ children }) {
  return children
}
