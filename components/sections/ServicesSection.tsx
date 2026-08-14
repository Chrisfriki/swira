'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionLabel } from '@/components/swira/primitives'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const PILLARS = [
  { number: '01', title: 'Visibilidad', description: 'SEO, Google Business Profile, Instagram y TikTok.', image: '/work/work-07.svg', chips: ['SEO en Google', 'Google Business Profile', 'Instagram', 'TikTok'] },
  { number: '02', title: 'Captación', description: 'Campañas y embudos que convierten atención en negocio.', image: '/work/work-04.svg', chips: ['Embudos de venta', 'Captación de leads', 'Automatizaciones'] },
  { number: '03', title: 'Desarrollo', description: 'Webs y producto digital rápidos, útiles y memorables.', image: '/work/work-05.svg', chips: ['Páginas web', 'Aplicaciones a medida'] },
  { number: '04', title: 'Contenido', description: 'Dirección creativa, foto, vídeo y diseño con intención.', image: '/work/work-06.svg', chips: ['Diseño gráfico', 'Fotografía de producto', 'Fotografía y vídeo', 'Modelos de IA'] },
]

export function ServicesSection() {
  const [active, setActive] = useState(0)
  const refs = useRef<Array<HTMLElement | null>>([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index))
      })
    }, { rootMargin: '-35% 0px -45% 0px', threshold: 0 })
    refs.current.forEach((node) => node && observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicios" data-header-theme="dark" className="swira-atmosphere scroll-mt-32 text-white">
      <div className="px-6 pt-24 md:pt-32 lg:px-10"><SectionLabel className="text-white/60">Lo que hacemos</SectionLabel></div>
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 pb-24 md:pb-32 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div className="hidden lg:block">
          <div className="sticky top-28 h-[calc(100vh-8.5rem)] overflow-hidden rounded-xl border border-white/10">
            <AnimatePresence mode="wait">
              <motion.div key={PILLARS[active].image} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: .55 }} className="absolute inset-0">
                <Image src={`${basePath}${PILLARS[active].image}`} alt={`Imagen pendiente del servicio ${PILLARS[active].title}`} fill unoptimized sizes="50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-900/70 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div>
          {PILLARS.map((pillar, index) => (
            <article key={pillar.number} ref={(node) => { refs.current[index] = node }} data-index={index} className="flex min-h-0 flex-col justify-center border-b border-white/10 py-16 first:pt-14 lg:min-h-[76vh] lg:py-24">
              <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-xl border border-white/10 lg:hidden">
                <Image src={`${basePath}${pillar.image}`} alt={`Imagen pendiente del servicio ${pillar.title}`} fill unoptimized sizes="100vw" className="object-cover" />
              </div>
              <p className="font-heading text-[clamp(4rem,9vw,9rem)] font-extrabold leading-none text-brand">{pillar.number}</p>
              <h2 className="mt-4 font-heading text-[clamp(2.8rem,6vw,6rem)] font-extrabold leading-[.9] tracking-tight">{pillar.title}</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/65 md:text-xl">{pillar.description}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {pillar.chips.map((chip) => <Link key={chip} href="/servicios" className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition-colors hover:border-brand hover:text-brand">{chip}<ArrowUpRight className="size-3.5" aria-hidden="true" /></Link>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
