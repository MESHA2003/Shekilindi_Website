import { Image as ImageIcon } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/theme'

interface SmartImageProps {
  /** Public path, e.g. /images/businesses/herbal-clinic.jpg */
  src: string
  alt: string
  className?: string
  /** Tailwind gradient classes for the placeholder background */
  gradient?: string
  /** Optional label shown on the placeholder */
  label?: string
  /** Use 'eager' for above-the-fold slider images to avoid blank transitions */
  loading?: 'lazy' | 'eager'
}

/**
 * Renders an <img> with an automatic gradient placeholder.
 * If the image file is missing (or fails to load), a clean branded
 * placeholder is shown instead — so pages never break while real
 * photography is being collected. Drop a file into public/images/...
 * and update the data reference to replace a placeholder.
 */
export default function SmartImage({
  src,
  alt,
  className,
  gradient = 'from-brand-700 via-brand-600 to-brand-900',
  label,
  loading = 'lazy',
}: SmartImageProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden bg-gradient-to-br',
        gradient,
        className,
      )}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex flex-col items-center gap-2 p-4 text-center text-white/80">
          <ImageIcon aria-hidden="true" className="size-8 opacity-80" />
          {label ? (
            <span className="text-xs font-medium uppercase tracking-wider opacity-90">
              {label}
            </span>
          ) : null}
        </div>
      )}
    </div>
  )
}
