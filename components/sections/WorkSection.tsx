'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { ImageReveal, WordReveal } from '@/components/motion/motion-primitives'
import { SectionLabel } from '@/components/swira/primitives'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const WORK = [
  { src: '/work/work-04.svg', ratio: 'aspect-[9/16]', service: 'Contenido' },
  { src: '/work/work-05.svg', ratio: 'aspect-[4/3]', service: 'Desarrollo web' },
  { src: '/work/work-06.svg', ratio: 'aspect-[4/3]', service: 'Fotografía' },
  { src: '/work/work-07.svg', ratio: 'aspect-[9/16]', service: 'Captación' },
  { src: '/work/work-08.svg', ratio: 'aspect-[4/3]', service: 'Contenido' },
  { src: '/work/work-09.svg', ratio: 'aspect-[4/3]', service: 'Identidad visual' },
  { src: '/work/work-01.svg', ratio: 'aspect-[9/16]', service: 'Redes sociales' },
  { src: '/work/work-02.svg', ratio: 'aspect-[4/3]', service: 'Producto digital' },
]

export function WorkSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, containScroll: 'trimSnaps', align: 'start' })
  const [progress, setProgress] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(false)
  const reduceMotion = useReducedMotion()
  const cursorX = useSpring(useMotionValue(-100), { stiffness: 420, damping: 36 })
  const cursorY = useSpring(useMotionValue(-100), { stiffness: 420, damping: 36 })

  const updateProgress = useCallback(() => {
    if (emblaApi) setProgress(Math.max(0, Math.min(1, emblaApi.scrollProgress())))
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    updateProgress()
    emblaApi.on('scroll', updateProgress).on('reInit', updateProgress)
    return () => { emblaApi.off('scroll', updateProgress).off('reInit', updateProgress) }
  }, [emblaApi, updateProgress])

  return (
    <section id="trabajo" data-header-theme="light" className="relative scroll-mt-32 overflow-hidden bg-paper py-24 text-ink md:py-32">
      <div className="px-6 lg:px-10">
        <SectionLabel>Trabajo seleccionado</SectionLabel>
        <h2 className="mt-6 max-w-6xl font-heading text-[clamp(2.5rem,6vw,6rem)] font-extrabold leading-[.9] tracking-tight text-balance"><WordReveal text="Ideas bonitas. Resultados todavía mejores." emphasis="mejores" /></h2>
      </div>
      <div
        ref={emblaRef}
        className="mt-14 cursor-grab overflow-hidden active:cursor-grabbing"
        onPointerMove={(event) => { cursorX.set(event.clientX - 45); cursorY.set(event.clientY - 45) }}
        onPointerEnter={() => setCursorVisible(true)}
        onPointerLeave={() => setCursorVisible(false)}
        onWheel={(event) => { if (!emblaApi || Math.abs(event.deltaY) < 4) return; event.deltaY > 0 ? emblaApi.scrollNext() : emblaApi.scrollPrev() }}
      >
        <div className="flex items-start gap-4 pl-6 lg:gap-6 lg:pl-10">
          {WORK.map((item, index) => (
            <article key={`${item.src}-${index}`} className={`relative min-w-0 shrink-0 overflow-hidden rounded-xl border border-border bg-muted ${item.ratio} ${item.ratio.includes('9/16') ? 'basis-[68vw] sm:basis-[38vw] lg:basis-[24vw]' : 'basis-[86vw] sm:basis-[58vw] lg:basis-[42vw]'}`}>
              <ImageReveal className="absolute inset-0" delay={(index % 3) * .08}>
                <Image src={`${basePath}${item.src}`} alt={`Proyecto pendiente de ${item.service}`} fill unoptimized sizes="(max-width: 639px) 86vw, (max-width: 1023px) 58vw, 42vw" className="object-cover transition-transform duration-700 hover:scale-[1.03]" />
              </ImageReveal>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-transparent to-transparent p-6 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                <p className="font-heading text-2xl font-bold">Cliente por definir</p><p className="mt-1 text-sm text-white/70">{item.service} · Métrica pendiente</p>
              </div>
            </article>
          ))}
          <div className="w-4 shrink-0 lg:w-8" aria-hidden="true" />
        </div>
      </div>
      <div className="mx-6 mt-8 h-0.5 overflow-hidden bg-border lg:mx-10"><motion.div className="h-full origin-left bg-brand" animate={{ scaleX: progress }} transition={{ duration: .1 }} /></div>
      <div className="px-6 pt-10 lg:px-10"><Link href="#contacto" className="font-medium underline decoration-brand decoration-2 underline-offset-4 hover:text-brand">Ver todos los casos →</Link></div>
      <motion.div aria-hidden="true" className="pointer-events-none fixed z-40 hidden size-[90px] items-center justify-center rounded-full bg-brand text-center text-[10px] font-bold tracking-[.12em] text-ink uppercase mix-blend-difference [@media(pointer:fine)]:flex" style={{ x: cursorX, y: cursorY }} animate={{ opacity: cursorVisible && !reduceMotion ? 1 : 0, scale: cursorVisible ? 1 : .6 }}>Ver caso</motion.div>
    </section>
  )
}
