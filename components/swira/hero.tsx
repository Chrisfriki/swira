import Link from 'next/link'
import { ArrowUpRight, Code2, MousePointer2, Sparkles } from 'lucide-react'
import { AmbientBackground } from './ambient-background'
import { Reveal } from './reveal'
import { SectionLabel } from './primitives'

export function Hero() {
  return (
    <section className="relative isolate min-h-[900px] overflow-hidden px-6 pt-40 pb-20 md:min-h-screen md:pt-48 lg:px-10">
      <AmbientBackground />
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
        <Reveal delay={120} className="relative">
          <div className="grid aspect-[4/4.4] grid-cols-2 grid-rows-[1.3fr_.8fr] gap-3 rounded-[2rem] border border-white/80 bg-white/35 p-3 shadow-[0_40px_100px_rgba(28,77,150,.18)] backdrop-blur-xl">
            <div className="relative col-span-2 overflow-hidden rounded-[1.4rem] bg-[#0c1224] p-7 text-white"><div className="absolute -top-24 -right-16 size-72 rounded-full bg-blue-500/60 blur-3xl" /><div className="absolute -bottom-20 left-10 size-52 rounded-full bg-cyan-400/30 blur-3xl" /><p className="relative text-xs tracking-[.2em] text-white/60 uppercase">Experiencia digital</p><p className="relative mt-5 max-w-sm font-heading text-4xl font-bold leading-none md:text-5xl">Una presencia imposible de ignorar.</p><MousePointer2 className="absolute right-8 bottom-8 size-9 text-brand" /></div>
            <div className="rounded-[1.4rem] bg-[#dfff42] p-6"><Sparkles className="size-7" /><p className="mt-8 font-heading text-5xl font-extrabold">4×</p><p className="mt-2 text-sm font-medium">más claridad para convertir</p></div>
            <div className="flex flex-col justify-between rounded-[1.4rem] bg-white p-6 shadow-sm"><Code2 className="size-7 text-blue-600" /><div><p className="font-heading text-2xl font-bold">Diseño + código</p><p className="mt-2 text-sm text-muted-foreground">Todo bajo el mismo techo.</p></div></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
