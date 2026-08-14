import Image from 'next/image'
import { Reveal } from './reveal'
import { Mark } from './primitives'

type Item = {
  label: string
  ratio: 'vertical' | 'horizontal'
  query: string
  w: number
  h: number
}

const ITEMS: Item[] = [
  { label: 'Contenido · Reel', ratio: 'vertical', query: 'vertical reel product video fashion', w: 720, h: 1280 },
  { label: 'Desarrollo · Web', ratio: 'horizontal', query: 'website design ecommerce mockup', w: 1200, h: 900 },
  { label: 'Contenido · Fotografía', ratio: 'horizontal', query: 'product photography studio still life', w: 1200, h: 900 },
  { label: 'Captación · Campaña', ratio: 'horizontal', query: 'social media ad campaign layout', w: 1200, h: 900 },
  { label: 'Contenido · TikTok', ratio: 'vertical', query: 'vertical tiktok short video content', w: 720, h: 1280 },
  { label: 'Visibilidad · Branding', ratio: 'horizontal', query: 'brand identity graphic design poster', w: 1200, h: 900 },
]

export function WorkGallery() {
  return (
    <section id="casos" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-10">
        <Reveal as="h2">
          <span className="font-heading text-4xl font-extrabold leading-[0.95] tracking-tight text-balance md:text-6xl">
            Míralo <em className="font-extrabold italic"><Mark>tú mismo</Mark></em>.
          </span>
        </Reveal>

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.label} delay={i * 80} className="mb-4 break-inside-avoid">
              <figure className="group relative overflow-hidden border border-border">
                <Image
                  src={`/placeholder.svg?height=${item.h}&width=${item.w}&query=${encodeURIComponent(item.query)}`}
                  alt={`Trabajo de Swira: ${item.label}`}
                  width={item.w}
                  height={item.h}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full"
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-[#0a0a0a]/90 px-4 py-3 text-xs font-medium tracking-[0.15em] text-white uppercase transition-transform duration-300 group-hover:translate-y-0">
                  {item.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
