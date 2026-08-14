import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'
import { WordReveal } from '@/components/motion/motion-primitives'

function TickerLine() {
  return (
    <span className="flex shrink-0 items-center gap-5 pr-5">
      <strong>Las buenas ideas no se quedan quietas</strong>
      <span aria-hidden="true" className="size-2.5 rounded-full bg-brand" />
      <em className="font-normal italic">Hagamos que la tuya se mueva</em>
      <span aria-hidden="true" className="size-2.5 rounded-full bg-brand" />
    </span>
  )
}

function TickerGroup() {
  return (
    <span className="flex shrink-0">
      <TickerLine />
      <TickerLine />
      <TickerLine />
    </span>
  )
}

export function FinalCta() {
  return (
    <section id="contacto" data-theme="dark" className="swira-atmosphere-ink relative z-0 text-white">
      <div
        role="region"
        aria-label="Las buenas ideas no se quedan quietas. Hagamos que la tuya se mueva."
        className="relative z-0 overflow-hidden border-y border-border bg-white py-5 text-black"
      >
        <div aria-hidden="true" className="flex w-max animate-swira-cta-marquee font-heading text-xl tracking-[-0.02em] uppercase md:text-3xl">
          <TickerGroup />
          <TickerGroup />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-40 lg:px-10">
        <Reveal as="h2">
          <span className="font-heading text-5xl font-extrabold leading-[0.95] tracking-tight text-balance md:text-8xl">
            <WordReveal text="¿Hablamos 20 minutos?" emphasis="20" />
          </span>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
            Te decimos qué haríamos con tu marca. Sin PowerPoint y sin
            compromiso.
          </p>
        </Reveal>

        <Reveal delay={160} className="mt-12 flex flex-col items-start gap-6">
          <a
            href="mailto:hola@swira.com"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-5 text-lg font-medium text-[#0a0a0a] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Agendar reunión
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </a>
          <a
            href="mailto:hola@swira.com"
            className="text-base text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
          >
            o escríbenos a hola@swira.com
          </a>
        </Reveal>
      </div>
    </section>
  )
}
