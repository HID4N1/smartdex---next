import { projects } from '../data/projects'
import { projectDetails } from '../data/projectDetails'

export function getProjects() {
  return projects
}

export function getProjectById(id) {
  return projectDetails[id] ?? {
    title: 'Projet',
    banner: 'linear-gradient(135deg, rgba(42,166,255,.22), rgba(255,255,255,.06))',
    client: 'Client',
    tech: 'Stack',
    duration: '—',
    objectives: '—',
    results: [],
    beforeAfter: false,
    testimonial: null,
  }
}
