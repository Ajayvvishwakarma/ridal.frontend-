import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    country: '',
    postcode: '',
    email: '',
    phone: '',
    notes: '',
    shipToDifferent: false,
    shippingFirstName: '',
    shippingLastName: '',
    shippingCompany: '',
    shippingStreet: '',
    shippingApartment: '',
    shippingCity: '',
    shippingCountry: '',
    shippingPostcode: '',
    createAccount: false,
    paymentMethod: 'razorpay'
  });

  const [loading, setLoading] = useState(false);

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Save order to MongoDB via backend API
  const saveOrderToDatabase = async (orderData) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      
      const response = await fetch(`${apiUrl}/orders/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Order saved successfully:', result);
        alert('✅ Payment confirmed! Your order has been saved.\n\nThank you for your order! You will receive a confirmation email shortly.');
        
        // Redirect to home after 2 seconds
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      } else {
        console.error('Error saving order:', response.statusText);
        alert('⚠️ Payment successful but order could not be saved.\n\nOur team will contact you soon to confirm your order.\n\nPayment ID: ' + orderData.paymentId);
        
        setTimeout(() => {
          window.location.href = '/';
        }, 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('⚠️ Payment successful but order could not be saved to database.\n\nOur team will contact you soon.\n\nError: ' + error.message);
      
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Mock order data
  const orderItems = [
    { id: 1, name: 'BMW Car Lexus GS Steering...', price: 200, quantity: 1 }
  ];
  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0;
  const total = subtotal + shipping;

  // Handle Razorpay Payment
  const handleRazorpayPayment = async (e) => {
    e.preventDefault();

    // Check if Razorpay key is configured
    const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY;
    if (!razorpayKey || razorpayKey.includes('YOUR_KEY')) {
      alert('❌ Razorpay Payment Error\n\n⚠️ Payment Gateway is not configured.\n\n📝 To enable payments:\n1. Get your Razorpay credentials from: https://dashboard.razorpay.com/app/keys\n2. Update the VITE_RAZORPAY_KEY in .env file\n3. Restart your development server\n\n📧 For now, you can use other payment methods (Bank Transfer, Cheque)');
      return;
    }

    // Validate form
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.streetAddress || !formData.city || !formData.country || !formData.postcode) {
      alert('Please fill in all required billing details');
      return;
    }

    setLoading(true);

    try {
      // Create order on backend (you would need a backend API for this)
      // For now, we'll proceed directly with client-side Razorpay integration
      
      const options = {
        key: razorpayKey, // Use your actual Razorpay Key ID
        amount: total * 100, // Amount in paise (smallest unit)
        currency: 'INR',
        name: 'Garix - Auto Parts & Accessories',
        description: `Order for ${orderItems.map(item => item.name).join(', ')}`,
        image: 'https://via.placeholder.com/200x50?text=Garix',
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.phone
        },
        notes: {
          address: `${formData.streetAddress}, ${formData.city}, ${formData.country} ${formData.postcode}`,
          notes: formData.notes
        },
        theme: {
          color: '#4f46e5' // Indigo color
        },
        method: {
          googlepay: true,  // Google Pay
          phonepe: true,    // Phone Pay
          paytm: true,      // Paytm
          netbanking: true, // Net Banking
          card: true,       // Credit/Debit Card
          wallet: true,     // Wallets
          upi: true         // UPI
        },
        handler: function(response) {
          // Payment successful - Save order to database
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
          console.log('Payment Details:', response);
          
          // Save order to backend/MongoDB
          const orderData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            companyName: formData.companyName,
            streetAddress: formData.streetAddress,
            apartment: formData.apartment,
            city: formData.city,
            country: formData.country,
            postcode: formData.postcode,
            notes: formData.notes,
            shippingAddress: formData.shipToDifferent ? {
              firstName: formData.shippingFirstName,
              lastName: formData.shippingLastName,
              companyName: formData.shippingCompany,
              streetAddress: formData.shippingStreet,
              apartment: formData.shippingApartment,
              city: formData.shippingCity,
              country: formData.shippingCountry,
              postcode: formData.shippingPostcode,
            } : null,
            paymentId: response.razorpay_payment_id,
            amount: total,
            items: orderItems,
            paymentMethod: 'razorpay',
            status: 'completed',
            orderedAt: new Date()
          };

          // Make API call to save order
          saveOrderToDatabase(orderData);
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
            alert('Payment cancelled');
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment processing failed. Please try again.');
      setLoading(false);
    }
  };

  // Handle other payment methods
  const handleOtherPaymentMethods = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.streetAddress || !formData.city || !formData.country || !formData.postcode) {
      alert('Please fill in all required billing details');
      return;
    }

    if (formData.paymentMethod === 'bank-transfer') {
      alert(`Bank Transfer Details:\nAmount: $${total}\n\nPlease transfer the amount to our bank account.\nYour order will be processed once payment is received.\n\nOrder Reference: ORD-${Date.now()}`);
    } else if (formData.paymentMethod === 'cheque') {
      alert(`Cheque Payment:\nAmount: $${total}\nPlease post cheque to our address.\nOrder Reference: ORD-${Date.now()}`);
    } else if (formData.paymentMethod === 'credit-card') {
      alert('Credit Card payment is currently under maintenance. Please use Razorpay payment method.');
    }
  };

  const handleSubmit = (e) => {
    if (formData.paymentMethod === 'razorpay') {
      handleRazorpayPayment(e);
    } else {
      handleOtherPaymentMethods(e);
    }
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
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white py-12 md:py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Checkout</h1>
          <p className="text-indigo-100"><Link to="/" className="hover:text-white">Home</Link> / Checkout</p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-6xl mx-auto text-center space-y-3 text-sm md:text-base">
          <p className="text-gray-700">
            <button className="text-indigo-600 hover:text-indigo-700 font-semibold">Returning customer? Click here to login</button>
          </p>
          <p className="text-gray-700">
            <button className="text-indigo-600 hover:text-indigo-700 font-semibold">Have a coupon? Click here to enter your code</button>
          </p>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="py-12 md:py-20 bg-white w-full">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-8">
            {/* Billing & Shipping Forms */}
            <div className="md:col-span-2 space-y-8">
              {/* Billing Details */}
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Billing Details</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">First Name *</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Your Company Name</label>
                  <input 
                    type="text" 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Street Address *</label>
                  <input 
                    type="text" 
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Apartment, Suite, Unit etc. (Optional)</label>
                  <input 
                    type="text" 
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Town / City *</label>
                    <input 
                      type="text" 
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Country *</label>
                    <input 
                      type="text" 
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Postcode / Zip *</label>
                  <input 
                    type="text" 
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    name="createAccount"
                    id="createAccount"
                    checked={formData.createAccount}
                    onChange={handleChange}
                    className="w-5 h-5 text-indigo-600 rounded"
                  />
                  <label htmlFor="createAccount" className="text-gray-700 font-semibold">Create An Account?</label>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <input 
                    type="checkbox" 
                    name="shipToDifferent"
                    id="shipToDifferent"
                    checked={formData.shipToDifferent}
                    onChange={handleChange}
                    className="w-5 h-5 text-indigo-600 rounded"
                  />
                  <label htmlFor="shipToDifferent" className="text-lg font-bold text-gray-900">Ship to a different address?</label>
                </div>

                {formData.shipToDifferent && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                        <input 
                          type="text" 
                          name="shippingFirstName"
                          value={formData.shippingFirstName}
                          onChange={handleChange}
                          className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                        <input 
                          type="text" 
                          name="shippingLastName"
                          value={formData.shippingLastName}
                          onChange={handleChange}
                          className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Company Name</label>
                      <input 
                        type="text" 
                        name="shippingCompany"
                        value={formData.shippingCompany}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Street Address</label>
                      <input 
                        type="text" 
                        name="shippingStreet"
                        value={formData.shippingStreet}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Apartment, Suite, Unit etc. (Optional)</label>
                      <input 
                        type="text" 
                        name="shippingApartment"
                        value={formData.shippingApartment}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Town / City</label>
                        <input 
                          type="text" 
                          name="shippingCity"
                          value={formData.shippingCity}
                          onChange={handleChange}
                          className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Country</label>
                        <input 
                          type="text" 
                          name="shippingCountry"
                          value={formData.shippingCountry}
                          onChange={handleChange}
                          className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Postcode / Zip</label>
                      <input 
                        type="text" 
                        name="shippingPostcode"
                        value={formData.shippingPostcode}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Order Notes */}
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                <label className="block text-gray-700 font-semibold mb-2">Order Notes (Optional)</label>
                <textarea 
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600 resize-none h-32"
                />
              </div>

              {/* Payment Methods */}
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Payment Method</h3>
                
                <div className="space-y-4">
                  {/* Razorpay Payment */}
                  <label className="flex items-start gap-3 p-4 border-2 border-gray-300 rounded-lg hover:border-indigo-600 cursor-pointer transition">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="razorpay"
                      checked={formData.paymentMethod === 'razorpay'}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 text-indigo-600"
                    />
                    <div className="flex-1">
                      <p className="font-bold text-gray-900">Razorpay Payment Gateway</p>
                      <p className="text-sm text-gray-600 mt-2">Secure payment with multiple options:</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-xs font-semibold">💳 Google Pay</span>
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded text-xs font-semibold">📱 Phone Pay</span>
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded text-xs font-semibold">🏦 Paytm</span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-xs font-semibold">✓ UPI</span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-xs font-semibold">💰 Net Banking</span>
                        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded text-xs font-semibold">💳 Cards</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">All payments are encrypted and secure</p>
                    </div>
                  </label>

                  {/* Direct Bank Transfer */}
                  <label className="flex items-start gap-3 p-4 border-2 border-gray-300 rounded-lg hover:border-indigo-600 cursor-pointer transition">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="bank-transfer"
                      checked={formData.paymentMethod === 'bank-transfer'}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 text-indigo-600"
                    />
                    <div>
                      <p className="font-bold text-gray-900">Direct Bank Transfer</p>
                      <p className="text-sm text-gray-600 mt-1">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    </div>
                  </label>

                  {/* Cheque Payment */}
                  <label className="flex items-start gap-3 p-4 border-2 border-gray-300 rounded-lg hover:border-indigo-600 cursor-pointer transition">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="cheque"
                      checked={formData.paymentMethod === 'cheque'}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 text-indigo-600"
                    />
                    <div>
                      <p className="font-bold text-gray-900">Cheque Payment</p>
                      <p className="text-sm text-gray-600 mt-1">Please send your cheque to our address</p>
                    </div>
                  </label>

                  {/* Credit Card */}
                  <label className="flex items-start gap-3 p-4 border-2 border-gray-300 rounded-lg hover:border-indigo-600 cursor-pointer transition">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="credit-card"
                      checked={formData.paymentMethod === 'credit-card'}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 text-indigo-600"
                    />
                    <div>
                      <p className="font-bold text-gray-900">Credit Card</p>
                      <p className="text-sm text-gray-600 mt-1">Secure payment with your credit card</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border-2 border-gray-200 sticky top-20">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Your Order</h3>

                {/* Order Items */}
                <div className="bg-white rounded p-4 mb-6 border border-gray-200">
                  <div className="space-y-3 mb-4 border-b border-gray-200 pb-4">
                    {orderItems.map(item => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-gray-700">{item.name}</span>
                        <span className="text-gray-700">${item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Qty:</span>
                    <span className="font-semibold text-gray-900">01</span>
                  </div>
                </div>

                {/* Totals */}
                <div className="space-y-3 mb-6 border-b-2 border-gray-300 pb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Subtotal</span>
                    <span className="font-bold text-gray-900">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Shipping</span>
                    <span className="text-sm text-gray-600">Enter your address to view shipping options.</span>
                  </div>
                </div>

                <div className="flex justify-between mb-6">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-xl font-extrabold text-indigo-600">${total.toFixed(2)}</span>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className={`w-full ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800'} text-white font-bold py-3 rounded-lg transition`}
                >
                  {loading ? 'Processing...' : 'Place Order'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-purple-600 to-indigo-600 w-full">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">Our Newsletter</h2>
          <p className="text-purple-100 mb-6">Get Regular Update Please Subscribe Newsletter</p>
          <form className="flex flex-col md:flex-row gap-3 justify-center">
            <input 
              type="email" 
              placeholder="Enter Your Email"
              className="flex-1 max-w-sm border-0 rounded-lg px-4 py-3 focus:outline-none text-sm md:text-base"
              required
            />
            <button 
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
