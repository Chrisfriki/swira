import { SiteHeader } from '@/components/swira/site-header'
import { Hero } from '@/components/swira/hero'
import { ClientLogos } from '@/components/swira/client-logos'
import { Results } from '@/components/swira/results'
import { FinalCta } from '@/components/swira/final-cta'
import { SiteFooter } from '@/components/swira/site-footer'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { WorkBannerSection } from '@/components/sections/WorkBannerSection'

export default function Page() {
  return (
    <><SiteHeader /><main><Hero /><ClientLogos />
      <ServicesSection />
      <WorkBannerSection />
      <Results /><FinalCta /></main><SiteFooter /></>
  )
}
