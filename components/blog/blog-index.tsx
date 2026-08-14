'use client'

import { useState } from 'react'
import type { BlogPostSummary } from '@/lib/blog'
import { BlogCard } from './blog-card'

export function BlogIndex({ posts }: { posts: BlogPostSummary[] }) {
  const categories = ['Todos', ...Array.from(new Set(posts.map((post) => post.category)))]
  const [category, setCategory] = useState('Todos')
  const filtered = category === 'Todos' ? posts : posts.filter((post) => post.category === category)
  const [featured, ...rest] = filtered

  return (
    <>
      <div className="flex flex-wrap gap-2" aria-label="Filtrar artículos por categoría">{categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item} className={`rounded-full border px-4 py-2 text-sm transition-colors ${category === item ? 'border-brand bg-brand text-ink' : 'border-border hover:border-brand'}`}>{item}</button>)}</div>
      {featured ? <div className="mt-12"><BlogCard post={featured} featured /></div> : <p className="mt-12 text-muted-foreground">No hay artículos en esta categoría.</p>}
      <div className="mt-14 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">{rest.map((post) => <BlogCard key={post.slug} post={post} />)}</div>
      <p className="mt-14 text-sm text-muted-foreground">Página 1 de 1 · Se activará la paginación al superar seis artículos.</p>
    </>
  )
}
