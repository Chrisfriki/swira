'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'
import { WordReveal } from '@/components/motion/motion-primitives'

const RESULTS = [
  { value: 180, prefix: '+', suffix: '%', description: 'de leads cualificados en 4 meses', client: 'Placeholder Cliente A · E-commerce de moda' },
  { value: 3, prefix: 'x', suffix: '', description: 'en visitas orgánicas desde Google', client: 'Placeholder Cliente B · Clínica dental' },
  { value: 43, prefix: '−', suffix: '%', description: 'de coste por lead en campañas', client: 'Placeholder Cliente C · Formación online' },
]

function AnimatedMetric({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const inView = useInView(ref, { once: true, amount: .7 })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, { duration: reduceMotion ? 0 : 1.3, ease: [0.16, 1, 0.3, 1], onUpdate: (latest) => setDisplay(Math.round(latest)) })
    return () => controls.stop()
  }, [inView, reduceMotion, value])
  return <p ref={ref} className="font-heading text-[clamp(4rem,11vw,10rem)] font-extrabold leading-none tracking-[-.06em] text-brand">{prefix}{display}{suffix}</p>
}

export function Results() {
  return (
    <section data-header-theme="dark" className="swira-atmosphere-ink py-24 text-white md:py-32">
      <div className="px-6 lg:px-10">
        <h2 className="max-w-6xl font-heading text-[clamp(2.5rem,6vw,6rem)] font-extrabold leading-[.9] tracking-tight"><WordReveal text="Los números mandan." emphasis="mandan" /></h2>
        <p className="mt-4 text-xs tracking-[.16em] text-white/45 uppercase">Cifras de ejemplo · sustituir por resultados verificados</p>
        <div className="mt-14 grid border-y border-white/10 md:grid-cols-3">
          {RESULTS.map((result) => <article key={result.client} className="border-b border-white/10 py-9 md:border-r md:border-b-0 md:px-7 md:first:pl-0 md:last:border-r-0"><AnimatedMetric value={result.value} prefix={result.prefix} suffix={result.suffix} /><p className="mt-5 max-w-xs text-lg font-medium leading-snug">{result.description}</p><p className="mt-7 text-sm text-white/45">{result.client}</p></article>)}
        </div>
      </div>
    </section>
  )
}
