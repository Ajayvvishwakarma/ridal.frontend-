import React from 'react';

export default function Hero() {
  return (
    <section className="bg-gray-900 text-center py-20">
      <h1 className="text-3xl font-bold text-white mb-6">Ready to Experience the Difference?</h1>
      <p className="text-gray-300 mb-4">
        Looking for specialized two-wereler or four-wheeler repair? Ride N Repair offers doorstep car and bike service with expert mechanics to meet and exceed your expectations.
      </p>
      <div className="mt-6">
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
          Book Service Now
        </button>
      </div>
    </section>
  );
}