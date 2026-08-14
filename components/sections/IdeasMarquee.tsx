function MarqueeLine() {
  return <span className="flex shrink-0 items-center gap-8 pr-8"><strong>ESTRATEGIA CON CRITERIO</strong><span className="size-2.5 rounded-full bg-brand" /><em className="font-normal italic">CREATIVIDAD QUE SE MUEVE</em><span className="size-2.5 rounded-full bg-brand" /></span>
}

export function IdeasMarquee() {
  return <aside data-header-theme="dark" aria-label="Estrategia con criterio. Creatividad que se mueve." className="overflow-hidden border-y border-white/10 bg-deep-900 py-6 text-white"><div aria-hidden="true" className="flex w-max animate-swira-marquee-slow font-heading text-2xl tracking-tight md:text-4xl"><span className="flex shrink-0"><MarqueeLine /><MarqueeLine /><MarqueeLine /></span><span className="flex shrink-0"><MarqueeLine /><MarqueeLine /><MarqueeLine /></span></div></aside>
}
