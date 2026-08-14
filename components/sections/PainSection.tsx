import { ImageReveal, WordReveal } from '@/components/motion/motion-primitives'
import { SectionLabel } from '@/components/swira/primitives'

const PAINS = [
  { text: 'Publicas cada semana y no entra ni un cliente nuevo.', background: 'radial-gradient(circle at 50% 34%, #00ce63 0 18%, transparent 18.3%), linear-gradient(145deg, #f6f6f6 0 48%, #d7d7d7 48% 100%)' },
  { text: 'Tu web es bonita, pero no vende.', background: 'linear-gradient(45deg, #05070d 0 28%, transparent 28%), linear-gradient(135deg, transparent 0 58%, #00ce63 58% 78%, transparent 78%), #dedede' },
  { text: 'Nadie te encuentra cuando te buscan en Google.', background: 'radial-gradient(circle at 25% 30%, #05070d 0 11%, transparent 11.3%), radial-gradient(circle at 72% 56%, #00ce63 0 22%, transparent 22.3%), #efefef' },
  { text: 'Tus fotos no están a la altura de tu producto.', background: 'linear-gradient(90deg, #05070d 0 14%, transparent 14% 86%, #05070d 86%), linear-gradient(#eeeeee 0 24%, #00ce63 24% 74%, #eeeeee 74%)' },
]

export function PainSection() {
  return (
    <section data-theme="light" className="relative isolate z-10 overflow-hidden bg-paper py-24 md:py-32">
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
              <div aria-hidden="true" className="absolute inset-0 scale-100 grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" style={{ background: pain.background }} />
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
