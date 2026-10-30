'use client'

import { useState, type CSSProperties, type PointerEvent } from 'react'
import Image from 'next/image'
import { Reveal } from './reveal'
import { WordReveal } from '@/components/motion/motion-primitives'
import { TEAM } from '@/lib/content/team'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function Team() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [focusedId, setFocusedId] = useState<string | null>(null)
  const activeId = hoveredId ?? focusedId

  const interactions = (id: string) => ({
    onPointerEnter: (event: PointerEvent<HTMLButtonElement>) => {
      if (event.pointerType !== 'touch') setHoveredId(id)
    },
    onPointerLeave: () => setHoveredId(null),
    onFocus: () => setFocusedId(id),
    onBlur: () => setFocusedId(null),
    onClick: () => setFocusedId(id),
  })

  return (
    <section id="nosotros" aria-labelledby="team-title" data-theme="light" className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-10">
        <Reveal>
          <h2 id="team-title" className="font-heading text-4xl font-extrabold leading-[0.95] tracking-tight text-balance md:text-6xl">
            <WordReveal text="Detrás de esto hay personas." emphasis="personas" />
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            De la estrategia a la producción, trabajamos juntos para dar forma
            a cada proyecto y acompañar a cada cliente.
          </p>
        </Reveal>

        <div className="team-panel mt-14" data-has-active={activeId !== null}>
          <div className="team-mosaic" role="group" aria-label="El equipo de Swira">
            {TEAM.map((member, index) => (
              <button
                key={member.id}
                type="button"
                className="team-portrait"
                data-member-id={member.id}
                data-active={activeId === member.id}
                aria-label={`Destacar a ${member.name}${member.role ? `, ${member.role}` : ''}`}
                aria-pressed={activeId === member.id}
                style={{ '--team-accent': member.color } as CSSProperties}
                {...interactions(member.id)}
              >
                {member.image ? (
                  <Image src={`${basePath}${member.image}`} alt="" fill unoptimized sizes="(min-width: 1024px) 180px, 30vw" className="team-portrait-media object-cover" />
                ) : (
                  <span className="team-portrait-media team-monogram" aria-hidden="true">
                    <span className="team-monogram-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="team-monogram-initials">{member.initials}</span>
                    <span className="team-monogram-name">{member.name}</span>
                  </span>
                )}
              </button>
            ))}
          </div>

          <ul className="team-roster" aria-label="Personas y roles">
            {TEAM.map((member) => (
              <li key={member.id}>
                <button
                  type="button"
                  className="team-person"
                  data-member-id={member.id}
                  data-active={activeId === member.id}
                  aria-pressed={activeId === member.id}
                  {...interactions(member.id)}
                >
                  <span className="team-person-dot" aria-hidden="true" />
                  <span>
                    <span className="team-person-name">{member.name}</span>
                    {member.role && <span className="team-person-role">{member.role}</span>}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
