import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = [
  { icon: '🔧', title: 'Engine Service', desc: 'Complete engine tuning, oil change & repair at your doorstep.' },
  { icon: '🛞', title: 'Tyre Service', desc: 'Puncture repair, tyre replacement & wheel alignment.' },
  { icon: '🔋', title: 'Battery Service', desc: 'Battery testing, jump start & replacement service.' },
  { icon: '🛑', title: 'Brake Service', desc: 'Brake pad replacement, ABS repair & brake fluid change.' },
  { icon: '❄️', title: 'AC Service', desc: 'Car AC gas refill, cleaning & repair.' },
  { icon: '🔦', title: 'Electrical', desc: 'Wiring, lights, sensors & electrical fault diagnosis.' },
]

const steps = [
  { step: '01', title: 'Book Online', desc: 'Select your service, location & convenient time slot.' },
  { step: '02', title: 'Mechanic Assigned', desc: 'A certified mechanic is dispatched to your location.' },
  { step: '03', title: 'Track Live', desc: 'Track your mechanic in real-time on the map.' },
  { step: '04', title: 'Service Done', desc: 'Get invoice on email. Pay after service.' },
]

const faqs = [
  { q: 'How quickly can a mechanic arrive?', a: 'Our mechanics typically arrive within 30–60 minutes of booking confirmation.' },
  { q: 'What vehicles do you service?', a: 'We service all two-wheelers (bikes, scooters) and four-wheelers (cars, SUVs) at your doorstep.' },
  { q: 'Is there a cancellation charge?', a: 'Full refund if cancelled at least 1 hour before appointment. A visit charge of ₹399 applies if mechanic arrives but no service is performed.' },
  { q: 'Are your mechanics certified?', a: 'Yes, all our mechanics are trained, certified and background-verified professionals.' },
  { q: 'What areas do you cover?', a: 'We currently serve Delhi NCR, Mumbai, Bangalore, Hyderabad, Chennai, Pune and more cities.' },
]

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="font-sans w-full overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-16 bg-blue-600 text-white min-h-screen flex items-center w-full">
        <div className="w-full px-16 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-blue-500 bg-opacity-40 text-blue-100 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              #1 Doorstep Vehicle Service
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Vehicle Repair <br />
              <span className="text-yellow-300">At Your Doorstep</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Expert mechanics come to you. No garage visits, no towing. Doorstep car & bike service anywhere, anytime.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-yellow-300 hover:text-blue-700 transition text-base shadow-lg">
                Book Now — Free Visit
              </Link>
              <a href="tel:+911203615050" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition text-base">
                📞 Call Us
              </a>
            </div>
            <div className="flex gap-8 mt-10">
              {[['10K+', 'Happy Customers'], ['500+', 'Expert Mechanics'], ['4.8★', 'App Rating'], ['20+', 'Cities']].map(([num, label]) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-yellow-300">{num}</div>
                  <div className="text-blue-200 text-xs">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
              <div className="absolute inset-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-2">🔧</div>
                  <p className="text-white font-bold text-lg">Expert Mechanic</p>
                  <p className="text-blue-200 text-sm">At Your Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50 w-full">
        <div className="w-full px-16">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wide">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Our Services</h2>
            <p className="text-gray-500 mt-3">All services performed at your home, office or wherever you are.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition hover:-translate-y-1 border border-gray-100">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/booking" className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition">
              Book a Service →
            </Link>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section id="process" className="py-20 bg-white w-full">
        <div className="w-full px-16">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wide">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Our Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.step} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-red-100 z-0"></div>
                )}
                <div className="relative z-10 w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center text-xl font-extrabold mx-auto mb-4 shadow-lg">
                  {s.step}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-red-600 text-white w-full">
        <div className="w-full px-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-red-200 font-semibold text-sm uppercase tracking-wide">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-6">About Ride N Repair</h2>
            <p className="text-red-100 leading-relaxed mb-4">
              Ride N Repair is India's leading doorstep vehicle service platform. We connect vehicle owners with certified mechanics who come to their location — saving time, money and the hassle of visiting a garage.
            </p>
            <p className="text-red-100 leading-relaxed mb-8">
              Founded with a mission to make vehicle maintenance stress-free, we cover two-wheelers and four-wheelers across major Indian cities with transparent pricing and genuine spare parts.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[['10,000+', 'Services Done'], ['500+', 'Mechanics'], ['20+', 'Cities'], ['4.8/5', 'Rating']].map(([n, l]) => (
                <div key={l} className="bg-red-700 rounded-xl p-4">
                  <div className="text-2xl font-extrabold text-yellow-300">{n}</div>
                  <div className="text-red-200 text-sm mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-red-700 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              {[
                ['✅', 'Certified & background-verified mechanics'],
                ['✅', 'Transparent pricing — no hidden charges'],
                ['✅', 'Real-time mechanic tracking on map'],
                ['✅', 'Genuine spare parts with warranty'],
                ['✅', 'Service at home, office or anywhere'],
                ['✅', 'Pay after service — no advance needed'],
              ].map(([icon, text]) => (
                <li key={text} className="flex items-center gap-3 text-red-100">
                  <span>{icon}</span>
                  <span className="text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-50 w-full">
        <div className="w-full px-16">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wide">Got Questions?</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-semibold text-gray-800 text-sm">{faq.q}</span>
                  <svg className={`w-5 h-5 text-red-600 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white w-full">
        <div className="w-full px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-500 mb-10">We're here to help 24/7. Reach us by phone, email or book online.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:+911203615050" className="flex items-center gap-3 bg-red-50 border border-red-100 rounded-2xl px-8 py-5 hover:bg-red-600 hover:text-white transition group">
              <svg className="w-6 h-6 text-red-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-400 group-hover:text-red-100">Call Us</div>
                <div className="font-bold text-gray-800 group-hover:text-white">+91 120 361 5050</div>
              </div>
            </a>
            <a href="mailto:info@ridenrepair.com" className="flex items-center gap-3 bg-red-50 border border-red-100 rounded-2xl px-8 py-5 hover:bg-red-600 hover:text-white transition group">
              <svg className="w-6 h-6 text-red-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-400 group-hover:text-red-100">Email Us</div>
                <div className="font-bold text-gray-800 group-hover:text-white">info@ridenrepair.com</div>
              </div>
            </a>
            <Link to="/booking" className="flex items-center gap-3 bg-red-600 rounded-2xl px-8 py-5 hover:bg-red-700 transition">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-red-200">Book Online</div>
                <div className="font-bold text-white">Schedule Service</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}