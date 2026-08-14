import type { Metadata } from 'next'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { SiteHeader } from '@/components/swira/site-header'
import { SiteFooter } from '@/components/swira/site-footer'
import { PageIntro } from '@/components/swira/page-intro'
import { ContactForm } from '@/components/swira/contact-form'

export const metadata: Metadata = { title: 'Contacto · Swira', description: 'Cuéntanos qué quieres mover y te respondemos en menos de 24 horas.' }

export default function ContactoPage() {
  return <><SiteHeader /><main><PageIntro eyebrow="Contacto" title="¿Qué quieres mover?" copy="Cuéntanos dónde estás y dónde quieres llegar. Te responderemos con preguntas útiles, no con una presentación genérica." /><section className="mx-auto grid max-w-7xl gap-6 px-6 pb-28 md:grid-cols-2 lg:px-10"><ContactForm /><div className="grid gap-6"><a href="mailto:hola@swira.com" className="group bg-deep-900 p-8 text-white md:p-10"><Mail className="size-7 text-brand" aria-hidden="true" /><p className="mt-14 text-sm text-white/70">Escríbenos</p><p className="mt-2 font-heading text-3xl font-bold">hola@swira.com</p><ArrowUpRight className="mt-6 size-7 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" /></a><div className="grid gap-6 sm:grid-cols-2"><div className="border border-border bg-white p-7"><Phone className="size-6 text-brand" aria-hidden="true" /><p className="mt-10 text-sm">Llámanos</p><a href="tel:+34910000000" className="mt-2 block font-heading text-xl font-bold">+34 910 000 000</a></div><div className="border border-border bg-white p-7"><MapPin className="size-6 text-brand" aria-hidden="true" /><p className="mt-10 text-sm text-muted-foreground">Nos encontrarás en</p><p className="mt-2 font-heading text-xl font-bold">Madrid, España</p></div></div></div></section></main><SiteFooter /></>
}
