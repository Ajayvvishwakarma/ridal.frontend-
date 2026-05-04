import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! We will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <div className="font-sans w-full min-h-screen bg-gray-50">
      {/* Header Top Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white text-xs py-2 px-4 md:py-3 md:px-6 flex flex-col md:flex-row gap-3 md:gap-6 justify-between items-start md:items-center">
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 text-xs">
          <span className="whitespace-nowrap">We're Open: Fri - Sat 6:00 - 18:00</span>
          <span className="whitespace-nowrap">052 (699) 256 - 693</span>
          <span className="whitespace-nowrap">mail@garix.com</span>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white py-16 md:py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 md:mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-indigo-100">Get In Touch With Garix</p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 md:py-20 bg-white w-full">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-8 md:mb-12">Call Us 24/7</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Phone */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center text-3xl mb-4">📞</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Call Us</h3>
              <p className="text-orange-600 font-bold text-lg mb-1">+052 (699) 256 - 693</p>
              <p className="text-gray-600 text-sm">We're available 24/7</p>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center text-3xl mb-4">✉️</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Email Us</h3>
              <p className="text-green-600 font-bold text-lg mb-1">contact@Garix.com</p>
              <p className="text-gray-600 text-sm">Send us anytime</p>
            </div>

            {/* Location */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-3xl mb-4">📍</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Location</h3>
              <p className="text-gray-700 font-semibold text-sm mb-1">Central Park West LA87</p>
              <p className="text-gray-600 text-sm">New York</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-100 to-gray-50 w-full">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-2 md:mb-4">Send Us a Message</h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12">Have a question? We'd love to hear from you.</p>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
              <div>
                <label className="block text-gray-800 font-semibold mb-2 text-sm md:text-base">First Name</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 md:py-3 focus:outline-none focus:border-indigo-600 transition text-sm md:text-base"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-800 font-semibold mb-2 text-sm md:text-base">Last Name</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 md:py-3 focus:outline-none focus:border-indigo-600 transition text-sm md:text-base"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-800 font-semibold mb-2 text-sm md:text-base">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@mail.com"
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 md:py-3 focus:outline-none focus:border-indigo-600 transition text-sm md:text-base"
                required
              />
            </div>

            <div className="mb-8">
              <label className="block text-gray-800 font-semibold mb-2 text-sm md:text-base">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="6"
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 md:py-3 focus:outline-none focus:border-indigo-600 transition text-sm md:text-base resize-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold py-3 md:py-4 rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition text-base md:text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-purple-600 to-indigo-600 w-full">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 md:mb-4">Our Newsletter</h2>
          <p className="text-purple-100 mb-6 md:mb-8 text-sm md:text-base">Get Regular Update Please Subscribe Newsletter</p>
          <form className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter Your Email"
              className="flex-1 max-w-sm border-0 rounded-lg px-4 md:px-6 py-2 md:py-3 focus:outline-none text-sm md:text-base"
              required
            />
            <button 
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold transition text-sm md:text-base whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-8 md:py-12 bg-white w-full text-center border-t-2 border-gray-200">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6">Follow Us</h3>
          <div className="flex justify-center gap-6 md:gap-8">
            <a href="#" className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl hover:bg-blue-700 transition">f</a>
            <a href="#" className="w-12 h-12 md:w-14 md:h-14 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl hover:bg-gray-900 transition">𝕏</a>
            <a href="#" className="w-12 h-12 md:w-14 md:h-14 bg-pink-500 text-white rounded-full flex items-center justify-center text-xl hover:bg-pink-600 transition">📷</a>
            <a href="#" className="w-12 h-12 md:w-14 md:h-14 bg-blue-700 text-white rounded-full flex items-center justify-center text-xl hover:bg-blue-800 transition">in</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
