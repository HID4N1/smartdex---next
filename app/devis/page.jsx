import DevisForm from '../../components/devis/DevisForm'
import { createPageMetadata } from '../../lib/seo'
import './devis.css'

const devisFaqs = [
  {
    question: 'Le devis est-il gratuit ?',
    answer: 'Oui. Vous pouvez décrire votre projet afin que SmartDex analyse le besoin et prépare une première orientation adaptée.',
  },
  {
    question: 'Quelles informations faut-il fournir ?',
    answer: 'Les objectifs, utilisateurs, fonctionnalités attendues, intégrations, plateformes cibles, délais et systèmes existants aident à produire une estimation plus pertinente.',
  },
  {
    question: 'Pouvez-vous travailler à partir d’un cahier des charges existant ?',
    answer: 'Oui. Un cahier des charges, une maquette ou une liste de fonctionnalités permet de cadrer plus précisément le périmètre technique.',
  },
  {
    question: 'SmartDex accompagne-t-elle les logiciels métier sur mesure ?',
    answer: 'Oui. SmartDex étudie les projets ERP, CRM, SaaS, automatisation, dashboards, applications web et outils internes sur mesure.',
  },
  {
    question: 'Le service est-il disponible partout au Maroc ?',
    answer: 'Oui. SmartDex accompagne les entreprises marocaines à Casablanca et dans les autres villes du Royaume, selon le contexte du projet.',
  },
]

export const metadata = createPageMetadata({
  path: '/devis',
  title: 'Demandez un devis digital au Maroc | SmartDex',
  description: 'Demandez un devis pour un site web, une application, un SaaS, un ERP, un CRM ou une solution IA avec SmartDex au Maroc.',
  ogTitle: 'Devis digital au Maroc — SmartDex',
  ogDescription: 'Demandez une estimation pour un site web, une application, un SaaS, un ERP, un CRM ou une solution IA.',
})

export default function DevisPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: devisFaqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }

  return (
    <main className="devis-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />

      <DevisForm />

      <section className="devis-support" aria-label="Informations pour demander un devis">
        <div className="devis-support-container">
          <div className="devis-support-intro">
            <p>
              SmartDex évalue les projets web, mobile, SaaS, ERP/CRM et IA pour les entreprises marocaines qui veulent structurer leur présence digitale, automatiser leurs opérations ou créer un outil métier sur mesure. Votre demande nous aide à comprendre le contexte business avant de proposer une approche réaliste.
            </p>
          </div>

          <section className="devis-support-section">
            <h2>Quels projets pouvons-nous étudier ?</h2>
            <div className="devis-project-types">
              <article>
                <h3>Site web</h3>
                <p>Création ou refonte de site vitrine, site institutionnel, landing page ou plateforme de contenu optimisée pour votre activité.</p>
              </article>
              <article>
                <h3>Application web</h3>
                <p>Espace client, portail interne, réservation, tableau de bord ou workflow accessible depuis un navigateur.</p>
              </article>
              <article>
                <h3>Application mobile</h3>
                <p>Application iOS et Android pour vos clients, agents terrain, équipes commerciales ou opérations métier.</p>
              </article>
              <article>
                <h3>SaaS</h3>
                <p>Produit cloud avec comptes utilisateurs, abonnements, back-office, rôles, reporting et évolutivité.</p>
              </article>
              <article>
                <h3>ERP ou CRM</h3>
                <p>Logiciel de gestion pour centraliser les ventes, clients, stocks, missions, documents ou processus internes.</p>
              </article>
              <article>
                <h3>Chatbot et automatisation IA</h3>
                <p>Assistant IA, qualification de leads, réponses automatisées, connexion WhatsApp, CRM ou systèmes existants.</p>
              </article>
            </div>
          </section>

          <section className="devis-support-section">
            <h2>Comment se déroule votre demande ?</h2>
            <ol className="devis-steps">
              <li>
                <h3>Décrivez le besoin métier</h3>
                <p>Expliquez le problème à résoudre, le public concerné, les objectifs et les contraintes importantes.</p>
              </li>
              <li>
                <h3>SmartDex analyse le périmètre</h3>
                <p>Nous examinons les fonctionnalités, intégrations, exigences techniques, plateformes cibles et priorités du projet.</p>
              </li>
              <li>
                <h3>Vous recevez une première orientation</h3>
                <p>La recommandation initiale clarifie les grandes options possibles, les points à cadrer et les prochaines décisions utiles.</p>
              </li>
            </ol>
          </section>

          <section className="devis-support-section">
            <h2>Informations utiles pour estimer votre projet</h2>
            <p>
              Plus votre demande est précise, plus l’estimation peut refléter la réalité du projet. Les objectifs business, le nombre d’utilisateurs, les fonctionnalités prioritaires, les intégrations API, les plateformes visées, les délais souhaités et les systèmes existants donnent une meilleure lecture du périmètre. Vous pouvez aussi mentionner une maquette, un cahier des charges, un outil concurrent ou un processus interne à digitaliser.
            </p>
          </section>

          <section className="devis-support-section">
            <h2>Questions fréquentes</h2>
            <div className="devis-faq-list">
              {devisFaqs.map((faq) => (
                <article key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
