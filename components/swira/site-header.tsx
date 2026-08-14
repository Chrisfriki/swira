'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Casos', href: '/#trabajo' },
  { label: 'Blog', href: '/blog' },
  { label: 'Nosotros', href: '/#nosotros' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(true)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-theme]')
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setDark((visible.target as HTMLElement).dataset.theme === 'dark')
    }, { rootMargin: '-24px 0px -85% 0px', threshold: [0, 0.2, 0.6] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-6">
      <div className={cn('pointer-events-auto mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border px-5 backdrop-blur-xl transition-colors duration-300 md:h-18 md:px-7', dark ? 'border-[rgba(255,255,255,.12)] bg-[rgba(10,22,40,.55)] text-white' : 'border-[rgba(0,0,0,.06)] bg-[rgba(255,255,255,.72)] text-ink')}>
        <Link href="/" className="font-heading text-2xl font-extrabold lowercase tracking-tight">swira<span className="text-brand">.</span></Link>
        <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => <Link key={link.href} href={link.href} className="text-xs font-semibold tracking-[.08em] uppercase transition-colors hover:text-brand">{link.label}</Link>)}
        </nav>
        <Link href="/#contacto" className="hidden items-center gap-2 rounded-full bg-brand px-5 py-3 text-xs font-semibold tracking-[.06em] text-ink uppercase transition-transform hover:-translate-y-0.5 md:inline-flex">Agendar reunión <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
        <button type="button" onClick={() => setOpen(true)} aria-label="Abrir menú" className="inline-flex size-10 items-center justify-center md:hidden"><Menu className="size-5" aria-hidden="true" /></button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pointer-events-auto fixed inset-0 z-50 bg-deep-900 p-4 text-white md:hidden">
            <div className="flex h-16 items-center justify-between rounded-full border border-white/15 bg-white/5 px-5 backdrop-blur-xl">
              <Link href="/" onClick={() => setOpen(false)} className="font-heading text-2xl font-extrabold lowercase">swira<span className="text-brand">.</span></Link>
              <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar menú" className="inline-flex size-10 items-center justify-center"><X className="size-5" aria-hidden="true" /></button>
            </div>
            <nav aria-label="Navegación móvil" className="flex flex-col px-3 pt-14">
              {NAV_LINKS.map((link, index) => (
                <motion.div key={link.href} initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : .08 + index * .07 }}>
                  <Link href={link.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-5 font-heading text-5xl font-bold tracking-tight hover:text-brand">{link.label}</Link>
                </motion.div>
              ))}
              <Link href="/#contacto" onClick={() => setOpen(false)} className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-brand px-6 py-4 font-medium text-ink">Agendar reunión <ArrowUpRight className="size-5" aria-hidden="true" /></Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
