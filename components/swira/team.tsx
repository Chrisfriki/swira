import Image from 'next/image'
import { Reveal } from './reveal'
import { Mark } from './primitives'

const TEAM = [
  { name: 'Lucía Marín', role: 'Estrategia y dirección', query: 'portrait woman creative director studio' },
  { name: 'Diego Ferrer', role: 'Desarrollo y producto', query: 'portrait man developer studio' },
  { name: 'Nadia Ortiz', role: 'Contenido y fotografía', query: 'portrait woman photographer studio' },
  { name: 'Marc Salas', role: 'Captación y campañas', query: 'portrait man marketing specialist studio' },
]

export function Team() {
  return (
    <section id="nosotros" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-10">
        <Reveal as="h2">
          <span className="font-heading text-4xl font-extrabold leading-[0.95] tracking-tight text-balance md:text-6xl">
            Detrás de esto <em className="font-extrabold italic"><Mark>hay personas</Mark></em>.
          </span>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Swira es un equipo pequeño y multidisciplinar. Estrategas,
            diseñadores, desarrolladores y creadores que trabajan juntos, en
            casa y sin subcontratar, para que tu marca crezca de verdad.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 80}>
              <figure className="group">
                <div className="relative aspect-[3/4] overflow-hidden border border-border">
                  <Image
                    src={`/placeholder.svg?height=800&width=600&query=${encodeURIComponent(member.query)}`}
                    alt={`Retrato de ${member.name}, ${member.role} en Swira`}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="font-heading text-lg font-bold tracking-tight text-foreground">
                    {member.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
