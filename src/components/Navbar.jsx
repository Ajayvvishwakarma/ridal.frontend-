import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Our Process', href: '/#process' },
    { label: 'About Us', href: '/#about' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact', href: '/#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">RR</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Ride <span className="text-red-600">N</span> Repair</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map(link => (
              <a key={link.label} href={link.href} className="text-sm text-gray-600 hover:text-red-600 transition font-medium">
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <a href="tel:+911203615050" className="hidden md:flex items-center gap-1 text-sm text-gray-600 hover:text-red-600 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 120 361 5050
            </a>
            <Link to="/booking" className="bg-red-600 text-white text-sm px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition">
              Book Now
            </Link>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {links.map(link => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="block text-sm text-gray-700 hover:text-red-600 font-medium py-1">
              {link.label}
            </a>
          ))}
          <Link to="/booking" onClick={() => setMenuOpen(false)} className="block bg-red-600 text-white text-center py-2 rounded-lg font-semibold mt-2">
            Book Now
          </Link>
        </div>
      )}
    </nav>
  )
}