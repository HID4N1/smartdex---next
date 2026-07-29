export const SITE_URL = 'https://www.smartdex.ma'

export function getCanonicalUrl(pathname = '/') {
  const cleanPath = pathname
    .split('?')[0]
    .split('#')[0]
    .replace(/^\/+/, '')
    .replace(/\/+$/, '')

  return cleanPath ? `${SITE_URL}/${cleanPath}` : `${SITE_URL}/`
}

export function getCanonicalPath(pathname = '/') {
  const url = getCanonicalUrl(pathname)

  return url === `${SITE_URL}/` ? '/' : url.replace(SITE_URL, '')
}
