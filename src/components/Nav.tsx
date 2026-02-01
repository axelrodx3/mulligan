import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-tavern-black/95 backdrop-blur border-b border-tavern-gray">
      <div className="w-full flex items-center justify-between px-6 md:px-8 py-3">
        <Link to="/" className="text-xl font-semibold text-tavern-white hover:text-tavern-offwhite transition-colors">
          [Restaurant Name]
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/menu" className="text-tavern-white/90 hover:text-tavern-white transition-colors">Menu</Link>
          <Link to="/contact" className="text-tavern-white/90 hover:text-tavern-white transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
