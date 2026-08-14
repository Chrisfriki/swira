import Image from 'next/image'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const LOGOS = [
  'Marca 01 · placeholder',
  'Marca 02 · placeholder',
  'Marca 03 · placeholder',
  'Marca 04 · placeholder',
  'Marca 05 · placeholder',
  'Marca 06 · placeholder',
  'Marca 07 · placeholder',
  'Marca 08 · placeholder',
]

function LogoRow() {
  return (
    <ul className="flex shrink-0 items-center gap-16 pr-16">
      {LOGOS.map((name) => (
        <li key={name} className="flex items-center">
          <Image
            src={`${basePath}/placeholder.svg?height=40&width=140&query=${encodeURIComponent(
              name + ' logo monochrome wordmark',
            )}`}
            alt={`Logotipo de ${name}`}
            width={140}
            height={40}
            className="h-8 w-auto opacity-50 grayscale"
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
