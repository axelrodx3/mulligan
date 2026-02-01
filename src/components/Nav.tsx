import { Link } from 'react-router-dom'
import { useState } from 'react'

const navLinks = [
  { to: '/menu', label: 'Menu' },
  { to: '/location', label: 'Location & Hours' },
  { to: '/contact', label: 'Contact' },
  { href: 'https://www.doordash.com/store/30915869?src=yp&delivery=true', label: 'Order', external: true },
]

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="w-full flex items-center justify-between px-6 md:px-8 py-4">
        <Link to="/" className="flex items-center gap-2 shrink-0 transition-transform duration-200 hover:scale-105">
          <img
            src="/logo.png"
            alt="Mulligans Sports Bar & Grille"
            className="h-20 md:h-28 w-auto min-h-[48px]"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mulligan-gray-dark hover:text-mulligan-blue font-medium transition-all duration-200 hover:underline underline-offset-4"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.to!}
                to={link.to!}
                className="text-mulligan-gray-dark hover:text-mulligan-blue font-medium transition-all duration-200 hover:underline underline-offset-4"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-mulligan-gray-dark rounded-lg transition-colors duration-200 hover:bg-gray-100 active:scale-95"
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
        <div className="md:hidden border-t border-gray-200 py-4 px-6 flex flex-col gap-4 bg-white">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="text-mulligan-gray-dark hover:text-mulligan-blue font-medium transition-all duration-200 hover:underline underline-offset-4"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.to!}
                to={link.to!}
                onClick={() => setMobileOpen(false)}
                className="text-mulligan-gray-dark hover:text-mulligan-blue font-medium transition-all duration-200 hover:underline underline-offset-4"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  )
}
