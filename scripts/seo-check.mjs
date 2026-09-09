import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const htmlRoot = path.join(root, '.next', 'server', 'app')
const siteUrl = 'https://www.smartdex.ma'

const indexablePages = [
  '/',
  '/services',
  '/projects',
  '/about',
  '/contact',
  '/devis',
  '/blog',
  '/ai-chatbot-morocco',
  '/saas-development-morocco',
  '/agence-web-casablanca',
  '/creation-application-mobile-maroc',
  '/developpement-erp-crm-maroc',
  '/politique-de-confidentialite',
  '/politique-de-cookies',
  '/conditions-generales',
  '/blog/transformation-digitale-tpe-pme-maroc-vision-2030',
  '/blog/systeme-reservation-en-ligne-maroc-2026',
  '/blog/pourquoi-entreprise-marocaine-application-mobile-2026',
  '/blog/saas-vs-logiciel-sur-mesure-maroc',
  '/blog/combien-coute-un-site-web-maroc-2026',
  '/projects/sjm-pilote-mdjs',
  '/projects/lmatch-pro',
  '/projects/quattro-plus',
  '/projects/casamyway',
  '/projects/site-web-gensales',
]

const excludedPages = ['/business-card']

function htmlPath(route) {
  const normalized = route === '/' ? 'index' : route.replace(/^\/+/, '')
  return path.join(htmlRoot, `${normalized}.html`)
}

function readHtml(route) {
  const file = htmlPath(route)
  assert.ok(fs.existsSync(file), `Missing prerendered HTML for ${route}: ${file}`)
  return fs.readFileSync(file, 'utf8')
}

function countMatches(html, pattern) {
  return html.match(pattern)?.length || 0
}

function getCanonical(html) {
  return html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["'][^>]*>/i)?.[1]
}

function expectedCanonical(route) {
  return route === '/' ? `${siteUrl}/` : `${siteUrl}${route}`
}

function normalizeCanonical(url) {
  return url === siteUrl ? `${siteUrl}/` : url
}

function getTitles(html) {
  return [...html.matchAll(/<title>(.*?)<\/title>/gi)].map((match) => match[1])
}

function getMetaContent(html, name) {
  return html.match(new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']+)["'][^>]*>`, 'i'))?.[1]
}

function getOgContent(html, property) {
  return html.match(new RegExp(`<meta[^>]+property=["']og:${property}["'][^>]+content=["']([^"']+)["'][^>]*>`, 'i'))?.[1]
}

function h1Count(html) {
  return countMatches(html, /<h1(?:\s|>)/gi)
}

for (const route of indexablePages) {
  const html = readHtml(route)
  assert.equal(countMatches(html, /rel=["']canonical["']/gi), 1, `${route} should render one canonical tag`)
  assert.equal(normalizeCanonical(getCanonical(html)), expectedCanonical(route), `${route} canonical should be self-referencing`)
  assert.equal(getTitles(html).length, 1, `${route} should render one title tag`)
  assert.ok(!getTitles(html)[0].includes('SmartDex | SmartDex'), `${route} title should not duplicate brand suffix`)
  assert.ok(getMetaContent(html, 'description'), `${route} should render a meta description`)
  assert.ok(getOgContent(html, 'image'), `${route} should render an OpenGraph image`)
  assert.ok(getMetaContent(html, 'twitter:card'), `${route} should render Twitter card metadata`)
  assert.ok(!/<meta[^>]+name=["']robots["'][^>]+noindex/i.test(html), `${route} should be indexable`)
}

assert.equal(h1Count(readHtml('/projects')), 1, '/projects should render exactly one H1')
assert.equal(
  h1Count(readHtml('/blog/combien-coute-un-site-web-maroc-2026')),
  1,
  'affected blog article should render exactly one H1'
)

const devisHtml = readHtml('/devis')
assert.ok(!/<meta[^>]+name=["']robots["'][^>]+noindex/i.test(devisHtml), '/devis should remain indexable')
assert.ok(/<form[^>]+class=["'][^"']*form/i.test(devisHtml), '/devis should contain the quote form')

for (const route of excludedPages) {
  const html = readHtml(route)
  assert.ok(/<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html), `${route} should be noindexed`)
}

const sitemap = fs.readFileSync(path.join(htmlRoot, 'sitemap.xml.body'), 'utf8')
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])
assert.equal(new Set(sitemapUrls).size, sitemapUrls.length, 'sitemap should not contain duplicate URLs')

for (const route of indexablePages) {
  assert.ok(sitemapUrls.includes(expectedCanonical(route)), `sitemap should include ${route}`)
}

for (const route of excludedPages.concat(['/saas-development', '/404'])) {
  assert.ok(!sitemapUrls.includes(expectedCanonical(route)), `sitemap should exclude ${route}`)
}

for (const url of sitemapUrls) {
  assert.ok(url.startsWith(siteUrl), `sitemap URL should use production domain: ${url}`)
  assert.ok(!/localhost|127\.0\.0\.1|railway|vercel\.app/i.test(url), `sitemap URL should not use preview/local hosts: ${url}`)
}

const robots = fs.readFileSync(path.join(htmlRoot, 'robots.txt.body'), 'utf8')
assert.match(robots, /User-Agent:\s*\*/i, 'robots.txt should target all crawlers')
assert.match(robots, /Allow:\s*\//i, 'robots.txt should allow public crawling')
assert.match(robots, /Disallow:\s*\/api\//i, 'robots.txt should disallow API routes')
assert.match(robots, /Disallow:\s*\/admin\//i, 'robots.txt should disallow admin routes')
assert.doesNotMatch(robots, /Disallow:\s*\/_next/i, 'robots.txt should not block Next.js assets')
assert.match(robots, new RegExp(`Sitemap:\\s*${siteUrl.replaceAll('.', '\\.')}/sitemap\\.xml`, 'i'), 'robots.txt should reference the sitemap')

console.log(`SEO checks passed for ${indexablePages.length} indexable routes, ${excludedPages.length} excluded route, sitemap.xml and robots.txt.`)
