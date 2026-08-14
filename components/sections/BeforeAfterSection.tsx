'use client'

import { useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { GripVertical } from 'lucide-react'
import { WordReveal } from '@/components/motion/motion-primitives'
import { SectionLabel } from '@/components/swira/primitives'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const EXAMPLES = [
  { before: '/work/work-06.svg', after: '/work/work-09.svg', label: 'Fotografía de producto · ejemplo pendiente' },
  { before: '/work/work-02.svg', after: '/work/work-05.svg', label: 'Rediseño web · ejemplo pendiente' },
]

function Comparison({ before, after, label }: (typeof EXAMPLES)[number]) {
  const [value, setValue] = useState(50)
  return (
    <figure className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-ink">
      <Image src={`${basePath}${before}`} alt={`Antes: ${label}`} fill unoptimized sizes="(max-width: 1023px) 92vw, 72vw" className="object-cover grayscale" />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}><Image src={`${basePath}${after}`} alt={`Después: ${label}`} fill unoptimized sizes="(max-width: 1023px) 92vw, 72vw" className="object-cover" /></div>
      <div className="pointer-events-none absolute inset-y-0 w-px bg-brand" style={{ left: `${value}%` }}><span className="absolute top-1/2 left-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-ink"><GripVertical className="size-5" aria-hidden="true" /></span></div>
      <input aria-label={`Mover comparación de ${label}`} type="range" min="0" max="100" value={value} onChange={(event) => setValue(Number(event.target.value))} className="absolute inset-0 size-full cursor-ew-resize opacity-0" />
      <span className="absolute bottom-4 left-4 rounded-full bg-ink/75 px-3 py-1.5 text-xs text-white">Antes</span><span className="absolute right-4 bottom-4 rounded-full bg-brand px-3 py-1.5 text-xs font-medium text-ink">Después</span>
    </figure>
  )
}

export function BeforeAfterSection() {
  const [emblaRef] = useEmblaCarousel({ containScroll: 'trimSnaps' })
  return (
    <section data-header-theme="dark" className="swira-atmosphere scroll-mt-32 overflow-hidden py-24 text-white md:py-32">
      <div className="px-6 lg:px-10"><SectionLabel className="text-white/60">Antes y después</SectionLabel><h2 className="mt-6 max-w-6xl font-heading text-[clamp(2.5rem,6vw,6rem)] font-extrabold leading-[.9] tracking-tight"><WordReveal text="El mismo producto. Otra historia." emphasis="historia" /></h2></div>
      <div ref={emblaRef} className="mt-14 overflow-hidden"><div className="flex gap-5 pl-6 lg:pl-10">{EXAMPLES.map((example) => <div key={example.label} className="basis-[92vw] shrink-0 lg:basis-[72vw]"><Comparison {...example} /><p className="mt-4 text-sm text-white/55">{example.label}</p></div>)}<div className="w-4 shrink-0" /></div></div>
    </section>
  )
}
