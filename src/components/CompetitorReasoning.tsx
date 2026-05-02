import React from 'react';

export default function CompetitorReasoning() {
  return (
    <div className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Why Switch?</h2>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <span className="text-blue-600 text-3xl mr-2">🎯</span>
            <p className="text-gray-600 text-xl font-semibold">Transparent Costs</p>
            <p className="text-gray-600">No hidden charges.</p>
          </div>
          <div className="flex items-center">
            <span className="text-blue-600 text-3xl mr-2">🚀</span>
            <p className="text-gray-600 text-xl font-semibold">Expert Mechanics</p>
            <p className="text-gray-600">10+ years of experience.</p>
          </div>
          <div className="flex items-center">
            <span className="text-blue-600 text-3xl mr-2">📱</span>
            <p className="text-gray-600 text-xl font-semibold">24/7 Support</p>
            <p className="text-gray-600">Call anytime for queries.</p>
          </div>
        </div>
      </div>
    </div>
  );
}