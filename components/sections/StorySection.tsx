'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { animate, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionLabel } from '@/components/swira/primitives'
import { useHydratedReducedMotion } from '@/components/motion/use-hydrated-reduced-motion'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const ACTS = [
  {
    number: '01',
    title: 'Buen trabajo. Un perfil sin dirección.',
    text: 'Welding Systems ya hacía buenos trabajos y los subía a Instagram. Pero cada publicación iba por su cuenta: sin una línea visual, una intención clara ni una estrategia para convertir las visitas en consultas.',
    image: '/casos/welding-perfil-antiguo.png',
  },
  {
    number: '02',
    title: 'Una marca reconocible. Contenido con intención.',
    text: 'Creamos un logo minimalista, unificamos las portadas y cuidamos la producción de los vídeos. Ajustamos el nombre del perfil para facilitar las búsquedas y la descripción para explicar qué ofrecían. Cada pieza empezó a responder a una estrategia.',
    image: '/casos/welding-perfil.png',
  },
  {
    number: '03',
    title: 'Del interés por una pérgola a una llamada.',
    text: 'Lanzamos una estrategia de temporada centrada en pérgolas. Conectamos el contenido con ManyChat y Google Forms para recoger los datos de las personas interesadas y facilitar el siguiente paso: llamar y agendar una cita.',
    image: 'captacion',
  },
] as const

function StoryImage({ src, title }: { src: string; title: string }) {
  if (src === 'captacion') return (
    <div className="swira-atmosphere rounded-[var(--swira-card-radius)] border border-white/10 p-7 md:p-10">
      <p className="mb-8 text-xs tracking-[.18em] text-white/60 uppercase">Una estrategia. Un siguiente paso.</p>
      <ol className="space-y-4">
        {[
          ['01', 'Despertar interés', 'Vídeos de pérgolas con una estrategia de temporada.'],
          ['02', 'Recoger el contacto', 'ManyChat y Google Forms para pasar del interés a los datos de contacto.'],
          ['03', 'Abrir una conversación', 'Llamar a las personas interesadas y agendar citas.'],
        ].map(([number, heading, copy]) => <li key={number} className="rounded-2xl border border-white/15 bg-white/5 p-5"><span className="text-xs font-bold text-brand">{number}</span><p className="mt-2 font-heading text-xl font-bold">{heading}</p><p className="mt-2 text-sm leading-relaxed text-white/70">{copy}</p></li>)}
      </ol>
    </div>
  )
  const oldProfile = src.includes('antiguo')
  const profile = src.includes('perfil')
  const width = oldProfile ? 1905 : profile ? 726 : 1438
  const height = oldProfile ? 826 : profile ? 315 : 809
  return (
    <figure className="min-w-0">
      <Image src={`${basePath}${src}`} alt={`${oldProfile ? "Perfil antiguo" : profile ? "Perfil actual" : "Contenido actual"} de Welding Systems: ${title}`} width={width} height={height} unoptimized sizes="(max-width: 1023px) 100vw, 55vw" className="h-auto w-full rounded-[var(--swira-card-radius)] border border-white/15" />
      <figcaption className="mt-3 text-xs leading-relaxed text-white/60">{oldProfile ? "Cómo empezamos: el perfil antes de renovar su identidad." : profile ? "El perfil actual: nuevo logo, nombre y descripción de servicios." : "Portadas y contenidos actuales: una identidad visual coherente."}</figcaption>
    </figure>
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
        contactos interesados en pérgolas
      </p>
      <p className="mt-5 max-w-md leading-relaxed text-white/55">
        Más de 100 oportunidades de llamar y agendar citas a partir de una estrategia de temporada.
      </p>
      <Link href="#contacto" className="mt-8 inline-flex items-center gap-2 font-medium text-white underline decoration-brand decoration-2 underline-offset-4 hover:text-brand">
        Quiero una estrategia para mi negocio <ArrowUpRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  )
}

// El periodo es opcional: no mostrar un plazo hasta disponer del dato real.
export function StorySection({ periodo }: { periodo?: string }) {
  const reduceMotion = useHydratedReducedMotion()

  return (
    <section id="historia" data-theme="dark" className="relative isolate overflow-hidden bg-ink px-6 py-24 text-white md:py-32 lg:px-10">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel className="text-white/60">Un caso real</SectionLabel>
        <h2 className="mt-6 max-w-6xl font-heading text-[clamp(2.7rem,6vw,6rem)] font-extrabold leading-[.9] tracking-tight text-balance">
          Así lo hicimos con <em className="italic text-brand">Welding Systems</em>.
        </h2>

        <div className="mt-14 grid gap-16 md:gap-24">
          {ACTS.map((act) => (
            <article key={act.number} className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
              <div className="grid min-w-0 gap-6">
                <StoryImage src={act.image} title={act.title} />
                {act.number === '02' && <StoryImage src="/casos/welding-contenido.png" title="Portadas con una misma dirección visual" />}
              </div>
              <div>
                <p className="font-heading text-sm font-bold text-brand">ACTO {act.number}</p>
                <h3 className="mt-4 font-heading text-3xl font-bold tracking-tight xl:text-4xl">{act.title}</h3>
                <p className="mt-5 text-lg leading-relaxed text-white/70 xl:text-xl">{act.text}</p>
              </div>
            </article>
          ))}
          <article className="grid items-center gap-8 border-t border-white/15 pt-12 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
            <div className="swira-atmosphere rounded-[var(--swira-card-radius)] border border-white/15 p-7 md:p-10"><ResultMetric periodo={periodo} animateValue={!reduceMotion} /></div>
            <div><p className="font-heading text-sm font-bold text-brand">ACTO 04 · EL RESULTADO</p><h3 className="mt-4 font-heading text-3xl font-bold tracking-tight xl:text-4xl">Una campaña que construye a largo plazo.</h3><p className="mt-5 text-lg leading-relaxed text-white/70 xl:text-xl">La campaña generó más de 100 contactos interesados. Con un perfil coherente y una estrategia sostenida, cada semana siguen llegando nuevo alcance y nuevos leads.</p></div>
          </article>
        </div>
        <div className="mt-16 border-t border-white/15 pt-12">
          <p className="max-w-3xl text-lg leading-relaxed text-white/75">El cambio fue más allá de una campaña: un perfil que transmite cuidado y profesionalidad, con nuevo alcance y nuevos contactos cada semana.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ['Inversión con sentido', 'Conectar el trabajo de marketing con consultas y oportunidades de conseguir nuevos trabajos.'],
              ['Una marca que se reconoce', 'Logo, portadas, vídeos y perfil con una misma dirección visual.'],
              ['Una base para seguir creciendo', 'Una estrategia sostenida que sigue atrayendo personas interesadas semana tras semana.'],
            ].map(([title, copy]) => <article key={title} className="rounded-[var(--swira-card-radius)] border border-white/15 bg-white/5 p-7"><h3 className="font-heading text-2xl font-bold">{title}</h3><p className="mt-4 leading-relaxed text-white/70">{copy}</p></article>)}
          </div>
        </div>
      </div>
    </section>
  )
}
