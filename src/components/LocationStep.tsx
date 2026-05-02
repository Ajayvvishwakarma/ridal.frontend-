import React, { useState } from 'react';

export default function LocationStep() {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLocationClick = () => setLoading(true); // Mock async operation
  const handleSaveAddress = () => { setLocation("New Delhi, Delhi"); setLoading(!1); };

  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Select Service Location</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          onClick={handleLocationClick}
          className="py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-lg text-center"
        >
          Use Current Location
        </button>
        <button
          onClick={handleSaveAddress}
          className="py-4 px-6 bg-gray-100 hover:bg-gray-200 rounded-lg text-center"
        >
          Save Address
        </button>
      </div>
      {loading ? (
        <p className="text-center mt-4">Fetching location...</p>
      ) : (
        <p className="text-center mt-4">
          Selected: {location}
        </p>
      )}
    </section>
  );
}