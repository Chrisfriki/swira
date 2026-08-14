import type { Metadata } from 'next'
import { SiteHeader } from '@/components/swira/site-header'
import { SiteFooter } from '@/components/swira/site-footer'
import { PageIntro } from '@/components/swira/page-intro'
import { WorkGallery } from '@/components/swira/work-gallery'
import { Results } from '@/components/swira/results'
import { FinalCta } from '@/components/swira/final-cta'

export const metadata: Metadata = { title: 'Casos · Swira', description: 'Una selección de proyectos de estrategia, diseño, contenido y desarrollo.' }

export default function CasosPage() {
  return <><SiteHeader /><main><PageIntro eyebrow="Casos" title="Trabajo que habla. Números que confirman." copy="Proyectos donde la dirección creativa y el rendimiento dejaron de competir y empezaron a trabajar juntos." /><WorkGallery /><Results /><FinalCta /></main><SiteFooter /></>
}
