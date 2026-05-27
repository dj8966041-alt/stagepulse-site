'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'

const INQUIRY_LABELS: Record<string, string> = {
  press: 'Press pass / photo credential request',
  pitch: 'Story or album pitch',
  photography: 'Photographer submission',
  show: 'Show tip / upcoming event',
  general: 'General inquiry',
  other: 'Other',
}

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setSubmitError(null)
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitError(null)
    setStatus('sending')
    const topic = INQUIRY_LABELS[form.subject] ?? form.subject
    try {
      const res = await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: topic,
          message: form.message,
        }),
      })
      const data = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) {
        setSubmitError(data.error ?? 'Something went wrong. Please try again or email us directly.')
        setStatus('idle')
        return
      }
      setStatus('sent')
    } catch {
      setSubmitError('Could not reach the server. Check your connection and try again.')
      setStatus('idle')
    }
  }

  return (
    <div className="bg-sp-black min-h-screen">
      {/* Header */}
      <section className="pt-36 md:pt-44 pb-12 md:pb-16 border-b border-sp-border-soft">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <span className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.35em] uppercase text-sp-accent mb-6">
            <span>★</span> Get in touch
          </span>
          <h1 className="font-display italic text-5xl md:text-7xl lg:text-[6rem] tracking-tight text-sp-text leading-[0.95] mb-6 max-w-3xl text-balance">
            Contact.
          </h1>
          <p className="text-sp-soft text-base md:text-xl max-w-2xl leading-relaxed font-light">
            Playing a show? Pitching a story? Want to collaborate? We read everything that comes in.
          </p>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-5 md:px-8 py-14 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 md:gap-20">
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="space-y-12">
              <div>
                <h2 className="font-display italic text-3xl md:text-4xl tracking-tight text-sp-text mb-5 leading-tight">
                  Reach the desk.
                </h2>
                <p className="text-sp-soft text-sm md:text-base leading-relaxed font-light">
                  We're a small, independent operation, so response times can vary — but we do respond. Press and media inquiries typically get a reply within 48 hours.
                </p>
              </div>

              <dl className="space-y-7">
                <div className="pt-6 border-t border-sp-border-soft">
                  <dt className="text-[0.65rem] tracking-[0.3em] uppercase text-sp-muted mb-2">
                    Press & media
                  </dt>
                  <dd>
                    <a
                      href="mailto:stagepulselive@gmail.com"
                      className="text-sp-text-2 hover:text-sp-accent transition-colors text-sm md:text-base"
                    >
                      stagepulselive@gmail.com
                    </a>
                    <p className="text-sp-muted text-xs mt-2 leading-relaxed">
                      Photo passes, press credentials, interviews, media inquiries.
                    </p>
                  </dd>
                </div>

                <div className="pt-6 border-t border-sp-border-soft">
                  <dt className="text-[0.65rem] tracking-[0.3em] uppercase text-sp-muted mb-2">
                    General & pitches
                  </dt>
                  <dd>
                    <a
                      href="mailto:stagepulselive@gmail.com"
                      className="text-sp-text-2 hover:text-sp-accent transition-colors text-sm md:text-base"
                    >
                      stagepulselive@gmail.com
                    </a>
                    <p className="text-sp-muted text-xs mt-2 leading-relaxed">
                      Story pitches, show tips, photographer submissions.
                    </p>
                  </dd>
                </div>

                <div className="pt-6 border-t border-sp-border-soft">
                  <dt className="text-[0.65rem] tracking-[0.3em] uppercase text-sp-muted mb-3">
                    Find us on
                  </dt>
                  <dd className="flex flex-col gap-2">
                    <a
                      href="https://instagram.com/stagepulselive"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sp-text-2 hover:text-sp-accent transition-colors text-sm"
                    >
                      Instagram — @stagepulselive
                    </a>
                    <a
                      href="https://tiktok.com/@stagepulselive"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sp-text-2 hover:text-sp-accent transition-colors text-sm"
                    >
                      TikTok — @stagepulselive
                    </a>
                  </dd>
                </div>

                <div className="pt-6 border-t border-sp-border-soft">
                  <dt className="text-[0.65rem] tracking-[0.3em] uppercase text-sp-muted mb-2">
                    Based in
                  </dt>
                  <dd>
                    <p className="text-sp-text-2 text-sm md:text-base">San Antonio, Texas</p>
                    <p className="text-sp-muted text-xs mt-2 leading-relaxed">
                      We cover shows across Texas and travel for the right story.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-8">
            {status === 'sent' ? (
              <div className="bg-sp-card border border-sp-border p-10 md:p-16 text-center">
                <div className="text-sp-accent mb-6 text-xl">★</div>
                <h2 className="font-display italic text-4xl md:text-5xl tracking-tight text-sp-text mb-4 leading-tight">
                  Message sent.
                </h2>
                <p className="text-sp-soft text-base leading-relaxed max-w-sm mx-auto font-light">
                  We've received your message and will respond within 48 hours. Thanks for reaching out.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[0.65rem] tracking-[0.3em] uppercase text-sp-muted mb-3"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-sp-card border border-sp-border text-sp-text placeholder:text-sp-muted/50 px-4 py-3.5 text-sm focus:outline-none focus:border-sp-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[0.65rem] tracking-[0.3em] uppercase text-sp-muted mb-3"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-sp-card border border-sp-border text-sp-text placeholder:text-sp-muted/50 px-4 py-3.5 text-sm focus:outline-none focus:border-sp-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[0.65rem] tracking-[0.3em] uppercase text-sp-muted mb-3"
                  >
                    Inquiry type *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-sp-card border border-sp-border text-sp-text px-4 py-3.5 text-sm focus:outline-none focus:border-sp-accent transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select a topic
                    </option>
                    <option value="press">Press pass / photo credential request</option>
                    <option value="pitch">Story or album pitch</option>
                    <option value="photography">Photographer submission</option>
                    <option value="show">Show tip / upcoming event</option>
                    <option value="general">General inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {submitError && (
                  <p className="text-sm text-sp-accent border border-sp-accent/40 bg-sp-accent/5 px-4 py-3">
                    {submitError}
                  </p>
                )}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[0.65rem] tracking-[0.3em] uppercase text-sp-muted mb-3"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={8}
                    placeholder="Tell us what's on your mind. If you're requesting press credentials, include the show name, date, venue, and your outlet or portfolio link."
                    className="w-full bg-sp-card border border-sp-border text-sp-text placeholder:text-sp-muted/50 px-4 py-3.5 text-sm focus:outline-none focus:border-sp-accent transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-wrap items-start gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex items-center gap-2 bg-sp-accent text-sp-black text-[0.7rem] tracking-[0.25em] uppercase font-semibold px-8 py-4 hover:bg-sp-accent-hover transition-colors disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send message →'}
                  </button>
                  <p className="text-sp-muted text-xs leading-relaxed pt-1 max-w-xs">
                    We don't share your information with anyone. This form goes directly to our inbox.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
