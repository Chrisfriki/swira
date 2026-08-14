import Image from 'next/image'
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

function LogoRow() {
  return (
    <ul className="flex shrink-0 items-center gap-20 pr-20">
      {LOGOS.map((logo) => (
        <li key={logo.src} className="flex h-16 w-44 shrink-0 items-center justify-center">
          <Image
            src={`${basePath}${logo.src}`}
            alt={logo.alt}
            width={2000}
            height={2000}
            unoptimized
            sizes="176px"
            className={cn('h-16 w-44 object-contain opacity-60 grayscale transition-opacity duration-300 hover:opacity-100', logo.scale)}
          />
        </li>
      ))}
    </ul>
  )
}

export function ClientLogos() {
  return (
    <section
      aria-label="Marcas que confían en Swira"
      className="border-y border-border py-14 md:py-16"
    >
      <p className="mb-10 text-center text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
        Marcas que ya confían en Swira
      </p>
      <div
        aria-hidden="true"
        className="relative overflow-hidden"
      >
        <div className="flex w-max animate-swira-marquee">
          <LogoRow />
          <LogoRow />
        </div>
      </div>
    </section>
  )
}
