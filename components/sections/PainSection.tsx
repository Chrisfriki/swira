import Image from 'next/image'
import { ImageReveal, WordReveal } from '@/components/motion/motion-primitives'
import { SectionLabel } from '@/components/swira/primitives'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const PAINS = [
  { text: 'Publicas cada semana y no entra ni un cliente nuevo.', src: '/work/work-04.svg' },
  { text: 'Tu web es bonita, pero no vende.', src: '/work/work-05.svg' },
  { text: 'Nadie te encuentra cuando te buscan en Google.', src: '/work/work-07.svg' },
  { text: 'Tus fotos no están a la altura de tu producto.', src: '/work/work-06.svg' },
]

export function PainSection() {
  return (
    <section data-header-theme="light" className="bg-paper py-24 md:py-32">
      <div className="px-6 lg:px-10">
        <SectionLabel>El punto de partida</SectionLabel>
        <h2 className="mt-6 max-w-6xl font-heading text-[clamp(2.5rem,6vw,6rem)] font-extrabold leading-[.9] tracking-tight text-ink">
          <WordReveal text="¿Te está pasando esto?" emphasis="esto" />
        </h2>
      </div>
      <div className="mt-14 flex flex-col overflow-hidden md:h-[68vh] md:min-h-[560px] md:flex-row">
        {PAINS.map((pain, index) => (
          <ImageReveal key={pain.text} delay={index * .08} className="group relative min-h-[360px] flex-1 overflow-hidden transition-[flex] duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:flex-[1.7] md:min-h-0">
            <article className="absolute inset-0">
              <Image src={`${basePath}${pain.src}`} alt={`Imagen pendiente para: ${pain.text}`} fill unoptimized sizes="(max-width: 767px) 100vw, 35vw" className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white lg:p-9">
                <span className="font-heading text-sm font-bold text-brand">0{index + 1}</span>
                <h3 className="mt-3 max-w-sm font-heading text-2xl font-bold leading-tight text-balance lg:text-3xl">{pain.text}</h3>
              </div>
            </article>
          </ImageReveal>
        ))}
      </div>
    </section>
  )
}
