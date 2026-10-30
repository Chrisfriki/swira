'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Camera, ExternalLink, Pause, Play, Volume2, VolumeX } from 'lucide-react'
import { REELS, type Reel } from '@/lib/content/reels'
import { SectionLabel } from '@/components/swira/primitives'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const assetUrl = (path: string) => path.startsWith('/') ? `${basePath}${path}` : path

function ReelVideo({ reel }: { reel: Reel }) {
  const ref = useRef<HTMLVideoElement>(null)
  const pausedByUser = useRef(false)
  const [failed, setFailed] = useState(false)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) video.pause()
      else if (!document.hidden && !pausedByUser.current) void video.play().catch(() => setPlaying(false))
    }, { threshold: 0.3 })
    const handleVisibility = () => {
      if (document.hidden) video.pause()
      else if (!pausedByUser.current) void video.play().catch(() => setPlaying(false))
    }
    observer.observe(video)
    document.addEventListener('visibilitychange', handleVisibility)
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  const togglePlayback = () => {
    const video = ref.current
    if (!video) return
    if (video.paused) {
      pausedByUser.current = false
      void video.play().catch(() => setPlaying(false))
    } else {
      pausedByUser.current = true
      video.pause()
    }
  }

  const toggleSound = () => {
    const video = ref.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
  }

  return <>
    {!failed && <video
      ref={ref}
      src={assetUrl(reel.src)}
      poster={assetUrl(reel.poster)}
      autoPlay loop playsInline muted preload="metadata"
      aria-label={`Reel de ${reel.title}`}
      onPlay={() => setPlaying(true)}
      onPause={() => setPlaying(false)}
      onError={() => setFailed(true)}
      className="absolute inset-0 size-full object-cover"
    />}
    {failed && <p role="status" className="absolute inset-x-6 top-1/2 text-center text-sm">No se ha podido cargar el vídeo. Puedes verlo en Instagram.</p>}
    {!failed && <>
      <button type="button" onClick={toggleSound} aria-label={muted ? `Activar sonido de ${reel.title}` : `Desactivar sonido de ${reel.title}`} aria-pressed={!muted} className="reel-control absolute top-4 right-4 z-10 flex items-center gap-1.5 px-2.5 py-2 text-[11px] font-semibold">
        {muted ? <VolumeX className="size-4" aria-hidden="true" /> : <Volume2 className="size-4" aria-hidden="true" />}
        <span>{muted ? 'Activar sonido' : 'Silenciar'}</span>
      </button>
      <button type="button" onClick={togglePlayback} aria-label={playing ? `Pausar ${reel.title}` : `Reproducir ${reel.title}`} className="reel-control absolute right-4 bottom-28 z-10 flex size-10 items-center justify-center">
        {playing ? <Pause className="size-4 fill-current" aria-hidden="true" /> : <Play className="size-4 fill-current" aria-hidden="true" />}
      </button>
    </>}
  </>
}

export function ReelsSection() {
  const [active, setActive] = useState(0)
  const touchStart = useRef<number | null>(null)
  const select = (direction: number) => setActive((index) => (index + direction + REELS.length) % REELS.length)

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
          if (touchStart.current === null) return
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
            <article key={reel.id} aria-label={`${index + 1} de ${REELS.length}: ${reel.title}`} aria-roledescription="diapositiva" className={`reel-card reel-card--${position} absolute overflow-hidden text-white`}>
              <div className="reel-art absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${assetUrl(reel.poster)}")` }} aria-hidden="true" />
              {selected && <ReelVideo reel={reel} />}
              <div className="pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-deep-900/60 to-transparent p-5">
                <span className="flex items-center gap-2 text-sm font-semibold"><Camera className="size-5" aria-hidden="true" />Reels</span>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep-900/90 to-transparent px-5 pt-20 pb-20">
                <p className="text-[10px] font-semibold tracking-[.16em] text-white/75 uppercase">{reel.category}</p>
                <p className="mt-1 font-heading text-xl font-bold">{reel.title}</p>
              </div>
              {selected && <a href={reel.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver reel de ${reel.title} en Instagram (se abre en una pestaña nueva)`} className="reel-control absolute bottom-5 left-5 z-10 flex items-center gap-1.5 px-3 py-2 text-xs font-semibold">Ver en Instagram <ExternalLink className="size-3.5" aria-hidden="true" /></a>}
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
    </section>
  )
}
