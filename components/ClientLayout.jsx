'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import Header from './layout/Header'
import Footer from './layout/Footer'
import ScrollToTop from './ScrollToTop'
import CookieConsent from './CookieConsent'

const ChatWidget = dynamic(() => import('./chatbot/ChatWidget'), {
  ssr: false,
})

export default function ClientLayout({ children }) {
  const [showTop, setShowTop] = useState(false)
  const showTopRef = useRef(false)
  const pathname = usePathname()
  const isBusinessCardPage = pathname === '/business-card'

  useEffect(() => {
    let rafId = null
    const onScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        try {
          const scrolled = window.scrollY || 0
          const max = (document.documentElement.scrollHeight - window.innerHeight) || 1
          if (max > 0) {
            const pct = Math.max(0, Math.min(100, (scrolled / max) * 100))
            document.documentElement.style.setProperty('--scroll', pct.toFixed(0))
            const shouldShowTop = scrolled > 400
            if (shouldShowTop !== showTopRef.current) {
              showTopRef.current = shouldShowTop
              setShowTop(shouldShowTop)
            }
          }
        } catch (_) {}
        rafId = null
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  useEffect(() => {
    let obs = null
    const timeoutId = setTimeout(() => {
      const els = document.querySelectorAll('[data-reveal]')
      if (!els.length) return
      obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return
            e.target.classList.add('revealed')
            obs.unobserve(e.target)
          })
        },
        { rootMargin: '0px 0px -80px 0px', threshold: 0.12 }
      )
      els.forEach((el) => obs.observe(el))
    }, 50)
    return () => {
      clearTimeout(timeoutId)
      if (obs) obs.disconnect()
    }
  }, [pathname])

  return (
    <>
      <a href="#main-content" className="skip-link">Aller au contenu</a>
      {!isBusinessCardPage && <div className="scroll-progress" aria-hidden="true" />}
      {!isBusinessCardPage && <ScrollToTop />}
      {!isBusinessCardPage && <Header />}
      <main id="main-content" role="main">
        {children}
      </main>
      {!isBusinessCardPage && <Footer />}
      {!isBusinessCardPage && <ChatWidget />}
      {!isBusinessCardPage && <CookieConsent />}

      {showTop && !isBusinessCardPage && (
        <button
          type="button"
          className="btn btn-primary back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Haut ↑
        </button>
      )}
    </>
  )
}
