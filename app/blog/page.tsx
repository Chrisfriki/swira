import type { Metadata } from 'next'
import { SiteHeader } from '@/components/swira/site-header'
import { SiteFooter } from '@/components/swira/site-footer'
import { BlogIndex } from '@/components/blog/blog-index'
import { getAllPostSummaries } from '@/lib/blog'

export const metadata: Metadata = { title: 'Blog', description: 'Guías prácticas de SEO, contenido, desarrollo web y negocio escritas por el equipo de Swira.', alternates: { canonical: '/blog/' } }

export default function BlogPage() {
  return <><SiteHeader /><main><section data-header-theme="light" className="min-h-screen bg-paper px-6 pt-40 pb-24 text-ink md:pt-48 md:pb-32 lg:px-10"><p className="text-xs font-semibold tracking-[.16em] text-brand uppercase">Blog de Swira</p><h1 className="mt-6 max-w-6xl font-heading text-[clamp(3rem,8vw,8rem)] font-extrabold leading-[.88] tracking-tight">Ideas para crecer <em className="italic">con criterio</em>.</h1><p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">Guías claras para tomar mejores decisiones de marketing, contenido y producto digital.</p><div className="mt-14"><BlogIndex posts={getAllPostSummaries()} /></div></section></main><SiteFooter /></>
}
