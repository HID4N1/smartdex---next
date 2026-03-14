import Link from 'next/link'
import '../seo-pages.css'
import './SaasDevelopmentMorocco.css'

export const metadata = {
  title: 'Développement SaaS Maroc | Logiciels sur mesure — SmartDex',
  description: "SmartDex développe des applications SaaS personnalisées au Maroc. Logiciels cloud, applications web métier et solutions sur mesure pour entreprises et startups. Développement SaaS Maroc, Casablanca.",
  openGraph: {
    title: 'Développement SaaS Maroc — SmartDex',
    description: 'Applications SaaS sur mesure au Maroc.',
    url: 'https://smartdex.ma/saas-development-morocco',
    siteName: 'SmartDex',
    locale: 'fr_MA',
    type: 'website',
  },
}

export default function SaasDevelopmentMoroccoPage() {
  return (
    <section className="seo-page saas-development-morocco">
      <div className="seo-hero" data-reveal>
        <div className="seo-hero-bg" />
        <div className="container seo-hero-content">
          <div className="section-badge-wrapper">
            <span className="section-badge">SaaS</span>
          </div>
          <h1 className="seo-main-title">Développement SaaS au Maroc</h1>
          <p className="seo-subtitle muted">
            Des logiciels cloud performants et évolutifs pour propulser la croissance de votre entreprise.
          </p>
        </div>
      </div>

      <div className="seo-content" data-reveal>
        <div className="container">
          <div className="seo-intro">
            <h2>Solutions SaaS sur mesure au Maroc</h2>
            <p className="muted">
              SmartDex accompagne les entreprises et startups marocaines dans la création de logiciels SaaS. De la conception au déploiement, nous construisons des applications cloud scalables, sécurisées et adaptées à vos process métier : gestion, CRM, outils collaboratifs ou plateformes sectorielles.
            </p>
          </div>

          <div className="seo-features">
            <h2>Ce que nous proposons</h2>
            <ul className="seo-list muted">
              <li>Architecture cloud moderne (multi-tenant, API-first)</li>
              <li>Applications web responsive et performantes</li>
              <li>Authentification, sécurité et conformité RGPD</li>
              <li>Intégrations (paiements, CRM, outils tiers)</li>
              <li>Maintenance, mises à jour et évolutions continues</li>
            </ul>
          </div>

          <div className="seo-cta-section">
            <div className="seo-cta-content">
              <h3>Un projet SaaS en tête ?</h3>
              <p className="muted">Échangeons sur vos besoins et définissons ensemble la solution idéale.</p>
            </div>
            <Link href="/contact" className="btn btn-primary">
              <span>Demander un devis</span>
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
