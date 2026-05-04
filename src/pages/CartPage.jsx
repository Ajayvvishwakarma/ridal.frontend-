import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'BMW Car Lexus GS Steering...', price: 200, quantity: 1, image: '🚗' },
    { id: 2, name: 'Chevrolet Buick Sonic Car...', price: 200, quantity: 1, image: '🚙' },
    { id: 3, name: 'Luxury Car Custom Wheel...', price: 200, quantity: 1, image: '🛞' }
  ]);

  const [coupon, setCoupon] = useState('');

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 0 : 0; // Free shipping
  const total = subtotal + shipping;

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
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Shopping Cart</h1>
          <p className="text-indigo-100"><Link to="/" className="hover:text-white">Home</Link> / Cart</p>
        </div>
      </section>

      {/* Cart Section */}
      <section className="py-12 md:py-20 bg-white w-full">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
              <Link to="/shop" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Cart Items</h2>
                <div className="bg-gray-50 rounded-lg overflow-x-auto">
                  <table className="w-full text-sm md:text-base">
                    <thead className="bg-gray-200 border-b-2 border-gray-300">
                      <tr>
                        <th className="px-4 py-3 text-left">Product</th>
                        <th className="px-4 py-3 text-center">Price</th>
                        <th className="px-4 py-3 text-center">Quantity</th>
                        <th className="px-4 py-3 text-center">Total</th>
                        <th className="px-4 py-3 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map(item => (
                        <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100 transition">
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-3">
                              <div className="text-3xl">{item.image}</div>
                              <span className="text-gray-700 font-semibold">{item.name}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-center text-gray-700">${item.price.toFixed(2)}</td>
                          <td className="px-4 py-3 text-center">
                            <input 
                              type="number" 
                              min="1" 
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                              className="w-12 md:w-16 border border-gray-300 rounded px-2 py-1 text-center"
                            />
                          </td>
                          <td className="px-4 py-3 text-center font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</td>
                          <td className="px-4 py-3 text-center">
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-red-600 hover:text-red-800 font-semibold transition"
                            >
                              ✕
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Coupon Section */}
                <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Have a Coupon?</h3>
                  <div className="flex flex-col md:flex-row gap-3">
                    <input 
                      type="text" 
                      placeholder="Enter coupon code..."
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      className="flex-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600"
                    />
                    <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition whitespace-nowrap">
                      Apply Coupon
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col md:flex-row gap-4">
                  <Link to="/shop" className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition text-center">
                    Continue Shopping
                  </Link>
                  <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                    Update Cart
                  </button>
                </div>
              </div>

              {/* Cart Totals */}
              <div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border-2 border-gray-200 sticky top-20">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Cart Totals</h3>
                  
                  <div className="space-y-4 mb-6 border-b-2 border-gray-300 pb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Subtotal</span>
                      <span className="font-bold text-gray-900">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Shipping</span>
                      <span className="font-bold text-green-600">Free shipping</span>
                    </div>
                  </div>

                  <div className="flex justify-between mb-6">
                    <span className="text-lg font-bold text-gray-900">Order Total</span>
                    <span className="text-xl font-extrabold text-indigo-600">${total.toFixed(2)}</span>
                  </div>

                  <Link to="/checkout" className="w-full block text-center bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold py-3 rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition">
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          )}
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
