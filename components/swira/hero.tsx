import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'
import { Mark, SectionLabel } from './primitives'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28 lg:px-10">
      <Reveal>
        <SectionLabel>Agencia de marketing digital</SectionLabel>
      </Reveal>

      <div className="mt-8 grid gap-10 md:grid-cols-12 md:items-end">
        <Reveal as="h1" delay={80} className="md:col-span-8">
          <span className="font-heading text-6xl font-extrabold leading-[0.95] tracking-tight text-balance md:text-8xl">
            Hacemos que tu marca{' '}
            <em className="font-extrabold italic">
              se vea, se entienda y{' '}
              <span className="whitespace-nowrap">
                <Mark>venda</Mark>.
              </span>
            </em>
          </span>
        </Reveal>

        <Reveal delay={160} className="md:col-span-4">
          <p className="text-base leading-relaxed text-muted-foreground md:text-right md:text-lg">
            Visibilidad, captación, desarrollo y contenido. Un solo equipo para
            todo tu digital.
          </p>
        </Reveal>
      </div>

      <Reveal delay={200} className="mt-10 flex flex-col items-start gap-3">
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-medium text-primary-foreground transition-colors hover:bg-brand hover:text-[#0a0a0a]"
        >
          Agendar reunión
          <ArrowUpRight className="size-5" aria-hidden="true" />
        </a>
        <p className="text-sm text-muted-foreground">
          Respuesta en menos de 24h · Sin compromiso
        </p>
      </Reveal>

      <Reveal delay={120} className="mt-16 md:mt-20">
        <div className="relative aspect-[21/9] w-full overflow-hidden border border-border">
          <Image
            src={`${basePath}/placeholder.svg?height=900&width=2100`}
            alt="Trabajo audiovisual y de marca producido por el equipo de Swira"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  )
}
