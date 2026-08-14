'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export function ReadingProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 28 })
  return <motion.div aria-hidden="true" className="fixed inset-x-0 top-0 z-[110] h-0.5 origin-left bg-brand" style={{ scaleX }} />
}

export function TableOfContents({ items }: { items: Array<{ level: number; title: string; id: string }> }) {
  const [active, setActive] = useState(items[0]?.id ?? '')
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: '-20% 0px -70% 0px' })
    items.forEach((item) => { const node = document.getElementById(item.id); if (node) observer.observe(node) })
    return () => observer.disconnect()
  }, [items])
  return <nav aria-label="Índice del artículo" className="sticky top-32 hidden border-l border-border pl-5 text-sm xl:block"><p className="mb-4 text-xs font-semibold tracking-[.14em] uppercase">En este artículo</p><ul className="space-y-3">{items.map((item) => <li key={item.id} className={item.level === 3 ? 'pl-3' : ''}><a href={`#${item.id}`} className={active === item.id ? 'text-brand' : 'text-muted-foreground hover:text-ink'}>{item.title}</a></li>)}</ul></nav>
}

export function ShareButtons({ title, url }: { title: string; url: string }) {
  const links = [
    ['LinkedIn', `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`],
    ['X', `https://x.com/intent/post?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`],
    ['WhatsApp', `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`],
  ]
  return <div className="flex flex-wrap gap-2" aria-label="Compartir artículo">{links.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer" className="rounded-full border border-border px-4 py-2 text-sm hover:border-brand hover:text-brand">{label}</a>)}</div>
}
