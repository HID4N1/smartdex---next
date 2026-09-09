import { createPageMetadata } from '../../lib/seo'

export const metadata = createPageMetadata({
  path: '/contact',
  title: 'Contactez SmartDex | Agence digitale au Maroc',
  description: "Obtenez une estimation instantanée SmartDex pour votre projet digital. Réponse rapide, consultation gratuite. Casablanca, Maroc.",
  ogTitle: 'Contactez SmartDex — Projet digital au Maroc',
  ogDescription: 'Contactez SmartDex pour un site web, SaaS, application mobile, ERP, CRM ou solution IA au Maroc.',
})

export default function ContactLayout({ children }) {
  return children
}
