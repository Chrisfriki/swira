import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { SiteHeader } from '@/components/swira/site-header'
import { SiteFooter } from '@/components/swira/site-footer'
import { BlogCard } from '@/components/blog/blog-card'
import { ReadingProgress, ShareButtons, TableOfContents } from '@/components/blog/article-tools'
import { mdxComponents } from '@/components/blog/mdx-components'
import { categoryToSlug, getAllPosts, getPostBySlug, getTableOfContents } from '@/lib/blog'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const siteUrl = 'https://swira.vercel.app'

export function generateStaticParams() { return getAllPosts().map((post) => ({ slug: post.slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return { title: post.title, description: post.description, alternates: { canonical: `/blog/${slug}/` }, openGraph: { title: post.title, description: post.description, type: 'article', publishedTime: post.date, authors: [post.author], images: [{ url: post.cover }] }, twitter: { card: 'summary_large_image', images: [post.cover] } }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()
  const toc = getTableOfContents(post.content)
  const related = getAllPosts().filter((item) => item.slug !== post.slug && item.category === post.category).slice(0, 3).map(({ content: _content, ...item }) => item)
  const url = `${siteUrl}/blog/${post.slug}/`
  const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.description, datePublished: post.date, author: { '@type': 'Organization', name: post.author }, image: `${siteUrl}${post.cover}`, mainEntityOfPage: url }
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: siteUrl }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog/` }, { '@type': 'ListItem', position: 3, name: post.category, item: `${siteUrl}/blog/categoria/${categoryToSlug(post.category)}/` }, { '@type': 'ListItem', position: 4, name: post.title, item: url }] }

  return <><ReadingProgress /><SiteHeader /><main><article data-theme="light" className="bg-paper pt-36 pb-24 text-ink md:pt-44 md:pb-32"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }} /><header className="mx-auto max-w-5xl px-6 lg:px-10"><nav aria-label="Migas de pan" className="text-sm text-muted-foreground"><Link href="/">Inicio</Link> › <Link href="/blog">Blog</Link> › <Link href={`/blog/categoria/${categoryToSlug(post.category)}`}>{post.category}</Link> › <span>{post.title}</span></nav><p className="mt-10 text-xs font-semibold tracking-[.16em] text-brand uppercase">{post.category} · {post.readingMinutes} min de lectura</p><h1 className="mt-5 font-heading text-[clamp(2.8rem,7vw,7rem)] font-extrabold leading-[.9] tracking-tight text-balance">{post.title}</h1><p className="mt-7 max-w-3xl text-xl leading-relaxed text-muted-foreground">{post.description}</p><div className="mt-7 flex flex-wrap items-center justify-between gap-5 text-sm text-muted-foreground"><span>{post.author} · <time dateTime={post.date}>{new Intl.DateTimeFormat('es-ES', { dateStyle: 'long' }).format(new Date(`${post.date}T12:00:00`))}</time></span><ShareButtons title={post.title} url={url} /></div></header><div className="relative mx-auto mt-14 aspect-[16/9] max-w-[1500px] overflow-hidden"><Image src={`${basePath}${post.cover}`} alt={`Portada de ${post.title}`} fill priority unoptimized sizes="100vw" className="object-cover" /></div><div className="mx-auto mt-16 grid max-w-7xl gap-16 px-6 xl:grid-cols-[220px_minmax(0,760px)_1fr] xl:px-10"><TableOfContents items={toc} /><div className="min-w-0"><MDXRemote source={post.content} components={mdxComponents} options={{ mdxOptions: { rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]] } }} /></div></div>{related.length ? <section className="mx-auto mt-24 max-w-7xl border-t border-border px-6 pt-16 lg:px-10"><h2 className="font-heading text-4xl font-bold">Artículos relacionados</h2><div className="mt-10 grid gap-6 md:grid-cols-3">{related.map((item) => <BlogCard key={item.slug} post={item} />)}</div></section> : null}</article></main><SiteFooter /></>
}
