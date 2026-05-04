import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function OurTeam() {
  return (
    <div className="font-sans w-full min-h-screen bg-gray-50">
      <Navbar />
      <section className="pt-20 pb-20 px-4 md:px-16">
        <h1 className="text-4xl font-extrabold text-center text-red-600 mb-8">Our Team</h1>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Meet our expert technicians and mechanics who make Ride N Repair the most trusted doorstep vehicle service platform in India.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Example team members, replace with real data as needed */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center text-4xl mb-4">👨‍🔧</div>
            <h2 className="font-bold text-lg text-gray-800 mb-1">Rajesh Kumar</h2>
            <p className="text-gray-500 text-sm mb-2">Lead Mechanic</p>
            <p className="text-gray-600 text-xs text-center">10+ years of experience in car and bike repairs. Specialist in engine diagnostics.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center text-4xl mb-4">👩‍🔧</div>
            <h2 className="font-bold text-lg text-gray-800 mb-1">Priya Singh</h2>
            <p className="text-gray-500 text-sm mb-2">Senior Technician</p>
            <p className="text-gray-600 text-xs text-center">Expert in electrical systems and AC servicing. Known for quick and reliable solutions.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center text-4xl mb-4">🧑‍🔧</div>
            <h2 className="font-bold text-lg text-gray-800 mb-1">Amit Verma</h2>
            <p className="text-gray-500 text-sm mb-2">Field Mechanic</p>
            <p className="text-gray-600 text-xs text-center">Specializes in doorstep tyre and battery services. Customer favorite for professionalism.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
