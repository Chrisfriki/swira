import { getAllPosts } from '@/lib/blog'

export const dynamic = 'force-static'

export function GET() {
  const siteUrl = 'https://swira.vercel.app'
  const posts = getAllPosts()
  const xml = `<?xml version="1.0" encoding="UTF-8" ?><rss version="2.0"><channel><title>Blog de Swira</title><link>${siteUrl}/blog/</link><description>Ideas sobre marketing digital, contenido y desarrollo.</description>${posts.map((post) => `<item><title><![CDATA[${post.title}]]></title><link>${siteUrl}/blog/${post.slug}/</link><guid>${siteUrl}/blog/${post.slug}/</guid><pubDate>${new Date(`${post.date}T12:00:00Z`).toUTCString()}</pubDate><description><![CDATA[${post.description}]]></description></item>`).join('')}</channel></rss>`
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } })
}
