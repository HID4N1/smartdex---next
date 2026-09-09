import Link from 'next/link'
import { createNoIndexMetadata } from '../lib/seo'

export const metadata = createNoIndexMetadata({
  path: '/404',
  title: 'Page introuvable | SmartDex',
  description: 'Cette page SmartDex est introuvable.',
})

export default function NotFound() {
  return (
    <main className="container" style={{ padding: '120px 0' }}>
      <h1>Page introuvable</h1>
      <p className="muted">La page demandée n’existe pas ou a été déplacée.</p>
      <Link className="btn btn-primary" href="/">
        Retour à l’accueil
      </Link>
    </main>
  )
}
