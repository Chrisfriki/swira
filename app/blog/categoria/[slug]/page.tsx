import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/swira/site-header'
import { SiteFooter } from '@/components/swira/site-footer'
import { BlogCard } from '@/components/blog/blog-card'
import { categoryToSlug, getCategories, getPostsByCategory } from '@/lib/blog'

export function generateStaticParams() { return getCategories().map((category) => ({ slug: categoryToSlug(category) })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const category = getCategories().find((item) => categoryToSlug(item) === slug)
  return category ? { title: `${category} · Blog`, description: `Artículos y guías de ${category} publicados por Swira.`, alternates: { canonical: `/blog/categoria/${slug}/` } } : {}
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = getCategories().find((item) => categoryToSlug(item) === slug)
  if (!category) notFound()
  const posts = getPostsByCategory(slug).map(({ content: _content, ...post }) => post)
  return <><SiteHeader /><main><section data-header-theme="light" className="min-h-screen bg-paper px-6 pt-40 pb-24 text-ink md:pt-48 lg:px-10"><nav className="text-sm text-muted-foreground"><Link href="/">Inicio</Link> › <Link href="/blog">Blog</Link> › {category}</nav><h1 className="mt-8 font-heading text-[clamp(3rem,8vw,8rem)] font-extrabold leading-[.9] tracking-tight">Artículos de <em className="italic text-brand">{category}</em>.</h1><div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">{posts.map((post) => <BlogCard key={post.slug} post={post} />)}</div></section></main><SiteFooter /></>
}
