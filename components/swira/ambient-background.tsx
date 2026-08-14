export function AmbientBackground({ compact = false }: { compact?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className={compact ? 'swira-orb swira-orb-blue -top-48 right-[-10rem]' : 'swira-orb swira-orb-blue -top-56 right-[-8rem]'} />
      <div className="swira-orb swira-orb-cyan top-[22%] left-[-18rem]" />
      <div className="swira-orb swira-orb-green right-[12%] bottom-[-18rem]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)_96%,rgba(15,23,42,.04)_100%)] bg-[size:100%_4px]" />
    </div>
  )
}
