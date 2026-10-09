import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { getAbsoluteUrl, SITE_NAME, SITE_URL } from './seo.js'

const postsDirectory = path.join(process.cwd(), 'posts')

const pageEntries = [
  { section: 'Présentation', path: '/', title: 'SmartDex — Agence digitale au Maroc', description: 'Présentation de SmartDex et de ses solutions web, SaaS, mobiles et IA pour les entreprises au Maroc.' },
  { section: 'Services', path: '/services', title: 'Services digitaux au Maroc | SmartDex', description: 'Services web, mobile, ERP, SaaS et IA conçus sur mesure pour les entreprises et organisations au Maroc.' },
  { section: 'Services', path: '/ai-chatbot-morocco', title: 'Chatbot IA au Maroc | SmartDex', description: 'Solutions de chatbot et assistant IA pour les entreprises marocaines.' },
  { section: 'Services', path: '/saas-development-morocco', title: 'Développement SaaS au Maroc | SmartDex', description: 'Logiciels SaaS sur mesure avec architecture cloud, multi-tenant et sécurisée.' },
  { section: 'Services', path: '/agence-web-casablanca', title: 'Agence web à Casablanca | SmartDex', description: 'Création de sites web et applications pour les entreprises à Casablanca et au Maroc.' },
  { section: 'Services', path: '/creation-application-mobile-maroc', title: 'Création d’application mobile au Maroc | SmartDex', description: 'Développement d’applications mobiles sur mesure pour iOS et Android.' },
  { section: 'Services', path: '/developpement-erp-crm-maroc', title: 'Développement ERP et CRM au Maroc | SmartDex', description: 'Logiciels ERP et CRM sur mesure pour structurer les opérations et les données métier.' },
  { section: 'Entreprise', path: '/about', title: 'À propos de SmartDex', description: 'Présentation de l’agence digitale SmartDex, de sa mission et de ses expertises.' },
  { section: 'Entreprise', path: '/projects', title: 'Projets et réalisations SmartDex', description: 'Réalisations web, mobile, SaaS et logiciels métier développées par SmartDex.' },
  { section: 'Entreprise', path: '/contact', title: 'Contactez SmartDex', description: 'Coordonnées et formulaire pour contacter SmartDex au sujet d’un projet digital.' },
  { section: 'Entreprise', path: '/devis', title: 'Demander un devis digital', description: 'Formulaire de demande de devis pour un site web, une application, un SaaS, un ERP, un CRM ou une solution IA.' },
  { section: 'Ressources', path: '/blog', title: 'Blog digital, IA et logiciels au Maroc', description: 'Articles et conseils sur le développement web, mobile, SaaS et la transformation digitale au Maroc.' },
]

const optionalEntries = [
  { path: '/politique-de-confidentialite', title: 'Politique de confidentialité', description: 'Traitement des données personnelles sur le site SmartDex.' },
  { path: '/politique-de-cookies', title: 'Politique de cookies', description: 'Cookies nécessaires, mesure d’audience et gestion du consentement.' },
  { path: '/conditions-generales', title: 'Conditions générales', description: 'Conditions générales applicables aux services SmartDex.' },
]

function postEntries() {
  return fs.readdirSync(postsDirectory).filter((filename) => filename.endsWith('.mdx')).map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    const { data } = matter(fs.readFileSync(path.join(postsDirectory, filename), 'utf8'))
    return { section: 'Ressources', path: `/blog/${slug}`, title: data.title, description: data.description, source: path.join(postsDirectory, filename) }
  })
}

export function getLlmsEntries() { return [...pageEntries, ...postEntries()] }
export function getLlmsOptionalEntries() { return optionalEntries }
export function llmsUrl(entry, markdown = true) {
  if (entry.path === '/') return markdown ? `${SITE_URL}/index.md` : `${SITE_URL}/`
  return `${SITE_URL}${entry.path}${markdown ? '.md' : ''}`
}
export function cleanMdx(source) {
  return matter(source).content.replace(/^\s*import .*$/gm, '').replace(/^\s*export .*$/gm, '').replace(/<[^>]+>/g, '').replace(/\{[^\n]*\}/g, '').replace(/\n{3,}/g, '\n\n').trim()
}
export function pageMarkdown(entry) {
  if (entry.source) return cleanMdx(fs.readFileSync(entry.source, 'utf8'))
  return `# ${entry.title}\n\n${entry.description}\n\nSource: ${getAbsoluteUrl(entry.path)}`
}
export { SITE_NAME }
