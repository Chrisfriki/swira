import { cn } from '@/lib/utils'

/** Small section eyebrow label with a green dot. */
export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase',
        className,
      )}
    >
      <span aria-hidden="true" className="size-2 bg-brand" />
      {children}
    </span>
  )
}

/**
 * Thick green underline under a keyword. Uses box-shadow-free inline
 * background so corners stay perfectly square.
 */
export function Mark({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-[0.08em] z-0 h-1 bg-brand"
      />
    </span>
  )
}
