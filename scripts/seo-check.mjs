import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const htmlRoot = path.join(root, '.next', 'server', 'app')
const siteUrl = 'https://www.smartdex.ma'

const pages = [
  '/',
  '/services',
  '/projects',
  '/about',
  '/devis',
  '/conditions-generales',
  '/blog/combien-coute-un-site-web-maroc-2026',
  '/projects/sjm-pilote-mdjs',
  '/projects/lmatch-pro',
  '/projects/quattro-plus',
  '/projects/casamyway',
  '/projects/site-web-gensales',
]

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

function h1Count(html) {
  return countMatches(html, /<h1(?:\s|>)/gi)
}

for (const route of pages) {
  const html = readHtml(route)
  assert.equal(countMatches(html, /rel=["']canonical["']/gi), 1, `${route} should render one canonical tag`)
  assert.equal(normalizeCanonical(getCanonical(html)), expectedCanonical(route), `${route} canonical should be self-referencing`)
  assert.equal(getTitles(html).length, 1, `${route} should render one title tag`)
  assert.ok(!getTitles(html)[0].includes('SmartDex | SmartDex'), `${route} title should not duplicate brand suffix`)
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

console.log(`SEO checks passed for ${pages.length} routes.`)
