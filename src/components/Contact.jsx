import { useState } from 'react'

const CONTACT_EMAIL = 'eugenelu1@outlook.com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'website visitor'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="bg-brand-ink">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-10 text-2xl font-bold text-white sm:text-3xl">Get in touch</h2>
        <form onSubmit={handleSubmit} className="flex max-w-lg flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium text-white/80">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="rounded-md bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-white/80">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="rounded-md bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium text-white/80">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="rounded-md bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>
          <button
            type="submit"
            className="w-fit rounded-md bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-orange-dark"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}
