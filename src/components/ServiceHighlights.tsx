import React from 'react';

export default function ServiceHighlights() {
  return (
    <div className="bg-gray-50 overflow-x-auto">
      <div className="min-w-max bg-white border border-gray-200 rounded-lg mb-4">
        <section className="py-12 px-6">
          <h2 className="text-2xl font-bold mb-4">Top-Rated Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
              <h3 className="font-bold text-lg">Doorstep Engine Service</h3>
              <p className="text-gray-600 mt-2">Engine tuning, repair, and oil change at your doorstep.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
              <h3 className="font-bold text-lg">Brake Service</h3>
              <p className="text-gray-600 mt-2">Brake pad replacement and ABS repair.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}