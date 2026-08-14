'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { WordReveal } from '@/components/motion/motion-primitives'
import { SectionLabel } from '@/components/swira/primitives'

const STEPS = [
  ['01', 'Diagnóstico', 'Analizamos tu negocio, tu competencia y de dónde vienen (o no vienen) tus clientes.'],
  ['02', 'Estrategia', 'Te presentamos el plan: qué haremos, en qué orden y qué esperamos conseguir.'],
  ['03', 'Producción', 'Grabamos, diseñamos y desarrollamos. Todo en casa, sin subcontratar.'],
  ['04', 'Lanzamiento', 'Publicamos, activamos campañas y conectamos las automatizaciones.'],
  ['05', 'Optimización', 'Medimos cada semana y ajustamos. Informe mensual con números claros.'],
]

export function ProcessSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 40%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })

  return (
    <section ref={ref} id="proceso" data-header-theme="light" className="scroll-mt-32 bg-paper px-6 py-24 text-ink md:py-32 lg:px-10">
      <SectionLabel>Cómo trabajamos</SectionLabel>
      <h2 className="mt-6 max-w-6xl font-heading text-[clamp(2.5rem,6vw,6rem)] font-extrabold leading-[.9] tracking-tight"><WordReveal text="Sin sorpresas. Paso a paso." emphasis="Paso" /></h2>
      <div className="relative mt-16">
        <div className="absolute top-0 bottom-0 left-1 w-px bg-border lg:inset-x-0 lg:top-1 lg:bottom-auto lg:h-px lg:w-auto"><motion.div className="h-full origin-top bg-brand lg:hidden" style={{ scaleY: progress }} /><motion.div className="hidden h-full origin-left bg-brand lg:block" style={{ scaleX: progress }} /></div>
        <ol className="grid gap-14 pl-8 lg:grid-cols-5 lg:gap-6 lg:pl-0">
          {STEPS.map(([number, title, description]) => (
            <li key={number} className="relative pt-8 lg:pt-10">
              <span className="absolute top-0 -left-[35px] size-2.5 rounded-full bg-brand lg:-left-0.5" aria-hidden="true" />
              <span className="font-heading text-lg font-extrabold text-brand">{number}</span>
              <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight md:text-3xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
