import type { Metadata } from 'next'
import { SiteHeader } from '@/components/swira/site-header'
import { SiteFooter } from '@/components/swira/site-footer'
import { PageIntro } from '@/components/swira/page-intro'
import { Team } from '@/components/swira/team'
import { FinalCta } from '@/components/swira/final-cta'

export const metadata: Metadata = { title: 'Nosotros · Swira', description: 'El equipo multidisciplinar detrás de Swira.' }

const VALUES = [
  ['01', 'Claridad', 'Decimos lo que haríamos si el negocio fuera nuestro. Sin humo ni capas innecesarias.'],
  ['02', 'Criterio', 'Cada decisión visual o técnica tiene un porqué y una métrica detrás.'],
  ['03', 'Cercanía', 'Un equipo pequeño, senior y accesible. Hablas con quien hace el trabajo.'],
]

export default function NosotrosPage() {
  return <><SiteHeader /><main><PageIntro eyebrow="Nosotros" title="Pocas manos. Mucho oficio." copy="Somos estrategas, diseñadores, desarrolladores y creadores trabajando como un único equipo." /><section className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><div className="grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-3">{VALUES.map(([n, title, copy]) => <article key={n} className="bg-white p-8 md:p-10"><p className="font-heading text-xl font-bold text-brand">{n}</p><h2 className="mt-16 font-heading text-3xl font-bold">{title}</h2><p className="mt-4 leading-relaxed text-muted-foreground">{copy}</p></article>)}</div></section><Team /><FinalCta /></main><SiteFooter /></>
}
