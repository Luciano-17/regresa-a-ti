import type { ReactNode } from 'react'
import Section from './Section'

type LegalLayoutProps = {
  title: string
  children: ReactNode
}

export default function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <Section background="cream">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-center font-serif text-4xl text-plum md:text-6xl">{title}</h1>
        <div className="mt-12 space-y-8 font-sans text-lg leading-relaxed text-plum/80">
          {children}
        </div>
      </div>
    </Section>
  )
}
