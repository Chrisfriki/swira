'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, ShieldCheck, MousePointer2, Users } from 'lucide-react'
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

        <ImageReveal delay={0.12} className="relative">
          <div className="grid grid-cols-2 gap-3 rounded-[2rem] border border-white/25 bg-white/10 p-3 shadow-[0_32px_90px_rgba(0,0,0,.2)] backdrop-blur-xl">
            <div className="relative col-span-2 flex min-h-72 flex-col overflow-hidden rounded-[1.4rem] bg-[#0c1224] p-6 sm:min-h-88 sm:p-7">
              <div aria-hidden="true" className="absolute -top-24 -right-16 size-80 rounded-full bg-blue-500/50 blur-3xl" />
              <div aria-hidden="true" className="absolute -bottom-20 left-10 size-60 rounded-full bg-cyan-400/25 blur-3xl" />
              <p className="relative text-xs tracking-[.2em] text-white/65 uppercase">De la atención al negocio</p>
              <p className="relative mt-5 max-w-md font-heading text-[clamp(1.5rem,3.2vw,3rem)] font-bold leading-tight">Más consultas. Más oportunidades de venta.</p>
              <p className="relative mt-5 max-w-sm text-sm leading-relaxed text-white/75">Contenido y campañas con un siguiente paso claro: que te contacten.</p>
              <MousePointer2 aria-hidden="true" className="relative mt-5 ml-auto size-8 text-brand" />
            </div>
            <div className="flex min-h-52 flex-col justify-between rounded-[1.4rem] bg-[#dfff42] p-5 text-ink sm:min-h-56 sm:p-6">
              <Users aria-hidden="true" className="size-7" />
              <div className="mt-7"><p className="font-heading text-4xl font-extrabold sm:text-5xl">+100</p><p className="mt-2 text-sm">Contactos interesados en pérgolas para Welding Systems.</p><Link href="#historia" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold underline underline-offset-4">Así lo conseguimos <ArrowUpRight className="size-4" aria-hidden="true" /></Link></div>
            </div>
            <div className="flex min-h-52 flex-col justify-between rounded-[1.4rem] bg-white p-4 text-ink sm:min-h-56 sm:p-6">
              <ShieldCheck aria-hidden="true" className="size-7 text-blue-600" />
              <div className="mt-7"><p className="font-heading text-lg font-bold sm:text-3xl">Una marca que da confianza.</p><p className="mt-2 text-sm text-neutral-600">Una imagen cuidada para que te tomen en serio.</p></div>
            </div>
          </div>
        </ImageReveal>
      </div>

      <motion.a href="#reels" aria-label="Scroll: ver los reels" className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-[10px] tracking-[.18em] text-white/60 uppercase" animate={reduceMotion ? undefined : { y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
        Scroll <ArrowDown className="size-4" aria-hidden="true" />
      </motion.a>
    </section>
  )
}
