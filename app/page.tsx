import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/swira/site-header'
import { Hero } from '@/components/swira/hero'
import { ClientLogos } from '@/components/swira/client-logos'
import { Results } from '@/components/swira/results'
import { FinalCta } from '@/components/swira/final-cta'
import { SiteFooter } from '@/components/swira/site-footer'

const PATHS = [
  { number: '01', title: 'Visibilidad', copy: 'SEO, contenido y presencia para que te encuentren.', href: '/servicios' },
  { number: '02', title: 'Captación', copy: 'Campañas y embudos que convierten atención en negocio.', href: '/servicios' },
  { number: '03', title: 'Desarrollo', copy: 'Webs y producto digital rápidos, útiles y memorables.', href: '/servicios' },
  { number: '04', title: 'Contenido', copy: 'Dirección creativa, foto, vídeo y diseño con intención.', href: '/servicios' },
]

export default function Page() {
  return (
    <><SiteHeader /><main><Hero /><ClientLogos />
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-10"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-xs font-semibold tracking-[.2em] text-brand uppercase">Lo que hacemos</p><h2 className="mt-5 font-heading text-4xl font-extrabold leading-none tracking-tight md:text-6xl">Cuatro formas de hacerte avanzar.</h2></div><div className="border-t border-border">{PATHS.map((item) => <Link key={item.number} href={item.href} className="group grid grid-cols-[auto_1fr_auto] gap-5 border-b border-border py-7 md:items-center"><span className="font-heading text-lg font-bold text-brand">{item.number}</span><div><h3 className="font-heading text-2xl font-bold">{item.title}</h3><p className="mt-1 text-sm text-muted-foreground">{item.copy}</p></div><ArrowUpRight className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>)}</div></div></section>
      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32 lg:px-10"><Link href="/casos" className="group relative block overflow-hidden rounded-[2rem] bg-[#0b1020] px-7 py-16 text-white md:px-14 md:py-24"><div className="absolute -top-36 right-0 size-[34rem] rounded-full bg-blue-600/60 blur-[90px] transition-transform duration-700 group-hover:scale-110" /><div className="absolute -bottom-40 left-1/3 size-96 rounded-full bg-cyan-400/35 blur-[100px]" /><p className="relative text-xs tracking-[.2em] text-brand uppercase">Trabajo seleccionado</p><h2 className="relative mt-5 max-w-4xl font-heading text-5xl font-extrabold leading-[.95] tracking-tight md:text-7xl">Ideas bonitas. Resultados todavía mejores.</h2><span className="relative mt-10 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black">Explorar casos <ArrowUpRight className="size-4" /></span></Link></section>
      <Results /><FinalCta /></main><SiteFooter /></>
  )
}
