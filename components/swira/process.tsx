import { Reveal } from './reveal'
import { Mark, SectionLabel } from './primitives'

const STEPS = [
  {
    number: '01',
    title: 'Diagnóstico',
    description:
      'Analizamos tu negocio, tu competencia y de dónde vienen (o no vienen) tus clientes.',
  },
  {
    number: '02',
    title: 'Estrategia',
    description:
      'Te presentamos el plan: qué haremos, en qué orden y qué esperamos conseguir.',
  },
  {
    number: '03',
    title: 'Producción',
    description:
      'Grabamos, diseñamos y desarrollamos. Todo en casa, sin subcontratar.',
  },
  {
    number: '04',
    title: 'Lanzamiento',
    description:
      'Publicamos, activamos campañas y conectamos las automatizaciones.',
  },
  {
    number: '05',
    title: 'Optimización',
    description:
      'Medimos cada semana y ajustamos. Informe mensual con números claros.',
  },
]

export function Process() {
  return (
    <section id="proceso" className="scroll-mt-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-10">
        <Reveal>
          <SectionLabel>Cómo trabajamos</SectionLabel>
        </Reveal>
        <Reveal as="h2" delay={80} className="mt-6">
          <span className="font-heading text-4xl font-extrabold leading-[0.95] tracking-tight text-balance md:text-6xl">
            Sin sorpresas. <em className="font-extrabold italic"><Mark>Paso a paso</Mark></em>.
          </span>
        </Reveal>

        <ol className="mt-16 max-w-3xl">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 80} as="li">
              <div className="relative flex gap-6 border-l border-border pb-12 pl-8 last:pb-0 md:gap-10 md:pl-12">
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-brand"
                />
                <span className="font-heading text-2xl font-extrabold tabular-nums text-brand md:text-3xl">
                  {step.number}
                </span>
                <div className="pt-0.5">
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground md:text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
