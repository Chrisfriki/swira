'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { animate, AnimatePresence, motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { WordReveal } from '@/components/motion/motion-primitives'
import { SectionLabel } from '@/components/swira/primitives'
import { useHydratedReducedMotion } from '@/components/motion/use-hydrated-reduced-motion'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const ACTS = [
  {
    number: '01',
    title: 'El punto de partida',
    text: 'Welding Systems tenía producto y tenía mercado. Lo que no tenía era forma de llegar a él.',
    image: '/casos/welding-01.jpg',
  },
  {
    number: '02',
    title: 'Lo primero: las redes',
    text: 'Reconstruimos sus redes sociales. Contenido con criterio, publicado con constancia, hablándole a un cliente concreto y no a todo el mundo.',
    image: '/casos/welding-02.jpg',
  },
  {
    number: '03',
    title: 'Y luego lo conectamos',
    text: 'Detrás montamos un embudo automatizado. Cada interesado entraba en un sistema que lo cualificaba solo, sin que nadie moviera un dedo.',
    image: '/casos/welding-03.jpg',
  },
] as const

function StoryImage({ src, title, fillContainer = false }: { src: string; title: string; fillContainer?: boolean }) {
  return (
    <div className={fillContainer ? 'relative size-full overflow-hidden border border-white/10 bg-black' : 'relative aspect-[4/3] overflow-hidden border border-white/10 bg-black'}>
      <Image
        src={`${basePath}${src}`}
        alt={`Imagen provisional del caso Welding Systems: ${title}`}
        fill
        unoptimized
        sizes="(max-width: 1023px) 100vw, 50vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
    </div>
  )
}

function ResultMetric({ periodo, animateValue = true }: { periodo?: string; animateValue?: boolean }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.7 })
  const [value, setValue] = useState(animateValue ? 0 : 100)

  useEffect(() => {
    if (!animateValue || !inView) return
    const controls = animate(0, 100, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setValue(Math.round(latest)),
    })
    return () => controls.stop()
  }, [animateValue, inView])

  return (
    <div>
      <p ref={ref} className="font-heading text-[clamp(5rem,12vw,11rem)] font-extrabold leading-none tracking-[-.07em] text-brand">
        +{value}
      </p>
      {periodo ? <p className="mt-1 font-heading text-2xl font-bold text-white">leads en {periodo}</p> : null}
      <p className="mt-4 max-w-md font-heading text-2xl font-bold leading-tight text-white md:text-3xl">
        leads cualificados listos para llamar
      </p>
      <p className="mt-5 max-w-md leading-relaxed text-white/55">
        Ticket medio del cliente: 7.000 €. Échale la cuenta.
      </p>
      <Link href="#contacto" className="mt-8 inline-flex items-center gap-2 font-medium text-white underline decoration-brand decoration-2 underline-offset-4 hover:text-brand">
        Ver el caso completo <ArrowUpRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  )
}

function StaticStory({ periodo }: { periodo?: string }) {
  return (
    <div className="mt-14 grid gap-16">
      {ACTS.map((act) => (
        <article key={act.number} className="grid gap-7">
          <StoryImage src={act.image} title={act.title} />
          <div>
            <p className="font-heading text-sm font-bold text-brand">ACTO {act.number}</p>
            <h3 className="mt-3 font-heading text-3xl font-bold tracking-tight">{act.title}</h3>
            <p className="mt-5 text-xl leading-relaxed text-white/70">{act.text}</p>
          </div>
        </article>
      ))}
      <article className="border-t border-white/10 pt-14">
        <p className="font-heading text-sm font-bold text-brand">ACTO 04 · EL RESULTADO</p>
        <ResultMetric periodo={periodo} animateValue={false} />
      </article>
    </div>
  )
}

// TODO: confirmar con el cliente (1) permiso de uso de marca y datos,
// (2) el plazo real en el que se consiguieron los leads.
export function StorySection({ periodo }: { periodo?: string }) {
  const [active, setActive] = useState(0)
  const refs = useRef<Array<HTMLElement | null>>([])
  const reduceMotion = useHydratedReducedMotion()

  useEffect(() => {
    if (reduceMotion) return
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index))
      }
    }, { rootMargin: '-38% 0px -42% 0px' })
    refs.current.forEach((node) => node && observer.observe(node))
    return () => observer.disconnect()
  }, [reduceMotion])

  return (
    <section id="historia" data-theme="dark" className="relative isolate overflow-hidden bg-ink px-6 py-24 text-white md:py-32 lg:px-10">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel className="text-white/60">Un caso real</SectionLabel>
        <h2 className="mt-6 max-w-6xl font-heading text-[clamp(2.7rem,6vw,6rem)] font-extrabold leading-[.9] tracking-tight text-balance">
          Así lo hicimos con <em className="italic text-brand">Welding Systems</em>.
        </h2>

        {reduceMotion ? <StaticStory periodo={periodo} /> : (
          <>
            <div className="mt-14 grid gap-16 lg:hidden">
              {ACTS.map((act) => (
                <article key={act.number} className="grid gap-7">
                  <StoryImage src={act.image} title={act.title} />
                  <div>
                    <p className="font-heading text-sm font-bold text-brand">ACTO {act.number}</p>
                    <h3 className="mt-3 font-heading text-3xl font-bold tracking-tight">{act.title}</h3>
                    <p className="mt-5 text-xl leading-relaxed text-white/70"><WordReveal text={act.text} /></p>
                  </div>
                </article>
              ))}
              <article className="border-t border-white/10 pt-14">
                <p className="font-heading text-sm font-bold text-brand">ACTO 04 · EL RESULTADO</p>
                <ResultMetric periodo={periodo} />
              </article>
            </div>

            <div className="relative mt-16 hidden grid-cols-[24px_minmax(0,1fr)_minmax(0,1fr)] gap-8 lg:grid">
              <ol aria-label="Progreso de la historia" className="sticky top-[calc(var(--header-h)+32px)] flex h-[calc(100vh-var(--header-h)-64px)] flex-col items-center justify-center gap-5">
                {[0, 1, 2, 3].map((index) => <li key={index} aria-current={active === index ? 'step' : undefined} className={`size-2.5 rounded-full border transition-colors duration-300 ${active === index ? 'border-brand bg-brand' : 'border-white/30 bg-transparent'}`}><span className="sr-only">Acto {index + 1}</span></li>)}
              </ol>
              <div className="sticky top-[calc(var(--header-h)+32px)] h-[calc(100vh-var(--header-h)-64px)] min-h-[560px] overflow-hidden border border-white/10 bg-black">
                <AnimatePresence mode="wait">
                  {active < 3 ? (
                    <motion.div key={ACTS[active].image} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0">
                      <StoryImage src={ACTS[active].image} title={ACTS[active].title} fillContainer />
                    </motion.div>
                  ) : (
                    <motion.div key="result" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex items-center p-10 xl:p-14">
                      <ResultMetric periodo={periodo} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div>
                {ACTS.map((act, index) => (
                  <article key={act.number} ref={(node) => { refs.current[index] = node }} data-index={index} className="flex min-h-[78vh] flex-col justify-center border-b border-white/10 py-20">
                    <p className="font-heading text-sm font-bold text-brand">ACTO {act.number}</p>
                    <h3 className="mt-4 font-heading text-4xl font-bold tracking-tight xl:text-5xl">{act.title}</h3>
                    <p className="mt-6 max-w-xl text-2xl leading-relaxed text-white/70"><WordReveal text={act.text} /></p>
                  </article>
                ))}
                <article ref={(node) => { refs.current[3] = node }} data-index={3} className="flex min-h-[78vh] flex-col justify-center py-20">
                  <p className="font-heading text-sm font-bold text-brand">ACTO 04</p>
                  <h3 className="mt-4 font-heading text-5xl font-bold tracking-tight">El resultado</h3>
                  <p className="mt-6 max-w-xl text-2xl leading-relaxed text-white/70"><WordReveal text="+100 leads cualificados listos para llamar." /></p>
                </article>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
