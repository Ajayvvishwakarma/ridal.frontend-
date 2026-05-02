import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function BookingPage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [locationLoading, setLocationLoading] = useState(false)
  const [formData, setFormData] = useState({
    address: '', houseNo: '', email: '', phone: '', name: '',
    date: '', time: '', notes: '', coupon: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const useCurrentLocation = () => {
    if (!navigator.geolocation) { alert('Geolocation not supported.'); return }
    setLocationLoading(true)
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
          const data = await res.json()
          setFormData(prev => ({ ...prev, address: data.display_name || `${latitude.toFixed(4)}, ${longitude.toFixed(4)}` }))
        } catch {
          setFormData(prev => ({ ...prev, address: `${latitude.toFixed(4)}, ${longitude.toFixed(4)}` }))
        } finally { setLocationLoading(false) }
      },
      () => { alert('Could not get location.'); setLocationLoading(false) },
      { enableHighAccuracy: true }
    )
  }

  const validate = () => {
    const e = {}
    if (!formData.address.trim()) e.address = 'Address is required.'
    if (!formData.houseNo.trim()) e.houseNo = 'House No. is required.'
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Valid email required.'
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) e.phone = 'Valid 10-digit phone required.'
    if (!formData.date) e.date = 'Date required.'
    if (!formData.time) e.time = 'Time required.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    navigate('/tracking', { state: { booking: formData } })
  }

  const inp = (field) => `w-full border rounded-xl px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-red-400 focus:border-red-400 ${errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-200'}`

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <div className="pt-16">
        {/* Page Header */}
        <div className="bg-red-600 py-10 px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-extrabold text-white">Book a Doorstep Service</h1>
          <p className="text-red-200 mt-2 text-sm">Enter your details and a mechanic will come to you</p>
          <div className="flex justify-center items-center gap-2 mt-4 text-xs text-red-200">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Booking</span>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto px-4 py-10">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10">
            <form onSubmit={handleSubmit} noValidate>

              {/* Service Address */}
              <div className="mb-8">
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 bg-red-600 text-white rounded-full text-xs flex items-center justify-center">1</span>
                  Select Exact Service Address
                </h2>
                <button type="button" onClick={useCurrentLocation} disabled={locationLoading}
                  className="flex items-center gap-2 text-sm text-red-600 font-semibold mb-4 hover:text-red-800 disabled:opacity-50 transition">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {locationLoading ? 'Detecting your location...' : 'Use Current Location'}
                </button>
                <div className="space-y-3">
                  <div>
                    <input name="address" placeholder="Service address (street, area, city)" value={formData.address} onChange={handleChange} className={inp('address')} />
                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                  </div>
                  <div>
                    <input name="houseNo" placeholder="Complete your address with House No / Flat / Building" value={formData.houseNo} onChange={handleChange} className={inp('houseNo')} />
                    {errors.houseNo && <p className="text-red-500 text-xs mt-1">{errors.houseNo}</p>}
                  </div>
                </div>
              </div>

              {/* Your Info */}
              <div className="mb-8">
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 bg-red-600 text-white rounded-full text-xs flex items-center justify-center">2</span>
                  Fill Your Information
                </h2>
                <div className="space-y-3">
                  <div>
                    <input type="email" name="email" placeholder="Email (for Invoice)" value={formData.email} onChange={handleChange} className={inp('email')} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 border border-r-0 border-gray-200 rounded-l-xl bg-gray-50 text-gray-500 text-sm font-medium">+91</span>
                      <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange}
                        className={`flex-1 border rounded-r-xl px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-red-400 ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200'}`} />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <input type="text" name="name" placeholder="Name (Optional)" value={formData.name} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-400 transition" />
                </div>
              </div>

              {/* Date & Time */}
              <div className="mb-8">
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                  <span className="w-5 h-5 bg-red-600 text-white rounded-full text-xs flex items-center justify-center">3</span>
                  Select Date and Time
                </h2>
                <p className="text-xs text-gray-400 mb-4 ml-7">Please select at least 30 minutes from current time.</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} min={new Date().toISOString().split('T')[0]} className={inp('date')} />
                    {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                  </div>
                  <div>
                    <input type="time" name="time" value={formData.time} onChange={handleChange} className={inp('time')} />
                    {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                  </div>
                </div>
              </div>

              {/* Additional */}
              <div className="mb-8">
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 bg-red-600 text-white rounded-full text-xs flex items-center justify-center">4</span>
                  Additional Notes
                </h2>
                <div className="space-y-3">
                  <textarea name="notes" rows={3} placeholder="Please explain what is the issue with your vehicle in detail" value={formData.notes} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-400 transition resize-none" />
                  <input type="text" name="coupon" placeholder="Discount Coupon Code (optional)" value={formData.coupon} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-400 transition" />
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                <p className="text-xs text-yellow-800 leading-relaxed">
                  ⚠️ Amount paid will be adjusted from the total bill. Full refund if cancelled 1 hour prior. All prices inclusive of GST. A visit charge of ₹399 applies if no service is performed.
                </p>
              </div>

              <button type="submit" disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white font-bold py-4 rounded-xl transition text-base shadow-lg">
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                    Confirming Booking...
                  </span>
                ) : 'Confirm Booking & Track Mechanic →'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}