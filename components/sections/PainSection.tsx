import { Camera, MessageCircle, MousePointer2, Search } from 'lucide-react'
import { WordReveal } from '@/components/motion/motion-primitives'
import { SectionLabel } from '@/components/swira/primitives'

const PAINS = [
  { text: 'Publicas cada semana y no entra ni un cliente nuevo.', label: 'Redes sociales', icon: MessageCircle },
  { text: 'Tu web es bonita, pero no vende.', label: 'Conversión web', icon: MousePointer2 },
  { text: 'Nadie te encuentra cuando te buscan en Google.', label: 'Visibilidad', icon: Search },
  { text: 'Tus fotos no están a la altura de tu producto.', label: 'Imagen de marca', icon: Camera },
]

export function PainSection() {
  return (
    <section data-theme="light" className="relative isolate bg-paper py-20 text-ink md:py-24">
      <div className="swira-container">
        <SectionLabel>El punto de partida</SectionLabel>
        <h2 className="mt-6 max-w-6xl font-heading text-[clamp(2.5rem,6vw,6rem)] font-extrabold leading-[.9] tracking-tight">
          <WordReveal text="¿Te está pasando esto?" emphasis="esto" />
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 md:mt-12">
          {PAINS.map(({ text, label, icon: Icon }, index) => (
            <article key={label} className="swira-panel flex flex-col bg-white p-6 md:p-7">
              <div className="flex items-center justify-between gap-4">
                <span className="flex size-14 items-center justify-center rounded-2xl border border-brand/15 bg-brand/10 text-deep-700"><Icon className="size-7" strokeWidth={1.75} aria-hidden="true" /></span>
                <span aria-hidden="true" className="font-heading text-xs font-bold tabular-nums text-neutral-400">0{index + 1}</span>
              </div>
              <h3 className="mt-6 font-heading text-xl font-bold leading-snug tracking-tight md:text-2xl">{text}</h3>
              <p className="mt-auto pt-6 text-xs font-medium tracking-[.1em] text-neutral-500 uppercase">{label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
