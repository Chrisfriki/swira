import { Reveal } from './reveal'
import { Mark } from './primitives'

const RESULTS = [
  {
    metric: '+___%',
    description: 'de leads cualificados · métrica pendiente',
    client: 'Caso de cliente por sustituir',
  },
  {
    metric: 'x__',
    description: 'en visitas orgánicas · métrica pendiente',
    client: 'Caso de cliente por sustituir',
  },
  {
    metric: '−__%',
    description: 'de coste por lead · métrica pendiente',
    client: 'Caso de cliente por sustituir',
  },
]

export function Results() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-10">
        <Reveal as="h2">
          <span className="font-heading text-4xl font-extrabold leading-[0.95] tracking-tight text-balance md:text-6xl">
            Los números <em className="font-extrabold italic"><Mark>mandan</Mark></em>.
          </span>
        </Reveal>

        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
          {RESULTS.map((result, i) => (
            <Reveal
              key={result.client}
              delay={i * 100}
              className="flex flex-col gap-6 bg-background p-8 md:p-10"
            >
              <p className="font-heading text-5xl font-extrabold tracking-tight text-brand md:text-6xl">
                {result.metric}
              </p>
              <p className="text-lg font-medium leading-snug text-foreground text-pretty">
                {result.description}
              </p>
              <p className="mt-auto text-sm text-muted-foreground">
                {result.client}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
