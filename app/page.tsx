import { SiteHeader } from '@/components/swira/site-header'
import { Hero } from '@/components/swira/hero'
import { ClientLogos } from '@/components/swira/client-logos'
import { PainPoints } from '@/components/swira/pain-points'
import { Pillars } from '@/components/swira/pillars'
import { WorkGallery } from '@/components/swira/work-gallery'
import { Process } from '@/components/swira/process'
import { Results } from '@/components/swira/results'
import { Team } from '@/components/swira/team'
import { Faq } from '@/components/swira/faq'
import { FinalCta } from '@/components/swira/final-cta'
import { SiteFooter } from '@/components/swira/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ClientLogos />
        <PainPoints />
        <Pillars />
        <WorkGallery />
        <Process />
        <Results />
        <Team />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
