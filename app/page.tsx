import { SiteHeader } from '@/components/swira/site-header'
import { Hero } from '@/components/swira/hero'
import { ClientLogos } from '@/components/swira/client-logos'
import { Results } from '@/components/swira/results'
import { FinalCta } from '@/components/swira/final-cta'
import { SiteFooter } from '@/components/swira/site-footer'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { WorkSection } from '@/components/sections/WorkSection'
import { PainSection } from '@/components/sections/PainSection'
import { MidCta } from '@/components/sections/MidCta'

export default function Page() {
  return (
    <><SiteHeader /><main><Hero /><ClientLogos /><PainSection />
      <ServicesSection />
      <WorkSection />
      <MidCta />
      <Results /><FinalCta /></main><SiteFooter /></>
  )
}
