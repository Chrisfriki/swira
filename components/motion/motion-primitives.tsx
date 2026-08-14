'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useHydratedReducedMotion } from './use-hydrated-reduced-motion'

export function WordReveal({ text, emphasis, className }: { text: string; emphasis?: string; className?: string }) {
  const reduceMotion = useHydratedReducedMotion()
  const words = text.split(' ')
  return (
    <span className={cn('inline-flex flex-wrap', className)}>
      <span className="sr-only">{text}</span>
      <span className="contents" aria-hidden="true">
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className="-my-[0.12em] overflow-hidden py-[0.12em] pr-[0.24em]">
          <motion.span
            className={cn('inline-block', emphasis && word.replace(/[.,¿?]/g, '') === emphasis.replace(/[.,¿?]/g, '') && 'font-extrabold italic text-brand')}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 30, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: reduceMotion ? 0.15 : 0.6, delay: reduceMotion ? 0 : index * 0.04, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
          </span>
        ))}
      </span>
    </span>
  )
}

export function ImageReveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useHydratedReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { clipPath: 'inset(100% 0 0 0)' }}
      whileInView={reduceMotion ? { opacity: 1 } : { clipPath: 'inset(0% 0 0 0)' }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduceMotion ? 0.18 : 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduceMotion = useHydratedReducedMotion()
  const pointerX = useMotionValue(0.5)
  const pointerY = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [6, -6]), { stiffness: 180, damping: 20 })
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-6, 6]), { stiffness: 180, damping: 20 })

  return (
    <motion.div
      className={className}
      style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={(event) => {
        if (reduceMotion) return
        const rect = event.currentTarget.getBoundingClientRect()
        pointerX.set((event.clientX - rect.left) / rect.width)
        pointerY.set((event.clientY - rect.top) / rect.height)
      }}
      onPointerLeave={() => { pointerX.set(0.5); pointerY.set(0.5) }}
    >
      {children}
    </motion.div>
  )
}
