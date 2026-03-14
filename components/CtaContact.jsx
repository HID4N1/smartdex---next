import Link from 'next/link'

export default function CtaContact() {
  return (
    <section>
      <div className="container" data-reveal>
        <div className="sd-card" style={{ padding: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
          <div>
            <h3 className="heading" style={{ margin: 0 }}>Un projet en tête ?</h3>
            <p className="muted" style={{ margin: '6px 0 0' }}>Contactez nos experts pour un devis gratuit.</p>
          </div>
          <Link href="/contact" className="btn btn-primary">Contactez-nous</Link>
        </div>
      </div>
    </section>
  )
}
