import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Inter } from 'next/font/google'
import { MotionShell } from '@/components/motion/motion-shell'
import './globals.css'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const siteUrl = 'https://swira.vercel.app'
const description = 'Agencia de marketing digital especializada en SEO, captación, desarrollo web, automatizaciones, contenido, fotografía y diseño para empresas.'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Swira · Agencia de marketing digital', template: '%s · Swira' },
  description,
  alternates: { canonical: '/', types: { 'application/rss+xml': '/feed.xml' } },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Swira · Agencia de marketing digital',
    description,
    url: siteUrl,
    siteName: 'Swira',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Swira, agencia de marketing digital' }],
  },
  twitter: { card: 'summary_large_image', title: 'Swira · Agencia de marketing digital', description, images: ['/og-image.jpg'] },
  icons: {
    icon: [
      {
        url: `${basePath}/icon-light-32x32.png`,
        media: '(prefers-color-scheme: light)',
      },
      {
        url: `${basePath}/icon-dark-32x32.png`,
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: `${basePath}/icon.svg`,
        type: 'image/svg+xml',
      },
    ],
    apple: `${basePath}/apple-icon.png`,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Swira',
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    sameAs: ['https://instagram.com', 'https://tiktok.com', 'https://linkedin.com'],
    contactPoint: { '@type': 'ContactPoint', email: 'hola@swira.com', contactType: 'customer service', availableLanguage: 'Spanish' },
  }

  return (
    <html
      lang="es"
      className={`light bg-background ${inter.variable} ${archivo.variable}`}
    >
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c') }} />
        <MotionShell>{children}</MotionShell>
        {process.env.VERCEL === '1' && <Analytics />}
      </body>
    </html>
  )
}
