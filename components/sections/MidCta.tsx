import { ArrowUpRight } from 'lucide-react'

export function MidCta() {
  return (
    <aside data-theme="light" className="rounded-none bg-brand py-20 text-ink md:py-24" aria-label="Invitación a agendar una reunión">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between lg:px-10">
        <p className="max-w-4xl font-heading text-3xl font-bold leading-tight tracking-tight md:text-5xl">¿Quieres un sistema así para <em className="italic">tu marca</em>?</p>
        <a href="#contacto" className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-medium text-white transition-transform hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-brand focus-visible:outline-none md:w-fit">Agendar reunión <ArrowUpRight className="size-4" aria-hidden="true" /></a>
      </div>
    </aside>
  )
}
