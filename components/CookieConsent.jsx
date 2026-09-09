'use client'

import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/next'
import Link from 'next/link'
import {
  ANALYTICS_CONSENT_ACCEPTED,
  ANALYTICS_CONSENT_REJECTED,
  COOKIE_CONSENT_COOKIE_NAME,
  COOKIE_CONSENT_MAX_AGE_SECONDS,
  COOKIE_CONSENT_OPEN_EVENT,
  COOKIE_CONSENT_VERSION,
  GOOGLE_ANALYTICS_ID,
  MICROSOFT_CLARITY_ID,
} from '../lib/cookieConsent'
import './CookieConsent.css'

function getCookieValue(name) {
  if (typeof document === 'undefined') return null

  const match = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))

  return match ? decodeURIComponent(match.split('=').slice(1).join('=')) : null
}

function writeConsentCookie(choice) {
  const secure = window.location.protocol === 'https:' ? '; Secure' : ''
  const value = JSON.stringify({
    analytics: choice,
    version: COOKIE_CONSENT_VERSION,
  })

  document.cookie = `${COOKIE_CONSENT_COOKIE_NAME}=${encodeURIComponent(value)}; Max-Age=${COOKIE_CONSENT_MAX_AGE_SECONDS}; Path=/; SameSite=Lax${secure}`
}

function readStoredConsent() {
  const raw = getCookieValue(COOKIE_CONSENT_COOKIE_NAME)
  if (!raw) return null

  try {
    const parsed = JSON.parse(raw)
    if (parsed.version !== COOKIE_CONSENT_VERSION) return null
    if (![ANALYTICS_CONSENT_ACCEPTED, ANALYTICS_CONSENT_REJECTED].includes(parsed.analytics)) return null

    return parsed.analytics
  } catch {
    return null
  }
}

function deleteCookie(name, domain) {
  const domainPart = domain ? `; Domain=${domain}` : ''
  document.cookie = `${name}=; Max-Age=0; Path=/${domainPart}; SameSite=Lax`
}

function removeAnalyticsCookies() {
  const cookieNames = document.cookie
    .split('; ')
    .map((row) => row.split('=')[0])
    .filter((name) =>
      name === '_ga' ||
      name.startsWith('_ga_') ||
      name === '_gid' ||
      name === '_gat' ||
      name === '_clck' ||
      name === '_clsk'
    )

  const hostParts = window.location.hostname.split('.')
  const parentDomain =
    hostParts.length > 2 ? `.${hostParts.slice(-2).join('.')}` : `.${window.location.hostname}`

  cookieNames.forEach((name) => {
    deleteCookie(name)
    deleteCookie(name, window.location.hostname)
    deleteCookie(name, parentDomain)
  })
}

function setGoogleConsent(choice) {
  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments)
  }

  window.gtag('consent', 'update', {
    analytics_storage: choice === ANALYTICS_CONSENT_ACCEPTED ? 'granted' : 'denied',
  })
}

function injectScript(id, src) {
  if (document.getElementById(id)) return

  const script = document.createElement('script')
  script.id = id
  script.async = true
  script.src = src
  document.head.appendChild(script)
}

function loadGoogleAnalytics() {
  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments)
  }

  window.gtag('consent', 'default', {
    analytics_storage: 'granted',
  })
  window.gtag('js', new Date())
  window.gtag('config', GOOGLE_ANALYTICS_ID)

  injectScript(
    'smartdex-google-analytics',
    `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`
  )
}

function loadMicrosoftClarity() {
  if (document.getElementById('smartdex-microsoft-clarity')) return

  window.clarity = window.clarity || function clarity() {
    ;(window.clarity.q = window.clarity.q || []).push(arguments)
  }

  const script = document.createElement('script')
  script.id = 'smartdex-microsoft-clarity'
  script.async = true
  script.src = `https://www.clarity.ms/tag/${MICROSOFT_CLARITY_ID}`
  document.head.appendChild(script)
}

function activateAnalytics() {
  loadGoogleAnalytics()
  loadMicrosoftClarity()
}

function rejectAnalytics() {
  setGoogleConsent(ANALYTICS_CONSENT_REJECTED)
  if (typeof window.clarity === 'function') {
    window.clarity('consent', false)
  }
  removeAnalyticsCookies()
}

export default function CookieConsent() {
  const [choice, setChoice] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isLeaving, setIsLeaving] = useState(false)
  const [isCustomizing, setIsCustomizing] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)
  const [analyticsWasActivated, setAnalyticsWasActivated] = useState(false)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const storedChoice = readStoredConsent()

      if (storedChoice === ANALYTICS_CONSENT_ACCEPTED) {
        activateAnalytics()
        setAnalyticsWasActivated(true)
        setChoice(storedChoice)
        return
      }

      if (storedChoice === ANALYTICS_CONSENT_REJECTED) {
        rejectAnalytics()
        setChoice(storedChoice)
        return
      }

      rejectAnalytics()
      setIsOpen(true)
    }, 0)

    return () => window.clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    const openPreferences = () => {
      setIsLeaving(false)
      setIsCustomizing(false)
      setAnalyticsEnabled(choice === ANALYTICS_CONSENT_ACCEPTED)
      setIsOpen(true)
    }

    window.addEventListener(COOKIE_CONSENT_OPEN_EVENT, openPreferences)
    return () => window.removeEventListener(COOKIE_CONSENT_OPEN_EVENT, openPreferences)
  }, [choice])

  const saveChoice = (nextChoice) => {
    writeConsentCookie(nextChoice)
    setChoice(nextChoice)
    setIsCustomizing(false)
    setIsLeaving(true)

    if (nextChoice === ANALYTICS_CONSENT_ACCEPTED) {
      activateAnalytics()
      setAnalyticsWasActivated(true)
    } else {
      rejectAnalytics()
    }

    window.setTimeout(() => {
      setIsOpen(false)
      setIsLeaving(false)
    }, 280)
  }

  const openCustomization = () => {
    setAnalyticsEnabled(choice === ANALYTICS_CONSENT_ACCEPTED)
    setIsCustomizing(true)
  }

  return (
    <>
      {analyticsWasActivated && (
        <Analytics
          beforeSend={(event) =>
            choice === ANALYTICS_CONSENT_ACCEPTED ? event : null
          }
        />
      )}

      {isOpen && (
        <>
          <section
            className={`cookie-consent${isLeaving ? ' cookie-consent--leaving' : ''}`}
            aria-labelledby="cookie-consent-title"
            aria-describedby="cookie-consent-description"
          >
            <div className="cookie-consent__content">
              <div className="cookie-consent__icon" aria-hidden="true">
                <span>🍪</span>
              </div>

              <div className="cookie-consent__copy">
                <h2 id="cookie-consent-title">Votre confidentialité compte</h2>
                <p id="cookie-consent-description">
                  Nous utilisons uniquement les cookies nécessaires au fonctionnement du site.
                  Les cookies d&apos;analyse sont optionnels et nous aident à améliorer SmartDex.
                </p>

                <div className="cookie-consent__trust" aria-label="Garanties cookies">
                  <span>Aucun cookie publicitaire</span>
                  <span>Vous pouvez modifier votre choix à tout moment</span>
                </div>

                <Link className="cookie-consent__link" href="/politique-de-cookies">
                  En savoir plus
                </Link>
              </div>

              <div className="cookie-consent__actions" aria-label="Choix des cookies">
                <button
                  type="button"
                  className="cookie-consent__button cookie-consent__button--reject"
                  onClick={() => saveChoice(ANALYTICS_CONSENT_REJECTED)}
                >
                  Refuser
                </button>
                <button
                  type="button"
                  className="cookie-consent__button cookie-consent__button--neutral"
                  onClick={openCustomization}
                >
                  Personnaliser
                </button>
                <button
                  type="button"
                  className="cookie-consent__button cookie-consent__button--primary"
                  onClick={() => saveChoice(ANALYTICS_CONSENT_ACCEPTED)}
                >
                  Accepter
                </button>
              </div>
            </div>
          </section>

          {isCustomizing && (
            <div className="cookie-modal" role="presentation">
              <div
                className="cookie-modal__panel"
                role="dialog"
                aria-modal="true"
                aria-labelledby="cookie-modal-title"
                aria-describedby="cookie-modal-description"
              >
                <div className="cookie-modal__header">
                  <div className="cookie-consent__icon" aria-hidden="true">
                    <span>🍪</span>
                  </div>
                  <div>
                    <h2 id="cookie-modal-title">Personnaliser les cookies</h2>
                    <p id="cookie-modal-description">
                      Choisissez si SmartDex peut utiliser des mesures d&apos;audience optionnelles.
                    </p>
                  </div>
                </div>

                <div className="cookie-modal__categories">
                  <div className="cookie-modal__category">
                    <div>
                      <h3>Cookies nécessaires</h3>
                      <p>Indispensables au fonctionnement du site.</p>
                    </div>
                    <span className="cookie-modal__status">Toujours actifs</span>
                  </div>

                  <label className="cookie-modal__category cookie-modal__category--interactive">
                    <div>
                      <h3>Cookies d&apos;analyse</h3>
                      <p>Mesure d&apos;audience optionnelle pour améliorer l&apos;expérience.</p>
                    </div>
                    <span className="cookie-switch">
                      <input
                        type="checkbox"
                        checked={analyticsEnabled}
                        onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                      />
                      <span className="cookie-switch__track" aria-hidden="true">
                        <span className="cookie-switch__thumb" />
                      </span>
                    </span>
                  </label>
                </div>

                <div className="cookie-modal__actions" aria-label="Enregistrer les préférences cookies">
                  <button
                    type="button"
                    className="cookie-consent__button cookie-consent__button--reject"
                    onClick={() => saveChoice(ANALYTICS_CONSENT_REJECTED)}
                  >
                    Refuser
                  </button>
                  <button
                    type="button"
                    className="cookie-consent__button cookie-consent__button--neutral"
                    onClick={() =>
                      saveChoice(
                        analyticsEnabled
                          ? ANALYTICS_CONSENT_ACCEPTED
                          : ANALYTICS_CONSENT_REJECTED
                      )
                    }
                  >
                    Enregistrer
                  </button>
                  <button
                    type="button"
                    className="cookie-consent__button cookie-consent__button--primary"
                    onClick={() => saveChoice(ANALYTICS_CONSENT_ACCEPTED)}
                  >
                    Tout accepter
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}
