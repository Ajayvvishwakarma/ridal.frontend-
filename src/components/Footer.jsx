import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">RR</span>
            </div>
            <span className="text-white font-bold text-lg">Ride N Repair</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Looking for specialized two-wheeler or four-wheeler repair? Ride N Repair offers doorstep service with expert mechanics.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition text-xs">f</a>
            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition text-xs">in</a>
            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition text-xs">yt</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Solutions</h3>
          <ul className="space-y-2 text-sm">
            {['About Us', 'FAQ', 'Contact Us', 'Terms & Conditions', 'Privacy Policy', 'Refund Policy'].map(item => (
              <li key={item}><a href="#" className="hover:text-red-400 transition">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Popular Brands */}
        <div>
          <h3 className="text-white font-semibold mb-4">Popular Brands</h3>
          <ul className="space-y-2 text-sm">
            {['Hero', 'Honda', 'Bajaj', 'Royal Enfield', 'Maruti Suzuki', 'Hyundai', 'Tata'].map(brand => (
              <li key={brand}><a href="#" className="hover:text-red-400 transition">{brand}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+911203615050" className="hover:text-red-400 transition">+91 120 361 5050</a>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@ridenrepair.com" className="hover:text-red-400 transition">info@ridenrepair.com</a>
            </div>
            <div className="mt-4">
              <p className="text-gray-400 mb-2 text-xs uppercase tracking-wide">Download App</p>
              <div className="flex gap-2">
                <a href="#" className="bg-gray-700 hover:bg-gray-600 transition text-xs px-3 py-2 rounded-lg">Google Play</a>
                <a href="#" className="bg-gray-700 hover:bg-gray-600 transition text-xs px-3 py-2 rounded-lg">App Store</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © 2024 Ride N Repair. All rights reserved.
      </div>
    </footer>
  )
}