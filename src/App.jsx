import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'
import TrackingPage from './pages/TrackingPage'
import OurTeam from './pages/OurTeam'
import GarixDemo from './pages/GarixDemo'
import AboutPage from './pages/AboutPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/garix-demo" element={<GarixDemo />} />
        <Route path="/about-garix" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}