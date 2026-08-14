'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { ImageReveal, TiltCard, WordReveal } from '@/components/motion/motion-primitives'
import { SectionLabel } from './primitives'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const HERO_WORK = [
  { src: '/work/work-01.svg', alt: 'Placeholder vertical para sustituir por un Reel real', label: 'Reel · pendiente', className: 'row-span-2 aspect-[9/16]' },
  { src: '/work/work-03.svg', alt: 'Placeholder para sustituir por fotografía de producto', label: 'Producto · pendiente', className: 'aspect-[4/3]' },
  { src: '/work/work-02.svg', alt: 'Placeholder para sustituir por un mockup web', label: 'Web · pendiente', className: 'aspect-[4/3]' },
]

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section data-theme="dark" className="relative min-h-dvh overflow-hidden bg-deep-900 text-white">
      <video
        aria-label="Vídeo de presentación de Swira pendiente de sustituir"
        className="absolute inset-0 size-full object-cover opacity-40"
        autoPlay={!reduceMotion}
        muted
        loop
        playsInline
        preload="metadata"
        poster={`${basePath}/video/hero-poster.svg`}
      />
      <div className="absolute inset-0 bg-deep-900/70" />
      <div className="swira-atmosphere absolute inset-0 opacity-80 mix-blend-screen" />

      <div className="relative mx-auto grid min-h-dvh max-w-[1600px] items-center gap-14 px-6 pt-32 pb-20 lg:grid-cols-[1.08fr_.92fr] lg:px-10 xl:px-16">
        <div className="relative z-10">
          <SectionLabel className="text-white/70">Agencia de marketing digital</SectionLabel>
          <h1 className="mt-7 max-w-5xl font-heading text-[clamp(3rem,7.4vw,8rem)] font-extrabold leading-[.88] tracking-[-.06em] text-balance">
            <WordReveal text="Digital que se ve. Ideas que mueven." emphasis="mueven" />
          </h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .45 }} className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            Estrategia, creatividad y tecnología para convertir atención en negocio.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55 }} className="mt-10 flex flex-wrap gap-3">
            <Link href="#trabajo" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-4 font-medium text-ink transition-transform hover:-translate-y-1">Ver proyectos <ArrowUpRight className="size-5" aria-hidden="true" /></Link>
            <Link href="#servicios" className="inline-flex items-center rounded-full border border-white/35 bg-white/5 px-6 py-4 font-medium text-white backdrop-blur-sm transition-colors hover:border-brand hover:text-brand">Qué hacemos</Link>
          </motion.div>
        </div>

        <div className="grid min-h-0 grid-cols-2 grid-rows-2 gap-3 lg:h-[min(72vh,760px)]">
          {HERO_WORK.map((item, index) => (
            <ImageReveal key={item.src} delay={index * .12} className={item.className}>
              <TiltCard className="group relative size-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <Image src={`${basePath}${item.src}`} alt={item.alt} fill unoptimized loading="eager" sizes={index === 0 ? '(max-width: 1023px) 50vw, 24vw' : '(max-width: 1023px) 50vw, 22vw'} className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute right-3 bottom-3 rounded-full bg-ink/75 px-3 py-1.5 text-[10px] font-semibold tracking-[.12em] text-white uppercase backdrop-blur-md">{item.label}</span>
              </TiltCard>
            </ImageReveal>
          ))}
        </div>
      </div>

      <motion.a href="#marcas" aria-label="Scroll: bajar a las marcas" className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-[10px] tracking-[.18em] text-white/60 uppercase" animate={reduceMotion ? undefined : { y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
        Scroll <ArrowDown className="size-4" aria-hidden="true" />
      </motion.a>
    </section>
  )
}
