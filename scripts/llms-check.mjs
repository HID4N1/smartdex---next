import fs from 'node:fs'
import path from 'node:path'
import { getLlmsEntries, getLlmsOptionalEntries, llmsUrl } from '../lib/llms.mjs'

const publicDirectory = path.join(process.cwd(), 'public')
const llms = fs.readFileSync(path.join(publicDirectory, 'llms.txt'), 'utf8')
const full = fs.readFileSync(path.join(publicDirectory, 'llms-full.txt'), 'utf8')
const links = [...llms.matchAll(/^- \[[^\]]+\]\((https?:\/\/[^)]+)\)/gm)].map((match) => match[1])
const expected = [...getLlmsEntries(), ...getLlmsOptionalEntries()].map((entry) => llmsUrl(entry))
if (!/^# .+/m.test(llms) || !/^> .+/m.test(llms) || !/^## Optional$/m.test(llms)) throw new Error('llms.txt must contain an H1, blockquote summary, and exact ## Optional heading.')
if (links.length !== expected.length || expected.some((url) => !links.includes(url))) throw new Error('llms.txt links do not match the content catalog.')
for (const url of expected) {
  const relative = new URL(url).pathname.replace(/^\//, '')
  if (!fs.existsSync(path.join(publicDirectory, relative))) throw new Error(`Missing Markdown page: ${relative}`)
}
if (llms.includes('/admin/') || llms.includes('/account/') || full.includes('## Optional')) throw new Error('Private URLs or optional content leaked into generated files.')
console.log(`Validated llms.txt and ${expected.length} primary Markdown links.`)
