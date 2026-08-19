import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export type AccordionItem = {
  title: string
  content: string
}

type AccordionProps = {
  items: AccordionItem[]
  titleClassName?: string
}

export default function Accordion({ items, titleClassName }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-mauveLight">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.title}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className={titleClassName ?? 'font-serif text-xl text-plum'}>{item.title}</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`h-4 w-4 shrink-0 text-purple transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 font-sans text-lg text-mauve">{item.content}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
