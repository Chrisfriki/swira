import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionLabel } from './primitives'

export function Hero() {
  return (
    <section className="bg-background px-6 pt-40 pb-20 md:min-h-screen md:pt-48 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div>
          <Reveal><SectionLabel>Estrategia, diseño y tecnología</SectionLabel></Reveal>
          <Reveal as="h1" delay={80} className="mt-7"><span className="font-heading text-6xl font-extrabold leading-[0.9] tracking-[-0.06em] text-balance md:text-8xl">Digital que se ve. Ideas que <span className="text-brand">mueven.</span></span></Reveal>
          <Reveal delay={160} className="mt-8 max-w-xl"><p className="text-lg leading-relaxed text-[#3f4652] md:text-xl">Construimos marcas, experiencias y sistemas digitales pensados para hacer crecer negocios ambiciosos.</p></Reveal>
          <Reveal delay={220} className="mt-10 flex flex-wrap gap-3">
            <Link href="/casos" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-4 font-medium text-white transition-transform hover:-translate-y-1">Ver proyectos <ArrowUpRight className="size-5" /></Link>
            <Link href="/servicios" className="inline-flex items-center rounded-full border border-black/10 bg-white/65 px-6 py-4 font-medium backdrop-blur-md transition-colors hover:bg-white">Qué hacemos</Link>
          </Reveal>
        </div>
        <div aria-hidden="true" />
      </div>
    </section>
  )
}
