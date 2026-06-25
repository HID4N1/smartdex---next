import Link from 'next/link'
import Image from 'next/image'
import Testimonials from '../components/Testimonials'
import ChatbotTrigger from '../components/ChatbotTrigger'
import { getProjects } from '../services'
import './Home.css'

export const metadata = {
  title: 'Agence Digitale Maroc | Développement Web, SaaS & IA',
  description: "SmartDex est une agence digitale au Maroc spécialisée en développement web, SaaS, applications mobiles et solutions IA pour aider les entreprises à vendre plus, automatiser leurs opérations et accélérer leur transformation digitale.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SmartDex — Agence Digitale Maroc',
    description: "Développement web, SaaS, applications mobiles et solutions IA sur mesure pour entreprises au Maroc.",
    url: 'https://smartdex.ma',
    siteName: 'SmartDex',
    locale: 'fr_MA',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SmartDex — Agence Digitale Maroc',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartDex — Agence Digitale Maroc',
    description: "Développement web, SaaS, applications mobiles et solutions IA sur mesure pour entreprises au Maroc.",
    images: ['/og-image.png'],
  },
}

const IMAGE_MAP = {
  pilote: '/images/pilote.png',
  lmatch: '/images/lmatch.png',
  quattro: '/images/quattro.png',
  casamyway: '/images/casamyway.png',
}

const featuredProjectIds = ['casamyway', 'sjm-pilote-mdjs', 'quattro-plus']

const projectLabels = {
  'sjm-pilote-mdjs': 'Match Pilot Pro',
}

const heroProof = [
  { value: '5+', label: 'Projets livrés' },
  { value: '20+', label: 'Technologies maîtrisées' },
  { value: '5', label: 'Secteurs accompagnés' },
]

const problems = [
  {
    title: 'Trop de tâches manuelles',
    text: 'Nous transformons les tâches répétitives en workflows fiables pour libérer vos équipes et réduire les erreurs.',
  },
  {
    title: 'Difficulté à suivre les opérations',
    text: 'Vos activités terrain, réservations, agents et statuts deviennent visibles depuis un espace centralisé.',
  },
  {
    title: 'Prospects non traités',
    text: 'SmartDex met en place des parcours de qualification et de relance pour éviter que les demandes restent sans suite.',
  },
  {
    title: 'Données dispersées',
    text: 'Nous connectons vos outils et regroupons les informations utiles dans des interfaces simples à exploiter.',
  },
  {
    title: 'Reporting lent',
    text: 'Les rapports manuels sont remplacés par des dashboards et exports qui reflètent l’activité en temps réel.',
  },
  {
    title: 'Manque de visibilité',
    text: 'Vos responsables suivent les performances, les blocages et les priorités avec des indicateurs clairs.',
  },
]

const valuePillars = [
  {
    icon: 'AI',
    title: 'IA & Assistants Intelligents',
    benefit: 'Répondre plus vite, qualifier les demandes et guider les clients sans surcharge opérationnelle.',
    useCase: 'Assistant IA connecté au site ou à WhatsApp pour capter les prospects et préparer un devis.',
  },
  {
    icon: 'FX',
    title: 'Automatisation Métier',
    benefit: 'Réduire les tâches répétitives et fiabiliser les processus internes.',
    useCase: 'Affectation automatique des agents, notifications, suivi des statuts et rapports quotidiens.',
  },
  {
    icon: 'SaaS',
    title: 'Plateformes SaaS',
    benefit: 'Centraliser les opérations, les utilisateurs, les accès et les données dans un outil sur mesure.',
    useCase: 'Portail de réservation, CRM métier, back-office admin ou application terrain.',
  },
  {
    icon: 'BI',
    title: 'Business Intelligence',
    benefit: 'Transformer vos données en décisions rapides pour piloter la croissance.',
    useCase: 'Dashboard KPI, suivi commercial, performance agents et exports automatisés.',
  },
]

const industries = [
  {
    icon: 'IM',
    title: 'Immobilier',
    challenge: 'Trop de leads arrivent sans suivi clair entre agences, commerciaux et portails.',
    solution: 'CRM, qualification automatique, relances et tableaux de bord de conversion.',
  },
  {
    icon: 'ED',
    title: 'Éducation',
    challenge: 'Les inscriptions, demandes parents et suivis administratifs restent dispersés.',
    solution: 'Portails élèves, automatisation des admissions et reporting de gestion.',
  },
  {
    icon: 'SA',
    title: 'Santé',
    challenge: 'Les rendez-vous, confirmations et dossiers créent une forte charge administrative.',
    solution: 'Réservation en ligne, rappels automatisés et espace de suivi opérationnel.',
  },
  {
    icon: 'PME',
    title: 'PME',
    challenge: 'Les équipes travaillent avec des fichiers, messages et processus difficiles à scaler.',
    solution: 'Outils SaaS internes, automatisations métier et dashboards de pilotage.',
  },
  {
    icon: 'TR',
    title: 'Transport & Mobilité',
    challenge: 'La gestion terrain et les demandes usagers nécessitent coordination et visibilité.',
    solution: 'Plateformes de réservation, agents terrain, OCR et notifications WhatsApp.',
  },
]

const kpis = [
  { value: '5+', label: 'Projets livrés', detail: 'SaaS, web apps, automatisation et dashboards' },
  { value: '25k+', label: 'Utilisateurs impactés', detail: 'Clients, agents terrain et équipes internes' },
  { value: '40+', label: 'Processus automatisés', detail: 'Reporting, réservations, notifications, suivi' },
  { value: '10+', label: 'Années d’expérience cumulées', detail: 'Produit, data, cloud, IA et software engineering' },
]

const logos = ['GenSales', 'RATP Dev', 'MDJS', 'Master Blow', 'SISAL']

export default function Home() {
  const featuredProjects = featuredProjectIds
    .map((id) => getProjects().find((project) => project.id === id))
    .filter(Boolean)

  return (
    <>
      <section className="hero">
        <div className="container hero-shell" data-reveal="zoom">
          <div className="hero-content">
            <div className="badge hero-badge">IA • Automatisation • SaaS • Business Intelligence</div>
            <h1 className="hero-title">
              Automatisez votre entreprise grâce à <span>l&apos;IA</span>
            </h1>
            <p className="hero-sub muted">
              SmartDex aide les PME, agences, écoles, cliniques et entreprises de mobilité à gagner du temps, générer plus de leads, centraliser leurs opérations et prendre de meilleures décisions avec des plateformes intelligentes.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn btn-primary">Réserver une consultation</Link>
              <Link href="/projects" className="btn">Voir nos réalisations</Link>
            </div>
            <div className="hero-proof" aria-label="Indicateurs de confiance">
              {heroProof.map((item) => (
                <div className="hero-proof-item" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-dashboard">
              <div className="hero-dashboard-top">
                <span />
                <span />
                <span />
              </div>
              <div className="hero-dashboard-grid">
                <div className="hero-metric">
                  <small>Score IA</small>
                  <strong>94%</strong>
                </div>
                <div className="hero-metric">
                  <small>Leads</small>
                  <strong>+38%</strong>
                </div>
              </div>
              <div className="hero-chart">
                <i style={{ height: '42%' }} />
                <i style={{ height: '58%' }} />
                <i style={{ height: '47%' }} />
                <i style={{ height: '74%' }} />
                <i style={{ height: '88%' }} />
                <i style={{ height: '68%' }} />
              </div>
            </div>

            <div className="hero-float-card hero-float-card-one">
              <strong>Estimation instantanée</strong>
              <span>Analyse IA du besoin client</span>
            </div>
            <div className="hero-float-card hero-float-card-two">
              <strong>Assistant IA</strong>
              <span>Qualification automatique</span>
            </div>
            <div className="hero-float-card hero-float-card-three">
              <strong>Dashboard</strong>
              <span>KPI & reporting temps réel</span>
            </div>
          </div>
        </div>
      </section>

      <section className="field-projects-section" id="projets">
        <div className="container">
          <div className="section-badge-wrapper">
            <span className="section-badge">Réalisations</span>
          </div>
          <h2 className="section-title">Des solutions déjà utilisées sur le terrain</h2>
          <p className="section-desc muted">
            Avant de parler services, voici des systèmes concrets conçus pour résoudre des problèmes opérationnels réels.
          </p>
          <div className="field-projects-grid">
            {featuredProjects.map((project, index) => (
              <Link
                href={`/projects/${project.id}`}
                className="field-project-card"
                key={project.id}
                data-reveal
                style={{ '--reveal-delay': `${index * 110}ms` }}
              >
                <div className="field-project-media">
                  {IMAGE_MAP[project.imageKey] && (
                    <Image
                      src={IMAGE_MAP[project.imageKey]}
                      alt={projectLabels[project.id] || project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                    />
                  )}
                  <span>{project.categoryLabel}</span>
                </div>
                <div className="field-project-content">
                  <h3>{projectLabels[project.id] || project.name}</h3>
                  <dl>
                    <div>
                      <dt>Problème</dt>
                      <dd>{project.problem}</dd>
                    </div>
                    <div>
                      <dt>Solution</dt>
                      <dd>{project.solution}</dd>
                    </div>
                    <div>
                      <dt>Bénéfice</dt>
                      <dd>{project.impact}</dd>
                    </div>
                  </dl>
                </div>
              </Link>
            ))}
          </div>
          <div className="section-action">
            <Link href="/projects" className="btn btn-primary">Voir toutes les réalisations</Link>
          </div>
        </div>
      </section>

      <section className="problems-section">
        <div className="container">
          <div className="section-badge-wrapper">
            <span className="section-badge">Problèmes</span>
          </div>
          <h2 className="section-title">Les défis que nous résolvons</h2>
          <p className="section-desc muted">
            SmartDex part de vos blocages business pour créer des systèmes qui rendent l&apos;exécution plus simple, plus rapide et plus mesurable.
          </p>
          <div className="problems-grid">
            {problems.map((problem, index) => (
              <article
                className="problem-card"
                key={problem.title}
                data-reveal
                style={{ '--reveal-delay': `${index * 70}ms` }}
              >
                <span />
                <h3>{problem.title}</h3>
                <p className="muted">{problem.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="value-section" id="services">
        <div className="container">
          <div className="section-badge-wrapper">
            <span className="section-badge">Création de valeur</span>
          </div>
          <h2 className="section-title">Comment SmartDex crée de la valeur</h2>
          <p className="section-desc muted">
            Quatre piliers pour passer d&apos;une idée ou d&apos;un processus manuel à une solution digitale utilisée au quotidien.
          </p>
          <div className="value-grid">
            {valuePillars.map((pillar, index) => (
              <article
                className="value-card-home"
                key={pillar.title}
                data-reveal="zoom"
                style={{ '--reveal-delay': `${index * 90}ms` }}
              >
                <div className="value-icon">{pillar.icon}</div>
                <h3>{pillar.title}</h3>
                <p className="muted">{pillar.benefit}</p>
                <div className="use-case">
                  <strong>Cas d&apos;usage</strong>
                  <span>{pillar.useCase}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="industries-section">
        <div className="container">
          <div className="section-badge-wrapper">
            <span className="section-badge">Secteurs</span>
          </div>
          <h2 className="section-title">Nos secteurs d&apos;intervention</h2>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <article
                className="industry-card"
                key={industry.title}
                data-reveal
                style={{ '--reveal-delay': `${index * 70}ms` }}
              >
                <div className="industry-icon">{industry.icon}</div>
                <h3>{industry.title}</h3>
                <p><strong>Défi:</strong> {industry.challenge}</p>
                <p className="muted"><strong>Solution SmartDex:</strong> {industry.solution}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="results-section">
        <div className="container">
          <div className="results-shell" data-reveal="right">
            <div>
              <div className="section-badge-wrapper">
                <span className="section-badge">Résultats</span>
              </div>
              <h2 className="section-title">Des indicateurs orientés impact business</h2>
              <p className="section-desc muted">
                Nous mesurons la valeur par ce que vos équipes peuvent mieux exécuter: moins de friction, plus de visibilité et des décisions plus rapides.
              </p>
            </div>
            <div className="kpi-grid">
              {kpis.map((kpi) => (
                <article className="kpi-card" key={kpi.label}>
                  <strong>{kpi.value}</strong>
                  <span>{kpi.label}</span>
                  <p>{kpi.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="proof-section">
        <div className="container">
          <div className="section-badge-wrapper">
            <span className="section-badge">Preuve sociale</span>
          </div>
          <h2 className="section-title">Des partenaires et projets qui renforcent notre crédibilité</h2>
          <div className="logo-cloud" aria-label="Clients et partenaires">
            {logos.map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="chatbot-positioning-section" data-reveal="left">
        <div className="container chatbot-positioning-content">
          <div>
            <div className="section-badge-wrapper">
              <span className="section-badge">Assistant IA</span>
            </div>
            <h2 className="section-title">Découvrez comment l&apos;IA peut transformer votre activité</h2>
            <p className="section-desc muted">
              Testez des cas concrets: qualification de leads, réponses client, estimation de projet, automatisation WhatsApp et recommandations adaptées à votre secteur.
            </p>
            <ul className="ai-benefits">
              <li>Réponses instantanées aux questions fréquentes</li>
              <li>Préqualification des prospects avant échange commercial</li>
              <li>Orientation vers les bons services, équipes ou workflows</li>
            </ul>
          </div>
          <ChatbotTrigger className="btn btn-primary">Parler à l’assistant IA</ChatbotTrigger>
        </div>
      </section>
      <Testimonials />

      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta" data-reveal="zoom">
            <div>
              <span className="section-badge">Consultation</span>
              <h2>Prêt à accélérer votre transformation digitale ?</h2>
              <p className="muted">
                Discutons de vos opérations, de vos objectifs et des automatisations qui peuvent créer le plus d&apos;impact rapidement.
              </p>
            </div>
            <div className="final-cta-actions">
              <Link href="/contact" className="btn btn-primary">Réserver un appel</Link>
              <a href="https://wa.me/212707458386" className="btn">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
