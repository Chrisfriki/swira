'use client'

import { useEffect } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import { useHydratedReducedMotion } from './use-hydrated-reduced-motion'

export function MotionShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const reduceMotion = useHydratedReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 28, mass: 0.25 })

  useEffect(() => {
    if (reduceMotion) return
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection
    if (connection?.saveData || connection?.effectiveType === 'slow-2g') return

    const headerHeight = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 80
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
    })
    const handleAnchorClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href*="#"]')
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const url = new URL(link.href, window.location.href)
      if (!url.hash || url.pathname !== window.location.pathname) return
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)))
      if (!target) return
      event.preventDefault()
      window.history.pushState(null, '', url.hash)
      const targetTop = target.getBoundingClientRect().top + window.scrollY
      lenis.scrollTo(targetTop, { offset: -(headerHeight + 24) })
    }
    document.addEventListener('click', handleAnchorClick)
    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
    }
  }, [reduceMotion])

  return (
    <>
      <motion.div aria-hidden="true" className="fixed inset-x-0 top-0 z-[100] h-0.5 origin-left bg-brand" style={{ scaleX }} />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: reduceMotion ? 0.12 : 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
}
