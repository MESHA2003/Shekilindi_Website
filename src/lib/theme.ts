/**
 * Business accent themes.
 * Class names are written as full literals so Tailwind can detect them.
 */
export type AccentKey = 'herbal' | 'hardware' | 'stationery' | 'hotel' | 'wakala'

export interface AccentTheme {
  /** Solid accent background (buttons, badges) */
  solid: string
  /** Accent text color on light backgrounds */
  text: string
  /** Soft accent background (chips, icon tiles) */
  soft: string
  /** Border color */
  border: string
  /** Gradient for heroes / banners */
  gradient: string
  /** Dot / bar indicator */
  dot: string
}

export const accentThemes: Record<AccentKey, AccentTheme> = {
  herbal: {
    solid: 'bg-herbal-500 hover:bg-herbal-600',
    text: 'text-herbal-600',
    soft: 'bg-herbal-50',
    border: 'border-herbal-500/30',
    gradient: 'from-herbal-500 to-herbal-700',
    dot: 'bg-herbal-500',
  },
  hardware: {
    solid: 'bg-hardware-500 hover:bg-hardware-600',
    text: 'text-hardware-600',
    soft: 'bg-hardware-50',
    border: 'border-hardware-500/30',
    gradient: 'from-hardware-500 to-hardware-700',
    dot: 'bg-hardware-500',
  },
  stationery: {
    solid: 'bg-stationery-500 hover:bg-stationery-600',
    text: 'text-stationery-600',
    soft: 'bg-stationery-50',
    border: 'border-stationery-500/30',
    gradient: 'from-stationery-500 to-stationery-700',
    dot: 'bg-stationery-500',
  },
  hotel: {
    solid: 'bg-hotel-500 hover:bg-hotel-600',
    text: 'text-hotel-600',
    soft: 'bg-hotel-50',
    border: 'border-hotel-500/30',
    gradient: 'from-hotel-500 to-hotel-700',
    dot: 'bg-hotel-500',
  },
  wakala: {
    solid: 'bg-wakala-500 hover:bg-wakala-600',
    text: 'text-wakala-600',
    soft: 'bg-wakala-50',
    border: 'border-wakala-500/30',
    gradient: 'from-wakala-500 to-wakala-700',
    dot: 'bg-wakala-500',
  },
}

/** Join class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}
