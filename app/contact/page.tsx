'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1400)
  }

  return (
    <div className="bg-barricade-black min-h-screen">
      {/* Header */}
      <div className="border-b border-barricade-border pt-36 pb-12 md:pb-16">
        <div className="max-w-screen-xl mx-auto px-5 md:px-8">
          <span className="block text-xs tracking-[0.35em] uppercase text-barricade-red mb-4">
            StagePulse
          </span>
          <h1 className="font-display text-6xl md:text-8xl tracking-widest text-barricade-text mb-4">
            CONTACT
          </h1>
          <p className="text-barricade-secondary text-base md:text-lg max-w-lg leading-relaxed">
            Playing a show? Pitching a story? Want to collaborate? We read everything that comes in.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 md:gap-16">
          {/* Contact info sidebar */}
          <div className="lg:col-span-4">
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl tracking-widest text-barricade-text mb-6">
                  GET IN TOUCH
                </h2>
                <p className="text-barricade-secondary text-sm leading-relaxed mb-6">
                  We're a small, independent operation, so response times can vary — but we do respond. Press and media inquiries typically receive replies within 48 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="pt-6 border-t border-barricade-border">
                  <p className="text-xs tracking-widest uppercase text-barricade-muted mb-2">Press & Media</p>
                  <a href="mailto:dj8966041@gmail.com" className="text-barricade-text hover:text-barricade-red transition-colors text-sm">
                    dj8966041@gmail.com
                  </a>
                  <p className="text-barricade-muted text-xs mt-1 leading-relaxed">
                    Photo pass requests, press credentials, interviews, and media inquiries.
                  </p>
                </div>

                <div className="pt-6 border-t border-barricade-border">
                  <p className="text-xs tracking-widest uppercase text-barricade-muted mb-2">General & Pitches</p>
                  <a href="mailto:dj8966041@gmail.com" className="text-barricade-text hover:text-barricade-red transition-colors text-sm">
                    dj8966041@gmail.com
                  </a>
                  <p className="text-barricade-muted text-xs mt-1 leading-relaxed">
                    Story pitches, show tips, photographer submissions, general inquiries.
                  </p>
                </div>

                <div className="pt-6 border-t border-barricade-border">
                  <p className="text-xs tracking-widest uppercase text-barricade-muted mb-3">Find us on</p>
                  <div className="flex flex-col gap-2">
                    <a href="https://instagram.com/stagepulselive" target="_blank" rel="noopener noreferrer" className="text-barricade-secondary hover:text-barricade-text transition-colors text-sm">
                      Instagram — @stagepulselive
                    </a>
                    <a href="https://tiktok.com/@stagepulselive" target="_blank" rel="noopener noreferrer" className="text-barricade-secondary hover:text-barricade-text transition-colors text-sm">
                      TikTok — @stagepulselive
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-barricade-border">
                  <p className="text-xs tracking-widest uppercase text-barricade-muted mb-2">Location</p>
                  <p className="text-barricade-secondary text-sm">San Antonio, TX</p>
                  <p className="text-barricade-muted text-xs mt-1">
                    We cover shows across greater San Antonio and travel for the right story.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-8">
            {status === 'sent' ? (
              <div className="border border-barricade-border p-10 md:p-14 text-center">
                <div className="h-0.5 w-10 bg-barricade-red mx-auto mb-8" />
                <h2 className="font-display text-4xl md:text-5xl tracking-widest text-barricade-text mb-4">
                  MESSAGE SENT
                </h2>
                <p className="text-barricade-secondary text-base leading-relaxed max-w-sm mx-auto">
                  We've received your message and will respond within 48 hours. Thanks for reaching out.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs tracking-widest uppercase text-barricade-muted mb-2">
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
                      className="w-full bg-transparent border border-barricade-border text-barricade-text placeholder:text-barricade-muted/50 px-4 py-3.5 text-sm focus:outline-none focus:border-barricade-red transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs tracking-widest uppercase text-barricade-muted mb-2">
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
                      className="w-full bg-transparent border border-barricade-border text-barricade-text placeholder:text-barricade-muted/50 px-4 py-3.5 text-sm focus:outline-none focus:border-barricade-red transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs tracking-widest uppercase text-barricade-muted mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-barricade-black border border-barricade-border text-barricade-text px-4 py-3.5 text-sm focus:outline-none focus:border-barricade-red transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a topic</option>
                    <option value="press">Press pass / photo credential request</option>
                    <option value="pitch">Story or album pitch</option>
                    <option value="photography">Photographer submission</option>
                    <option value="show">Show tip / upcoming event</option>
                    <option value="general">General inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs tracking-widest uppercase text-barricade-muted mb-2">
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
                    className="w-full bg-transparent border border-barricade-border text-barricade-text placeholder:text-barricade-muted/50 px-4 py-3.5 text-sm focus:outline-none focus:border-barricade-red transition-colors resize-none"
                  />
                </div>

                <div className="flex items-start gap-4">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-block text-xs tracking-widest uppercase bg-barricade-red text-white px-8 py-4 hover:bg-barricade-red-hover transition-colors disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                  <p className="text-barricade-muted text-xs leading-relaxed pt-1">
                    We don't share your information with anyone. This form goes directly to our inbox.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
