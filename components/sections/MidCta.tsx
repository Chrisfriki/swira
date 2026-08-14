import { ArrowUpRight } from 'lucide-react'

export function MidCta() {
  return (
    <aside className="border-y border-border bg-background py-16" aria-label="Invitación a agendar una reunión">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between lg:px-10">
        <p className="font-heading text-2xl font-bold tracking-tight md:text-3xl">¿Te suena algo de esto para <em className="italic">tu marca</em>?</p>
        <a href="#contacto" className="inline-flex w-fit items-center gap-2 rounded-full bg-surface-dark px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-brand hover:text-foreground focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none">Agendar reunión <ArrowUpRight className="size-4" aria-hidden="true" /></a>
      </div>
    </aside>
  )
}
