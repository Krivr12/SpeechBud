// ==========================================
// PRICING PAGE - PH-context plan cards with ₱ pricing
// Based on SpeechBud financial model: ₱1,500/user/year (break-even at 250 users)
// Sections: Header | Billing Toggle | Plan Cards | FAQ | CTA Banner
// ==========================================
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
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
// PRICING PLANS DATA (Philippine Peso)
// Pricing derived from ₱1,500/year premium subscription model
// Monthly = ₱1,500 / 12 = ₱125/mo | Yearly = ₱1,500/year (save ~17%)
// Pro tier for SLP clinics and SPED centers
// Update plan names, prices, and features here
// ==========================================
const plans = [
  {
    name: 'Libre',
    badge: null,
    monthlyPrice: 0,
    yearlyPrice: 0,
    priceLabel: 'Free',
    description: 'Perfect for trying SpeechBud risk-free. Walang bayad, walang credit card.',
    cta: 'Start for Free',
    ctaStyle: 'border-2 border-teal-500 text-teal-600 hover:bg-teal-50',
    features: [
      '1 child profile',
      '5 exercises per day',
      'Basic progress reports',
      'Email support',
    ],
    missing: ['AI personalization', 'Unlimited exercises', 'Therapist notes', 'Priority support'],
  },
  {
    name: 'Pamilya',
    badge: 'Pinaka-Popular',
    monthlyPrice: 149,
    yearlyPrice: 125, // ₱1,500/year = ₱125/mo billed annually
    priceLabel: null,
    description: 'Everything your family needs to see real results. Ideal for 1–3 children.',
    cta: 'TRY IT FOR FREE',
    ctaStyle: 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg',
    features: [
      'Up to 3 child profiles',
      'Unlimited exercises',
      'AI-personalized plans',
      'Detailed weekly reports',
      'Therapist note sharing',
      'Priority email support',
    ],
    missing: ['Dedicated SLP access'],
  },
  {
    name: 'Pro / Klinika',
    badge: null,
    monthlyPrice: 799,
    yearlyPrice: 599,
    priceLabel: null,
    description: 'For PRC-licensed SLPs, SPED centers, and clinics managing multiple children.',
    cta: 'Start Pro Trial',
    ctaStyle: 'border-2 border-slate-300 text-slate-700 hover:border-teal-400 hover:text-teal-600',
    features: [
      'Unlimited child profiles',
      'Unlimited exercises',
      'AI-personalized plans',
      'Advanced analytics dashboard',
      'Therapist note sharing & export',
      'DepEd SPED-compatible reports',
      'Dedicated account manager',
      'Phone & email support (PST)',
    ],
    missing: [],
  },
]

// ==========================================
// FAQ DATA - PH-specific questions in English
// Update questions and answers here
// ==========================================
const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'Yes! The Libre (Free) plan is completely free forever with no credit card required. The Pamilya and Pro plans include a 14-day free trial.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept GCash, Maya, credit/debit cards, and online banking. All popular payment methods in the Philippines are available.',
  },
  {
    q: 'Can I cancel or change my plan anytime?',
    a: 'Absolutely. You can upgrade, downgrade, or cancel your plan at any time from your account settings. There is no lock-in period.',
  },
  {
    q: 'What age group is SpeechBud designed for?',
    a: 'SpeechBud is designed for children aged 2–12 years old. Our exercises adapt to each child\'s developmental stage.',
  },
  {
    q: 'How does the AI pronunciation feedback work?',
    a: 'Our AI listens to your child\'s pronunciation in real time and provides gentle, encouraging corrections — just like a real speech therapist.',
  },
  {
    q: 'Is my child\'s data safe and private?',
    a: 'Yes. We comply with the Philippine Data Privacy Act (RA 10173) and use end-to-end encryption. We never sell your family\'s data.',
  },
]

export default function Pricing() {
  // ==========================================
  // BILLING TOGGLE STATE - monthly vs yearly
  // ==========================================
  const [yearly, setYearly] = useState(false)

  // ==========================================
  // FAQ ACCORDION STATE - tracks open question index
  // ==========================================
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div>

      {/* ==========================================
          PRICING HEADER - Page title and billing toggle
          ========================================== */}
      <section className="max-w-7xl mx-auto px-6 pt-8 md:pt-20 pb-8 md:pb-12 text-center">
        <motion.span
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          className="inline-block bg-teal-100 text-teal-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
        >
          Simple, Transparent Pricing
        </motion.span>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          className="text-5xl md:text-6xl font-black text-slate-800 leading-tight"
        >
          Plans That Grow With Your Child
        </motion.h1>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={2}
          className="mt-4 text-lg text-slate-500 max-w-xl mx-auto"
        >
          No hidden fees. No long-term contracts. Just results.
        </motion.p>

        {/* ==========================================
            CONTEXT NOTE - PH pricing comparison
            ========================================== */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={2.5}
          className="mt-4 inline-block bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold px-4 py-2 rounded-full"
        >
          💡 In-person SLP sessions in the PH cost ₱650–₱3,000 each. SpeechBud gives you unlimited sessions for less.
        </motion.div>

        {/* ==========================================
            BILLING TOGGLE - Monthly / Yearly switch
            ========================================== */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          className="mt-8 inline-flex items-center gap-3 bg-stone-100 rounded-full p-1"
        >
          <button
            onClick={() => setYearly(false)}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${!yearly ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${yearly ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}
          >
            Yearly
            <span className="ml-2 bg-amber-400 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              Save up to 17%
            </span>
          </button>
        </motion.div>
      </section>

      {/* ==========================================
          PLAN CARDS SECTION - 3-column grid
          ========================================== */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={i * 0.5}
              className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 ${
                plan.badge
                  ? 'border-teal-500 shadow-2xl scale-105'
                  : 'border-stone-200 hover:border-teal-300 hover:shadow-lg'
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  {plan.badge}
                </span>
              )}

              {/* Plan name */}
              <h3 className="text-xl font-black text-slate-800">{plan.name}</h3>
              <p className="text-slate-500 text-sm mt-1">{plan.description}</p>

              {/* ==========================================
                  PRICE DISPLAY - Shows ₱ with monthly/yearly toggle
                  Free plan shows "Libre" text instead of ₱0
                  ========================================== */}
              <div className="mt-6 flex items-end gap-1">
                {plan.priceLabel ? (
                  <span className="text-5xl font-black text-slate-800">{plan.priceLabel}</span>
                ) : (
                  <>
                    <span className="text-2xl font-black text-slate-500 mb-1">₱</span>
                    <span className="text-5xl font-black text-slate-800">
                      {yearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-slate-400 text-sm mb-2">/mo</span>
                  </>
                )}
              </div>

              {/* Yearly billing note */}
              {yearly && plan.monthlyPrice > 0 && (
                <p className="text-xs text-teal-600 font-semibold mt-1">
                  Billed ₱{plan.yearlyPrice * 12}/year
                </p>
              )}

              {/* Annual equivalent note for Pamilya plan */}
              {!yearly && plan.name === 'Pamilya' && (
                <p className="text-xs text-slate-400 mt-1">
                  or ₱1,500/year billed annually
                </p>
              )}

              {/* CTA Button */}
              <Link
                to="/contact"
                className={`mt-6 block text-center font-bold px-6 py-3 rounded-full text-sm transition-all duration-200 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </Link>

              {/* Divider */}
              <hr className="my-6 border-stone-100" />

              {/* Included features */}
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
                {/* Missing features (greyed out) */}
                {plan.missing.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300 line-through">
                    <span className="mt-0.5">✗</span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ==========================================
            PAYMENT METHODS NOTE - PH-specific
            ========================================== */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-slate-400 text-sm">
            Accepted payments: <span className="font-semibold text-slate-600">GCash · Maya · Credit/Debit Card · Online Banking</span>
          </p>
        </motion.div>
      </section>

      {/* ==========================================
          FAQ SECTION - Accordion-style, PH-language questions
          ========================================== */}
      <section className="bg-stone-50 border-y border-stone-200 py-24">
        <div className="max-w-3xl mx-auto px-6">

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-slate-800">Mga Madalas na Tanong</h2>
            <p className="mt-3 text-slate-500">
              May katanungan pa? <Link to="/contact" className="text-teal-600 font-semibold hover:underline">Makipag-ugnayan sa amin</Link>.
            </p>
          </motion.div>

          {/* FAQ accordion items */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.3}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-bold text-slate-800 text-sm">{faq.q}</span>
                  <span className={`text-teal-500 font-bold text-xl transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          BOTTOM CTA BANNER
          ========================================== */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl px-10 py-16 text-center shadow-xl"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Start for Free. No Credit Card Needed.
          </h2>
          <p className="text-orange-100 text-lg max-w-xl mx-auto mb-8">
            Join thousands of Filipino families helping their children find their voice.
          </p>
          <Link
            to="/"
            className="inline-block bg-white text-orange-500 font-black px-10 py-4 rounded-full text-base hover:bg-orange-50 transition-all duration-200 shadow-lg"
          >
            TRY IT FOR FREE
          </Link>
        </motion.div>
      </section>

    </div>
  )
}
