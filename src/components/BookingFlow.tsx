import React, { useState } from 'react';

interface FormData {
  address: string;
  houseNo: string;
  email: string;
  phone: string;
  name: string;
  date: string;
  time: string;
  notes: string;
  coupon: string;
}

interface FormErrors {
  address?: string;
  houseNo?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
}

const BookingFlow: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [loading, setLoading] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    address: '',
    houseNo: '',
    email: '',
    phone: '',
    name: '',
    date: '',
    time: '',
    notes: '',
    coupon: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    setLocationLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();
          const addr =
            data.display_name ||
            `Lat: ${latitude.toFixed(4)}, Lon: ${longitude.toFixed(4)}`;
          setFormData((prev) => ({ ...prev, address: addr }));
        } catch {
          setFormData((prev) => ({
            ...prev,
            address: `Lat: ${latitude.toFixed(4)}, Lon: ${longitude.toFixed(4)}`,
          }));
        } finally {
          setLocationLoading(false);
        }
      },
      () => {
        alert('Unable to retrieve your location. Please enter it manually.');
        setLocationLoading(false);
      },
      { enableHighAccuracy: true }
    );
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.address.trim()) newErrors.address = 'Address is required.';
    if (!formData.houseNo.trim()) newErrors.houseNo = 'House No. is required.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Valid email is required.';
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = 'Valid 10-digit phone number is required.';
    if (!formData.date) newErrors.date = 'Please select a date.';
    if (!formData.time) newErrors.time = 'Please select a time.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setStep(3);
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full border rounded-lg px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-red-400 ${
      errors[field] ? 'border-red-500' : 'border-gray-300'
    }`;

  if (step === 3) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-500 mb-6">
            Your mechanic will arrive at <strong>{formData.address}</strong> on{' '}
            <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
          </p>
          <p className="text-sm text-gray-400 mb-8">
            A confirmation has been sent to <strong>{formData.email}</strong>.
          </p>
          <button
            onClick={() => { setStep(1); setFormData({ address:'',houseNo:'',email:'',phone:'',name:'',date:'',time:'',notes:'',coupon:'' }); }}
            className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Book Another Service
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-red-600">Ride N Repair</div>
        <div className="text-sm text-gray-500">Doorstep Vehicle Service</div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-2xl mx-auto px-4 pt-6">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="text-gray-600 font-medium">Home</span>
          <span>/</span>
          <span className="text-red-600 font-medium">Booking</span>
        </div>
      </div>

      {/* Form Card */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h1 className="text-xl font-bold text-gray-800 mb-1">Book a Service</h1>
          <p className="text-sm text-gray-400 mb-6">Fill in your details to schedule a doorstep visit.</p>

          <form onSubmit={handleSubmit} noValidate>

            {/* Section: Location */}
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Service Address
              </h2>

              <button
                type="button"
                onClick={useCurrentLocation}
                disabled={locationLoading}
                className="flex items-center gap-2 mb-4 text-sm text-red-600 font-medium hover:underline disabled:opacity-50"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {locationLoading ? 'Detecting location...' : 'Use Current Location'}
              </button>

              <div className="mb-3">
                <input
                  type="text"
                  name="address"
                  placeholder="Service address (street, area, city)"
                  value={formData.address}
                  onChange={handleChange}
                  className={inputClass('address')}
                />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="houseNo"
                  placeholder="House / Flat No., Building Name"
                  value={formData.houseNo}
                  onChange={handleChange}
                  className={inputClass('houseNo')}
                />
                {errors.houseNo && <p className="text-red-500 text-xs mt-1">{errors.houseNo}</p>}
              </div>
            </div>

            {/* Section: Contact Info */}
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Your Information
              </h2>

              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email (for invoice)"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass('email')}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="mb-3">
                <div className="flex">
                  <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 text-gray-500 text-sm">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="10-digit phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`flex-1 border rounded-r-lg px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-red-400 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name (Optional)"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-400 transition"
                />
              </div>
            </div>

            {/* Section: Date & Time */}
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Select Date &amp; Time
              </h2>
              <p className="text-xs text-gray-400 mb-3">
                Please select at least 30 minutes from now.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={inputClass('date')}
                  />
                  {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                </div>

                <div>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={inputClass('time')}
                  />
                  {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                </div>
              </div>
            </div>

            {/* Section: Additional Info */}
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Additional Details
              </h2>

              <div className="mb-3">
                <textarea
                  name="notes"
                  placeholder="Describe the issue with your vehicle (optional)"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-400 transition resize-none"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="coupon"
                  placeholder="Discount coupon code (optional)"
                  value={formData.coupon}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-400 transition"
                />
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
              Amount paid will be adjusted from the total bill. If the service is cancelled with at least one hour's notice, a full refund will be issued. All prices are inclusive of GST. A visit charge of ₹399 applies if no service is performed.
            </p>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white font-semibold py-3 rounded-lg transition text-sm"
            >
              {loading ? 'Confirming Booking...' : 'Confirm Booking →'}
            </button>
          </form>
        </div>
      </div>

      {/* Footer note */}
      <div className="text-center py-6 text-xs text-gray-400">
        Need help? Call us at{' '}
        <a href="tel:+911203615050" className="text-red-600 font-medium">
          +91 120 361 5050
        </a>
      </div>
    </div>
  );
};

export default BookingFlow;