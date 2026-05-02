import React from 'react';

export default function ComparisonTable() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Why Choose Ride N Repair?</h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left">Feature</th>
              <th className="px-6 py-4 text-left">Ride N Repair</th>
              <th className="px-6 py-4 text-left">Others</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4">Doorstep Service</td>
              <td className="px-6 py-4">Workshop Visits</td>
            </tr>
            <tr>
              <td className="px-6 py-4">Certified Mechanics</td>
              <td className="px-6 py-4">Unverified Talent</td>
            </tr>
            <tr>
              <td className="px-6 py-4">Transparent Pricing</td>
              <td className="px-6 py-4">Hidden Costs</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center mt-6">
        <button className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors">
          Book Now
        </button>
      </div>
    </section>
  );
}