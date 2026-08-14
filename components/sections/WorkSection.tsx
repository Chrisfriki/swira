import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/swira/reveal'
import { Mark, SectionLabel } from '@/components/swira/primitives'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const WORK = [
  { src: '/work/work-04.svg', ratio: 'aspect-[9/16]', client: 'Cliente por definir', service: 'Contenido' },
  { src: '/work/work-05.svg', ratio: 'aspect-[4/3]', client: 'Cliente por definir', service: 'Desarrollo web' },
  { src: '/work/work-06.svg', ratio: 'aspect-[4/3]', client: 'Cliente por definir', service: 'Fotografía' },
  { src: '/work/work-07.svg', ratio: 'aspect-[4/3]', client: 'Cliente por definir', service: 'Captación' },
  { src: '/work/work-08.svg', ratio: 'aspect-[9/16]', client: 'Cliente por definir', service: 'Contenido' },
  { src: '/work/work-09.svg', ratio: 'aspect-[4/3]', client: 'Cliente por definir', service: 'Identidad visual' },
]

export function WorkSection() {
  return (
    <section id="trabajo" className="scroll-mt-32 border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-10">
        <Reveal><SectionLabel>Trabajo seleccionado</SectionLabel></Reveal>
        <Reveal as="h2" delay={80} className="mt-6">
          <span className="font-heading text-4xl font-extrabold leading-[0.95] tracking-tight text-balance md:text-6xl">Ideas bonitas. Resultados <em className="font-extrabold italic"><Mark>todavía mejores</Mark></em>.</span>
        </Reveal>
        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {WORK.map((item, index) => (
            <Reveal key={item.src} delay={index * 60} className="mb-4 break-inside-avoid">
              <article className={`group relative overflow-hidden border border-border bg-muted ${item.ratio}`}>
                <Image src={`${basePath}${item.src}`} alt={`Proyecto de ${item.service}; cliente pendiente de definir`} fill unoptimized sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover" />
                <div className="absolute inset-0 flex flex-col justify-end bg-black/80 p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                  <p className="font-heading text-xl font-bold">{item.client}</p><p className="mt-1 text-sm text-white/80">{item.service}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10"><Link href="#contacto" className="font-medium underline decoration-brand decoration-2 underline-offset-4 hover:text-brand">Ver todos los casos →</Link></Reveal>
      </div>
    </section>
  )
}
