import Link from 'next/link'
import '../seo-pages.css'
import './SaasDevelopmentMorocco.css'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte le développement d\'un SaaS au Maroc ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le coût varie selon la complexité (MVP, fonctionnalités avancées, intégrations). Un MVP simple démarre autour de 80 000 à 150 000 MAD. Les plateformes plus complexes peuvent aller au-delà. SmartDex propose un devis gratuit après analyse de vos besoins.'
      }
    },
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre un logiciel SaaS et un logiciel classique ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un SaaS (Software as a Service) est hébergé dans le cloud et accessible via navigateur ou API. Pas d\'installation, mises à jour automatiques, facturation mensuelle et scalabilité intégrée. Un logiciel classique s\'installe sur vos serveurs ou postes, nécessite maintenance manuelle et mises à jour ponctuelles.'
      }
    },
    {
      '@type': 'Question',
      name: 'Combien de temps faut-il pour développer un SaaS ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un MVP (version minimale viable) prend généralement 2 à 4 mois. Une plateforme complète avec intégrations complexes : 6 à 12 mois. Nous livrons par phases pour valider rapidement avec vos utilisateurs et itérer.'
      }
    },
    {
      '@type': 'Question',
      name: 'Mon SaaS peut-il être hébergé au Maroc ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. Nous pouvons héberger votre SaaS auprès de prestataires marocains ou européens (OVH, AWS). La localisation dépend de vos contraintes RGPD et de latence. Nous vous conseillons la solution la plus adaptée à votre activité.'
      }
    },
    {
      '@type': 'Question',
      name: 'SmartDex peut-il reprendre un projet SaaS existant ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. Nous auditions le code, la base de données et l\'infrastructure pour proposer des évolutions, corrections ou migrations. Nous intervenons sur des projets React, Node.js, PHP ou autres technologies. Demandez un audit gratuit pour évaluer les possibilités.'
      }
    }
  ]
}

export const metadata = {
  title: 'Développement SaaS Maroc — Logiciels cloud sur mesure | SmartDex',
  description: 'SmartDex conçoit des logiciels SaaS sur mesure pour entreprises marocaines. Architecture cloud, multi-tenant, sécurisé. Devis gratuit à Casablanca.',
  keywords: 'développement SaaS Maroc, logiciel SaaS sur mesure Maroc, création SaaS Casablanca, agence web maroc, casablanca',
  openGraph: {
    title: 'Développement SaaS Maroc — Logiciels cloud sur mesure',
    description: 'SmartDex conçoit des logiciels SaaS sur mesure pour entreprises marocaines. Architecture cloud, multi-tenant, sécurisé. Devis gratuit à Casablanca.',
    url: 'https://smartdex.ma/saas-development-morocco',
    siteName: 'SmartDex',
    locale: 'fr_MA',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://smartdex.ma/saas-development-morocco',
  },
}

export default function SaasDevelopmentMoroccoPage() {
  return (
    <article className="seo-page saas-development-morocco">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />
      <header className="seo-hero" data-reveal>
        <div className="seo-hero-bg" />
        <div className="container seo-hero-content">
          <div className="section-badge-wrapper">
            <span className="section-badge">SaaS</span>
          </div>
          <h1 className="seo-main-title">Développement SaaS Maroc</h1>
          <p className="seo-subtitle muted">
            Des logiciels cloud sur mesure pour startups et entreprises marocaines. Architecture scalable, multi-tenant et sécurisée pour accélérer votre transformation digitale.
          </p>
          <div className="seo-hero-ctas">
            <Link href="/devis" className="btn btn-primary">Obtenir une estimation instantanée</Link>
            <Link href="/projects" className="btn">Voir nos réalisations</Link>
          </div>
        </div>
      </header>

      <div className="seo-content" data-reveal>
        <div className="container">
          <section className="seo-intro">
            <p>
              Au Maroc, les startups marocaines et les PME cherchent des solutions logicielles adaptées à 
              leur croissance. Choisir entre un <Link href="/blog/saas-vs-logiciel-sur-mesure-maroc">SaaS
              ou logiciel sur mesure</Link> permet d&apos;avoir un outil qui évolue avec vous, sans dépendre
              de logiciels génériques. SmartDex, basée à Casablanca, accompagne les entreprises dans la 
              création de logiciels cloud professionnels : plateformes de gestion, CRM, outils collaboratifs
              ou logiciels métier spécifiques à votre secteur. Notre approche combine qualité technique 
              (React, Node.js, bases de données cloud) et accompagnement terrain pour garantir la scalabilité
              et la pérennité de votre projet. Que vous soyez une startup en phase de lancement ou une
              entreprise établie en transformation digitale, nous construisons avec vous le SaaS qui répond 
               précisément à vos besoins et à ceux de vos clients au Maroc.
            </p>
          </section>

          <section className="seo-solutions">
            <h2>Solutions SaaS sur mesure au Maroc</h2>
            <p>
              Une solution SaaS efficace doit avant tout répondre à des besoins métier concrets : vendre plus vite,
              mieux suivre les opérations et donner aux équipes une information fiable au bon moment. SmartDex
              conçoit chaque solution SaaS comme une plateforme SaaS sur mesure, pensée pour les PME marocaines,
              les startups et les entreprises marocaines qui veulent structurer leur croissance sans multiplier
              les outils isolés. Nous développons par exemple un CRM pour gérer les clients, les prospects et 
              les ventes, une plateforme de gestion ou ERP pour PME afin de centraliser stocks, factures, missions 
              et tableaux de bord, ou encore un système de réservation pour hôtels, salons, cabinets ou services 
              à domicile. Un logiciel SaaS peut aussi prendre la forme d’un portail client pour suivre commandes, 
              documents, paiements et demandes de support, ou d’un outil collaboratif pour organiser projets,
              équipes et validations internes. L’objectif reste simple : transformer vos processus quotidiens en
              un outil cloud rapide, sécurisé et mesurable, capable d’améliorer la productivité, la qualité de 
              service et la visibilité de votre activité.
            </p>
          </section>

          <section className="seo-platform-proof">
            <h2>Des plateformes SaaS conçues pour des besoins réels</h2>
            <div className="seo-platform-proof-grid">
              <article className="seo-platform-card seo-platform-card-featured">
                <div>
                  <h3>CasaMyWay</h3>
                  <p className="seo-platform-client">GenSales / RATP</p>
                </div>
                <p>
                  Plateforme SaaS pour la réservation et le renouvellement d’abonnements de transport, avec agents terrain, back-office admin, OCR et notifications WhatsApp.
                </p>
                <p>
                  Impact business : processus client plus fluide, meilleure organisation terrain, réduction des tâches manuelles et suivi centralisé des opérations.
                </p>
                <Link href="/projects/casamyway">Voir le projet</Link>
              </article>

              <article className="seo-platform-card">
                <div>
                  <h3>Plateforme de suivi commercial SJM</h3>
                  <p className="seo-platform-client">Master Blow / MDJS</p>
                </div>
                <p>
                  Plateforme web de suivi en temps réel des performances des agents commerciaux, avec OCR, dashboard superviseur, KPI et reporting automatisé.
                </p>
                <p>
                  Impact business : meilleure visibilité opérationnelle, réduction du temps de reporting et identification plus rapide des problèmes terrain.
                </p>
                <Link href="/projects/sjm-pilote-mdjs">Voir le projet</Link>
              </article>

              <article className="seo-platform-card">
                <div>
                  <h3>Quattro Plus</h3>
                  <p className="seo-platform-client">MasterBlow / MDJS</p>
                </div>
                <p>
                  Plateforme mobile et web de gestion de campagne promotionnelle avec instant win, quotas journaliers, stocks cadeaux, agents terrain et rapports.
                </p>
                <p>
                  Impact business : distribution maîtrisée, reporting fiable, réduction des erreurs terrain et meilleure visibilité sur l’avancement de la campagne.
                </p>
                <Link href="/projects/quattro-plus">Voir le projet</Link>
              </article>
            </div>
          </section>

          <section className="seo-features">
            <h2>Ce que nous proposons</h2>
            <ul className="seo-list muted">
              <li>Architecture cloud multi-tenant avec React et Node.js pour une scalabilité optimale</li>
              <li>Applications web responsives, rapides et accessibles sur tous les appareils</li>
              <li>Authentification sécurisée, gestion des rôles et conformité RGPD</li>
              <li>Intégrations paiement (CMI, Stripe), CRM et outils tiers via API</li>
              <li>Base de données structurée (PostgreSQL, MongoDB) et backups automatiques</li>
              <li>Maintenance, mises à jour, monitoring et support technique inclus</li>
            </ul>
          </section>

          <section className="seo-process">
            <h2>Notre processus</h2>
            <div className="seo-process-steps">
              <div className="seo-process-step">
                <div className="seo-process-num">Étape 01</div>
                <h3 className="seo-process-title">Découverte &amp; cahier des charges</h3>
                <p className="seo-process-desc">Nous analysons vos besoins, vos utilisateurs cibles et définissons le périmètre. Livrable : cahier des charges validé. Durée : environ 1 semaine.</p>
              </div>
              <div className="seo-process-step">
                <div className="seo-process-num">Étape 02</div>
                <h3 className="seo-process-title">Développement &amp; itérations</h3>
                <p className="seo-process-desc">Nous développons par sprints avec des points de validation réguliers. La durée varie selon la complexité du projet.</p>
              </div>
              <div className="seo-process-step">
                <div className="seo-process-num">Étape 03</div>
                <h3 className="seo-process-title">Livraison, tests &amp; support</h3>
                <p className="seo-process-desc">Déploiement en production, tests finaux et formation. Support réactif inclus après la mise en ligne.</p>
              </div>
            </div>
          </section>

          <section className="seo-why">
            <h2>Pourquoi choisir SmartDex</h2>
            <div className="seo-why-grid">
              <div className="seo-why-card">
                <strong>7+ projets livrés au Maroc</strong>
                <p>Notre équipe a accompagné des startups et PME marocaines sur des projets SaaS, web et mobile.</p>
              </div>
              <div className="seo-why-card">
                <strong>Délais respectés à 100%</strong>
                <p>Nous nous engageons sur des jalons clairs et vous tenons informés tout au long du projet.</p>
              </div>
              <div className="seo-why-card">
                <strong>Support réactif inclus</strong>
                <p>Après la livraison, nous restons disponibles pour les corrections et évolutions.</p>
              </div>
              <div className="seo-why-card">
                <strong>Code propre et maintenable</strong>
                <p>Code documenté, bonnes pratiques et architecture évolutive pour garantir la longévité de votre SaaS.</p>
              </div>
            </div>
          </section>

          <section className="seo-faq">
            <h2>Questions fréquentes</h2>
            <details>
              <summary>Combien coûte le développement d&apos;un SaaS au Maroc ?</summary>
              <div className="faq-answer">
                <p>Le coût varie selon la complexité (MVP, fonctionnalités avancées, intégrations). Un MVP simple démarre autour de 80 000 à 150 000 MAD. Les plateformes plus complexes peuvent aller au-delà. <Link href="/devis">Obtenir une estimation instantanée</Link> après analyse de vos besoins.</p>
              </div>
            </details>
            <details>
              <summary>Quelle est la différence entre un logiciel SaaS et un logiciel classique ?</summary>
              <div className="faq-answer">
                <p>Un SaaS est hébergé dans le cloud et accessible via navigateur ou API. Pas d&apos;installation, mises à jour automatiques, facturation mensuelle et scalabilité intégrée. Un logiciel classique s&apos;installe sur vos serveurs, nécessite maintenance manuelle et mises à jour ponctuelles.</p>
              </div>
            </details>
            <details>
              <summary>Combien de temps faut-il pour développer un SaaS ?</summary>
              <div className="faq-answer">
                <p>Un MVP (version minimale viable) prend généralement 2 à 4 mois. Une plateforme complète avec intégrations complexes : 6 à 12 mois. Nous livrons par phases pour valider rapidement avec vos utilisateurs.</p>
              </div>
            </details>
            <details>
              <summary>Mon SaaS peut-il être hébergé au Maroc ?</summary>
              <div className="faq-answer">
                <p>Oui. Nous pouvons héberger votre SaaS auprès de prestataires marocains ou européens (OVH, AWS). La localisation dépend de vos contraintes RGPD et de latence. Nous vous conseillons la solution la plus adaptée.</p>
              </div>
            </details>
            <details>
              <summary>SmartDex peut-il reprendre un projet SaaS existant ?</summary>
              <div className="faq-answer">
                <p>Oui. Nous auditions le code, la base de données et l&apos;infrastructure pour proposer des évolutions, corrections ou migrations. Nous intervenons sur des projets React, Node.js, PHP ou autres. Découvrez aussi notre offre de <Link href="/developpement-erp-crm-maroc">développement ERP et CRM sur mesure</Link>.</p>
              </div>
            </details>
          </section>

          <section className="seo-cta-banner">
            <h3>Prêt à lancer votre projet ?</h3>
            <p>Décrivez votre projet et recevez une estimation détaillée immédiatement.</p>
            <Link href="/devis" className="btn btn-primary">Obtenir une estimation instantanée</Link>
          </section>
        </div>
      </div>
    </article>
  )
}
