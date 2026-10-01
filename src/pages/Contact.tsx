import { Mail, MapPin, MessageCircle, Phone, type LucideIcon } from 'lucide-react'
import { siteInfo } from '@/data/site'
import Container from '@/components/ui/Container'
import ContactForm from '@/components/contact/ContactForm'
import SectionHeading from '@/components/ui/SectionHeading'

interface ChannelValue {
  text: string
  href?: string
}

interface ContactChannel {
  icon: LucideIcon
  label: string
  values: ChannelValue[]
}

const channels: ContactChannel[] = [
  {
    icon: MapPin,
    label: 'Locations',
    values: [{ text: siteInfo.contact.locations }],
  },
  {
    icon: Phone,
    label: 'Call us',
    values: siteInfo.contact.phones.map((phone) => ({
      text: phone,
      href: `tel:${phone.replace(/\s/g, '')}`,
    })),
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    values: [{
      text: siteInfo.contact.whatsapp,
      href: `https://wa.me/${siteInfo.contact.whatsapp.replace(/\D/g, '')}`,
    }],
  },
  {
    icon: Mail,
    label: 'Email us',
    values: [{ text: siteInfo.contact.email, href: `mailto:${siteInfo.contact.email}` }],
  },
]

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-brand-800 via-brand-700 to-brand-900 py-16 sm:py-20">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
            Contact
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            We'd love to hear from you
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
            Questions, partnerships or feedback — reach out and our team will respond
            as soon as possible.
          </p>
        </Container>
      </section>

      {/* Contact channels */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Reach us"
            title="Get in touch"
            description="Choose whichever channel is most convenient for you."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel) => (
              <div
                key={channel.label}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <channel.icon aria-hidden="true" className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    {channel.label}
                  </span>
                  {channel.values.map((value) => (
                    <span key={value.text} className="mt-0.5 block text-sm font-semibold text-slate-800">
                      {value.href ? (
                        <a className="hover:text-brand-700" href={value.href}>
                          {value.text}
                        </a>
                      ) : value.text}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Form */}
      <section className="border-t bg-slate-50 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Send a message"
            title="Contact form"
            description="Fill in the form below and we will get back to you."
          />
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  )
}
