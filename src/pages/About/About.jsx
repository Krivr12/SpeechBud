// ==========================================
// ABOUT PAGE - PH-context mission, team, values, and partner organizations
// Sections: Hero | Stats | Mission | Values | Partners | Team | CTA Banner
// ==========================================
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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
// VALUES DATA - Update icons, titles, descriptions here
// ==========================================
const values = [
  {
    icon: '💛',
    title: 'Child-First Design',
    desc: 'Every decision we make starts with one question: is this good for the child?',
  },
  {
    icon: '🔬',
    title: 'Evidence-Based',
    desc: 'Our exercises are grounded in peer-reviewed speech-language pathology research and aligned with PASP standards.',
  },
  {
    icon: '🤝',
    title: 'Inclusive Access',
    desc: 'We believe every Filipino child deserves quality speech therapy, regardless of income or location — from Metro Manila to the provinces.',
  },
  {
    icon: '🔒',
    title: 'Privacy & Safety',
    desc: 'Compliant with the Philippine Data Privacy Act (RA 10173). End-to-end encrypted. We never sell your data.',
  },
]

// ==========================================
// TEAM DATA - PH-based team members with consistent formatting
// Update names, roles, avatars, and bios here
// ==========================================
const team = [
  {
    avatar: '👩‍💼',
    name: 'Yasmine Reign San Gabriel',
    role: 'Business Lead',
    bio: 'Leads overall project strategy and business development. Also spearheads marketing initiatives and digital presence to reach Filipino families nationwide.',
  },
  {
    avatar: '👨‍💻',
    name: 'Christopher Bryan Evangelista',
    role: 'Backend Developer',
    bio: 'Architected the backend infrastructure and API layer. Handles server-side logic, database design, and system scalability for SpeechBud.',
  },
  {
    avatar: '👩‍💻',
    name: 'Trisha Mae Lasanas',
    role: 'AI Engineer',
    bio: 'Developed the real-time pronunciation AI engine. Manages cloud infrastructure and ensures system reliability and performance.',
  },
  {
    avatar: '👩‍🎨',
    name: 'Keila Tabagan',
    role: 'Frontend Developer',
    bio: 'Designed and built the responsive frontend interface. Ensures child-friendly UX and accessibility. Contributes to backend development.',
  },
]

// ==========================================
// STATS DATA - Update numbers here
// ==========================================
const stats = [
  { value: '275+',  label: 'Families in Year 1' },
  { value: '3',     label: 'Languages Supported' },
  { value: '98%',   label: 'Parent Satisfaction' },
  { value: '2026',  label: 'Founded in PH' },
]

// ==========================================
// PARTNER ORGANIZATIONS DATA
// Real PH/SEA organizations with descriptions and official links
// Update names, descriptions, and URLs here
// ==========================================
const partnerOrgs = [
  {
    icon: '🏥',
    name: 'PASP',
    full: 'Philippine Association of Speech-Language Pathologists',
    desc: 'The Accredited Integrated Professional Organization (AIPO) for SLPs in the Philippines under PRC. Our exercises are aligned with PASP\'s professional standards.',
    url: 'https://www.pasp.org.ph',
    badge: 'PH',
  },
  {
    icon: '💙',
    name: 'Autism Society Philippines',
    full: 'Autism Society Philippines (ASP)',
    desc: 'The oldest autism advocacy organization in the country. SpeechBud supports children on the spectrum with exercises designed for diverse communication needs.',
    url: 'http://www.autismsocietyphilippines.org',
    badge: 'PH',
  },
  {
    icon: '🏫',
    name: 'DepEd SPED Program',
    full: 'Department of Education — Special Education Program',
    desc: 'SpeechBud\'s Pro plan generates DepEd SPED-compatible progress reports, making it easy for teachers and parents to coordinate with public school programs.',
    url: 'https://www.deped.gov.ph',
    badge: 'PH',
  },
  {
    icon: '🌏',
    name: 'SEAMEO SEN',
    full: 'SEAMEO Regional Centre for Special Educational Needs',
    desc: 'The Southeast Asian regional body for special education. SpeechBud\'s approach is aligned with SEAMEO SEN\'s inclusive education frameworks across ASEAN.',
    url: 'https://seameosen.edu.my',
    badge: 'SEA',
  },
  {
    icon: '📋',
    name: 'PRC',
    full: 'Professional Regulation Commission',
    desc: 'All SLPs who contributed to SpeechBud\'s exercise library are PRC-licensed under Republic Act 11249 (Speech-Language Pathology Act of 2019).',
    url: 'https://www.prc.gov.ph',
    badge: 'PH',
  },
]

export default function About() {
  return (
    <div>

      {/* ==========================================
          ABOUT HERO SECTION - Page headline and intro
          ========================================== */}
      <section className="max-w-7xl mx-auto px-6 pt-8 md:pt-20 pb-12 md:pb-16 text-center">
        <motion.span
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          className="inline-block bg-sky-100 text-sky-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
        >
          Our Story
        </motion.span>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          className="text-5xl md:text-6xl font-black text-slate-800 leading-tight max-w-4xl mx-auto"
        >
          We Started SpeechBud Because{' '}
          <span className="text-teal-600">Every Filipino Child Deserves to Be Heard.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={2}
          className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
        >
          A PRC-licensed speech therapist and a UP-trained AI engineer sat down with a shared
          frustration: quality speech therapy in the Philippines was too expensive, too inaccessible,
          and too far from home for most families. SpeechBud was born to change that.
        </motion.p>
      </section>

      {/* ==========================================
          STATS STRIP - Key numbers at a glance
          ========================================== */}
      <section className="bg-teal-600 py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.3}
            >
              <p className="text-4xl md:text-5xl font-black text-white">{s.value}</p>
              <p className="mt-1 text-teal-200 text-sm font-semibold">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==========================================
          MISSION SECTION - Two-column layout with illustration
          ========================================== */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Illustration placeholder */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-100 to-teal-100 rounded-3xl h-80 flex items-center justify-center shadow-lg border border-stone-200"
          >
            <span className="text-8xl">🌱</span>
            {/* TODO: Replace with <img src="..." alt="Our mission illustration" /> */}
          </motion.div>

          {/* Mission text */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
          >
            <span className="text-teal-600 font-bold text-sm uppercase tracking-widest">Our Mission</span>
            <h2 className="mt-3 text-4xl font-black text-slate-800 leading-tight">
              Making Therapy Accessible to Every Filipino Family
            </h2>
            <p className="mt-4 text-slate-500 leading-relaxed">
              In-person speech therapy sessions in the Philippines cost ₱650–₱3,000 per session.
              For many families — especially those outside Metro Manila — that's simply out of reach.
              We built SpeechBud to bridge that gap, delivering therapist-quality exercises through
              an app that kids actually want to use.
            </p>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Our AI doesn't replace PRC-licensed therapists — it empowers them. Families using
              SpeechBud alongside professional therapy see results up to 3x faster than those using
              traditional methods alone.
            </p>
            <Link
              to="/pricing"
              className="mt-8 inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-200 shadow-md"
            >
              Start Free Today
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          VALUES SECTION - 4-card grid
          ========================================== */}
      <section className="bg-stone-50 border-y border-stone-200 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-amber-500 font-bold text-sm uppercase tracking-widest">What We Stand For</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black text-slate-800">Our Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.3}
                className="bg-white rounded-2xl p-7 border border-stone-200 hover:border-teal-300 hover:shadow-md transition-all duration-300 text-center"
              >
                <span className="text-4xl">{v.icon}</span>
                <h3 className="mt-4 font-bold text-slate-800">{v.title}</h3>
                <p className="mt-2 text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PARTNER ORGANIZATIONS SECTION
          Real PH/SEA organizations with descriptions and links
          ========================================== */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-teal-600 font-bold text-sm uppercase tracking-widest">Our Network</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-slate-800">
            Aligned with Trusted Organizations
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            SpeechBud is built in alignment with the leading Philippine and Southeast Asian
            organizations in speech therapy, special education, and child welfare.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerOrgs.map((org, i) => (
            <motion.a
              key={org.name}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.3}
              className="bg-white rounded-2xl p-7 border border-stone-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300 group block"
            >
              {/* Icon + badge row */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{org.icon}</span>
                {/* PH / SEA badge */}
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                  org.badge === 'PH'
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-emerald-100 text-emerald-600'
                }`}>
                  {org.badge}
                </span>
              </div>
              {/* Org short name */}
              <h3 className="font-black text-slate-800 group-hover:text-teal-600 transition-colors">
                {org.name}
              </h3>
              {/* Full name */}
              <p className="text-xs text-slate-400 mt-0.5 mb-2">{org.full}</p>
              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed">{org.desc}</p>
              {/* Link indicator */}
              <p className="mt-3 text-teal-500 text-xs font-semibold group-hover:underline">
                Visit website →
              </p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ==========================================
          TEAM SECTION - PH-based team member cards
          ========================================== */}
      <section className="bg-stone-50 border-t border-stone-200 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-teal-600 font-bold text-sm uppercase tracking-widest">The People Behind SpeechBud</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black text-slate-800">Meet the Team</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.3}
                className="bg-white rounded-2xl p-6 border border-stone-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-4xl mx-auto mb-4">
                  {member.avatar}
                </div>
                
                {/* Name - Fixed height for alignment */}
                <h3 className="font-black text-slate-800 text-center text-sm min-h-[2.5rem] flex items-center justify-center">
                  {member.name}
                </h3>
                
                {/* Role badge - Fixed height for alignment */}
                <div className="flex justify-center my-2 min-h-[1.75rem]">
                  <span className="inline-block bg-amber-100 text-amber-600 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    {member.role}
                  </span>
                </div>
                
                {/* Bio - Flex grow to fill remaining space */}
                <p className="text-slate-500 text-sm leading-relaxed text-center flex-grow">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          ABOUT CTA BANNER
          ========================================== */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="bg-gradient-to-r from-teal-500 to-sky-500 rounded-3xl px-10 py-16 text-center shadow-xl"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Samahan ang Aming Lumalaking Pamilya
          </h2>
          <p className="text-teal-100 text-lg max-w-xl mx-auto mb-8">
            Be part of a community that believes every Filipino child's voice matters.
          </p>
          <Link
            to="/pricing"
            className="inline-block bg-white text-teal-600 font-black px-10 py-4 rounded-full text-base hover:bg-teal-50 transition-all duration-200 shadow-lg"
          >
            TRY IT FOR FREE
          </Link>
        </motion.div>
      </section>

    </div>
  )
}
