import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const PATHS = [
  { number: '01', title: 'Visibilidad', copy: 'SEO, contenido y presencia para que te encuentren.', href: '/servicios' },
  { number: '02', title: 'Captación', copy: 'Campañas y embudos que convierten atención en negocio.', href: '/servicios' },
  { number: '03', title: 'Desarrollo', copy: 'Webs y producto digital rápidos, útiles y memorables.', href: '/servicios' },
  { number: '04', title: 'Contenido', copy: 'Dirección creativa, foto, vídeo y diseño con intención.', href: '/servicios' },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="mx-auto max-w-7xl scroll-mt-32 px-6 py-24 md:py-32 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div><p className="text-xs font-semibold tracking-[.2em] text-brand uppercase">Lo que hacemos</p><h2 className="mt-5 font-heading text-4xl font-extrabold leading-none tracking-tight md:text-6xl">Cuatro formas de hacerte avanzar.</h2></div>
        <div className="border-t border-border">{PATHS.map((item) => <Link key={item.number} href={item.href} className="group grid grid-cols-[auto_1fr_auto] gap-5 border-b border-border py-7 md:items-center"><span className="font-heading text-lg font-bold text-brand">{item.number}</span><div><h3 className="font-heading text-2xl font-bold">{item.title}</h3><p className="mt-1 text-sm text-muted-foreground">{item.copy}</p></div><ArrowUpRight className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>)}</div>
      </div>
    </section>
  )
}
