'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Header from './layout/Header'
import Footer from './layout/Footer'
import ScrollToTop from './ScrollToTop'

export default function ClientLayout({ children }) {
  const [showTop, setShowTop] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    let timeoutId = null
    let rafId = null
    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        try {
          const scrolled = window.scrollY || 0
          const max = (document.documentElement.scrollHeight - window.innerHeight) || 1
          if (max > 0) {
            const pct = Math.max(0, Math.min(100, (scrolled / max) * 100))
            document.documentElement.style.setProperty('--scroll', pct.toFixed(0))
            setShowTop(scrolled > 400)
          }
        } catch (_) {}
        rafId = null
      })
    }
    const throttledScroll = () => {
      if (timeoutId) return
      timeoutId = setTimeout(() => {
        onScroll()
        timeoutId = null
      }, 100)
    }
    onScroll()
    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', throttledScroll)
      if (timeoutId) clearTimeout(timeoutId)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('revealed'))
    })
    let obs = null
    const timeoutId = setTimeout(() => {
      const els = document.querySelectorAll('[data-reveal]')
      if (!els.length) return
      obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add('revealed')
          })
        },
        { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
      )
      els.forEach((el) => obs.observe(el))
    }, 50)
    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(timeoutId)
      if (obs) obs.disconnect()
    }
  }, [pathname])

  return (
    <>
      <a href="#main-content" className="skip-link">Aller au contenu</a>
      <div className="scroll-progress" aria-hidden="true" />
      <ScrollToTop />
      <Header />
      <main id="main-content" role="main">
        {children}
      </main>
      <Footer />
      {showTop && (
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
