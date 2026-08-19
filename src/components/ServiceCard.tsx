import { Link } from 'react-router-dom'

type ServiceCardProps = {
  image: { src: string; alt: string }
  title: string
  description: string
  buttonLabel: string
  to: string
}

export default function ServiceCard({ image, title, description, buttonLabel, to }: ServiceCardProps) {
  return (
    <Link
      to={to}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg"
    >
      <img
        src={image.src}
        alt={image.alt}
        width={50}
        height={50}
        loading="lazy"
        className="h-64 w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-serif text-2xl text-plum">{title}</h3>
        <p className="line-clamp-2 font-sans text-base text-mauve">{description}</p>
        <span className="mt-auto inline-flex w-fit items-center rounded-full bg-purple px-5 py-2 font-sans text-base text-cream transition-colors duration-200 group-hover:bg-plum">
          {buttonLabel}
        </span>
      </div>
    </Link>
  )
}
