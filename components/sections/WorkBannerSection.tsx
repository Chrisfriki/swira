import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function WorkBannerSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32 lg:px-10">
      <Link href="/casos" className="group relative block overflow-hidden rounded-[2rem] bg-[#0b1020] px-7 py-16 text-white md:px-14 md:py-24">
        <div className="absolute -top-36 right-0 size-[34rem] rounded-full bg-blue-600/60 blur-[90px] transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute -bottom-40 left-1/3 size-96 rounded-full bg-cyan-400/35 blur-[100px]" />
        <p className="relative text-xs tracking-[.2em] text-brand uppercase">Trabajo seleccionado</p>
        <h2 className="relative mt-5 max-w-4xl font-heading text-5xl font-extrabold leading-[.95] tracking-tight md:text-7xl">Ideas bonitas. Resultados todavía mejores.</h2>
        <span className="relative mt-10 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black">Explorar casos <ArrowUpRight className="size-4" /></span>
      </Link>
    </section>
  )
}
