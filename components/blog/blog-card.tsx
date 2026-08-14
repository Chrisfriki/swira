import Image from 'next/image'
import Link from 'next/link'
import type { BlogPostSummary } from '@/lib/blog'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function BlogCard({ post, featured = false, dark = false }: { post: BlogPostSummary; featured?: boolean; dark?: boolean }) {
  return (
    <article className={dark ? 'rounded-xl border border-white/10 bg-white/[.035] p-4' : featured ? 'grid gap-7 lg:grid-cols-[1.3fr_.7fr] lg:items-center' : ''}>
      <Link href={`/blog/${post.slug}`} className={`group relative block aspect-[16/10] overflow-hidden rounded-lg border ${dark ? 'border-white/10 bg-white/5' : 'border-border bg-muted'}`}>
        <Image src={`${basePath}${post.cover}`} alt={`Portada de ${post.title}`} fill unoptimized sizes={featured ? '(max-width: 1023px) 100vw, 65vw' : '(max-width: 1023px) 100vw, 33vw'} className="object-cover transition-transform duration-700 group-hover:scale-105" />
      </Link>
      <div className={featured ? '' : 'mt-5'}>
        <p className="text-xs font-semibold tracking-[.14em] text-brand uppercase">{post.category} · {post.readingMinutes} min</p>
        <h2 className={`mt-3 font-heading font-bold leading-tight tracking-tight text-balance ${featured ? 'text-3xl md:text-5xl' : 'text-2xl'}`}><Link href={`/blog/${post.slug}`} className={dark ? 'text-white hover:text-brand' : 'hover:text-deep-700'}>{post.title}</Link></h2>
        <p className={`mt-4 line-clamp-3 leading-relaxed ${dark ? 'text-white/60' : 'text-muted-foreground'}`}>{post.description}</p>
      </div>
    </article>
  )
}
