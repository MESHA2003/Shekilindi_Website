import { Compass } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-slate-50 py-20">
      <Container className="text-center">
        <p className="font-display text-7xl font-extrabold text-brand-200 sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
          The page you are looking for doesn't exist or may have been moved.
        </p>
        <div className="mt-8">
          <Button to="/" icon={Compass}>
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  )
}
