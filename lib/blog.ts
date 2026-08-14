import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const BLOG_DIRECTORY = path.join(process.cwd(), 'content/blog')

export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  category: string
  author: string
  cover: string
  tags: string[]
  draft: boolean
  readingMinutes: number
  content: string
}

export type BlogPostSummary = Omit<BlogPost, 'content'>

function readPost(filename: string): BlogPost {
  const slug = filename.replace(/\.mdx$/, '')
  const raw = fs.readFileSync(path.join(BLOG_DIRECTORY, filename), 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date),
    category: String(data.category),
    author: String(data.author),
    cover: String(data.cover),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    draft: Boolean(data.draft),
    readingMinutes: Math.max(1, Math.ceil(readingTime(content, { wordsPerMinute: 200 }).minutes)),
    content,
  }
}

export function categoryToSlug(category: string) {
  return category.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, '-')
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIRECTORY)) return []
  return fs.readdirSync(BLOG_DIRECTORY).filter((file) => file.endsWith('.mdx')).map(readPost).filter((post) => process.env.NODE_ENV !== 'production' || !post.draft).sort((a, b) => b.date.localeCompare(a.date))
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find((post) => post.slug === slug)
}

export function getAllPostSummaries(): BlogPostSummary[] {
  return getAllPosts().map(({ content: _content, ...post }) => post)
}

export function getPostsByCategory(categorySlug: string) {
  return getAllPosts().filter((post) => categoryToSlug(post.category) === categorySlug)
}

export function getCategories() {
  return Array.from(new Set(getAllPosts().map((post) => post.category)))
}

export function getTableOfContents(content: string) {
  return content.split('\n').flatMap((line) => {
    const match = /^(##|###)\s+(.+)$/.exec(line.trim())
    if (!match) return []
    const title = match[2].replace(/[*_`]/g, '')
    return [{ level: match[1].length, title, id: categoryToSlug(title.replace(/[^\w\sáéíóúüñ-]/gi, '')) }]
  })
}
