import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'
import { Mark, SectionLabel } from './primitives'

const PILLARS = [
  {
    number: '01',
    title: 'Visibilidad',
    description:
      'SEO en Google, Google Business Profile, Instagram y TikTok. Que te encuentren cuando te buscan.',
  },
  {
    number: '02',
    title: 'Captación',
    description:
      'Embudos de venta, estrategia de leads y automatizaciones. Que el interés se convierta en clientes.',
  },
  {
    number: '03',
    title: 'Desarrollo',
    description:
      'Páginas web y aplicaciones a medida. Que tengas dónde recibirlos y que convierta.',
  },
  {
    number: '04',
    title: 'Contenido',
    description:
      'Diseño gráfico, fotografía de producto, fotografía y modelos de IA. Que se vea como lo que vale.',
  },
]

export function Pillars() {
  return (
    <section id="servicios" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-10">
        <Reveal>
          <SectionLabel>Lo que hacemos</SectionLabel>
        </Reveal>
        <Reveal as="h2" delay={80} className="mt-6">
          <span className="font-heading text-4xl font-extrabold leading-[0.95] tracking-tight text-balance md:text-6xl">
            Cuatro piezas. <em className="font-extrabold italic"><Mark>Un solo sistema</Mark></em>.
          </span>
        </Reveal>

        <div className="mt-14 border-t border-border">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.number} delay={i * 80}>
              <a
                href="#contacto"
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 border-b border-border px-2 py-8 transition-colors hover:bg-muted md:gap-10 md:px-4 md:py-12"
              >
                <span className="font-heading text-4xl font-extrabold tabular-nums text-brand md:text-6xl">
                  {pillar.number}
                </span>
                <div>
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-4xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    {pillar.description}
                  </p>
                </div>
                <ArrowUpRight
                  className="size-6 text-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand md:size-8"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
