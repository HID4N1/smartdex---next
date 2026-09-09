import { getAllPosts } from '../lib/posts'
import { getProjects } from '../services'
import { getAbsoluteUrl, indexableRoutes } from '../lib/seo'

const lastModified = new Date('2026-09-09')

export default function sitemap() {
  const staticRoutes = indexableRoutes.map((route) => ({
    url: getAbsoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const blogRoutes = getAllPosts().map((post) => ({
    url: getAbsoluteUrl(`/blog/${post.slug}`),
    lastModified: post.date ? new Date(post.date) : lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const projectRoutes = getProjects().map((project) => ({
    url: getAbsoluteUrl(`/projects/${project.id}`),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes, ...projectRoutes]
}
