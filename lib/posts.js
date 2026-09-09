import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { blogServiceMap } from '../data/blogServiceMap'

const postsDir = path.join(process.cwd(), 'posts')

export function getAllPosts() {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'))
  return files
    .map(filename => {
      const slug = filename.replace('.mdx', '')
      const raw = fs.readFileSync(path.join(postsDir, filename), 'utf8')
      const { data } = matter(raw)
      const rt = readingTime(raw)
      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        category: data.category || 'Général',
        readingTime: rt.text,
        primaryService: blogServiceMap[slug] || null,
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostBySlug(slug) {
  const filePath = path.join(postsDir, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const rt = readingTime(raw)
  return {
    frontmatter: { ...data, readingTime: rt.text },
    content,
    primaryService: blogServiceMap[slug] || null,
  }
}
