type PageHeroProps = {
  image: string
  alt: string
  eyebrow?: string
  title: string
  imageClassName?: string
}

export default function PageHero({ image, alt, eyebrow, title, imageClassName = '' }: PageHeroProps) {
  return (
    <div className="relative flex h-[45vh] min-h-[380px] w-full items-center justify-center overflow-hidden md:h-[55vh]">
      <img
        src={image}
        alt={alt}
        width={50}
        height={50}
        loading="eager"
        className={`absolute inset-0 h-full w-full object-cover ${imageClassName}`}
      />
      <div className="absolute inset-0 bg-plum/55" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 text-center">
        {eyebrow && (
          <span className="font-sans text-base font-semibold uppercase tracking-widest text-cream">
            {eyebrow}
          </span>
        )}
        <h1 className="font-serif text-4xl text-cream md:text-6xl">{title}</h1>
      </div>
    </div>
  )
}
