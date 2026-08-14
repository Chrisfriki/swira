'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Trabajo', href: '/#trabajo' },
  { label: 'Proceso', href: '/#proceso' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'FAQ', href: '/#faq' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-6">
      <div className="pointer-events-auto mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-border bg-white px-5 md:h-18 md:px-7">
        <Link href="/" className="font-heading text-2xl font-extrabold lowercase tracking-tight">swira<span className="text-brand">.</span></Link>
        <nav aria-label="Navegación principal" className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => <Link key={link.href} href={link.href} className="text-xs font-semibold tracking-[0.08em] uppercase transition-colors hover:text-brand">{link.label}</Link>)}
        </nav>
        <Link href="/#contacto" className="hidden items-center gap-2 rounded-full bg-surface-dark px-5 py-3 text-xs font-semibold tracking-[0.06em] text-white uppercase transition-transform hover:-translate-y-0.5 md:inline-flex">Agendar reunión <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
        <button type="button" onClick={() => setOpen(true)} aria-label="Abrir menú" className="inline-flex size-10 items-center justify-center md:hidden"><Menu className="size-5" aria-hidden="true" /></button>
      </div>
      {open ? <div className="pointer-events-auto fixed inset-0 z-50 bg-white p-4 md:hidden">
        <div className="flex h-16 items-center justify-between rounded-full border border-border bg-white px-5">
          <Link href="/" onClick={() => setOpen(false)} className="font-heading text-2xl font-extrabold lowercase">swira<span className="text-brand">.</span></Link>
          <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar menú" className="inline-flex size-10 items-center justify-center"><X className="size-5" /></button>
        </div>
        <nav aria-label="Navegación móvil" className="flex flex-col px-3 pt-16">
          {NAV_LINKS.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="border-b border-border py-5 font-heading text-4xl font-bold tracking-tight">{link.label}</Link>)}
          <Link href="/#contacto" onClick={() => setOpen(false)} className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-4 text-white">Agendar reunión <ArrowUpRight className="size-5" aria-hidden="true" /></Link>
        </nav>
      </div> : null}
    </header>
  )
}
