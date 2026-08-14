import { CalendarX, LayoutTemplate, SearchX, Camera } from 'lucide-react'
import { Reveal } from './reveal'
import { Mark, SectionLabel } from './primitives'

const PAINS = [
  {
    icon: CalendarX,
    text: 'Publicas cada semana y no entra ni un cliente nuevo.',
  },
  {
    icon: LayoutTemplate,
    text: 'Tu web es bonita, pero no vende.',
  },
  {
    icon: SearchX,
    text: 'Nadie te encuentra cuando te buscan en Google.',
  },
  {
    icon: Camera,
    text: 'Tus fotos no están a la altura de tu producto.',
  },
]

export function PainPoints() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-10">
      <Reveal><SectionLabel>El punto de partida</SectionLabel></Reveal>
      <Reveal as="h2">
        <span className="mt-6 block font-heading text-4xl font-extrabold leading-[0.95] tracking-tight text-balance md:text-6xl">
          ¿Te está pasando <em className="font-extrabold italic"><Mark>esto</Mark></em>?
        </span>
      </Reveal>

      <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {PAINS.map((pain, i) => {
          const Icon = pain.icon
          return (
            <Reveal
              key={pain.text}
              delay={i * 100}
              className="flex h-full flex-col gap-8 bg-background p-8"
            >
              <Icon className="size-7 text-brand" strokeWidth={1.5} aria-label={pain.text} />
              <p className="text-lg font-medium leading-snug text-foreground text-pretty">
                {pain.text}
              </p>
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={200} className="mt-14 text-center">
        <p className="text-lg text-foreground md:text-xl">
          Si has asentido con alguna,{' '}
          <a
            href="#contacto"
            className="font-medium text-brand underline decoration-brand decoration-2 underline-offset-4"
          >
            hablemos
          </a>
          .
        </p>
      </Reveal>
    </section>
  )
}
