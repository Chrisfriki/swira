import Image from 'next/image'
import { Reveal } from './reveal'
import { Mark } from './primitives'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const TEAM = [
  { name: 'Nombre por definir', role: 'Estrategia y dirección', src: '/team/team-01.svg' },
  { name: 'Nombre por definir', role: 'Desarrollo y producto', src: '/team/team-02.svg' },
  { name: 'Nombre por definir', role: 'Contenido y fotografía', src: '/team/team-03.svg' },
  { name: 'Nombre por definir', role: 'Captación y campañas', src: '/team/team-04.svg' },
]

export function Team() {
  return (
    <section id="nosotros" className="scroll-mt-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-10">
        <Reveal as="h2">
          <span className="font-heading text-4xl font-extrabold leading-[0.95] tracking-tight text-balance md:text-6xl">
            Detrás de esto <em className="font-extrabold italic"><Mark>hay personas</Mark></em>.
          </span>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Somos un equipo pequeño y sin capas intermedias. Hablas con quien
            hace el trabajo, no con un gestor de cuentas.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <Reveal key={member.role} delay={i * 80}>
              <figure className="group">
                <div className="relative aspect-[3/4] overflow-hidden border border-border">
                  <Image
                    src={`${basePath}${member.src}`}
                    alt={`Retrato pendiente de sustituir para el rol de ${member.role}`}
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover grayscale transition-all duration-[400ms] group-hover:grayscale-0"
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
