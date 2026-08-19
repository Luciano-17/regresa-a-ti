type TestimonialCardProps = {
  headline: string
  quote: string
  name: string
  image?: { src: string; alt: string }
}

export default function TestimonialCard({ headline, quote, name, image }: TestimonialCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl bg-white p-8 text-center shadow-sm">
      {image && (
        <img
          src={image.src}
          alt={image.alt}
          width={50}
          height={50}
          loading="lazy"
          className="h-16 w-16 rounded-full object-cover"
        />
      )}
      <p className="font-serif text-xl font-semibold text-plum">&ldquo;{headline}&rdquo;</p>
      <p className="font-sans text-base text-mauve">{quote}</p>
      <span className="font-sans text-base font-medium text-purple">— {name}</span>
    </div>
  )
}
