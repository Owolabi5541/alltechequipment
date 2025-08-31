
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
  { to: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-px mx-auto flex h-16 items-center justify-between">
       <Link to="/" className="flex items-center gap-2">
  <img 
    src="/ALLTECH LOGO_014254.png" 
    alt="AllTech Equipment Brokerage" 
    className="h-14 w-auto"
  />
</Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-l font-medium ${isActive ? 'text-brand-primary' : 'text-slate-700 hover:text-brand-primary'}`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary text-l">Request a Quote</Link>
        </nav>
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-slate-200 p-2 md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden">
          <div className="container-px mx-auto grid gap-2 pb-4">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-l hover:bg-slate-50"
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary text-l"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
