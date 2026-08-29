'use client'

import { useEffect, useRef, useState } from 'react'
import { FiArrowDown, FiArrowRight } from 'react-icons/fi'
import { getFaqs, getMapConfig } from '../../services'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', projectType: '', budget: '', subject: '', message: ''
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [messageLength, setMessageLength] = useState(0)
  const mapRef = useRef(null)

  const validate = (f) => {
    const next = {}
    if (!f.name.trim()) next.name = 'Nom requis.'
    const emailOk = /.+@.+\..+/.test(f.email)
    const freeDomains = /(gmail|yahoo|hotmail|outlook|live|icloud)\./i
    if (!emailOk) next.email = 'Email invalide.'
    else if (freeDomains.test(f.email)) next.email = 'Utilisez un email professionnel.'
    if (!f.subject.trim()) next.subject = 'Sujet requis.'
    if (!f.message.trim() || f.message.trim().length < 20) next.message = 'Message trop court (minimum 20 caractères).'
    return next
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const v = validate(form)
    setErrors(v)
    if (Object.keys(v).length) return
    setIsSubmitting(true)
    setStatus(null)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setStatus('success')
    setTimeout(() => {
      setForm({ name: '', email: '', company: '', projectType: '', budget: '', subject: '', message: '' })
      setMessageLength(0)
      setStatus(null)
    }, 5000)
  }

  useEffect(() => {
    const ensureLeaflet = async () => {
      if (typeof window === 'undefined') return
      const hasL = !!window.L
      if (!hasL) {
        await new Promise((res) => {
          const link = document.createElement('link')
          link.rel = 'stylesheet'
          link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
          link.onload = res
          document.head.appendChild(link)
        })
        await new Promise((res) => {
          const s = document.createElement('script')
          s.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
          s.onload = res
          document.body.appendChild(s)
        })
      }
      const L = window.L
      if (mapRef.current || !L) return
      const el = document.getElementById('contact-map')
      if (!el) return
      const { center, zoom, popup } = getMapConfig()
      const map = L.map(el, { zoomControl: false }).setView(center, zoom)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(map)
      const icon = L.divIcon({
        className: 'sd-map-marker',
        html: '<div class="marker-core">S</div>',
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      })
      L.marker(center, { icon }).addTo(map).bindPopup(popup)
      mapRef.current = map
    }
    ensureLeaflet()
  }, [])

  const setField = (k, v) => {
    setForm((prev) => ({ ...prev, [k]: v }))
    setErrors((prev) => ({ ...prev, [k]: undefined }))
    if (k === 'message') setMessageLength(v.length)
  }

  const faqs = getFaqs()

  return (
    <section id="contact" className="contact-section">
      <div className="contact-hero">
        <div className="container contact-hero-grid">
          <div className="contact-hero-copy">
            <p className="contact-eyebrow">Parlons de votre projet</p>
            <h1 className="contact-main-title">Vous avez un projet ?</h1>
            <p className="contact-hero-subtitle">
              Nous avons les solutions. Discutons ensemble de vos besoins et transformons vos idées en réalité digitale.
            </p>
            <div className="contact-trust-row" aria-label="Engagements SmartDex">
              <span>Réponse sous 24h</span>
              <span>Consultation gratuite</span>
              <span>Accompagnement personnalisé</span>
            </div>
            <a className="contact-hero-cta" href="#contact-form">
              <span>Décrivez-nous votre besoin</span>
              <FiArrowDown aria-hidden="true" />
            </a>
          </div>

          <div className="contact-hero-visual" aria-hidden="true">
            <div className="visual-grid" />
            <div className="visual-orbit visual-orbit-one" />
            <div className="visual-orbit visual-orbit-two" />
            <div className="visual-mark">S</div>
            <div className="visual-line visual-line-one" />
            <div className="visual-line visual-line-two" />
          </div>
        </div>
      </div>

      <div className="contact-main">
        <section className="contact-form-section" aria-labelledby="contact-form-title">
          <div className="container contact-form-grid">
            <div className="contact-form-intro">
              <p className="contact-eyebrow">Contact</p>
              <h2 id="contact-form-title" className="contact-section-title">Parlons de votre projet</h2>
              <p>
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                Notre équipe analyse votre contexte, vos objectifs et les prochaines étapes utiles pour transformer votre idée en solution digitale.
              </p>
              <div className="form-intro-details">
                <a href="mailto:contact@smartdex.ma">contact@smartdex.ma</a>
                <span>Casablanca, Maroc</span>
                <small>Réponse généralement sous 24h</small>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form id="contact-form" className="contact-form-enhanced" onSubmit={onSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">
                      <span className="label-text">Nom complet</span>
                      <span className="label-required">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      value={form.name}
                      onChange={(e) => setField('name', e.target.value)}
                      placeholder="Votre nom complet"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      disabled={isSubmitting}
                    />
                    {errors.name && <span id="contact-name-error" className="field-error">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">
                      <span className="label-text">Email professionnel</span>
                      <span className="label-required">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      value={form.email}
                      onChange={(e) => setField('email', e.target.value)}
                      placeholder="vous@entreprise.ma"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      disabled={isSubmitting}
                    />
                    {errors.email && <span id="contact-email-error" className="field-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-company">
                      <span className="label-text">Entreprise</span>
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      className="form-input"
                      value={form.company}
                      onChange={(e) => setField('company', e.target.value)}
                      placeholder="Nom de votre entreprise"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-project-type">
                      <span className="label-text">Type de projet</span>
                    </label>
                    <select id="contact-project-type" className="form-select" value={form.projectType} onChange={(e) => setField('projectType', e.target.value)} disabled={isSubmitting}>
                      <option value="">Sélectionnez un type</option>
                      <option value="web">Développement Web</option>
                      <option value="mobile">Application Mobile</option>
                      <option value="saas">Plateforme SaaS</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="integration">Intégration & API</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-budget">
                      <span className="label-text">Budget estimé</span>
                    </label>
                    <select id="contact-budget" className="form-select" value={form.budget} onChange={(e) => setField('budget', e.target.value)} disabled={isSubmitting}>
                      <option value="">Sélectionnez une fourchette</option>
                      <option value="<5k">Moins de 5 000 MAD</option>
                      <option value="5k-15k">5 000 MAD - 15 000 MAD</option>
                      <option value="15k-50k">15 000 MAD - 50 000 MAD</option>
                      <option value="50k+">Plus de 50 000 MAD</option>
                      <option value="discuss">À discuter</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-subject">
                      <span className="label-text">Sujet</span>
                      <span className="label-required">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      className={`form-input ${errors.subject ? 'error' : ''}`}
                      value={form.subject}
                      onChange={(e) => setField('subject', e.target.value)}
                      placeholder="Objet de votre message"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                      disabled={isSubmitting}
                    />
                    {errors.subject && <span id="contact-subject-error" className="field-error">{errors.subject}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">
                    <span className="label-text">Message détaillé</span>
                    <span className="label-required">*</span>
                    <span className="label-counter">{messageLength}/500</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={8}
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                    value={form.message}
                    onChange={(e) => setField('message', e.target.value)}
                    placeholder="Décrivez votre projet en détail... (minimum 20 caractères)"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'contact-message-error contact-message-counter' : 'contact-message-counter'}
                    maxLength={500}
                    disabled={isSubmitting}
                  />
                  {errors.message && <span id="contact-message-error" className="field-error">{errors.message}</span>}
                  <div id="contact-message-counter" className="char-counter">
                    {messageLength < 20 && (
                      <span className="char-warning">Minimum 20 caractères requis ({20 - messageLength} restants)</span>
                    )}
                  </div>
                </div>

                <div className="form-actions">
                  <p className="form-helper">Minimum 20 caractères. Une réponse claire facilite notre première analyse.</p>
                  <button className={`contact-submit-btn ${isSubmitting ? 'submitting' : ''}`} type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <><span className="spinner" /><span>Envoi en cours...</span></>
                    ) : (
                      <><span>Envoyer ma demande</span><FiArrowRight aria-hidden="true" /></>
                    )}
                  </button>
                  {status === 'success' && (
                    <div className="form-status success" role="status" aria-live="polite">
                      <div className="status-icon">✓</div>
                      <div>
                        <strong>Merci, votre demande a bien été envoyée.</strong>
                        <p>Notre équipe vous répondra dans les meilleurs délais.</p>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="contact-location-section" aria-labelledby="location-title">
          <div className="container contact-location-grid">
            <div className="location-copy">
              <p className="contact-eyebrow">Localisation</p>
              <h2 id="location-title" className="contact-section-title">Nous trouver à Casablanca</h2>
              <p>Visitez notre bureau à Casablanca ou contactez-nous par email pour organiser une consultation autour de votre projet digital.</p>
              <div className="location-meta">
                <span>Lun - Ven · 9h - 18h</span>
                <a href="mailto:contact@smartdex.ma">contact@smartdex.ma</a>
              </div>
            </div>
            <div className="contact-map-card">
              <div id="contact-map" className="contact-map" />
            </div>
          </div>
        </section>

        <section className="contact-faq-section" aria-labelledby="faq-title">
          <div className="container contact-faq-grid">
            <div className="faq-header">
              <p className="contact-eyebrow">FAQ</p>
              <h2 id="faq-title" className="contact-section-title">Questions fréquentes</h2>
              <p className="faq-subtitle">Trouvez rapidement les réponses à vos questions.</p>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={index} className="faq-item">
                  <summary className="faq-question">
                    <span className="faq-number">{String(index + 1).padStart(2, '0')}</span>
                    <h3>{faq.question}</h3>
                  </summary>
                  <p className="faq-answer">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-cta-section" aria-labelledby="contact-cta-title">
          <div className="container">
            <div className="contact-cta-panel">
              <div>
                <p className="contact-eyebrow">Réponse rapide</p>
                <h2 id="contact-cta-title" className="cta-title">Besoin d&apos;une réponse rapide ?</h2>
                <p className="cta-description">Envoyez-nous un email et nous vous répondrons dans les plus brefs délais.</p>
              </div>
              <a href="mailto:contact@smartdex.ma" className="contact-secondary-btn">
                <span>Envoyer un email</span>
                <FiArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
