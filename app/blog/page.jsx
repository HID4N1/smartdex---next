import Link from 'next/link'
import './page.css'
import { getAllPosts } from '../../lib/posts'
import { createPageMetadata } from '../../lib/seo'

export const metadata = createPageMetadata({
  path: '/blog',
  title: 'Blog digital, IA et logiciels au Maroc | SmartDex',
  description:
    'Articles et conseils sur le développement web, mobile, SaaS et la transformation digitale pour les entreprises au Maroc.',
  ogTitle: 'Blog SmartDex — Conseils digitaux Maroc',
  ogDescription: 'Articles sur le développement web, mobile, SaaS et IA pour entreprises marocaines.',
})

function formatDate(dateStr) {
  try {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    })
  } catch {
    return dateStr
  }
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <main className="blog-page">
      <section className="container blog-hero">
        <h1>Blog &amp; Ressources</h1>
        <p className="blog-subtitle">
          Conseils pratiques sur le web, mobile, SaaS et IA pour les entreprises marocaines.
        </p>
      </section>

      <section className="container blog-grid">
        {posts.map(post => (
          <article key={post.slug} className="blog-card">
            <div className="blog-badge">{post.category}</div>
            <h2 className="blog-title">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="blog-desc">{post.description}</p>
            <div className="blog-meta">
              <span>{formatDate(post.date)}</span>
              <span className="blog-dot">•</span>
              <span>{post.readingTime}</span>
            </div>
            <Link className="blog-read" href={`/blog/${post.slug}`}>
              Lire l&apos;article →
            </Link>
          </article>
        ))}
      </section>
    </main>
  )
}
