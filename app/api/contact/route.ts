import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO = 'stagepulselive@gmail.com'
/** Shown as the "From" address. Must be allowed in Resend (verified domain, or Resend test sender). Override with RESEND_FROM. */
const FROM = process.env.RESEND_FROM ?? 'contact@stagepulse.live'

type ContactBody = {
  name?: string
  email?: string
  message?: string
  subject?: string
  topic?: string
}

export async function POST(request: Request) {
  let body: ContactBody
  try {
    body = (await request.json()) as ContactBody
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const message = typeof body.message === 'string' ? body.message.trim() : ''
  const topic =
    (typeof body.subject === 'string' && body.subject.trim()) ||
    (typeof body.topic === 'string' && body.topic.trim()) ||
    ''

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Missing required fields. Expected name, email, and message (and optionally subject or topic).' },
      { status: 400 }
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: 'RESEND_API_KEY is not configured' },
      { status: 500 }
    )
  }

  const resend = new Resend(apiKey)

  const emailSubject = topic
    ? `[StagePulse] ${topic} — ${name}`
    : `[StagePulse] Message from ${name}`

  const textBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    topic ? `Topic: ${topic}` : null,
    '',
    'Message:',
    message,
  ]
    .filter((line) => line !== null)
    .join('\n')

  const { data, error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: emailSubject,
    text: textBody,
    html: buildHtml({ name, email, topic, message }),
  })

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.statusCode && error.statusCode < 500 ? 400 : 502 }
    )
  }

  return NextResponse.json({ ok: true, id: data?.id })
}

function buildHtml(args: { name: string; email: string; topic: string; message: string }) {
  const { name, email, topic, message } = args
  return `
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    ${topic ? `<p><strong>Topic:</strong> ${escapeHtml(topic)}</p>` : ''}
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
  `.trim()
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
