import Link from 'next/link'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Achievements from '../components/Achievements'
import CtaContact from '../components/CtaContact'
import './Home.css'

export const metadata = {
  title: 'SmartDex — Solutions Digitales pour Entreprises | Web, Mobile, SaaS',
  description: "SmartDex accompagne les entreprises avec des solutions digitales sur mesure : développement web, applications mobiles, logiciels SaaS, cloud et transformation numérique. Expertise, innovation et fiabilité au Maroc et en Afrique.",
  openGraph: {
    title: 'SmartDex — Solutions Digitales pour Entreprises',
    description: "Innovation, fiabilité et performance pour vos projets web, mobiles et SaaS. Solutions digitales sur mesure au Maroc.",
    url: 'https://smartdex.ma',
    siteName: 'SmartDex',
    locale: 'fr_MA',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content" data-reveal>
          <div className="badge">Digital Solutions</div>
          <h1 className="hero-title">SmartDex — Digital Solutions for Smart Businesses</h1>
          <p className="hero-sub muted">Innovation, fiabilité et performance pour vos projets web, mobiles et SaaS.</p>
          <div className="hero-ctas">
            <Link href="/services" className="btn btn-primary">Découvrir nos services</Link>
            <Link href="/contact" className="btn">Demander un devis</Link>
          </div>
        </div>
      </section>
      <Services compact />
      <Projects teaser />
      <Achievements />
      <CtaContact />
    </>
  )
}
