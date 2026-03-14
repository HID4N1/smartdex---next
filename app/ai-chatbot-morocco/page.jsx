import Link from 'next/link'
import '../seo-pages.css'

export const metadata = {
  title: 'AI Chatbot Maroc | Chatbots intelligents pour entreprises — SmartDex',
  description: "SmartDex développe des chatbots IA personnalisés au Maroc. Automatisation conversationnelle, support client 24/7 et expérience utilisateur optimisée. Chatbot IA Maroc, Casablanca.",
  openGraph: {
    title: 'AI Chatbot Maroc — SmartDex',
    description: 'Chatbots IA personnalisés pour entreprises au Maroc.',
    url: 'https://smartdex.ma/ai-chatbot-morocco',
    siteName: 'SmartDex',
    locale: 'fr_MA',
    type: 'website',
  },
}

export default function AiChatbotMoroccoPage() {
  return (
    <section className="seo-page ai-chatbot-morocco">
      <div className="seo-hero" data-reveal>
        <div className="seo-hero-bg" />
        <div className="container seo-hero-content">
          <div className="section-badge-wrapper">
            <span className="section-badge">IA & Chatbots</span>
          </div>
          <h1 className="seo-main-title">Chatbot IA au Maroc</h1>
          <p className="seo-subtitle muted">
            Des chatbots intelligents et personnalisés pour automatiser vos interactions clients et booster votre productivité.
          </p>
        </div>
      </div>

      <div className="seo-content" data-reveal>
        <div className="container">
          <div className="seo-intro">
            <h2>Pourquoi choisir un chatbot IA au Maroc ?</h2>
            <p className="muted">
              SmartDex accompagne les entreprises marocaines dans leur transformation digitale avec des solutions de chatbots IA sur mesure. Nos assistants conversationnels s&apos;intègrent à votre site web, messageries et systèmes existants pour offrir un support client 24/7, qualifier des leads et améliorer l&apos;expérience utilisateur.
            </p>
          </div>

          <div className="seo-features">
            <h2>Nos solutions chatbot</h2>
            <ul className="seo-list muted">
              <li>Chatbots FAQ et support client automatisé</li>
              <li>Assistants vocaux et textuels multilingues (arabe, français, anglais)</li>
              <li>Intégration CRM, calendriers et outils de gestion</li>
              <li>Apprentissage continu et personnalisation selon vos données</li>
              <li>Analytics et suivi des performances en temps réel</li>
            </ul>
          </div>

          <div className="seo-cta-section">
            <div className="seo-cta-content">
              <h3>Prêt à lancer votre chatbot IA ?</h3>
              <p className="muted">Discutons de votre projet et concevons ensemble une solution adaptée à vos besoins.</p>
            </div>
            <Link href="/contact" className="btn btn-primary">
              <span>Contactez SmartDex</span>
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
