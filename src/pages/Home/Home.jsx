// ==========================================
// HOME PAGE - Landing page for SpeechBud (PH Context)
// Sections: Hero | Partners Strip | Features | How It Works | Testimonials Carousel | CTA Banner
// Testimonials are fetched live from Supabase
// ==========================================
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { supabase } from '../../lib/supabase'
import HomePageIMG from '../../assets/HomePageIMG.jpg'

// ==========================================
// ANIMATION VARIANTS - Reusable fade-up motion configs
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
// FEATURES DATA - Update icons, titles, descriptions here
// ==========================================
const features = [
  {
    icon: '🎙️',
    title: 'AI-Powered Feedback',
    desc: 'Real-time pronunciation analysis gives children instant, encouraging feedback after every exercise.',
  },
  {
    icon: '🎮',
    title: 'Gamified Exercises',
    desc: 'Fun mini-games and reward badges keep kids motivated and coming back every day.',
  },
  {
    icon: '📊',
    title: 'Progress Tracking',
    desc: 'Parents and therapists get detailed weekly reports to monitor growth and celebrate milestones.',
  },
  {
    icon: '🧑‍⚕️',
    title: 'Therapist-Designed',
    desc: 'Every exercise is crafted by PRC-licensed speech-language pathologists for proven results.',
  },
  {
    icon: '🇵🇭',
    title: 'Filipino & Multi-Language',
    desc: 'Supports Filipino, English, and regional languages so every child can practice comfortably.',
  },
  {
    icon: '🔒',
    title: 'Safe & Private',
    desc: 'Compliant with the Philippine Data Privacy Act (RA 10173). Your child\'s data is always protected.',
  },
]

// ==========================================
// HOW IT WORKS DATA - Update steps here
// ==========================================
const steps = [
  {
    number: '01',
    title: 'Create a Profile',
    desc: 'Set up a personalized profile for your child in under 2 minutes — no clinic visit needed.',
  },
  {
    number: '02',
    title: 'Start a Session',
    desc: 'Choose from guided exercises or let our AI build a custom daily plan for your child.',
  },
  {
    number: '03',
    title: 'Practice & Play',
    desc: 'Kids practice through interactive games while the AI listens and coaches in real time.',
  },
  {
    number: '04',
    title: 'Track Progress',
    desc: 'Review weekly reports and celebrate every breakthrough — kahit nasa bahay lang kayo.',
  },
]

// ==========================================
// PH PARTNER ORGANIZATIONS DATA
// Real PH/SEA organizations — update links/descriptions here
// ==========================================
const partners = [
  { name: 'PASP',            full: 'Philippine Association of Speech-Language Pathologists', url: 'https://www.pasp.org.ph' },
  { name: 'Autism Society PH', full: 'Autism Society Philippines',                          url: 'http://www.autismsocietyphilippines.org' },
  { name: 'DepEd SPED',      full: 'Department of Education — Special Education Program',   url: 'https://www.deped.gov.ph' },
  { name: 'SEAMEO SEN',      full: 'SEAMEO Regional Centre for Special Educational Needs',  url: 'https://seameosen.edu.my' },
  { name: 'PRC',             full: 'Professional Regulation Commission',                    url: 'https://www.prc.gov.ph' },
]

// ==========================================
// FALLBACK TESTIMONIALS - Shown while Supabase loads or if fetch fails
// Mirrors the seed data in supabase/schema.sql
// ==========================================
const fallbackTestimonials = [
  {
    quote: 'Dati ayaw na ayaw ng anak ko mag-practice. Ngayon, siya pa mismo ang nagbubukas ng SpeechBud bago pa ako makapagsabi. Grabe ang improvement niya in just 2 months!',
    name: 'Ate Maricel S.',
    role: 'Nanay ng 5-taong-gulang, Quezon City',
    avatar: '👩',
    stars: 5,
  },
  {
    quote: 'As a licensed SLP here in the Philippines, I\'m impressed by how accurate the AI feedback is. I now recommend SpeechBud to families who can\'t afford weekly clinic sessions.',
    name: 'Ma\'am Kristine D., ReSP',
    role: 'PRC-Licensed Speech-Language Pathologist, Makati',
    avatar: '👩‍⚕️',
    stars: 5,
  },
  {
    quote: 'My son has autism and we\'ve been struggling to find affordable therapy in our area. SpeechBud has been a blessing — the exercises are fun and he actually looks forward to them.',
    name: 'Kuya Rodel M.',
    role: 'Parent of a 7-year-old, Cebu City',
    avatar: '👨',
    stars: 5,
  },
  {
    quote: 'Bilang SPED teacher, I use SpeechBud as a supplement for my students. The progress reports help me coordinate better with parents and adjust my classroom strategies.',
    name: 'Teacher Liza A.',
    role: 'SPED Teacher, DepEd Pasig City',
    avatar: '👩‍🏫',
    stars: 5,
  },
  {
    quote: 'Hindi ako makapaniwala na ganito ka-affordable. Ang isang session sa clinic ay ₱800 to ₱1,500 — dito sa SpeechBud, unlimited na ang exercises ng anak ko for less than that per month!',
    name: 'Nanay Josie R.',
    role: 'Nanay ng 4-taong-gulang, Davao City',
    avatar: '👩‍👧',
    stars: 5,
  },
  {
    quote: 'We live in a province where there are no SLP clinics nearby. SpeechBud literally changed our lives. My daughter can now say full sentences clearly — something we thought would take years.',
    name: 'Tatay Arnel C.',
    role: 'Parent of a 6-year-old, Iloilo',
    avatar: '👨‍👧',
    stars: 5,
  },
  {
    quote: 'Ang lola ko pa ang nagturo sa akin kung paano gamitin ang SpeechBud para sa apo namin. Madaling gamitin, kahit hindi tech-savvy. Sobrang helpful ng progress reports!',
    name: 'Lola Nena B.',
    role: 'Lola ng 5-taong-gulang, Batangas',
    avatar: '👵',
    stars: 5,
  },
]

// ==========================================
// TESTIMONIAL CAROUSEL COMPONENT
// Fetches testimonials from Supabase on mount
// Falls back to hardcoded data if fetch fails
// Auto-slides every 4 seconds; manual prev/next + dot controls
// ==========================================
function TestimonialCarousel() {
  // ==========================================
  // STATE - testimonials list, loading, current slide
  // ==========================================
  const [testimonials, setTestimonials] = useState(fallbackTestimonials)
  const [loading, setLoading]           = useState(true)
  const [current, setCurrent]           = useState(0)

  // ==========================================
  // SUPABASE FETCH - Load approved testimonials on mount
  // Falls back to hardcoded data on error
  // ==========================================
  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const { data, error } = await supabase
          .from('testimonials')
          .select('id, quote, name, role, avatar, stars')
          .eq('is_approved', true)
          .order('created_at', { ascending: true })

        if (error) throw error
        if (data && data.length > 0) setTestimonials(data)
      } catch (err) {
        console.warn('[SpeechBud] Could not fetch testimonials from Supabase, using fallback.', err)
      } finally {
        setLoading(false)
      }
    }
    fetchTestimonials()
  }, [])

  const total = testimonials.length

  // ==========================================
  // AUTO-SLIDE LOGIC - Advances every 4000ms
  // ==========================================
  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total)
  }, [total])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total)
  }, [total])

  useEffect(() => {
    if (loading) return // Don't start timer until data is ready
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next, loading])

  // ==========================================
  // LOADING SKELETON - Shown while fetching from Supabase
  // ==========================================
  if (loading) {
    return (
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 border border-stone-200 shadow-md min-h-[220px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-teal-400 border-t-transparent rounded-full animate-spin" />
          <p className="text-slate-400 text-sm">Loading testimonials...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative max-w-3xl mx-auto">

      {/* ==========================================
          CAROUSEL CARD - Animated slide transition
          ========================================== */}
      <motion.div
        key={current}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="bg-white rounded-3xl p-10 border border-stone-200 shadow-md min-h-[220px] flex flex-col justify-between"
      >
        {/* ==========================================
            STAR RATING - Rendered from DB stars field (1–5)
            ========================================== */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonials[current].stars ?? 5)].map((_, s) => (
            <span key={s} className="text-amber-400 text-lg">★</span>
          ))}
        </div>

        {/* Quote text */}
        <p className="text-slate-600 text-base leading-relaxed italic flex-grow">
          "{testimonials[current].quote}"
        </p>

        {/* Author info */}
        <div className="mt-6 flex items-center gap-3">
          <span className="text-4xl">{testimonials[current].avatar}</span>
          <div>
            <p className="font-bold text-slate-800 text-sm">{testimonials[current].name}</p>
            <p className="text-slate-400 text-xs">{testimonials[current].role}</p>
          </div>
        </div>
      </motion.div>

      {/* ==========================================
          PREV / NEXT ARROW BUTTONS
          ========================================== */}
      <button
        onClick={prev}
        aria-label="Previous testimonial"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full bg-white border border-stone-200 shadow-md flex items-center justify-center text-slate-600 hover:text-teal-600 hover:border-teal-400 transition-all duration-200"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next testimonial"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 rounded-full bg-white border border-stone-200 shadow-md flex items-center justify-center text-slate-600 hover:text-teal-600 hover:border-teal-400 transition-all duration-200"
      >
        ›
      </button>

      {/* ==========================================
          DOT INDICATORS - One dot per testimonial
          ========================================== */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'bg-teal-500 w-6 h-2.5'
                : 'bg-stone-300 w-2.5 h-2.5 hover:bg-stone-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// ==========================================
// HOME PAGE - Main export
// ==========================================
export default function Home() {
  return (
    <div>

      {/* ==========================================
          HERO SECTION - Main headline, subtext, CTA buttons
          ========================================== */}
      <section className="max-w-7xl mx-auto px-6 pt-8 md:pt-24 pb-12 md:pb-20 flex flex-col items-center text-center">

        <motion.span
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          className="inline-block bg-amber-100 text-amber-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
        >
          🌟 AI-Powered Speech Therapy for Filipino Kids
        </motion.span>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          className="text-5xl md:text-7xl font-black text-slate-800 leading-tight max-w-4xl"
        >
          Help Your Child{' '}
          <span className="text-teal-600">Find Their Voice,</span>{' '}
          One Word at a Time.
        </motion.h1>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={2}
          className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed"
        >
          SpeechBud makes speech therapy accessible, engaging, and fun for Filipino children —
          with AI-powered exercises designed by PRC-licensed therapists and loved by kids across the Philippines.
        </motion.p>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/pricing"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            TRY IT FOR FREE
          </Link>
          <Link
            to="/about"
            className="bg-white border-2 border-slate-200 hover:border-teal-400 text-slate-700 font-bold px-8 py-4 rounded-full text-base transition-all duration-200"
          >
            Learn How It Works →
          </Link>
        </motion.div>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={4}
          className="mt-6 text-sm text-slate-400"
        >
          Trusted by <span className="font-bold text-slate-600">Filipino families</span> nationwide · Walang credit card na kailangan
        </motion.p>

        {/* Hero image */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={5}
          className="mt-16 w-full max-w-4xl rounded-3xl overflow-hidden shadow-xl border border-stone-200 h-80 md:h-[420px]"
        >
          <img
            src={HomePageIMG}
            alt="Happy Filipino family with children outdoors"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </section>

      {/* ==========================================
          PARTNER ORGANIZATIONS STRIP
          ========================================== */}
      <section className="bg-stone-100 border-y border-stone-200 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">
            Aligned with trusted Philippine & Southeast Asian organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {partners.map(({ name, full, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={full}
                className="text-slate-400 font-bold text-sm md:text-base opacity-60 hover:opacity-100 hover:text-teal-600 transition-all duration-200"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          FEATURES SECTION - 6-card grid
          ========================================== */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-teal-600 font-bold text-sm uppercase tracking-widest">Why SpeechBud</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-slate-800">
            Everything a Child Needs to Thrive
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-lg">
            Designed with love by PRC-licensed speech therapists and engineers who believe every Filipino child deserves a voice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.5}
              className="bg-white rounded-2xl p-8 border border-stone-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300"
            >
              <span className="text-4xl">{f.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-slate-800">{f.title}</h3>
              <p className="mt-2 text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==========================================
          HOW IT WORKS SECTION - Numbered steps
          ========================================== */}
      <section className="bg-teal-600 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-teal-200 font-bold text-sm uppercase tracking-widest">Simple Process</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">
              Up and Running in Minutes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.5}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 text-white font-black text-xl mb-4">
                  {step.number}
                </div>
                <h3 className="text-white font-bold text-lg">{step.title}</h3>
                <p className="mt-2 text-teal-100 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          TESTIMONIALS SECTION - Supabase-powered carousel
          Data fetched from: supabase → testimonials table
          Fallback: hardcoded data if Supabase is unavailable
          ========================================== */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-amber-500 font-bold text-sm uppercase tracking-widest">Real Stories</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-slate-800">
            Pamilyang Pilipino Love SpeechBud
          </h2>
          <p className="mt-3 text-slate-500 text-base">
            From Metro Manila to the provinces — real families, real results.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <TestimonialCarousel />
        </motion.div>
      </section>

      {/* ==========================================
          CTA BANNER SECTION
          ========================================== */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="bg-gradient-to-r from-teal-500 to-sky-500 rounded-3xl px-10 py-16 text-center shadow-xl"
        >
          <p className="text-teal-100 font-semibold text-sm uppercase tracking-widest mb-3">
            No stress. Just growth.
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Ready to Help Your Child Shine?
          </h2>
          <p className="text-teal-100 text-lg max-w-xl mx-auto mb-8">
            Start your free trial today. No credit card required. Cancel anytime.
          </p>
          <Link
            to="/pricing"
            className="inline-block bg-white text-teal-600 font-black px-10 py-4 rounded-full text-base hover:bg-amber-50 transition-all duration-200 shadow-lg"
          >
            TRY IT FOR FREE
          </Link>
        </motion.div>
      </section>

    </div>
  )
}
