import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { WHATSAPP_URL } from '../lib/constants'
import { trackWhatsAppConversion } from '../lib/gtag'

type Variant = 'primary' | 'whatsapp'
type Size = 'md' | 'lg' | 'xl'

const sizeClasses: Record<Size, string> = {
  md: 'px-4 py-1.5 text-sm md:px-6 md:py-2 md:text-lg',
  lg: 'px-5 py-2 text-sm md:px-10 md:py-4 md:text-xl',
  xl: 'px-6 py-2.5 text-base md:px-12 md:py-5 md:text-2xl',
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full text-center font-sans font-medium transition-colors duration-200'

type CommonProps = {
  variant?: Variant
  size?: Size
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: undefined
    whatsappMessage?: undefined
  }

type ButtonAsLink = CommonProps &
  Omit<LinkProps, 'to' | 'className'> & {
    to: string
    variant?: 'primary'
    whatsappMessage?: undefined
  }

type ButtonAsWhatsApp = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    variant: 'whatsapp'
    whatsappMessage?: string
    to?: undefined
  }

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsWhatsApp

export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className = '' } = props
  const classes = `${baseClasses} ${sizeClasses[size]} ${
    variant === 'whatsapp' ? 'bg-[#25D366] text-white hover:brightness-95' : 'bg-purple text-cream hover:bg-plum'
  } ${className}`

  if (variant === 'whatsapp') {
    const {
      whatsappMessage,
      children,
      variant: _variant,
      size: _size,
      className: _className,
      to: _to,
      onClick,
      ...anchorProps
    } = props as ButtonAsWhatsApp
    return (
      <a
        href={WHATSAPP_URL(whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={(event) => {
          trackWhatsAppConversion()
          onClick?.(event)
        }}
        {...anchorProps}
      >
        <FontAwesomeIcon icon={faWhatsapp} className="h-3.5 w-3.5 shrink-0 md:h-5 md:w-5" />
        {children ?? 'Escribinos por WhatsApp'}
      </a>
    )
  }

  if (props.to) {
    const {
      to,
      children,
      variant: _variant,
      size: _size,
      className: _className,
      whatsappMessage: _whatsappMessage,
      ...linkProps
    } = props as ButtonAsLink
    return (
      <Link to={to} className={classes} {...linkProps}>
        {children}
      </Link>
    )
  }

  const { children, variant: _variant, size: _size, className: _className, to: _to, ...buttonProps } =
    props as ButtonAsButton
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
