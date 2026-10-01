import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect } from 'react'
import type { GalleryItem } from '@/data/gallery'
import SmartImage from '@/components/ui/SmartImage'

interface GalleryLightboxProps {
  items: GalleryItem[]
  /** Active item index, or null when closed */
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function GalleryLightbox({
  items,
  index,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const open = index !== null && index >= 0 && index < items.length
  const item = open ? items[index] : null

  // Lock scroll and handle keyboard navigation while open
  useEffect(() => {
    if (!open) return

    document.body.style.overflow = 'hidden'
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onNavigate(((index ?? 0) + 1) % items.length)
      if (event.key === 'ArrowLeft') onNavigate(((index ?? 0) - 1 + items.length) % items.length)
    }
    window.addEventListener('keydown', handleKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [open, index, items.length, onClose, onNavigate])

  if (!open || !item) return null

  const go = (delta: number) =>
    onNavigate(((index ?? 0) + delta + items.length) % items.length)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-950/95 p-4 backdrop-blur"
      role="dialog"
      aria-modal="true"
      aria-label={`Image viewer: ${item.title}`}
      onClick={onClose}
    >
      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25"
      >
        <X aria-hidden="true" className="size-5" />
      </button>

      {/* Previous */}
      {items.length > 1 && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            go(-1)
          }}
          aria-label="Previous image"
          className="absolute left-3 z-10 flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:left-6"
        >
          <ChevronLeft aria-hidden="true" className="size-6" />
        </button>
      )}

      {/* Image */}
      <figure
        className="max-h-[85vh] w-full max-w-4xl"
        onClick={(event) => event.stopPropagation()}
      >
        <SmartImage
          src={item.image}
          alt={item.title}
          label={item.title}
          className="max-h-[75vh] w-full rounded-xl"
        />
        <figcaption className="mt-4 text-center text-sm text-brand-100">
          <span className="font-bold text-white">{item.title}</span>
          {item.caption ? <span className="mt-1 block text-brand-300">{item.caption}</span> : null}
          <span className="mt-2 block text-xs uppercase tracking-widest text-brand-400">
            {index + 1} / {items.length}
          </span>
        </figcaption>
      </figure>

      {/* Next */}
      {items.length > 1 && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            go(1)
          }}
          aria-label="Next image"
          className="absolute right-3 z-10 flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:right-6"
        >
          <ChevronRight aria-hidden="true" className="size-6" />
        </button>
      )}
    </div>
  )
}
