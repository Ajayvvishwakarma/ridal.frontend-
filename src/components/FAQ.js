// src/components/FAQ.js
import React from 'react'

const FAQ = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">How quickly can a mechanic arrive?</h3>
          <p className="text-gray-600 mt-2">Our mechanics typically arrive within 30–60 minutes of booking.</p>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">What vehicles do you service?</h3>
          <p className="text-gray-600 mt-2">We service all two-wheelers and four-wheelers at your doorstep.</p>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">Is there a cancellation charge?</h3>
          <p className="text-gray-600 mt-2">Full refund if cancelled at least 1 hour before the appointment.</p>
        </div>
      </div>
    </section>
  )
}

export default FAQ