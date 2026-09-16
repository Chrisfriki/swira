'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { animate, motion, useInView, useScroll } from 'framer-motion'
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
    image: '/casos/welding-perfil-completo.png',
  },
  {
    number: '03',
    title: 'Del interés por una pérgola a una llamada.',
    text: 'Lanzamos una estrategia de temporada centrada en pérgolas. Conectamos el contenido con ManyChat y Google Forms para recoger los datos de las personas interesadas y facilitar el siguiente paso: llamar y agendar una cita.',
    image: 'captacion',
  },
] as const

function ActFrame({ children, className, labelledBy }: { children: React.ReactNode; className: string; labelledBy?: string }) {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useHydratedReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 35%'] })
  return (
    <motion.article ref={ref} aria-labelledby={labelledBy} className={`relative overflow-hidden ${className}`}
      initial={reduceMotion ? false : { opacity: 0.35, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] }}>
      {!reduceMotion && <motion.div aria-hidden="true" className="absolute inset-x-8 top-0 h-0.5 origin-left bg-gradient-to-r from-brand to-cyan-300" style={{ scaleX: scrollYProgress }} />}
      {children}
    </motion.article>
  )
}

function StoryImage({ src, title }: { src: string; title: string }) {
  const oldProfile = src.includes('antiguo')
  const profile = src.includes('perfil')
  const complete = src.includes('completo')
  const width = complete ? 1036 : profile ? 1905 : 1438
  const height = complete ? 847 : profile ? 826 : 809
  return (
    <figure className="mx-auto w-full min-w-0 max-w-lg">
      <Image src={`${basePath}${src}`} alt={`${oldProfile ? "Perfil antiguo" : profile ? "Perfil actual" : "Contenido actual"} de Welding Systems: ${title}`} width={width} height={height} unoptimized sizes="(max-width: 1023px) 100vw, 55vw" className="h-auto w-full rounded-[var(--swira-card-radius)] border border-white/15" />
      <figcaption className="mt-3 text-xs leading-relaxed text-white/60">{oldProfile ? "Cómo empezamos: el perfil antes de renovar su identidad." : profile ? "El perfil actual: nuevo logo, nombre y descripción de servicios." : "Portadas y contenidos actuales: una identidad visual coherente."}</figcaption>
    </figure>
  )
}

function AutomationEvidence() {
  return (
    <div className="mt-10 grid gap-10">
      <div className="grid items-center gap-8 border-t border-white/15 pt-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-12">
        <figure className="mx-auto w-full max-w-[240px]">
          <Image src={`${basePath}/casos/welding-comentarios.png`} alt="Comentarios de personas interesadas que escriben Pérgola en Instagram" width={497} height={596} unoptimized className="h-auto w-full rounded-2xl" />
          <figcaption className="mt-3 text-xs text-white/60">El interés empieza en los comentarios del reel.</figcaption>
        </figure>
        <div><p className="text-xs font-bold tracking-wider text-brand">PASO 01 · ACTIVAR LA CONVERSACIÓN</p><h4 className="mt-3 font-heading text-2xl font-bold md:text-3xl">Un comentario. El siguiente paso, por mensaje.</h4><p className="mt-4 text-lg leading-relaxed text-white/70">Las personas interesadas comentan en la publicación y se activa la automatización de ManyChat. Reciben un mensaje privado que las guía al formulario para dejar sus datos y contarnos qué necesitan.</p></div>
      </div>
      <div className="grid items-center gap-7 border-t border-white/15 pt-8 lg:grid-cols-2">
        <div><p className="text-xs font-bold tracking-wider text-brand">PASO 02 · MEDIR LA AUTOMATIZACIÓN</p>
        <h4 className="mt-3 font-heading text-2xl font-bold md:text-3xl">Del mensaje al clic: un recorrido que podemos medir.</h4>
        <p className="mt-4 max-w-4xl text-lg leading-relaxed text-white/70">En esta automatización, ManyChat registra 112 envíos, 107 clics y un 96 % de CTR. Son las métricas de los mensajes y sus enlaces; los contactos que completan el formulario se recogen después en la hoja de seguimiento.</p>
        </div><figure className="mx-auto w-full max-w-xl"><Image src={`${basePath}/casos/welding-automatizacion.png`} alt="Panel de ManyChat: 112 envíos, 107 clics y 96 por ciento de CTR" width={1704} height={666} unoptimized className="h-auto w-full rounded-2xl border border-white/15" /><figcaption className="mt-3 text-xs text-white/60">Estadísticas de esta automatización.</figcaption></figure>
      </div>
      <div className="grid items-center gap-7 border-t border-white/15 pt-8 lg:grid-cols-2">
        <div><p className="text-xs font-bold tracking-wider text-brand">PASO 03 · ORGANIZAR EL SEGUIMIENTO</p>
        <h4 className="mt-3 font-heading text-2xl font-bold md:text-3xl">Un Excel a medida, listo para trabajar cada contacto.</h4>
        <p className="mt-4 max-w-4xl text-lg leading-relaxed text-white/70">También diseñamos y preparamos la hoja para el cliente, adaptada a la información que necesita su negocio. En Welding organizamos los datos del formulario por localidad, tipo de estructura, urgencia y fecha y hora preferidas para la llamada. Así el equipo puede priorizar a quién llamar y preparar cada conversación.</p>
        <div className="mt-6 flex flex-wrap gap-2">{['Localidad', 'Trabajo solicitado', 'Urgencia', 'Fecha y hora de llamada'].map((label) => <span key={label} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80">{label}</span>)}</div>
        </div><figure className="mx-auto w-full max-w-xl"><Image src={`${basePath}/casos/welding-seguimiento-anonimizado.png`} alt="Hoja de seguimiento de contactos con nombres y teléfonos ocultos; muestra localidades, trabajos, fechas y urgencia" width={1786} height={881} unoptimized className="h-auto w-full rounded-2xl border border-white/15" /><figcaption className="mt-3 text-xs text-white/60">Hoja preparada para Welding Systems. Nombres y teléfonos ocultos por privacidad.</figcaption></figure>
      </div>
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

function RevenuePotential() {
  const [sales, setSales] = useState(10)
  const revenue = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(sales * 7500)
  return (
    <div>
      <p className="text-xs font-bold tracking-widest text-brand uppercase">El potencial detrás de los contactos</p>
      <h3 className="mt-4 font-heading text-3xl font-bold tracking-tight">¿Y si 10 de cada 100 terminan comprando?</h3>
      <p className="mt-4 leading-relaxed text-white/70">Con un importe supuesto de 7.500 € por pérgola, 10 ventas representarían 75.000 € de facturación potencial.</p>
      <div className="mt-6 rounded-3xl border border-brand/30 bg-brand/5 p-5 sm:p-6">
        <p className="text-xs tracking-wider text-white/65 uppercase">Simula un escenario</p>
        <output htmlFor="welding-sales" aria-live="polite" className="mt-3 block font-heading text-4xl font-extrabold tracking-tight text-brand sm:text-5xl">{revenue}</output>
        <p className="mt-2 text-sm text-white/70">{sales} ventas × 7.500 € por pérgola</p>
        <label htmlFor="welding-sales" className="mt-6 block text-sm font-medium">Ventas sobre una base de 100 contactos: {sales}</label>
        <input id="welding-sales" type="range" min="1" max="100" step="1" value={sales} onChange={(event) => setSales(Number(event.target.value))} className="mt-3 h-6 w-full cursor-pointer accent-brand" />
        <div className="flex justify-between text-xs text-white/50"><span>1 venta</span><span>100 ventas</span></div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-white/55">Proyección ilustrativa, no facturación obtenida ni garantizada. Tomamos 100 de los más de 100 contactos generados y un importe orientativo de 7.500 € (rango propuesto: 7.000–8.000 €). El resultado depende de las ventas cerradas y del importe de cada proyecto; no representa beneficio.</p>
    </div>
  )
}

// El periodo es opcional: no mostrar un plazo hasta disponer del dato real.
export function StorySection({ periodo }: { periodo?: string }) {
  const reduceMotion = useHydratedReducedMotion()

  return (
    <section id="historia" data-theme="dark" className="relative isolate overflow-hidden bg-ink px-6 py-24 text-white md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel className="text-white/60">Un caso real</SectionLabel>
        <h2 className="mt-6 max-w-6xl font-heading text-[clamp(2.7rem,6vw,6rem)] font-extrabold leading-[.9] tracking-tight text-balance">
          Así lo hicimos con <em className="italic text-brand">Welding Systems</em>.
        </h2>

        <div className="mt-14 grid gap-10 md:gap-16">
          {ACTS.map((act) => (
            <ActFrame key={act.number} labelledBy={`welding-act-${act.number}`} className={`rounded-[2rem] border p-5 md:p-9 lg:p-10 ${act.number === '02' ? 'border-brand/30 bg-deep-900' : 'border-white/15 bg-white/[.035]'}`}>
              <div className="mb-7 flex flex-wrap items-center gap-4 border-b border-white/15 pb-6">
                <span className={`rounded-full px-4 py-2 text-xs font-bold tracking-[.12em] ${act.number === '02' ? 'bg-brand text-ink' : 'bg-white/10 text-white'}`}>ACTO {act.number}</span>
                <p className="font-heading text-xl font-bold md:text-2xl">{act.number === '01' ? 'Antes · El punto de partida' : act.number === '02' ? 'Después · La nueva identidad' : 'La estrategia · Del interés al contacto'}</p>
              </div>
              <div className={act.number === '03' ? 'max-w-4xl' : 'grid items-center gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12'}>
                {act.number !== '03' && <StoryImage src={act.image} title={act.title} />}
                <div>
                  <h3 id={`welding-act-${act.number}`} className="font-heading text-3xl font-bold tracking-tight xl:text-4xl">{act.title}</h3>
                  <p className="mt-5 text-lg leading-relaxed text-white/70 xl:text-xl">{act.text}</p>
                </div>
              </div>
              {act.number === '03' && <AutomationEvidence />}
            </ActFrame>
          ))}
          <ActFrame className="rounded-[2rem] border border-white/15 bg-white/[.035] p-5 md:p-9 lg:p-10">
            <div className="mb-7 flex flex-wrap items-center gap-4 border-b border-white/15 pb-6"><span className="rounded-full bg-brand px-4 py-2 text-xs font-bold tracking-[.12em] text-ink">ACTO 04</span><p className="font-heading text-xl font-bold md:text-2xl">El resultado · Una base para crecer</p></div>
            <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
              <div className="swira-atmosphere rounded-[var(--swira-card-radius)] border border-white/15 p-7 md:p-10"><ResultMetric periodo={periodo} animateValue={!reduceMotion} /></div>
              <RevenuePotential />
            </div>
          </ActFrame>
        </div>

      </div>
    </section>
  )
}
