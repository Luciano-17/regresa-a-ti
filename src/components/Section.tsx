import type { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

type Background = 'cream' | 'plum' | 'white'

const bgClasses: Record<Background, string> = {
  cream: 'bg-cream',
  plum: 'bg-plum text-cream',
  white: 'bg-white',
}

type SectionProps = PropsWithChildren<{
  background?: Background
  className?: string
}>

export default function Section({ children, background = 'white', className = '' }: SectionProps) {
  return (
    <section className={`${bgClasses[background]} py-20 md:py-28`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`mx-auto max-w-6xl px-6 md:px-10 ${className}`}
      >
        {children}
      </motion.div>
    </section>
  )
}
