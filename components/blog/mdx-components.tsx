import Image from 'next/image'
import Link from 'next/link'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function CtaBlock() {
  return <aside className="my-12 rounded-xl bg-deep-900 p-7 text-white md:p-10"><p className="font-heading text-2xl font-bold md:text-3xl">¿Quieres aplicar esto a <em className="italic text-brand">tu negocio</em>?</p><p className="mt-3 text-white/65">Revisamos tu caso contigo, sin presentaciones genéricas.</p><Link href="/#contacto" className="mt-6 inline-flex rounded-full bg-brand px-5 py-3 font-medium text-ink">Agendar reunión</Link></aside>
}

export const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 {...props} className="mt-16 scroll-mt-32 font-heading text-3xl font-bold tracking-tight text-ink md:text-5xl" />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 {...props} className="mt-10 scroll-mt-32 font-heading text-2xl font-bold tracking-tight text-ink md:text-3xl" />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p {...props} className="mt-6 text-lg leading-[1.8] text-[#374151]" />,
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul {...props} className="mt-6 list-disc space-y-3 pl-6 text-lg leading-relaxed text-[#374151] marker:text-brand" />,
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => <blockquote {...props} className="my-8 border-l-4 border-brand pl-6 font-heading text-2xl font-bold italic text-ink" />,
  a: ({ href = '', ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => href.startsWith('/') ? <Link href={href} {...props} className="font-medium underline decoration-brand decoration-2 underline-offset-4" /> : <a href={href} {...props} className="font-medium underline decoration-brand decoration-2 underline-offset-4" />,
  img: ({ src = '', alt = '' }: React.ImgHTMLAttributes<HTMLImageElement>) => <figure className="my-12 xl:-mx-24"><Image src={`${basePath}${String(src)}`} alt={alt} width={1600} height={900} unoptimized className="h-auto w-full rounded-xl" /><figcaption className="mt-3 text-center text-sm text-muted-foreground">{alt}</figcaption></figure>,
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => <pre {...props} className="my-8 overflow-x-auto rounded-xl bg-ink p-6 text-sm text-white" />,
  CtaBlock,
}
