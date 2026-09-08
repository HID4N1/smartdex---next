import { faqs, mapConfig } from '../data/contact'
import { apiRequest } from './apiClient'

export function getFaqs() {
  return faqs
}

export function getMapConfig() {
  return mapConfig
}

export function submitContactMessage(payload) {
  return apiRequest('/api/contact/', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}
