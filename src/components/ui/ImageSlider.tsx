import { useEffect, useState } from 'react'
import { cn } from '@/lib/theme'
import SmartImage from '@/components/ui/SmartImage'

interface ImageSliderProps {
  /**
   * Image URLs (bundled assets or public paths), in play order.
   * Each image is shown for `interval` ms before crossfading to the next.
   */
  images: string[]
  /** Time each image stays fully visible, in ms (default 4000) */
  interval?: number
  /** Tailwind gradient used as placeholder behind each image */
  gradient?: string
  /** Extra classes for the slider container (positioning, sizing, …) */
  className?: string
}

/**
 * Reusable background image slideshow.
 *
 * - Renders as an absolutely positioned layer (absolute inset-0 by default),
 *   meant to sit behind content — pass `className` to adjust.
 * - All image layers are mounted from the start (preload → no flicker),
 *   crossfading via opacity with a slow, subtle zoom.
 * - One interval per instance, cleared on unmount; skips ticks while the
 *   tab is hidden.
 * - Decorative: aria-hidden with empty alt, so it never interferes with
 *   text, navigation or screen readers.
 */
export default function ImageSlider({
  images,
  interval = 4000,
  gradient,
  className,
}: ImageSliderProps) {
  const [index, setIndex] = useState(0)
  const count = images.length

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
    <div
      aria-hidden="true"
      className={cn('absolute inset-0 overflow-hidden', className)}
    >
      {images.map((src, i) => (
        <div
          key={`${i}-${src}`}
          className={cn(
            'absolute inset-0 transition-opacity ease-in-out',
            i === index ? 'opacity-100 duration-[900ms]' : 'opacity-0 duration-500',
          )}
        >
          {/* Slow zoom: settles from 105% → 100% over 6s while visible */}
          <div
            className={cn(
              'h-full w-full transition-transform duration-[6000ms] ease-out',
              i === index ? 'scale-100' : 'scale-105',
            )}
          >
            <SmartImage
              src={src}
              alt=""
              gradient={gradient}
              loading="eager"
              className="h-full w-full"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
