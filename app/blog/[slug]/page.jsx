import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import './page.css'
import { getAllPosts, getPostBySlug } from '../../../lib/posts'
import { getCanonicalPath } from '../../../lib/seo'

const titleOverrides = {
  'combien-coute-un-site-web-maroc-2026': 'Prix d’un site web au Maroc en 2026 | SmartDex',
  'pourquoi-entreprise-marocaine-application-mobile-2026': 'Application mobile pour entreprise au Maroc | SmartDex',
  'transformation-digitale-tpe-pme-maroc-vision-2030': 'Transformation digitale des PME au Maroc | SmartDex',
  'saas-vs-logiciel-sur-mesure-maroc': 'SaaS ou logiciel sur mesure au Maroc | SmartDex',
  'systeme-reservation-en-ligne-maroc-2026': 'Système de réservation en ligne au Maroc | SmartDex',
}

const descriptionOverrides = {
  'pourquoi-entreprise-marocaine-application-mobile-2026': 'Découvrez pourquoi une application mobile peut améliorer l’expérience client, les opérations et la croissance des entreprises marocaines.',
  'transformation-digitale-tpe-pme-maroc-vision-2030': 'Guide de la transformation digitale des TPE et PME marocaines : priorités, technologies, étapes et opportunités à l’horizon 2030.',
  'systeme-reservation-en-ligne-maroc-2026': 'Découvrez comment choisir et mettre en place un système de réservation en ligne adapté aux entreprises marocaines en 2026.',
}

const mdxComponents = {
  h1: (props) => <h2 {...props} />,
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await Promise.resolve(params)
  const { frontmatter } = getPostBySlug(slug)
  const title = titleOverrides[slug] || `${frontmatter.title} | SmartDex`
  const description = descriptionOverrides[slug] || frontmatter.description

  return {
    title,
    description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url: `https://www.smartdex.ma/blog/${slug}`,
      siteName: 'SmartDex',
      locale: 'fr_MA',
      type: 'article',
      publishedTime: frontmatter.date,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    alternates: { canonical: getCanonicalPath(`/blog/${slug}`) },
  }
}

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

export default async function BlogPostPage({ params }) {
  const { slug } = await Promise.resolve(params)
  const { frontmatter, content } = getPostBySlug(slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.date,
    author: {
      '@type': 'Organization',
      name: 'SmartDex',
      url: 'https://www.smartdex.ma',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SmartDex',
      logo: 'https://www.smartdex.ma/logo.png',
    },
  }

  return (
    <main className="blog-article-page">
      <div className="container blog-article">
        <Link className="blog-back" href="/blog">
          ← Blog
        </Link>

        <div className="blog-badge">{frontmatter.category || 'Général'}</div>
        <h1 className="blog-h1">{frontmatter.title}</h1>
        <div className="blog-meta">
          <span>{formatDate(frontmatter.date)}</span>
          <span className="blog-dot">•</span>
          <span>{frontmatter.readingTime}</span>
        </div>

        <div className="blog-divider" />

        <article className="blog-prose">
          <MDXRemote source={content} components={mdxComponents} />
        </article>

        <section className="blog-cta">
          <div className="blog-cta-inner">
            <div>
              <div className="blog-cta-title">Vous avez un projet ?</div>
              <div className="blog-cta-sub">Décrivez votre projet et recevez une estimation détaillée immédiatement.</div>
            </div>
            <Link className="blog-cta-link" href="/devis">
              Obtenir une estimation instantanée
            </Link>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  )
}
