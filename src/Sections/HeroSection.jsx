import { useEffect, useState } from 'react'
import Button from '../Components/Button'
import heroOne from '../assets/hero1.png'
import heroTwo from '../assets/hero2.png'
import heroThree from '../assets/hero3.png'

const slides = [
  { src: heroOne, alt: 'Three pink glazed doughnuts with colorful sprinkles' },
  { src: heroTwo, alt: 'Chocolate cake decorated with raspberries and chocolates' },
  { src: heroThree, alt: 'Strawberry cream cake with a slice removed' },
]

function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length)
    }, 3000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section
      id="home"
      aria-label="Sweet Bakery highlights"
      className="relative min-h-[680px] overflow-hidden sm:min-h-[720px] lg:min-h-screen"
    >
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out motion-reduce:transition-none"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.src} className="relative h-full w-full shrink-0">
            <img
              src={slide.src}
              alt={slide.alt}
              className="h-full w-full object-cover object-[64%_center] sm:object-center"
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#f9cada]/95 via-[#f9cada]/58 to-transparent sm:via-[#f9cada]/20" />

      <div className="relative z-10 mx-auto flex min-h-[680px] w-full max-w-7xl items-center px-5 pb-8 pt-32 sm:min-h-[720px] sm:px-8 lg:min-h-screen lg:px-12">
        <div className="max-w-[34rem]">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-[#b93643] sm:text-sm">
            Freshly baked happiness
          </p>
          <h1 className="max-w-[11ch] text-5xl font-black leading-[1.02] tracking-[-0.055em] text-[#171214] sm:text-6xl lg:text-7xl">
            The Perfect Baked Treat, Every Day!
          </h1>
          <p className="mt-6 max-w-md text-sm font-medium leading-7 text-[#5f4149] sm:text-base">
            Freshly made pastries, cakes, and sweet treats crafted to make every
            moment feel special.
          </p>
          <Button href="#menu" className="mt-8 min-w-36">
            View Menu
          </Button>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2.5"
      >
        {slides.map((slide, index) => (
          <span
            key={slide.src}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? 'w-7 bg-[#cf3f4b]'
                : 'w-2.5 bg-white/75 ring-1 ring-[#b95b68]/25'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection
