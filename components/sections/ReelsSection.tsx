'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Bookmark, Heart, Camera, MessageCircle, Music2, Send } from 'lucide-react'
import { REELS, type Reel } from '@/lib/content/reels'
import { SectionLabel } from '@/components/swira/primitives'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const assetUrl = (path: string) => path.startsWith('/') ? `${basePath}${path}` : path

function ReelVideo({ reel }: { reel: Reel }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) video.pause()
    }, { threshold: 0.3 })
    const pauseWhenHidden = () => { if (document.hidden) video.pause() }
    observer.observe(video)
    document.addEventListener('visibilitychange', pauseWhenHidden)
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', pauseWhenHidden)
    }
  }, [])

  if (failed) return <p role="status" className="absolute inset-x-6 top-1/2 text-center text-sm">No se ha podido cargar el vídeo. Prueba de nuevo más tarde.</p>

  return <video ref={ref} src={assetUrl(reel.src!)} poster={reel.poster ? assetUrl(reel.poster) : undefined} controls playsInline muted preload="none" aria-label={reel.title} onError={() => setFailed(true)} className="absolute inset-0 size-full object-cover">
    {reel.captions ? <track kind="captions" src={assetUrl(reel.captions)} srcLang={reel.captionLanguage ?? 'es'} label={reel.captionLabel ?? 'Español'} default /> : null}
    Tu navegador no permite reproducir este vídeo.
  </video>
}

export function ReelsSection() {
  const [active, setActive] = useState(0)
  const touchStart = useRef<number | null>(null)
  const select = (direction: number) => setActive((index) => (index + direction + REELS.length) % REELS.length)
  const previewOnly = REELS.every((reel) => !reel.src)

  return (
    <section id="reels" aria-labelledby="reels-title" data-theme="light" className="reels-section overflow-hidden py-24 text-ink md:py-32">
      <div className="swira-container text-center">
        <SectionLabel>Contenido en movimiento</SectionLabel>
        <h2 id="reels-title" className="mx-auto mt-6 max-w-4xl font-heading text-[clamp(2.5rem,5vw,5rem)] font-extrabold leading-[.95] tracking-tight">Hecho para que <span className="text-deep-700">se paren a mirar.</span></h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">Reels, producto e historias. Tu marca, con algo que contar.</p>
      </div>
      <div role="region" aria-roledescription="carrusel" aria-label="Reels de Swira" className="reels-stage relative mx-auto mt-12 max-w-5xl touch-pan-y"
        onTouchStart={(event) => { touchStart.current = event.touches[0].clientX }}
        onTouchEnd={(event) => {
          if (touchStart.current === null || (event.target as HTMLElement).closest('video')) return
          const distance = event.changedTouches[0].clientX - touchStart.current
          if (Math.abs(distance) > 45) select(distance < 0 ? 1 : -1)
          touchStart.current = null
        }}
      >
        {REELS.map((reel, index) => {
          const offset = (index - active + REELS.length) % REELS.length
          const position = offset === 0 ? 'center' : offset === 1 ? 'right' : 'left'
          const selected = index === active
          return (
            <article key={reel.id} aria-label={`${index + 1} de ${REELS.length}: ${reel.title}`} aria-roledescription="diapositiva" className={`reel-card reel-card--${position} reel-art--${index} absolute overflow-hidden text-white`}>
              <div className="reel-art absolute inset-0" aria-hidden="true"><span className="reel-orbit" /><span className="reel-orbit reel-orbit--small" /></div>
              {selected && reel.src ? <ReelVideo reel={reel} /> : null}
              <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-deep-900/60 to-transparent p-5">
                <span className="flex items-center gap-2 text-sm font-semibold">{reel.platform === 'Instagram' ? <Camera className="size-5" aria-hidden="true" /> : <Music2 className="size-5" aria-hidden="true" />}{reel.platform === 'Instagram' ? 'Reels' : 'TikTok'}</span>
                {!reel.src && <span className="rounded-full border border-white/30 bg-deep-900/40 px-2.5 py-1 text-[9px] tracking-wider uppercase">Vista previa</span>}
              </div>
              {!reel.src && <div className="pointer-events-none absolute inset-0 flex flex-col justify-center pl-6 pr-14 pb-10"><span className="mb-5 text-[10px] tracking-[.2em] uppercase text-white/75">{reel.category}</span><p className="max-w-56 font-heading text-[clamp(1.65rem,3.4vw,2.75rem)] font-extrabold leading-[.98] tracking-tight">{reel.title}</p></div>}
              <div aria-hidden="true" className="pointer-events-none absolute right-4 bottom-32 flex flex-col gap-5"><Heart className="size-6" /><MessageCircle className="size-6" /><Send className="size-6" /><Bookmark className="size-6" /></div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep-900/90 to-transparent px-5 pt-16 pb-12">
                <p className="flex items-center gap-2 text-sm font-bold"><span className="flex size-7 items-center justify-center rounded-full bg-white text-xs text-ink">s<span className="text-brand">.</span></span>swira</p>
                <p className="mt-2 max-w-[85%] text-xs text-white/80">{reel.src ? reel.title : 'Un adelanto del próximo contenido.'}</p>
              </div>
              {!selected && <button type="button" onClick={() => setActive(index)} aria-label={`Ver ${reel.title}`} className="absolute inset-0 size-full rounded-[inherit] focus-visible:outline-offset-[-6px]" />}
            </article>
          )
        })}
      </div>
      <div className="relative mx-auto mt-7 flex w-fit items-center gap-7">
        <button type="button" onClick={() => select(-1)} aria-label="Reel anterior" className="reel-arrow"><ArrowLeft className="size-5" aria-hidden="true" /></button>
        <p aria-live="polite" aria-atomic="true" className="min-w-16 text-center text-sm tabular-nums"><span className="sr-only">Reel </span>{String(active + 1).padStart(2, '0')} <span className="text-muted-foreground">/ {String(REELS.length).padStart(2, '0')}</span></p>
        <button type="button" onClick={() => select(1)} aria-label="Reel siguiente" className="reel-arrow"><ArrowRight className="size-5" aria-hidden="true" /></button>
      </div>
      {previewOnly && <p className="mt-6 px-6 text-center text-xs text-muted-foreground">Vista previa del formato · pronto, nuestros vídeos aquí.</p>}
    </section>
  )
}
