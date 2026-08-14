export function AmbientBackground({ compact = false }: { compact?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className={compact ? 'absolute inset-0 bg-background' : 'absolute inset-0 bg-background'} />
    </div>
  )
}
