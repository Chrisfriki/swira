import Link from 'next/link'

const SERVICES = [
  'SEO en Google',
  'Google Business Profile',
  'Instagram',
  'TikTok',
  'Embudos de venta',
  'Estrategia de leads',
  'Automatizaciones',
  'Páginas web',
  'Aplicaciones a medida',
  'Diseño gráfico',
  'Fotografía de producto',
  'Fotografía y vídeo',
  'Modelos de IA',
]

const COMPANY = [
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Trabajo', href: '/#trabajo' },
  { label: 'Blog', href: '/blog' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Contacto', href: '/#contacto' },
]

const LEGAL = ['Aviso legal', 'Política de privacidad', 'Política de cookies']

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TiktokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.5 3c.3 2.1 1.6 3.8 3.7 4.1v2.7c-1.3.1-2.6-.3-3.7-1v6.1c0 3.3-2.7 5.9-6 5.5-2.6-.3-4.6-2.5-4.6-5.2 0-3.1 2.9-5.5 6-4.9v2.9c-.4-.1-.9-.2-1.3-.1-1.2.2-2 1.2-1.9 2.4.1 1.1 1.1 2 2.2 2 1.3 0 2.3-1 2.3-2.3V3h3.3z" />
    </svg>
  )
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer data-theme="dark" className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-heading text-4xl font-extrabold lowercase tracking-tight text-white">
              swira
            </p>
            <p className="mt-4 max-w-xs text-base leading-relaxed text-white/60">
              Un solo equipo para todo tu digital. Visibilidad, captación,
              desarrollo y contenido.
            </p>
          </div>

          <nav aria-label="Servicios">
            <h2 className="text-xs font-medium tracking-[0.2em] text-white/55 uppercase">
              Servicios
            </h2>
            <ul className="mt-5 space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service}>
                  <Link
                    href="/#servicios"
                    className="text-sm text-white/80 transition-colors hover:text-brand"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Empresa">
            <h2 className="text-xs font-medium tracking-[0.2em] text-white/55 uppercase">
              Empresa
            </h2>
            <ul className="mt-5 space-y-2.5">
              {COMPANY.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-medium tracking-[0.2em] text-white/55 uppercase">
              Contacto
            </h2>
            <ul className="mt-5 space-y-2.5 text-sm text-white/80">
              <li>
                <a href="mailto:hola@swira.com" className="transition-colors hover:text-brand">
                  hola@swira.com
                </a>
              </li>
              <li>
                <a href="tel:+34910000000" className="transition-colors hover:text-brand">
                  +34 910 000 000
                </a>
              </li>
              <li className="text-white/55">Calle Gran Vía 1, Madrid</li>
              <li>
                <a href="https://wa.me/34600000000" className="transition-colors hover:text-brand">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/55">© 2026 Swira</p>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL.map((item) => (
              <li key={item}>
                <span className="text-sm text-white/55">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              aria-label="Swira en Instagram"
              className="text-white transition-colors hover:text-brand"
            >
              <InstagramIcon className="size-5" aria-hidden="true" />
            </a>
            <a
              href="https://tiktok.com"
              aria-label="Swira en TikTok"
              className="text-white transition-colors hover:text-brand"
            >
              <TiktokIcon className="size-5" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="Swira en LinkedIn"
              className="text-white transition-colors hover:text-brand"
            >
              <LinkedinIcon className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
