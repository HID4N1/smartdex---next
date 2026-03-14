import { serviceItems, serviceDetails } from '../data/services'

export function getServices(compact = false) {
  return compact ? serviceItems.slice(0, 3) : serviceItems
}

export function getServiceDetails() {
  return serviceDetails
}
