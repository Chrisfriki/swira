import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionLabel } from './primitives'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const HERO_WORK = [
  { src: '/work/work-01.svg', alt: 'Placeholder vertical de contenido para redes sociales', service: 'Contenido', vertical: true },
  { src: '/work/work-02.svg', alt: 'Placeholder de diseño y desarrollo web', service: 'Desarrollo', vertical: false },
  { src: '/work/work-03.svg', alt: 'Placeholder de fotografía de producto', service: 'Fotografía', vertical: false },
]

export function Hero() {
  return (
    <section className="bg-background px-6 pt-40 pb-20 md:min-h-screen md:pt-48 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div>
          <Reveal><SectionLabel>Agencia de marketing digital</SectionLabel></Reveal>
          <Reveal as="h1" delay={80} className="mt-7"><span className="font-heading text-6xl font-extrabold leading-[0.9] tracking-[-0.06em] text-balance md:text-8xl">Digital que se ve. Ideas que <em className="font-extrabold italic text-brand">mueven.</em></span></Reveal>
          <Reveal delay={160} className="mt-8 max-w-xl"><p className="text-lg leading-relaxed text-muted-foreground md:text-xl">Construimos marcas, experiencias y sistemas digitales pensados para hacer crecer negocios ambiciosos.</p></Reveal>
          <Reveal delay={220} className="mt-10 flex flex-wrap gap-3">
            <Link href="#trabajo" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-4 font-medium text-white transition-transform hover:-translate-y-1">Ver proyectos <ArrowUpRight className="size-5" aria-hidden="true" /></Link>
            <Link href="#servicios" className="inline-flex items-center rounded-full border border-border bg-white px-6 py-4 font-medium transition-colors hover:border-brand hover:text-brand">Qué hacemos</Link>
          </Reveal>
        </div>
        <Reveal delay={120} className="min-w-0">
          <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3 lg:mx-0 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:overflow-visible lg:px-0 lg:pb-0">
            {HERO_WORK.map((item, index) => (
              <article
                key={item.src}
                className={`group relative shrink-0 snap-center overflow-hidden border border-border bg-muted ${item.vertical ? 'aspect-[9/16] w-[72vw] lg:row-span-2 lg:w-auto' : 'aspect-[4/3] w-[82vw] lg:w-auto'}`}
              >
                <Image
                  src={`${basePath}${item.src}`}
                  alt={item.alt}
                  fill
                  unoptimized
                  priority={index === 0}
                  sizes="(max-width: 1023px) 82vw, 24vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-end bg-black/80 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                  <p className="font-heading text-2xl font-bold text-white">{item.service}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
