import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import type { HeroSlide } from '@/data/heroSlides'
import { cn } from '@/lib/theme'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import SmartImage from '@/components/ui/SmartImage'

interface HeroSliderProps {
  slides: HeroSlide[]
  /** Time each slide stays fully visible, in ms (default 4000) */
  interval?: number
}

/**
 * Home hero slideshow — IMAGE + EYEBROW + TITLE + DESCRIPTION + CTAs
 * are one synchronized unit: a single `index` state drives every layer,
 * so the background and its text can never go out of sync.
 *
 * - 4s per slide, looping automatically (no clicks required).
 * - Crossfade (~900ms) + slow subtle zoom on the images.
 * - Text fades/slides out quickly, then the next slide's text fades in
 *   with a gentle stagger — all inside the 4s window.
 * - All layers stay mounted (preload → no flicker/blank frames).
 * - One interval, cleaned up on unmount; skipped while tab is hidden.
 */
export default function HeroSlider({ slides, interval = 4000 }: HeroSliderProps) {
  const [index, setIndex] = useState(0)
  const count = slides.length

  const go = useCallback(
    (next: number) => setIndex((next + count) % count),
    [count],
  )

  useEffect(() => {
    if (interval <= 0 || count <= 1) return
    const timer = window.setInterval(() => {
      if (document.hidden) return
      setIndex((i) => (i + 1) % count)
    }, interval)
    return () => window.clearInterval(timer)
  }, [interval, count])

  if (count === 0) return null

  return (
    <section
      className="relative isolate flex min-h-[540px] flex-col justify-center overflow-hidden bg-brand-950 sm:min-h-[600px] lg:min-h-[680px]"
      aria-roledescription="carousel"
      aria-label="Highlights"
    >
      {/* Background image layers — crossfade + subtle zoom */}
      {slides.map((slide, i) => (
        <div
          key={`${slide.id}-image`}
          aria-hidden={i !== index}
          className={cn(
            'absolute inset-0 transition-opacity ease-in-out',
            i === index ? 'opacity-100 duration-[900ms]' : 'opacity-0 duration-500',
          )}
        >
          <div
            className={cn(
              'h-full w-full transition-transform duration-[6000ms] ease-out',
              i === index ? 'scale-100' : 'scale-105',
            )}
          >
            <SmartImage
              src={slide.image}
              alt=""
              gradient={slide.gradient}
              loading="eager"
              className="h-full w-full"
            />
          </div>
        </div>
      ))}

      {/* Readability overlay — keeps text contrast over any photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/70 to-brand-950/30"
      />

      {/* Text layers — stacked in one grid cell, synchronized with the images */}
      <div className="relative grid">
        {slides.map((slide, i) => {
          const active = i === index
          return (
            <div
              key={`${slide.id}-content`}
              aria-hidden={!active}
              inert={!active}
              className={cn(
                'col-start-1 row-start-1',
                active ? 'pointer-events-auto' : 'pointer-events-none',
              )}
            >
              <Container className="py-16 sm:py-20">
                <p
                  className={cn(
                    'mb-4 inline-flex rounded-full border border-gold-400/40 bg-gold-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-gold-400 transition-all ease-out',
                    active
                      ? 'translate-y-0 opacity-100 delay-100 duration-700'
                      : 'translate-y-3 opacity-0 delay-0 duration-300',
                  )}
                >
                  {slide.eyebrow}
                </p>
                <h1
                  className={cn(
                    'max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white transition-all ease-out sm:text-5xl lg:text-6xl',
                    active
                      ? 'translate-y-0 opacity-100 delay-200 duration-700'
                      : 'translate-y-3 opacity-0 delay-0 duration-300',
                  )}
                >
                  {slide.title}
                </h1>
                <p
                  className={cn(
                    'mt-5 max-w-xl text-base leading-relaxed text-brand-100 transition-all ease-out sm:text-lg',
                    active
                      ? 'translate-y-0 opacity-100 delay-300 duration-700'
                      : 'translate-y-3 opacity-0 delay-0 duration-300',
                  )}
                >
                  {slide.subtitle}
                </p>
                <div
                  className={cn(
                    'mt-8 flex flex-wrap gap-4 transition-all ease-out',
                    active
                      ? 'translate-y-0 opacity-100 delay-[400ms] duration-700'
                      : 'translate-y-3 opacity-0 delay-0 duration-300',
                  )}
                >
                  <Button to={slide.primaryCta.to} variant="secondary" icon={ArrowRight}>
                    {slide.primaryCta.label}
                  </Button>
                  <Button
                    to={slide.secondaryCta.to}
                    variant="outline"
                    className="border-white/40 text-white hover:border-white hover:bg-white/10"
                  >
                    {slide.secondaryCta.label}
                  </Button>
                </div>
              </Container>
            </div>
          )
        })}
      </div>

      {/* Prev / Next controls */}
      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition hover:bg-white/25 sm:left-6"
          >
            <ChevronLeft aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition hover:bg-white/25 sm:right-6"
          >
            <ChevronRight aria-hidden="true" className="size-5" />
          </button>

          {/* Indicators */}
          <div
            className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2"
            role="tablist"
            aria-label="Slide selection"
          >
            {slides.map((slide, i) => (
              <button
                key={`${slide.id}-indicator`}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  i === index ? 'w-8 bg-gold-400' : 'w-2 bg-white/50 hover:bg-white/80',
                )}
              />
            ))}
          </div>
        </>
      )}

    </section>
  )
}
