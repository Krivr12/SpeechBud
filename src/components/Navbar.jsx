// ==========================================
// NAVBAR - Sticky top navigation bar
// Sections: Logo (left) | Nav Links (center) | CTA Button (right)
// ==========================================
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

// ==========================================
// NAV LINKS DATA - Update link labels/paths here
// ==========================================
const navLinks = [
  { label: 'Pricing', path: '/pricing' },
  { label: 'About',   path: '/about'   },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  // Controls mobile menu open/close state
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    // ==========================================
    // NAVBAR WRAPPER - Sticky, blurred background, subtle border
    // ==========================================
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-stone-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ==========================================
            LEFT SECTION - Brand / Text Logo
            Clicking routes back to Home (/)
            ========================================== */}
        <Link
          to="/"
          className="text-2xl font-black text-teal-600 tracking-tight hover:text-teal-700 transition-colors"
        >
          Speech<span className="text-amber-400">Bud</span>
        </Link>

        {/* ==========================================
            RIGHT SECTION - Nav Links + CTA Button (desktop)
            All grouped on the right side
            Hidden on mobile (md:flex)
            ========================================== */}
        <div className="hidden md:flex items-center gap-8">
          {/* Nav Links */}
          <ul className="flex items-center gap-6">
            {navLinks.map(({ label, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `text-sm font-semibold transition-colors ${
                      isActive
                        ? 'text-teal-600'
                        : 'text-slate-600 hover:text-teal-600'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            to="/pricing"
            className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
          >
            TRY IT FOR FREE
          </Link>
        </div>

        {/* ==========================================
            MOBILE MENU TOGGLE - Hamburger icon
            Visible only on small screens
            ========================================== */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-slate-700 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-700 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-700 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* ==========================================
          MOBILE MENU DROPDOWN - Animated slide-down
          ========================================== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#FDFBF7] border-t border-stone-200"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map(({ label, path }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block text-base font-semibold transition-colors ${
                        isActive ? 'text-teal-600' : 'text-slate-700 hover:text-teal-600'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              {/* Mobile CTA Button */}
              <li>
                <Link
                  to="/pricing"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-200"
                >
                  TRY IT FOR FREE
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
