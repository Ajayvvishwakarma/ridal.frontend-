import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'
import TrackingPage from './pages/TrackingPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
      </Routes>
    </BrowserRouter>
  )
}