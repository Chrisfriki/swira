'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Pause, Play } from 'lucide-react'
import { cn } from '@/lib/utils'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const LOGOS = [
  { src: '/client-logos/client-01.png', alt: 'Logotipo del cliente 1', scale: 'scale-[1.8]' },
  { src: '/client-logos/client-02.png', alt: 'Logotipo del cliente 2', scale: 'scale-[1.65]' },
  { src: '/client-logos/client-03.png', alt: 'Logotipo del cliente 3', scale: 'scale-125' },
  { src: '/client-logos/client-04.png', alt: 'Logotipo del cliente 4', scale: 'scale-[2.3]' },
  { src: '/client-logos/client-05.png', alt: 'Logotipo del cliente 5', scale: 'scale-125' },
  { src: '/client-logos/client-06.png', alt: 'Logotipo del cliente 6', scale: 'scale-125' },
]

function LogoRow({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul aria-hidden={duplicate || undefined} className="flex shrink-0 items-center gap-12 pr-12">
      {LOGOS.map((logo) => (
        <li key={logo.src} className="flex h-16 w-36 shrink-0 items-center justify-center">
          <Image
            src={`${basePath}${logo.src}`}
            alt={logo.alt}
            width={2000}
            height={2000}
            unoptimized
            sizes="144px"
            className={cn('h-16 w-36 object-contain opacity-60 grayscale transition-opacity duration-300 hover:opacity-100', logo.scale)}
          />
        </li>
      ))}
    </ul>
  )
}

export function ClientLogos() {
  const [paused, setPaused] = useState(false)
  return (
    <section id="marcas" data-theme="light" aria-label="Marcas que confían en Swira" className="bg-paper px-6 py-16 md:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white bg-white px-4 py-16 text-center shadow-[0_16px_60px_rgba(10,22,40,.04)] md:px-12 md:py-20">
        <h2 className="font-heading text-2xl font-bold leading-tight tracking-tight md:text-4xl"><span className="block text-neutral-500">Ellos ya han dado el paso.</span><span className="mt-1 block text-ink">Tu marca puede ser la siguiente.</span></h2>
        <div className="relative mx-auto mt-10 max-w-5xl overflow-hidden border-y border-border py-8 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-swira-marquee animate-swira-logos-right" style={{ animationPlayState: paused ? 'paused' : 'running' }}><LogoRow /><LogoRow duplicate /></div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
          <Link href="/#contacto" className="text-sm font-semibold text-ink underline decoration-brand decoration-2 underline-offset-4">Hablemos de tu proyecto →</Link>
          <button type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? 'Reanudar movimiento de marcas' : 'Pausar movimiento de marcas'} className="inline-flex size-10 items-center justify-center rounded-full border border-border text-neutral-500 motion-reduce:hidden">{paused ? <Play className="size-4" aria-hidden="true" /> : <Pause className="size-4" aria-hidden="true" />}</button>
        </div>
      </div>
    </section>
  )
}
