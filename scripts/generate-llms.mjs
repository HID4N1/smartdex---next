import fs from 'node:fs'
import path from 'node:path'
import { getLlmsEntries, getLlmsOptionalEntries, llmsUrl, pageMarkdown, SITE_NAME } from '../lib/llms.mjs'

const publicDirectory = path.join(process.cwd(), 'public')
function link(entry) { return `- [${entry.title}](${llmsUrl(entry)}): ${entry.description}` }
function grouped(entries) {
  const sections = []
  for (const entry of entries) {
    let section = sections.find((item) => item.name === entry.section)
    if (!section) { section = { name: entry.section, entries: [] }; sections.push(section) }
    section.entries.push(entry)
  }
  return sections.map(({ name, entries }) => `## ${name}\n${entries.map(link).join('\n')}`).join('\n\n')
}

const entries = getLlmsEntries()
const llms = [`# ${SITE_NAME}`, '', '> SmartDex est une agence digitale basée au Maroc. Elle conçoit des sites web, applications mobiles, logiciels SaaS, ERP/CRM et solutions IA pour les entreprises.', '', 'Les liens pointent vers des versions Markdown propres des pages publiques. Les contenus sont en français, sauf indication contraire.', '', grouped(entries), '', '## Optional', getLlmsOptionalEntries().map(link).join('\n'), ''].join('\n')
const full = entries.map((entry) => [`# ${entry.title}`, '', `Source: ${llmsUrl(entry, false)}`, '', pageMarkdown(entry), '', '---', ''].join('\n')).join('\n')

fs.writeFileSync(path.join(publicDirectory, 'llms.txt'), llms, 'utf8')
fs.writeFileSync(path.join(publicDirectory, 'llms-full.txt'), full, 'utf8')
for (const entry of [...entries, ...getLlmsOptionalEntries()]) {
  const outputPath = path.join(publicDirectory, `${entry.path.replace(/^\//, '') || 'index'}.md`)
  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, `${pageMarkdown(entry)}\n`, 'utf8')
}
console.log(`Generated llms.txt, llms-full.txt, and ${entries.length + getLlmsOptionalEntries().length} Markdown pages.`)
