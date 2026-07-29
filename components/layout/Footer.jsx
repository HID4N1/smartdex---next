'use client'

import Link from 'next/link'
import Image from 'next/image'
import './Footer.css'
import ThemeToggle from '../ui/ThemeToggle'
import ChatbotTrigger from '../ChatbotTrigger'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-4cols">
        <div>
          <div className="sd-logo" style={{ marginBottom: 8 }}>
            <Link href="/">
              <Image
                src="/images/logo%20smartdex.png"
                alt="SmartDex"
                className="sd-logo-img-footer"
                width={200}
                height={90}
              />
            </Link>
          </div>
          <p className="muted">Solutions digitales innovantes pour les entreprises ambitieuses.</p>
        </div>
        <div>
          <div className="footer-heading">Liens rapides</div>
          <div style={{ display: 'grid', gap: 6 }}>
            <Link href="/">Accueil</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Réalisations</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">À propos</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/devis">Obtenir une estimation instantanée</Link>
            <ChatbotTrigger className="footer-link-button">Parler à l’assistant IA</ChatbotTrigger>
          </div>
        </div>
        <div>
          <div className="footer-heading">Nos services</div>
          <div style={{ display: 'grid', gap: 6 }}>
            <Link href="/ai-chatbot-morocco">AI Chatbot Maroc</Link>
            <Link href="/saas-development-morocco">Développement SaaS Maroc</Link>
            <Link href="/agence-web-casablanca">Agence Web Casablanca</Link>
            <Link href="/creation-application-mobile-maroc">Application Mobile Maroc</Link>
            <Link href="/developpement-erp-crm-maroc">ERP & CRM sur mesure</Link>
          </div>
        </div>
        <div>
          <div className="footer-heading">Coordonnées</div>
          <Link href="/contact">Formulaire de contact</Link>
          <div className="muted" style={{ marginTop: 6 }}>contact@smartdex.ma</div>
          <div className="muted">+212 70745-8386</div>
          <div className="muted">+212 52008-5689</div>
          <div style={{ marginTop: 8, display: 'flex', gap: 10 }}>
            <a href="https://www.linkedin.com/company/smartdex-ma/">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} SmartDex. Tous droits réservés.</span>
        <ThemeToggle />
      </div>
    </footer>
  )
}
