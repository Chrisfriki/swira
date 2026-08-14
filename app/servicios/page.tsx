import type { Metadata } from 'next'
import { SiteHeader } from '@/components/swira/site-header'
import { SiteFooter } from '@/components/swira/site-footer'
import { PageIntro } from '@/components/swira/page-intro'
import { Pillars } from '@/components/swira/pillars'
import { Process } from '@/components/swira/process'
import { Faq } from '@/components/swira/faq'
import { FinalCta } from '@/components/swira/final-cta'

export const metadata: Metadata = { title: 'Servicios · Swira', description: 'Estrategia, captación, desarrollo y contenido para marcas que quieren crecer.' }

export default function ServiciosPage() {
  return <><SiteHeader /><main><PageIntro eyebrow="Servicios" title="Una agencia. Todo tu ecosistema digital." copy="Conectamos estrategia, creatividad y tecnología para que cada pieza empuje en la misma dirección." /><Pillars /><Process /><Faq /><FinalCta /></main><SiteFooter /></>
}
