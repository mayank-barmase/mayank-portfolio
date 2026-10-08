import { useState } from 'react'
import { Mail, Linkedin, Github, Send } from 'lucide-react'
import Section from './Section.jsx'
import { links, isPlaceholderEmail } from '../config/siteConfig.js'

const empty = { name: '', email: '', subject: '', message: '' }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Enter your name (at least 2 characters).'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (v.subject.trim().length < 3) e.subject = 'Enter a subject (at least 3 characters).'
  if (v.message.trim().length < 10) e.message = 'Write a message of at least 10 characters.'
  return e
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-200">{label}</label>
      {children}
      {error && <p id={`${id}-error`} role="alert" className="mt-1 text-sm text-red-300">{error}</p>}
    </div>
  )
}

export default function Contact() {
  const [v, setV] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: '', text: '' })
  const emailSet = !isPlaceholderEmail(links.email)

  const onChange = (e) => setV({ ...v, [e.target.name]: e.target.value })
  const input = (name) => ({
    id: name, name, value: v[name], onChange,
    'aria-invalid': !!errors[name], 'aria-describedby': errors[name] ? `${name}-error` : undefined,
    className: 'w-full rounded-lg border border-edge bg-ink px-3 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-accent',
  })

  async function onSubmit(ev) {
    ev.preventDefault()
    const found = validate(v)
    setErrors(found)
    if (Object.keys(found).length) return setStatus({ type: 'error', text: 'Please fix the highlighted fields.' })
    if (!links.formEndpoint) {
      return setStatus({ type: 'info', text: 'Your details look valid, but the form is not connected to a service yet, so nothing was sent. Add a Formspree endpoint in siteConfig.js.' })
    }
    try {
      setStatus({ type: 'info', text: 'Sending...' })
      const res = await fetch(links.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(v) })
      if (!res.ok) throw new Error('Request failed')
      setV(empty)
      setStatus({ type: 'success', text: 'Message sent. Thank you!' })
    } catch {
      setStatus({ type: 'error', text: 'Could not send the message. Please try again or use email.' })
    }
  }

  const color = { error: 'text-red-300', success: 'text-emerald-300', info: 'text-slate-300' }[status.type]

  return (
    <Section id="contact" title="Contact" subtitle="Looking for an internship? Send me a message or reach out on LinkedIn or GitHub.">
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          <div className="card flex items-start gap-3"><Mail className="mt-0.5 text-accent" aria-hidden="true" />
            <div><p className="text-sm text-slate-400">Email</p>
              {emailSet ? <a className="text-slate-100 hover:text-accent" href={`mailto:${links.email}`}>{links.email}</a>
                : <span className="placeholder-tag">Placeholder: set your email in siteConfig.js</span>}</div></div>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="card flex items-center gap-3 hover:border-accent/60"><Linkedin className="text-accent" aria-hidden="true" /><span>LinkedIn <span className="sr-only">(opens in new tab)</span></span></a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="card flex items-center gap-3 hover:border-accent/60"><Github className="text-accent" aria-hidden="true" /><span>GitHub <span className="sr-only">(opens in new tab)</span></span></a>
        </div>

        <form onSubmit={onSubmit} noValidate className="card space-y-4 lg:col-span-3">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="name" label="Name" error={errors.name}><input type="text" autoComplete="name" {...input('name')} /></Field>
            <Field id="email" label="Email" error={errors.email}><input type="email" autoComplete="email" {...input('email')} /></Field>
          </div>
          <Field id="subject" label="Subject" error={errors.subject}><input type="text" {...input('subject')} /></Field>
          <Field id="message" label="Message" error={errors.message}><textarea rows="5" {...input('message')} /></Field>
          <button type="submit" className="btn btn-primary"><Send size={16} aria-hidden="true" /> Send message</button>
          <p role="status" aria-live="polite" className={`text-sm ${color}`}>{status.text}</p>
        </form>
      </div>
    </Section>
  )
}
