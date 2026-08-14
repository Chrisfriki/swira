import Link from 'next/link'
import { getAllPostSummaries } from '@/lib/blog'
import { BlogCard } from '@/components/blog/blog-card'
import { SectionLabel } from '@/components/swira/primitives'

export function BlogSection() {
  const posts = getAllPostSummaries().slice(0, 3)

  return (
    <section id="blog" data-theme="dark" className="bg-deep-900 px-6 py-24 text-white md:py-32 lg:px-10">
      <SectionLabel className="text-white/60">Ideas útiles</SectionLabel>
      <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-5xl font-heading text-[clamp(2.5rem,6vw,6rem)] font-extrabold leading-[.9] tracking-tight">
          Lo que sabemos, <em className="italic">sin humo</em>.
        </h2>
        <Link href="/blog" className="shrink-0 font-medium text-white underline decoration-brand decoration-2 underline-offset-4 hover:text-brand">
          Ver todos los artículos →
        </Link>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => <BlogCard key={post.slug} post={post} dark />)}
      </div>
    </section>
  )
}
