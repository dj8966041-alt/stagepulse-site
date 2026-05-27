import { NextResponse } from 'next/server'
import { Resend } from 'resend'

/**
 * Newsletter subscription endpoint.
 *
 * Behavior:
 *  1. Validate the email.
 *  2. If RESEND_AUDIENCE_ID is configured, add the subscriber to that Resend
 *     audience. (Set this in your Resend dashboard → Audiences → copy the ID.)
 *  3. Always send a notification email to TO (stagepulselive@gmail.com) so the
 *     submission is captured even before an audience is configured. This means
 *     subscriber emails are *always* collected — the audience is an upgrade
 *     path, not a requirement.
 *  4. Return JSON { ok: true } on success.
 *
 * If Resend is not configured at all, we still accept the request but log a
 * warning and return ok so the user-facing form doesn't break in development.
 */

const TO = 'stagepulselive@gmail.com'
const FROM = process.env.RESEND_FROM ?? 'newsletter@stagepulse.live'

type SubscribeBody = {
  email?: string
  source?: string // optional — e.g. "homepage"
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let body: SubscribeBody
  try {
    body = (await request.json()) as SubscribeBody
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
  const source = typeof body.source === 'string' ? body.source.trim() : 'website'

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 }
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('[newsletter] RESEND_API_KEY not set — accepting subscription without delivery.')
    return NextResponse.json({ ok: true, queued: true })
  }

  const resend = new Resend(apiKey)
  const audienceId = process.env.RESEND_AUDIENCE_ID
  const errors: string[] = []

  // 1) Add to Resend audience (if configured).
  if (audienceId) {
    try {
      // Legacy contacts.create({ audienceId }) — still supported in Resend SDK
      // and works for any audience created from the Resend dashboard.
      const { error } = await resend.contacts.create({ email, audienceId })
      if (error) {
        // 422 from Resend usually means "contact already exists" — treat as success.
        const msg = error.message || 'Unknown audience error'
        const looksLikeDuplicate = /already exist|duplicate|conflict/i.test(msg)
        if (!looksLikeDuplicate) errors.push(`audience: ${msg}`)
      }
    } catch (e) {
      errors.push(`audience: ${e instanceof Error ? e.message : 'unknown error'}`)
    }
  }

  // 2) Always email the submission to the inbox so it's collected.
  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `[StagePulse] New newsletter subscriber — ${email}`,
      text: [
        'New newsletter subscriber:',
        `  Email:  ${email}`,
        `  Source: ${source}`,
        `  At:     ${new Date().toISOString()}`,
        audienceId
          ? '\nAdded to Resend audience automatically.'
          : '\n(Resend audience not configured — set RESEND_AUDIENCE_ID to auto-add to a list.)',
      ].join('\n'),
      html: `
        <p><strong>New newsletter subscriber</strong></p>
        <p>Email: <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <p>Source: ${escapeHtml(source)}</p>
        <p style="color:#888;font-size:12px;">${new Date().toISOString()}</p>
      `.trim(),
    })
    if (error) errors.push(`notify: ${error.message}`)
  } catch (e) {
    errors.push(`notify: ${e instanceof Error ? e.message : 'unknown error'}`)
  }

  // If both audience add and notify failed, surface an error. Otherwise consider
  // the request successful — at least one path captured the email.
  if (errors.length > 0 && errors.length >= (audienceId ? 2 : 1)) {
    return NextResponse.json(
      { error: 'Could not record your subscription. Please try again or email us directly.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
