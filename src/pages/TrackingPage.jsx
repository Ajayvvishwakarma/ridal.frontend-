import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'



export default function TrackingPage() {
  const { state } = useLocation()
  // Fullscreen effect: triggers on first user click
  useEffect(() => {
    const handleFullScreen = () => {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
      }
      document.removeEventListener('click', handleFullScreen);
    };
    document.addEventListener('click', handleFullScreen);
    return () => document.removeEventListener('click', handleFullScreen);
  }, []);
  const booking = state?.booking || {}
  const mapRef = useRef(null)
  const mapInstance = useRef(null)
  const mechanicMarker = useRef(null)
  const userMarker = useRef(null)

  const [mechanicPos, setMechanicPos] = useState({ lat: 28.6139, lng: 77.2090 })
  const [userPos, setUserPos] = useState({ lat: 28.6200, lng: 77.2150 })
  const [eta, setEta] = useState(18)
  const [status, setStatus] = useState('On the way')
  const [mapLoaded, setMapLoaded] = useState(false)
  const [bookingId] = useState(() => 'RNR' + Math.floor(Math.random() * 900000 + 100000))

  const statuses = ['Mechanic Assigned', 'On the way', 'Nearby (2 min)', 'Arrived']

  // Load Leaflet (free, no API key needed)
  useEffect(() => {
    if (mapLoaded) return
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    document.head.appendChild(link)

    const script = document.createElement('script')
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    script.onload = () => setMapLoaded(true)
    document.head.appendChild(script)
  }, [])

  // Get user real location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserPos({ lat: pos.coords.latitude, lng: pos.coords.longitude })
          setMechanicPos({ lat: pos.coords.latitude - 0.008, lng: pos.coords.longitude - 0.006 })
        },
        () => {}
      )
    }
  }, [])

  // Init map
  useEffect(() => {
    if (!mapLoaded || !mapRef.current || mapInstance.current) return
    const L = window.L
    const map = L.map(mapRef.current).setView([userPos.lat, userPos.lng], 14)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map)

    // User marker (red)
    const userIcon = L.divIcon({
      html: `<div style="background:#dc2626;width:16px;height:16px;border-radius:50%;border:3px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.3)"></div>`,
      iconSize: [16, 16], iconAnchor: [8, 8], className: ''
    })
    userMarker.current = L.marker([userPos.lat, userPos.lng], { icon: userIcon })
      .addTo(map)
      .bindPopup('📍 Your Location')

    // Mechanic marker (blue)
    const mechIcon = L.divIcon({
      html: `<div style="background:#2563eb;width:40px;height:40px;border-radius:50%;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;font-size:20px">🔧</div>`,
      iconSize: [40, 40], iconAnchor: [20, 20], className: ''
    })
    mechanicMarker.current = L.marker([mechanicPos.lat, mechanicPos.lng], { icon: mechIcon })
      .addTo(map)
      .bindPopup('🔧 Your Mechanic')

    mapInstance.current = map
  }, [mapLoaded, userPos])

  // Animate mechanic moving toward user
  useEffect(() => {
    const interval = setInterval(() => {
      setMechanicPos(prev => {
        const newLat = prev.lat + (userPos.lat - prev.lat) * 0.04
        const newLng = prev.lng + (userPos.lng - prev.lng) * 0.04

        if (mechanicMarker.current && window.L) {
          mechanicMarker.current.setLatLng([newLat, newLng])
        }
        return { lat: newLat, lng: newLng }
      })

      setEta(prev => {
        if (prev <= 1) { clearInterval(interval); setStatus('Arrived'); return 0 }
        return prev - 1
      })

      setStatus(prev => {
        if (eta > 12) return 'Mechanic Assigned'
        if (eta > 5) return 'On the way'
        if (eta > 1) return 'Nearby (2 min)'
        return 'Arrived'
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [userPos, eta])

  const statusColor = {
    'Mechanic Assigned': 'bg-blue-100 text-blue-700',
    'On the way': 'bg-yellow-100 text-yellow-700',
    'Nearby (2 min)': 'bg-orange-100 text-orange-700',
    'Arrived': 'bg-green-100 text-green-700',
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <div className="pt-16">
        {/* Header */}
        <div className="bg-red-600 py-8 px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 rounded-full px-4 py-1 text-sm mb-3">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Booking Confirmed
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold">Track Your Mechanic</h1>
          <p className="text-red-200 text-sm mt-1">Booking ID: <strong className="text-white">{bookingId}</strong></p>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
          {/* Status Banner */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Current Status</p>
                <div className="flex items-center gap-3">
                  <span className={`text-sm font-bold px-3 py-1 rounded-full ${statusColor[status] || 'bg-gray-100 text-gray-700'}`}>
                    {status}
                  </span>
                  {eta > 0 && (
                    <span className="text-gray-500 text-sm">ETA: <strong className="text-red-600">{eta} min</strong></span>
                  )}
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400 mb-1">Mechanic</p>
                <p className="font-bold text-gray-800">Rajesh Kumar</p>
                <a href="tel:+919999999999" className="text-red-600 text-sm font-medium hover:underline">📞 Call Mechanic</a>
              </div>
            </div>

            {/* Progress Steps */}
            <div className="mt-6 flex items-center">
              {statuses.map((s, i) => {
                const currentIdx = statuses.indexOf(status)
                const done = i <= currentIdx
                return (
                  <React.Fragment key={s}>
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${done ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-400'}`}>
                        {done ? '✓' : i + 1}
                      </div>
                      <p className="text-xs text-gray-500 mt-1 text-center w-16 leading-tight hidden sm:block">{s}</p>
                    </div>
                    {i < statuses.length - 1 && (
                      <div className={`flex-1 h-1 mx-1 rounded transition-all ${i < currentIdx ? 'bg-red-600' : 'bg-gray-200'}`}></div>
                    )}
                  </React.Fragment>
                )
              })}
            </div>
          </div>

          {/* Live Map */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div>
                <h2 className="font-bold text-gray-800">Live Location</h2>
                <p className="text-xs text-gray-400">Map updates every 3 seconds</p>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  <span className="text-gray-500">Your Location</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-500">Mechanic</span>
                </div>
              </div>
            </div>
            {!mapLoaded ? (
              <div className="h-80 flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <svg className="w-8 h-8 animate-spin text-red-600 mx-auto mb-2" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  <p className="text-gray-400 text-sm">Loading map...</p>
                </div>
              </div>
            ) : (
              <div ref={mapRef} style={{ height: '380px', width: '100%' }} />
            )}
          </div>

          {/* Booking Details */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-bold text-gray-800 mb-4">Booking Details</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                ['📍 Address', booking.address || 'N/A'],
                ['🏠 House No', booking.houseNo || 'N/A'],
                ['📅 Date', booking.date || 'N/A'],
                ['⏰ Time', booking.time || 'N/A'],
                ['📧 Email', booking.email || 'N/A'],
                ['📱 Phone', booking.phone ? `+91 ${booking.phone}` : 'N/A'],
              ].map(([label, val]) => (
                <div key={label} className="col-span-2 sm:col-span-1">
                  <p className="text-gray-400 text-xs">{label}</p>
                  <p className="font-medium text-gray-800 truncate">{val}</p>
                </div>
              ))}
              {booking.notes && (
                <div className="col-span-2">
                  <p className="text-gray-400 text-xs">📝 Notes</p>
                  <p className="font-medium text-gray-800">{booking.notes}</p>
                </div>
              )}
            </div>
          </div>

          {/* Help */}
          <div className="bg-red-50 border border-red-100 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-bold text-gray-800">Need Help?</p>
              <p className="text-gray-500 text-sm">Our support team is available 24/7</p>
            </div>
            <div className="flex gap-3">
              <a href="tel:+911203615050" className="bg-red-600 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-red-700 transition">
                📞 Call Support
              </a>
              <Link to="/" className="bg-white border border-gray-200 text-gray-700 px-5 py-2 rounded-xl text-sm font-semibold hover:bg-gray-50 transition">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}