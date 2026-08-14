'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { Mark } from './primitives'

const FAQS = [
  {
    q: '¿Cuánto tarda en verse resultados?',
    a: 'Depende del canal. En campañas de captación puedes ver movimiento en semanas; en SEO y contenido orgánico el crecimiento es sólido a partir del tercer o cuarto mes. Te damos previsiones realistas desde el diagnóstico.',
  },
  {
    q: '¿Trabajáis con permanencia?',
    a: 'Trabajamos por objetivos, no por ataduras. Proponemos ciclos de trabajo claros y si en algún momento no aportamos, lo hablamos. Sin letra pequeña.',
  },
  {
    q: '¿Qué necesitáis de mí para empezar?',
    a: 'Acceso a tus cuentas y perfiles, una conversación honesta sobre tu negocio y tus objetivos, y disponibilidad para una reunión breve al mes. Del resto nos encargamos nosotros.',
  },
  {
    q: '¿Podéis encargaros solo de una parte?',
    a: 'Sí. Puedes contratar un solo pilar (por ejemplo, solo contenido o solo desarrollo) o el sistema completo. Nos adaptamos a lo que tu marca necesita ahora.',
  },
  {
    q: '¿Trabajáis con empresas de toda España?',
    a: 'Sí. Trabajamos en remoto con marcas de toda España y nos desplazamos para las grabaciones y sesiones de fotografía cuando hace falta.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border first:border-t">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-6 py-6 text-left"
        >
          <span className="font-heading text-xl font-bold tracking-tight text-foreground md:text-2xl">
            {q}
          </span>
          <span
            aria-hidden="true"
            className={cn(
              'shrink-0 font-heading text-2xl font-bold leading-none text-brand transition-transform duration-300',
              open ? 'rotate-45' : 'rotate-0',
            )}
          >
            +
          </span>
        </button>
      </h3>
      <div
        className={cn(
          'grid transition-all duration-300 ease-out',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            {a}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Faq() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-10">
        <Reveal as="h2">
          <span className="font-heading text-4xl font-extrabold leading-[0.95] tracking-tight text-balance md:text-6xl">
            Dudas <em className="font-extrabold italic"><Mark>razonables</Mark></em>.
          </span>
        </Reveal>

        <Reveal delay={80} className="mt-14 max-w-3xl">
          {FAQS.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
