'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { Mark } from './primitives'

const FAQS = [
  {
    q: '¿Cuánto tarda en verse resultados?',
    a: 'Depende del servicio. En campañas de captación, entre 2 y 4 semanas. En SEO, entre 3 y 6 meses. Te lo decimos con honestidad en la primera reunión.',
  },
  {
    q: '¿Trabajáis con permanencia?',
    a: 'No obligamos a permanencias largas. Trabajamos por proyecto o con cuota mensual sin ataduras: si no aportamos, te vas.',
  },
  {
    q: '¿Qué necesitáis de mí para empezar?',
    a: 'Una reunión de 20 minutos, acceso a tus cuentas y perfiles, y que nos cuentes qué ha funcionado y qué no. Del resto nos ocupamos nosotros.',
  },
  {
    q: '¿Podéis encargaros solo de una parte?',
    a: 'Sí. Puedes contratar un solo servicio o el sistema completo. Muchos clientes empiezan por uno y amplían.',
  },
  {
    q: '¿Trabajáis con empresas de toda España?',
    a: 'Sí. Trabajamos en remoto con clientes de toda España y nos desplazamos cuando hay rodaje o sesión de fotos.',
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
          className="flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
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
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  }

  return (
    <section id="faq" className="scroll-mt-32 border-t border-border">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
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
