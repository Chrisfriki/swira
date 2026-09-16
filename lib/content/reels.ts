export type Reel = {
  id: string
  title: string
  category: string
  platform: 'Instagram' | 'TikTok'
  // Local paths under public (without basePath), or direct HTTPS video URLs.
  src?: string
  poster?: string
  captions?: string
  captionLanguage?: string
  captionLabel?: string
}

export const REELS: Reel[] = [
  { id: 'contenido', title: 'Una idea. Todas las miradas.', category: 'Contenido de marca', platform: 'Instagram' },
  { id: 'producto', title: 'Tu producto, en primer plano.', category: 'Producto', platform: 'TikTok' },
  { id: 'historia', title: 'Historias que se quedan.', category: 'Detrás de la marca', platform: 'Instagram' },
]
