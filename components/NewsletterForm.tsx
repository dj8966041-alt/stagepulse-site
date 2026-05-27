'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'

type Props = {
  /** Tag used in the notification email to track which placement the signup came from. */
  source?: string
  /** Optional className applied to the form root for layout overrides. */
  className?: string
}

export default function NewsletterForm({ source = 'website', className = '' }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    setStatus('sending')
    try {
      const res = await fetch('/api/newsletter/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      })
      const data = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.')
        setStatus('idle')
        return
      }
      setStatus('sent')
      setEmail('')
    } catch {
      setError('Could not reach the server. Check your connection and try again.')
      setStatus('idle')
    }
  }

  if (status === 'sent') {
    return (
      <div className={className} role="status" aria-live="polite">
        <div className="flex items-center gap-3">
          <span className="text-sp-accent text-lg">★</span>
          <p className="font-display italic text-xl md:text-2xl text-sp-text leading-tight">
            You're in. We'll be in touch.
          </p>
        </div>
        <p className="text-sp-soft text-sm leading-relaxed mt-3 font-light">
          Look for the first dispatch from StagePulse soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      <label htmlFor={`newsletter-email-${source}`} className="sr-only">
        Email address
      </label>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          id={`newsletter-email-${source}`}
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setError(null)
          }}
          placeholder="you@inbox.com"
          autoComplete="email"
          disabled={status === 'sending'}
          className="flex-1 min-w-0 bg-sp-card border border-sp-border text-sp-text placeholder:text-sp-muted/60 px-5 py-4 text-sm focus:outline-none focus:border-sp-accent transition-colors disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center justify-center gap-2 bg-sp-accent text-sp-black text-[0.7rem] tracking-[0.25em] uppercase font-semibold px-7 py-4 hover:bg-sp-accent-hover transition-colors disabled:opacity-60 whitespace-nowrap"
        >
          {status === 'sending' ? 'Subscribing…' : 'Subscribe →'}
        </button>
      </div>
      {error && (
        <p className="mt-3 text-sm text-sp-accent" role="alert">
          {error}
        </p>
      )}
      <p className="mt-4 text-sp-muted text-xs leading-relaxed">
        No spam. Unsubscribe anytime. We never share your email.
      </p>
    </form>
  )
}
