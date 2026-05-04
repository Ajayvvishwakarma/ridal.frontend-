import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BookingPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);

  const [formData, setFormData] = useState({
    address: '',
    houseNo: '',
    email: '',
    phone: '',
    name: '',
    date: '',
    time: '',
    notes: '',
    coupon: ''
  });

  const [errors, setErrors] = useState({});

  // ---------------- HANDLE INPUT ----------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  // ---------------- LOCATION ----------------
  const useCurrentLocation = () => {
    if (!navigator.geolocation) return alert('Geolocation not supported');

    setLocationLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();

          setFormData(prev => ({
            ...prev,
            address: data.display_name || `${latitude}, ${longitude}`
          }));
        } catch {
          setFormData(prev => ({
            ...prev,
            address: `${latitude}, ${longitude}`
          }));
        }

        setLocationLoading(false);
      },
      () => {
        alert('Location access denied');
        setLocationLoading(false);
      }
    );
  };

  // ---------------- VALIDATION ----------------
  const validate = () => {
    const e = {};

    if (!formData.address.trim()) e.address = 'Address required';
    if (!formData.houseNo.trim()) e.houseNo = 'House No required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Valid email required';
    if (!/^\d{10}$/.test(formData.phone)) e.phone = 'Valid phone required';
    if (!formData.date) e.date = 'Select date';
    if (!formData.time) e.time = 'Select time';

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // ---------------- SUBMIT ----------------
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate('/tracking', { state: { booking: formData } });
    }, 1500);
  };

  // ✅ FIXED INPUT STYLE (TEXT COLOR ISSUE SOLVED)
  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm bg-white text-gray-900 placeholder-gray-400 
    focus:ring-2 focus:ring-red-400 outline-none transition ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-200'
    }`;

  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      <Navbar />

      {/* HEADER */}
      <div className="pt-16 bg-gradient-to-r from-red-600 to-red-500 text-white text-center py-12 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Book a Doorstep Service
        </h1>
        <p className="text-red-200 mt-2 text-sm">
          Fast • Reliable • At Your Location
        </p>

        <div className="mt-4 text-sm">
          <Link to="/" className="hover:underline">Home</Link> / Booking
        </div>
      </div>

      {/* FORM */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-xl p-8 space-y-8 animate-slideUp">

          <form onSubmit={handleSubmit} className="space-y-8">

            {/* STEP 1 */}
            <div>
              <h2 className="step-title">1. Service Address</h2>

              <button
                type="button"
                onClick={useCurrentLocation}
                className="btn-secondary mb-4"
              >
                {locationLoading ? 'Detecting...' : '📍 Use Current Location'}
              </button>

              <input
                name="address"
                placeholder="Enter full address"
                value={formData.address}
                onChange={handleChange}
                className={inputClass('address')}
              />
              {errors.address && <p className="error">{errors.address}</p>}

              <input
                name="houseNo"
                placeholder="House No / Flat"
                value={formData.houseNo}
                onChange={handleChange}
                className={`${inputClass('houseNo')} mt-3`}
              />
              {errors.houseNo && <p className="error">{errors.houseNo}</p>}
            </div>

            {/* STEP 2 */}
            <div>
              <h2 className="step-title">2. Your Info</h2>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass('email')}
              />
              {errors.email && <p className="error">{errors.email}</p>}

              <input
                type="tel"
                name="phone"
                placeholder="Phone (10 digit)"
                value={formData.phone}
                onChange={handleChange}
                className={`${inputClass('phone')} mt-3`}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}

              <input
                name="name"
                placeholder="Name (optional)"
                value={formData.name}
                onChange={handleChange}
                className="mt-3 w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 bg-white"
              />
            </div>

            {/* STEP 3 */}
            <div>
              <h2 className="step-title">3. Date & Time</h2>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={inputClass('date')}
                />
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={inputClass('time')}
                />
              </div>
            </div>

            {/* STEP 4 */}
            <div>
              <h2 className="step-title">4. Notes</h2>

              <textarea
                name="notes"
                rows={3}
                placeholder="Describe issue"
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 bg-white placeholder-gray-400"
              />

              <input
                name="coupon"
                placeholder="Coupon code"
                value={formData.coupon}
                onChange={handleChange}
                className="mt-3 w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 bg-white"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="btn-primary w-full mt-4"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Confirm Booking →'}
            </button>

          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}