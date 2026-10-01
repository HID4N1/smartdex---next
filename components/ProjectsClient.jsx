import Link from 'next/link'
import Image from 'next/image'
import { getProjects } from '../services'

const IMAGE_MAP = {
  'gensales-erp': '/images/ERP-gensales.png',
  sareinecraft: '/images/sareinecraft.png',
  pilote: '/images/pilote.png',
  lmatch: '/images/lmatch.png',
  quattro: '/images/quattro.png',
  casamyway: '/images/casamyway.png',
  ratp: '/images/RATPDev.jpg',
  gen: '/images/gen.png',
  loto: '/images/loto.svg',
}

const getTypeColor = (type) =>
  ({
    web: 'rgba(42,166,255,0.3)',
    website: 'rgba(42,166,255,0.3)',
    mobile: 'rgba(156,39,176,0.3)',
    webapp: 'rgba(0,184,212,0.3)',
    saas: 'rgba(0,184,212,0.3)',
    'mobile-webapp': 'rgba(156,39,176,0.3)',
    erp: 'rgba(39,243,200,0.26)',
    logiciels: 'rgba(255,152,0,0.3)',
    cloud: 'rgba(76,175,80,0.3)',
    ai: 'rgba(103,58,183,0.3)',
  }[type] || 'rgba(42,166,255,0.25)')

const PROJECT_GROUPS = [
  {
    title: 'ERP & systèmes de gestion',
    projectIds: ['gensales-operations-erp'],
  },
  {
    title: 'Sites web & identité de marque',
    projectIds: ['sareine-craft', 'site-web-gensales'],
  },
  {
    title: 'Plateformes SaaS & opérations terrain',
    projectIds: ['casamyway', 'sjm-pilote-mdjs'],
  },
  {
    title: 'Campagnes digitales & gestion des opérations',
    projectIds: ['quattro-plus', 'lmatch-pro'],
  },
  {
    title: 'Autres projets',
    projectIds: [],
  },
]

function ProjectCard({ project: p, index }) {
  return (
    <Link
      href={`/projects/${p.id}`}
      className="project-card-enhanced"
      key={p.id}
      data-reveal
      style={{ textDecoration: 'none', color: 'inherit', '--reveal-delay': `${index * 80}ms` }}
    >
      <div
        className="project-thumb"
        style={{
          background: p.image ? 'none' : `linear-gradient(135deg, ${getTypeColor(p.type)}, rgba(255,255,255,0.06))`,
        }}
      >
        {p.image && (
          <Image
            src={p.image}
            alt={p.imageAlt || p.name}
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 100vw, 340px"
          />
        )}
        {p.image && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: `linear-gradient(135deg, ${getTypeColor(p.type)}dd, ${getTypeColor(p.type)}88)`,
              zIndex: 1,
            }}
          />
        )}
      </div>
      <div className="project-content">
        {p.highlight && <strong className="project-highlight">{p.highlight}</strong>}
        <h2 className="project-name">{p.name}</h2>
        {p.client && (
          <div className="project-client">
            <span className="client-name">{p.client}</span>
          </div>
        )}
        <p className="project-description">{p.description}</p>
      </div>
    </Link>
  )
}

export default function ProjectsClient() {
  const all = getProjects().map((p) => ({
    ...p,
    image: IMAGE_MAP[p.imageKey] || null,
  }))
  const assignedIds = new Set(PROJECT_GROUPS.flatMap((group) => group.projectIds))
  const groups = PROJECT_GROUPS.map((group) => ({
    ...group,
    projects: group.projectIds.length
      ? group.projectIds.map((id) => all.find((project) => project.id === id)).filter(Boolean)
      : all.filter((project) => !assignedIds.has(project.id)),
  })).filter((group) => group.projects.length > 0)

  return (
    <div className="project-categories">
      {groups.map((group) => (
        <section className="project-category" key={group.title} aria-labelledby={`project-category-${group.title.replaceAll(' ', '-').toLowerCase()}`}>
          <div className="project-category-header">
            <h2 id={`project-category-${group.title.replaceAll(' ', '-').toLowerCase()}`}>{group.title}</h2>
            <span>{group.projects.length}</span>
          </div>
          <div className="projects-grid">
            {group.projects.map((project, index) => (
              <ProjectCard project={project} index={index} key={project.id} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
