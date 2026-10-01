import { CheckCircle2, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { cn } from '@/lib/theme'
import Button from '@/components/ui/Button'

interface FormState {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

const web3FormsAccessKey = '001a09c2-5fdc-46a9-b24c-74fa5c9e7cbf'

const inputClasses = (invalid: boolean) =>
  cn(
    'w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-600/30',
    invalid ? 'border-red-400' : 'border-slate-300 focus:border-brand-500',
  )

/**
 * Client-side contact form submitted through Web3Forms.
 */
export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
    if (status === 'error') setStatus('idle')
    setSubmitMessage('')
  }

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.'
    }
    if (!form.message.trim()) next.message = 'Please enter your message.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate()) return

    setStatus('sending')
    setSubmitMessage('')

    const formData = new FormData(event.currentTarget)
    formData.append('access_key', web3FormsAccessKey)
    formData.set('from_name', 'Shekilindi Company Website')
    formData.set('subject', form.subject.trim() || 'Website contact form message')
    formData.set('replyto', form.email)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result: { success?: boolean; message?: string } = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Your message could not be sent. Please try again.')
      }

      setStatus('sent')
      setForm(initialState)
    } catch (error) {
      setStatus('error')
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : 'Your message could not be sent. Please try again or email info@shekilindi.co.tz.',
      )
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border border-herbal-200 bg-herbal-50 p-10 text-center">
        <CheckCircle2 aria-hidden="true" className="mx-auto size-10 text-herbal-600" />
        <h3 className="mt-4 text-xl font-bold text-slate-900">Message sent!</h3>
        <p className="mt-2 text-sm text-slate-600">
          Thank you for reaching out — we will get back to you as soon as possible.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setStatus('idle')}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-semibold text-slate-800">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={form.name}
            onChange={(event) => update('name', event.target.value)}
            aria-invalid={Boolean(errors.name)}
            className={inputClasses(Boolean(errors.name))}
          />
          {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-semibold text-slate-800">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(event) => update('email', event.target.value)}
            aria-invalid={Boolean(errors.email)}
            className={inputClasses(Boolean(errors.email))}
          />
          {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
        </div>

        <div>
          <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-semibold text-slate-800">
            Phone (optional)
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+255 ..."
            value={form.phone}
            onChange={(event) => update('phone', event.target.value)}
            className={inputClasses(false)}
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-semibold text-slate-800">
            Subject (optional)
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            placeholder="How can we help?"
            value={form.subject}
            onChange={(event) => update('subject', event.target.value)}
            className={inputClasses(false)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold text-slate-800">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          placeholder="Write your message here..."
          value={form.message}
          onChange={(event) => update('message', event.target.value)}
          aria-invalid={Boolean(errors.message)}
          className={cn(inputClasses(Boolean(errors.message)), 'resize-y')}
        />
        {errors.message ? <p className="mt-1 text-xs text-red-600">{errors.message}</p> : null}
      </div>

      <Button
        type="submit"
        size="lg"
        icon={Send}
        disabled={status === 'sending'}
        className="w-full sm:w-auto"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </Button>
      {submitMessage ? (
        <p className="text-sm text-red-700" role="alert">
          {submitMessage}
        </p>
      ) : null}
    </form>
  )
}

