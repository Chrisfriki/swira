'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Casos', href: '#casos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 lg:px-10">
        <a
          href="#top"
          className="font-heading text-2xl font-extrabold lowercase tracking-tight text-foreground"
        >
          swira
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand hover:text-[#0a0a0a] md:inline-flex"
        >
          Agendar reunión
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          className="inline-flex size-10 items-center justify-center text-foreground md:hidden"
        >
          <Menu className="size-6" aria-hidden="true" />
        </button>
      </div>

      {/* Full-screen mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-background transition-opacity duration-300 md:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <div className="flex h-16 items-center justify-between px-6">
          <span className="font-heading text-2xl font-extrabold lowercase tracking-tight">
            swira
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="inline-flex size-10 items-center justify-center text-foreground"
          >
            <X className="size-6" aria-hidden="true" />
          </button>
        </div>
        <nav
          aria-label="Navegación móvil"
          className="flex flex-col gap-2 px-6 pt-8"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-heading text-5xl font-bold tracking-tight text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-medium text-primary-foreground"
          >
            Agendar reunión
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  )
}
