import { ArrowRight, MessageCircle } from 'lucide-react'
import { siteInfo } from '@/data/site'
import { cn } from '@/lib/theme'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'

interface CTASectionProps {
  title?: string
  description?: string
  className?: string
}

export default function CTASection({
  title = 'Ready to work with us?',
  description = 'Whether you are a customer, partner or supplier — we would love to hear from you.',
  className,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-gradient-to-r from-brand-800 via-brand-700 to-brand-900 py-16 sm:py-20',
        className,
      )}
      aria-label="Call to action"
    >
      {/* Decorative accents */}
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 size-72 rounded-full bg-gold-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-16 size-80 rounded-full bg-brand-500/25 blur-3xl"
      />

      <Container className="relative text-center">
        <h2 className="max-w-2xl mx-auto text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button to="/contact" variant="secondary" icon={ArrowRight}>
            Contact Us
          </Button>
          <Button
            href={`https://wa.me/${siteInfo.contact.whatsapp.replace(/\D/g, '')}`}
            variant="outline"
            icon={MessageCircle}
            className="border-white/40 text-white hover:border-white hover:bg-white/10"
          >
            WhatsApp us
          </Button>
        </div>
      </Container>
    </section>
  )
}
