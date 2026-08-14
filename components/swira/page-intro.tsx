import { AmbientBackground } from './ambient-background'
import { SectionLabel } from './primitives'

export function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <section className="relative isolate overflow-hidden px-6 pt-40 pb-24 md:pt-52 md:pb-32 lg:px-10">
      <AmbientBackground compact />
      <div className="mx-auto max-w-7xl">
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1 className="mt-7 max-w-5xl font-heading text-5xl font-extrabold leading-[0.92] tracking-[-0.055em] text-balance md:text-8xl">{title}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">{copy}</p>
      </div>
    </section>
  )
}
