// ==========================================
// CONTACT PAGE - PH-context contact form + info cards
// Sections: Header | Contact Cards | Form | Side Info
// ==========================================
import { motion } from 'framer-motion'
import { useState } from 'react'

// ==========================================
// ANIMATION VARIANTS - Fade-up stagger
// ==========================================
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
}

// ==========================================
// CONTACT INFO CARDS DATA - PH context
// Update contact details here
// ==========================================
const contactCards = [
  {
    icon: '📧',
    title: 'Email Us',
    detail: 'hello@speechbud.ph',
    sub: 'We reply within 24 hours',
  },
  {
    icon: '💬',
    title: 'Live Chat',
    detail: 'Available in the app',
    // PST = Philippine Standard Time (UTC+8)
    sub: 'Mon–Fri, 9am–6pm PST',
  },
  {
    icon: '📍',
    title: 'Based in the Philippines',
    detail: 'Quezon City, Metro Manila',
    sub: 'Online-first — no walk-ins',
  },
]

export default function Contact() {
  // ==========================================
  // FORM STATE - Tracks all input field values
  // ==========================================
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  // ==========================================
  // SUBMIT STATE - Controls success message display
  // ==========================================
  const [submitted, setSubmitted] = useState(false)

  // ==========================================
  // FORM HANDLERS - Update field and handle submit
  // ==========================================
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Replace with real form submission (e.g., EmailJS, Formspree, or API call)
    console.log('Form submitted:', form)
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div>

      {/* ==========================================
          CONTACT HEADER - Page title
          ========================================== */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-12 text-center">
        <motion.span
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          className="inline-block bg-emerald-100 text-emerald-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
        >
          Get In Touch
        </motion.span>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          className="text-5xl md:text-6xl font-black text-slate-800 leading-tight"
        >
          We'd Love to{' '}
          <span className="text-teal-600">Hear From You</span>
        </motion.h1>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={2}
          className="mt-4 text-lg text-slate-500 max-w-xl mx-auto"
        >
          Whether you have a question, feedback, or just want to say hi — our team is here for you.
          Lagi kaming nandito para sa inyo.
        </motion.p>
      </section>

      {/* ==========================================
          CONTACT INFO CARDS - 3-column row
          ========================================== */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactCards.map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={i * 0.3}
              className="bg-white rounded-2xl p-7 border border-stone-200 hover:border-teal-300 hover:shadow-md transition-all duration-300 text-center"
            >
              {/* Icon */}
              <span className="text-4xl">{card.icon}</span>
              {/* Title */}
              <h3 className="mt-4 font-bold text-slate-800">{card.title}</h3>
              {/* Main detail */}
              <p className="mt-1 text-teal-600 font-semibold text-sm">{card.detail}</p>
              {/* Sub detail */}
              <p className="mt-1 text-slate-400 text-xs">{card.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==========================================
          CONTACT FORM SECTION - Two-column layout
          Left: form | Right: illustration + info cards
          ========================================== */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ==========================================
              FORM COLUMN - All input fields
              ========================================== */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-white rounded-3xl border border-stone-200 p-10 shadow-sm"
          >
            <h2 className="text-2xl font-black text-slate-800 mb-6">Send Us a Message</h2>

            {/* Success message - shown after submit */}
            {submitted && (
              <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl px-5 py-4 text-sm font-semibold">
                ✅ Message sent! We'll get back to you within 24 hours (PST).
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name field */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="name">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Juan dela Cruz"
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
                />
              </div>

              {/* Email field */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="juan@email.com"
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition"
                />
              </div>

              {/* Subject field */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="subject">
                  Subject
                </label>
                {/* ==========================================
                    SUBJECT DROPDOWN - Update options here
                    ========================================== */}
                <select
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition bg-white"
                >
                  <option value="" disabled>Select a topic...</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing & Plans (GCash / Maya)</option>
                  <option value="slp">SLP Partnership (PRC-Licensed)</option>
                  <option value="sped">DepEd / SPED School Partnership</option>
                  <option value="press">Press & Media</option>
                </select>
              </div>

              {/* Message field */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Sabihin mo sa amin kung paano ka namin matutulungan..."
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 rounded-full text-sm transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Send Message →
              </button>
            </form>
          </motion.div>

          {/* ==========================================
              RIGHT COLUMN - Illustration + info cards
              ========================================== */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="flex flex-col gap-6"
          >
            {/* Illustration placeholder */}
            <div className="bg-gradient-to-br from-teal-100 to-sky-100 rounded-3xl h-56 flex items-center justify-center border border-stone-200 shadow-sm">
              <span className="text-8xl">💌</span>
              {/* TODO: Replace with <img src="..." alt="Contact illustration" /> */}
            </div>

            {/* ==========================================
                SLP PARTNERSHIP CARD - PH-specific
                Mentions PRC licensing requirement
                ========================================== */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-7">
              <h3 className="font-black text-slate-800 text-lg mb-2">🧑‍⚕️ Are you a PRC-Licensed SLP?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We have a dedicated partnership program for PRC-licensed Speech-Language Pathologists
                (ReSP) registered under Republic Act 11249. Select "SLP Partnership" above and we'll
                set up a call within 48 hours (PST).
              </p>
            </div>

            {/* ==========================================
                SPED SCHOOL CARD - DepEd context
                ========================================== */}
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-7">
              <h3 className="font-black text-slate-800 text-lg mb-2">🏫 DepEd SPED School or Center?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                SpeechBud's Pro plan generates DepEd SPED-compatible progress reports. If you're a
                public or private SPED school, select "DepEd / SPED School Partnership" and ask about
                our institutional rates.
              </p>
            </div>

            {/* ==========================================
                RESPONSE TIME CARD
                ========================================== */}
            <div className="bg-teal-50 border border-teal-200 rounded-2xl p-7">
              <h3 className="font-black text-slate-800 text-lg mb-2">⚡ Quick Response Guarantee</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We respond to every message within 24 hours on business days (Mon–Fri, PST).
                For urgent issues, use the live chat inside the app.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  )
}
