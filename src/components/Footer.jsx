// ==========================================
// FOOTER - Site-wide footer with links and brand tagline
// ==========================================
import { Link } from 'react-router-dom'

// ==========================================
// FOOTER LINKS DATA - Update columns/links here
// ==========================================
const footerColumns = [
  {
    heading: 'Product',
    links: [
      { label: 'Home',    path: '/'        },
      { label: 'Pricing', path: '/pricing' },
      { label: 'About',   path: '/about'   },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Contact Us', path: '/contact' },
      { label: 'FAQ',        path: '/contact' },
      { label: 'Privacy',    path: '/'        },
    ],
  },
  {
    heading: 'Social',
    links: [
      { label: 'Instagram', path: '/' },
      { label: 'Twitter',   path: '/' },
      { label: 'Facebook',  path: '/' },
    ],
  },
]

export default function Footer() {
  return (
    // ==========================================
    // FOOTER WRAPPER - Dark teal background
    // ==========================================
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* ==========================================
            TOP ROW - Brand + Link Columns
            ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-black text-white tracking-tight">
              Speech<span className="text-amber-400">Bud</span>
            </Link>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Making speech therapy accessible, engaging, and fun for every child.
            </p>
          </div>

          {/* ==========================================
              LINK COLUMNS - Rendered from footerColumns data
              ========================================== */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2">
                {col.links.map(({ label, path }) => (
                  <li key={label}>
                    <Link
                      to={path}
                      className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ==========================================
            BOTTOM ROW - Copyright bar
            ========================================== */}
        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} SpeechBud. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Built with ❤️ for little voices everywhere.
          </p>
        </div>

      </div>
    </footer>
  )
}
