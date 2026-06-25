/**
 * Services barrel - re-export all service modules
 */
export { getProjects, getProjectById } from './projectService'
export { getTestimonials } from './testimonialService'
export { getServices, getServiceDetails } from './serviceService'
export { getStats, getValues } from './achievementsService'
export { getPartners } from './aboutService'
export { getFaqs, getMapConfig } from './contactService'
export { API_BASE_URL, ApiError, apiRequest, resolveApiUrl } from './apiClient'
export {
  createDevisRequest,
  generateDevisFromChat,
  generateDevisRequest,
  submitDevisRequest,
} from './devis'
export { normalizeChatResponse, sendChatMessage } from './chatbot'
