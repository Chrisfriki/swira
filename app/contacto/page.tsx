import type { Metadata } from 'next'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { SiteHeader } from '@/components/swira/site-header'
import { SiteFooter } from '@/components/swira/site-footer'
import { PageIntro } from '@/components/swira/page-intro'

export const metadata: Metadata = { title: 'Contacto · Swira', description: 'Cuéntanos qué quieres mover y te respondemos en menos de 24 horas.' }

export default function ContactoPage() {
  return <><SiteHeader /><main><PageIntro eyebrow="Contacto" title="¿Qué quieres mover?" copy="Cuéntanos dónde estás y dónde quieres llegar. Te responderemos con preguntas útiles, no con una presentación genérica." /><section className="mx-auto grid max-w-7xl gap-6 px-6 pb-28 md:grid-cols-3 lg:px-10"><a href="mailto:hola@swira.com" className="group rounded-[2rem] bg-[#0b1020] p-8 text-white md:col-span-2 md:p-12"><Mail className="size-7 text-brand" /><p className="mt-20 text-sm text-white/55">Escríbenos</p><p className="mt-2 font-heading text-3xl font-bold md:text-5xl">hola@swira.com</p><ArrowUpRight className="mt-8 size-7 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a><div className="rounded-[2rem] bg-[#dfff42] p-8 md:p-10"><Phone className="size-7" /><p className="mt-16 text-sm">Llámanos</p><a href="tel:+34910000000" className="mt-2 block font-heading text-2xl font-bold">+34 910 000 000</a></div><div className="rounded-[2rem] border border-border bg-white p-8 md:p-10"><MapPin className="size-7 text-blue-600" /><p className="mt-16 text-sm text-muted-foreground">Nos encontrarás en</p><p className="mt-2 font-heading text-2xl font-bold">Madrid, España</p></div><div className="relative overflow-hidden rounded-[2rem] bg-blue-600 p-8 text-white md:col-span-2 md:p-10"><div className="absolute -right-20 -bottom-32 size-80 rounded-full bg-cyan-300/50 blur-3xl" /><p className="relative text-sm text-white/70">Primera conversación</p><p className="relative mt-4 max-w-xl font-heading text-3xl font-bold md:text-4xl">30 minutos para entender el reto. Sin compromiso y sin PowerPoint.</p></div></section></main><SiteFooter /></>
}
