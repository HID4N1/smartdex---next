import Link from 'next/link'
import '../seo-pages.css'
import './AiChatbotMorocco.css'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte un chatbot IA pour une entreprise marocaine ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les prix varient selon la complexité : un chatbot FAQ simple débute autour de 25 000 MAD, un assistant IA avec intégration WhatsApp et personnalisation peut aller de 50 000 à 120 000 MAD. SmartDex propose un devis gratuit adapté à vos objectifs.'
      }
    },
    {
      '@type': 'Question',
      name: 'Un chatbot peut-il parler en darija ou en arabe ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. Nous configurons nos chatbots pour répondre en français, arabe, darija ou anglais selon votre audience. Les modèles IA comprennent le dialecte marocain et s\'adaptent au ton de votre marque.'
      }
    },
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre un chatbot simple et un chatbot IA ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un chatbot simple suit des scénarios prédéfinis (réponses fixes). Un chatbot IA comprend le langage naturel, s\'adapte aux formulations variées et peut apprendre. Il gère des demandes complexes et offre une expérience plus fluide.'
      }
    },
    {
      '@type': 'Question',
      name: 'Comment intégrer un chatbot sur mon site web ou WhatsApp ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sur votre site : widget intégré (script) ou iframe. Sur WhatsApp Business : via l\'API officielle. Nous fournissons l\'installation et la configuration complètes, sans compétence technique requise de votre côté.'
      }
    },
    {
      '@type': 'Question',
      name: 'Le chatbot peut-il se connecter à mon CRM ou ERP ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. Nous connectons le chatbot à vos outils (CRM, ERP, calendriers, bases de données) via API. Les leads qualifiés sont automatiquement enregistrés, les rendez-vous planifiés et les réponses enrichies avec vos données.'
      }
    }
  ]
}

export const metadata = {
  title: 'Chatbot IA Maroc — Assistants virtuels sur mesure | SmartDex',
  description: 'Automatisez votre service client avec un chatbot IA sur mesure. SmartDex développe des assistants intelligents pour entreprises marocaines.',
  keywords: 'chatbot IA Maroc, assistant virtuel entreprise Maroc, chatbot WhatsApp Maroc, agence web maroc, casablanca',
  openGraph: {
    title: 'Chatbot IA Maroc — Assistants virtuels sur mesure',
    description: 'Automatisez votre service client avec un chatbot IA sur mesure. SmartDex développe des assistants intelligents pour entreprises marocaines.',
    url: 'https://smartdex.ma/ai-chatbot-morocco',
    siteName: 'SmartDex',
    locale: 'fr_MA',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://smartdex.ma/ai-chatbot-morocco',
  },
}

export default function AiChatbotMoroccoPage() {
  return (
    <article className="seo-page ai-chatbot-morocco">
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
            <span className="section-badge">IA &amp; Chatbots</span>
          </div>
          <h1 className="seo-main-title">Chatbot IA Maroc</h1>
          <p className="seo-subtitle muted">
            Automatisez votre service client 24/7 avec un assistant virtuel intelligent. Intégration site web et WhatsApp Business pour les entreprises marocaines.
          </p>
          <div className="seo-hero-ctas">
            <Link href="/contact" className="btn btn-primary">Demander un devis gratuit</Link>
            <Link href="/projects" className="btn">Voir nos réalisations</Link>
          </div>
        </div>
      </header>

      <div className="seo-content" data-reveal>
        <div className="container">
          <section className="seo-intro">
            <p>
              Les entreprises marocaines cherchent à offrir un service client réactif sans multiplier les équipes. Un chatbot IA permet de répondre aux questions fréquentes, qualifier des leads et planifier des rendez-vous 24h/24 et 7j/7. SmartDex, basée à Casablanca, développe des assistants virtuels sur mesure pour les PME et grandes entreprises au Maroc. Nos chatbots s&apos;intègrent à votre site web, à <strong>WhatsApp Business</strong> et à vos outils de gestion pour automatiser les échanges tout en conservant une expérience humaine. Que vous soyez dans la vente, la santé, la logistique ou les services, nous concevons des parcours conversationnels adaptés à votre secteur. L&apos;automatisation libère vos équipes pour se concentrer sur les cas complexes et la relation client, tout en réduisant les temps d&apos;attente pour vos clients.
            </p>
          </section>

          <section className="seo-features">
            <h2>Ce que nous proposons</h2>
            <ul className="seo-list muted">
              <li>Chatbots IA basés sur LLM (GPT, Claude ou modèles open source) configurés selon votre secteur</li>
              <li>Intégration WhatsApp Business API pour répondre à vos clients sur leur messagerie préférée</li>
              <li>Widget web personnalisé intégré à votre site (React, Next.js ou tout CMS)</li>
              <li>Support multilingue : français, arabe, darija et anglais</li>
              <li>Connexion CRM, ERP, calendriers et bases de données via API REST</li>
              <li>Analytics et suivi des conversations pour optimiser les performances</li>
            </ul>
          </section>

          <section className="seo-process">
            <h2>Notre processus</h2>
            <div className="seo-process-steps">
              <div className="seo-process-step">
                <div className="seo-process-num">Étape 01</div>
                <h3 className="seo-process-title">Découverte &amp; cahier des charges</h3>
                <p className="seo-process-desc">Nous analysons vos flux clients, les questions récurrentes et les objectifs. Livrable : cahier des charges validé. Durée : environ 1 semaine.</p>
              </div>
              <div className="seo-process-step">
                <div className="seo-process-num">Étape 02</div>
                <h3 className="seo-process-title">Développement &amp; itérations</h3>
                <p className="seo-process-desc">Conception des scénarios, intégration IA et connecteurs. Tests avec vos équipes. La durée varie selon le périmètre.</p>
              </div>
              <div className="seo-process-step">
                <div className="seo-process-num">Étape 03</div>
                <h3 className="seo-process-title">Livraison, tests &amp; support</h3>
                <p className="seo-process-desc">Déploiement sur votre site et/ou WhatsApp, formation et support continu pour optimiser les réponses.</p>
              </div>
            </div>
          </section>

          <section className="seo-why">
            <h2>Pourquoi choisir SmartDex</h2>
            <div className="seo-why-grid">
              <div className="seo-why-card">
                <strong>7+ projets livrés au Maroc</strong>
                <p>Nous avons accompagné des entreprises marocaines sur des projets web, mobile et IA.</p>
              </div>
              <div className="seo-why-card">
                <strong>Délais respectés à 100%</strong>
                <p>Engagement sur des jalons clairs et suivi régulier tout au long du projet.</p>
              </div>
              <div className="seo-why-card">
                <strong>Support réactif inclus</strong>
                <p>Après la livraison, nous restons disponibles pour affiner et faire évoluer le chatbot.</p>
              </div>
              <div className="seo-why-card">
                <strong>Code propre et maintenable</strong>
                <p>Architecture modulaire et documentée pour des évolutions rapides et fiables.</p>
              </div>
            </div>
          </section>

          <section className="seo-faq">
            <h2>Questions fréquentes</h2>
            <details>
              <summary>Combien coûte un chatbot IA pour une entreprise marocaine ?</summary>
              <div className="faq-answer">
                <p>Les prix varient selon la complexité : un chatbot FAQ simple débute autour de 25 000 MAD, un assistant IA avec intégration WhatsApp peut aller de 50 000 à 120 000 MAD. <Link href="/contact">Contactez-nous</Link> pour un devis gratuit.</p>
              </div>
            </details>
            <details>
              <summary>Un chatbot peut-il parler en darija ou en arabe ?</summary>
              <div className="faq-answer">
                <p>Oui. Nous configurons les chatbots pour répondre en français, arabe, darija ou anglais. Les modèles IA comprennent le dialecte marocain et s&apos;adaptent au ton de votre marque.</p>
              </div>
            </details>
            <details>
              <summary>Quelle est la différence entre un chatbot simple et un chatbot IA ?</summary>
              <div className="faq-answer">
                <p>Un chatbot simple suit des scénarios prédéfinis. Un chatbot IA comprend le langage naturel, s&apos;adapte aux formulations variées et peut gérer des demandes complexes pour une expérience plus fluide.</p>
              </div>
            </details>
            <details>
              <summary>Comment intégrer un chatbot sur mon site web ou WhatsApp ?</summary>
              <div className="faq-answer">
                <p>Sur votre site : widget intégré (script ou iframe). Sur WhatsApp Business : via l&apos;API officielle. Nous fournissons l&apos;installation et la configuration complètes. Découvrez tous nos <Link href="/services">services web et IA</Link>.</p>
              </div>
            </details>
            <details>
              <summary>Le chatbot peut-il se connecter à mon CRM ou ERP ?</summary>
              <div className="faq-answer">
                <p>Oui. Nous connectons le chatbot à vos outils (CRM, ERP, calendriers, bases de données) via API. Les leads qualifiés sont enregistrés automatiquement et les rendez-vous planifiés selon vos disponibilités.</p>
              </div>
            </details>
          </section>

          <section className="seo-cta-banner">
            <h3>Prêt à lancer votre projet ?</h3>
            <p>Contactez nos experts pour un devis gratuit sous 24h.</p>
            <Link href="/contact" className="btn btn-primary">Démarrer mon projet</Link>
          </section>
        </div>
      </div>
    </article>
  )
}
