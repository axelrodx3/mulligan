import { Link } from 'react-router-dom'
import { useState } from 'react'

const navLinks = [
  { to: '/menu', label: 'Menu' },
  { to: '/location', label: 'Location & Hours' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-tavern-black/95 backdrop-blur border-b border-tavern-gray">
      <div className="w-full flex items-center justify-between px-6 md:px-8 py-3">
        <Link
          to="/"
          className="text-xl md:text-2xl font-display tracking-wide text-tavern-white hover:text-mulligan-gold transition-colors"
        >
          Mulligans
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-tavern-white/90 hover:text-tavern-white transition-colors font-medium"
            >
              {label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-tavern-white"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-tavern-gray py-4 px-6 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className="text-tavern-white/90 hover:text-tavern-white transition-colors font-medium"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
