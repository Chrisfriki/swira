'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { ImageReveal, WordReveal } from '@/components/motion/motion-primitives'
import { SectionLabel } from './primitives'
import { useHydratedReducedMotion } from '@/components/motion/use-hydrated-reduced-motion'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function Hero() {
  const reduceMotion = useHydratedReducedMotion()

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
        <div className="relative z-10 min-w-0">
          <SectionLabel className="text-white/70">Agencia de marketing digital</SectionLabel>
          <h1 className="mt-7 max-w-5xl font-heading text-[clamp(2.85rem,6.3vw,7rem)] font-extrabold leading-[.92] tracking-[-.055em] text-balance max-[360px]:text-[2.5rem]">
            <span className="block"><WordReveal text="Que te vean está bien." /></span>
            <span className="flex flex-wrap">
              <WordReveal text="Que te elijan," className="flex-nowrap" />
              <WordReveal text="mejor." emphasis="mejor" />
            </span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .45 }} className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            Estrategia, creatividad y tecnología para convertir atención en negocio.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55 }} className="mt-10 flex flex-wrap gap-3">
            <Link href="#trabajo" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-4 font-medium text-ink transition-transform hover:-translate-y-1">Ver proyectos <ArrowUpRight className="size-5" aria-hidden="true" /></Link>
            <Link href="#servicios" className="inline-flex items-center rounded-full border border-white/35 bg-white/5 px-6 py-4 font-medium text-white backdrop-blur-sm transition-colors hover:border-brand hover:text-brand">Qué hacemos</Link>
          </motion.div>
        </div>

        <ImageReveal delay={0.12} className="relative mx-auto w-full max-w-xl">
          <div className="relative isolate pb-6 pt-3">
            <div aria-hidden="true" className="absolute inset-8 -z-10 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="mb-5 flex items-center justify-between text-[10px] tracking-[.18em] text-white/65 uppercase">
              <span>Una muestra de lo que hacemos</span><span aria-hidden="true">↗</span>
            </div>
            <div className="grid grid-cols-[1.1fr_.9fr] items-start gap-3 sm:gap-5">
              <motion.figure whileHover={reduceMotion ? undefined : { y: -6, rotate: -1 }} className="relative mt-9 overflow-hidden rounded-[1.7rem] border border-white/25 bg-white/10 p-2 shadow-2xl">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.2rem]">
                  <Image src={`${basePath}/proyectos/inku-gastronomia.webp`} alt="Fotografía gastronómica de sashimi para Inku Sushi" fill unoptimized preload sizes="(max-width: 1023px) 52vw, 300px" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-4 bottom-5"><span className="text-[10px] tracking-widest text-white/75 uppercase">Fotografía · Inku Sushi</span><p className="mt-1 text-xl font-semibold leading-tight sm:text-2xl">Entra por los ojos.</p></figcaption>
                </div>
              </motion.figure>
              <div className="grid gap-3 sm:gap-5">
                <motion.figure whileHover={reduceMotion ? undefined : { y: -5, rotate: 1 }} className="relative overflow-hidden rounded-[1.5rem] border border-white/25 bg-white/10 p-2 shadow-xl">
                  <div className="relative aspect-square overflow-hidden rounded-[1rem]">
                    <Image src={`${basePath}/proyectos/inku-espacio.webp`} alt="Interior de Inku Sushi fotografiado por nuestro equipo" fill unoptimized sizes="(max-width: 1023px) 42vw, 240px" className="object-cover object-left" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                    <figcaption className="absolute inset-x-3 bottom-3 text-sm font-medium">Espacios con personalidad.</figcaption>
                  </div>
                </motion.figure>
                <motion.figure whileHover={reduceMotion ? undefined : { y: -5 }} className="relative overflow-hidden rounded-[1.5rem] border border-white/25 bg-white/10 p-2 shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1rem]">
                    <Image src={`${basePath}/casos/welding-contenido.png`} alt="Portadas y contenido de marca para Welding Systems" fill unoptimized sizes="(max-width: 1023px) 42vw, 240px" className="object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                    <figcaption className="absolute inset-x-3 bottom-3 text-sm font-medium">Contenido con identidad.</figcaption>
                  </div>
                </motion.figure>
              </div>
            </div>
            <Link href="#trabajo" className="mt-5 flex items-center justify-between rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm backdrop-blur-xl transition-colors hover:bg-white/20">
              Marcas distintas. Una intención: crecer.<ArrowUpRight className="ml-3 size-4 shrink-0 text-brand" aria-hidden="true" />
            </Link>
          </div>
        </ImageReveal>
      </div>

      <motion.a href="#reels" aria-label="Scroll: ver los reels" className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-[10px] tracking-[.18em] text-white/60 uppercase" animate={reduceMotion ? undefined : { y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
        Scroll <ArrowDown className="size-4" aria-hidden="true" />
      </motion.a>
    </section>
  )
}
