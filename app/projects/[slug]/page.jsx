import Link from 'next/link'
import { getProjectById } from '../../../services'
import './ProjectDetail.css'

export async function generateStaticParams() {
  const { projects } = await import('../../../data/projects')
  return projects.map((p) => ({ slug: p.id }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = getProjectById(slug)
  return {
    title: `${p.title} | SmartDex`,
    description: p.objectives || `Projet ${p.title} - ${p.client}`,
    openGraph: {
      title: `${p.title} — SmartDex`,
      description: p.objectives || `Projet ${p.title}`,
      url: `https://smartdex.ma/projects/${slug}`,
      siteName: 'SmartDex',
      locale: 'fr_MA',
      type: 'website',
    },
  }
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params
  const p = getProjectById(slug)

  return (
    <section>
      <div className="project-banner" style={{ backgroundImage: p.banner }}>
        <div className="container">
          <h1 className="project-title">{p.title}</h1>
        </div>
      </div>

      <div className="container">
        <div className="project-info grid grid-cols-3-md" style={{ marginTop: 16 }}>
          <div className="sd-card">
            <h3>Client</h3>
            <div className="muted">{p.client}</div>
          </div>
          <div className="sd-card">
            <h3>Technologie</h3>
            <div className="muted">{p.tech}</div>
          </div>
          <div className="sd-card">
            <h3>Durée</h3>
            <div className="muted">{p.duration}</div>
          </div>
        </div>

        <div className="sd-card" style={{ marginTop: 16, padding: 16 }}>
          <h3>Objectifs</h3>
          <p className="muted">{p.objectives}</p>
        </div>

        <div className="project-results" style={{ marginTop: 16 }}>
          {p.results.map((r, i) => (
            <div key={i} className="sd-card kpi">
              <div className="kpi-value">{r.value}</div>
              <div className="muted">{r.label}</div>
            </div>
          ))}
        </div>

        {p.beforeAfter && (
          <div className="project-gallery sd-card" style={{ marginTop: 16 }}>
            <div className="before" />
            <div className="after" />
          </div>
        )}

        {p.testimonial && (
          <div className="sd-card testimonial-wide" style={{ marginTop: 16 }}>
            <div className="avatar">
              {p.testimonial.author
                .split(' ')
                .map((w) => w[0])
                .slice(0, 2)
                .join('')}
            </div>
            <div>
              <p className="muted" style={{ margin: 0 }}>
                &ldquo;{p.testimonial.text}&rdquo;
              </p>
              <div className="testimonial-meta">
                {p.testimonial.author} · {p.testimonial.company}
              </div>
            </div>
          </div>
        )}

        <div style={{ marginTop: 16 }}>
          <Link href="/projects" className="btn">
            ← Retour aux projets
          </Link>
        </div>
      </div>
    </section>
  )
}
