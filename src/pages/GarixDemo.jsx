import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GarixDemo() {
  return (
    <div className="font-sans w-full min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-black text-white text-xs py-2 px-4 flex flex-wrap justify-between items-center">
        <div className="flex gap-6">
          <span>We'are Open: Fri - Sat 6:00 - 18:00</span>
          <span>052 (699) 256 - 693</span>
          <span>mail@gmail.com</span>
        </div>
        <span className="font-bold text-lg tracking-widest">Garix</span>
      </div>
      {/* Navbar */}
      <Navbar />
      {/* Hero/Appointment Section */}
      <section className="bg-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Make An Appointment</h1>
        <p className="mb-2">Call Us 24/7</p>
        <p className="text-2xl font-bold mb-6">052 (699) 256 - 693</p>
        <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-yellow-300 hover:text-blue-700 transition text-base shadow-lg">Book Now</button>
      </section>
      {/* Services */}
      <section className="py-16 bg-white w-full">
        <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-8">Our Service</h2>
        <p className="text-center text-gray-700 mb-12">Our Awesome And Super Repair Services</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Example services */}
          <div className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mb-4">🔧</div>
            <h3 className="font-bold text-lg text-gray-800 mb-1">Engine Service</h3>
            <p className="text-gray-500 text-sm mb-2">Complete engine tuning, oil change & repair at your doorstep.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mb-4">🛞</div>
            <h3 className="font-bold text-lg text-gray-800 mb-1">Tyre Service</h3>
            <p className="text-gray-500 text-sm mb-2">Puncture repair, tyre replacement & wheel alignment.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mb-4">🔋</div>
            <h3 className="font-bold text-lg text-gray-800 mb-1">Battery Service</h3>
            <p className="text-gray-500 text-sm mb-2">Battery testing, jump start & replacement service.</p>
          </div>
        </div>
      </section>
      {/* About Us */}
      <section className="py-16 bg-gray-50 w-full">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
          <div>
            <h2 className="text-3xl font-extrabold text-blue-600 mb-4">About Us</h2>
            <p className="text-gray-700 mb-4">Get A New Experience With Garix Services</p>
            <p className="text-gray-500 mb-4">Lorem ipsum dolor sit amet. Sit quia perferendis sed earum repuiandae on The voluptatem fugiat in doloremque voluptatem aut voluptatibus aliam ad nobis officiis. Et atque assumenda vel soluta quuam aut dolores deleniti vel quae exercitationem doloremque voluptatem aut.</p>
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-gray-800">Professional Service Skill</span>
                <span className="text-blue-600">80%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-600 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-gray-800">Car Cleaning and Painting Skill</span>
                <span className="text-blue-600">62%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-yellow-400 rounded-full" style={{ width: '62%' }}></div>
              </div>
            </div>
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Learn More</button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-center">about img 1</div>
            <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-center">about img 2</div>
          </div>
        </div>
      </section>
      {/* Work Process */}
      <section className="py-16 bg-white w-full">
        <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-8">Our Work Process</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 px-4">
          {["Make An Appointment","Select Your Services","Confirm For Services","Get Your Car"].map((step, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl mb-4">{i+1}</div>
              <h3 className="font-bold text-lg text-gray-800 mb-1">{step}</h3>
              <p className="text-gray-500 text-sm mb-2">Lorem ipsum dolor sit amet. Sit quia perfrendis on the sed erarum repuiandae on The voluptatem fugiat in aut aliam doloremque voluptatem aut voluptatibus.</p>
            </div>
          ))}
        </div>
      </section>
      {/* Appointment Form */}
      <section className="py-16 bg-gray-50 w-full">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Patient Appointment Form</h2>
          <form className="grid gap-4">
            <input className="border border-gray-300 rounded-lg px-4 py-2" placeholder="Your Name" />
            <input className="border border-gray-300 rounded-lg px-4 py-2" placeholder="Email Address" />
            <input className="border border-gray-300 rounded-lg px-4 py-2" placeholder="dd-mm-yyyy" />
            <input className="border border-gray-300 rounded-lg px-4 py-2" placeholder="--:--" />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Send Appointment</button>
          </form>
        </div>
      </section>
      {/* Team Members */}
      <section className="py-16 bg-white w-full">
        <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-8">Our Team Members</h2>
        <p className="text-center text-gray-700 mb-12">Our Expert Technician And Mechanics</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Example team members */}
          <div className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col items-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-4xl mb-4">👨‍🔧</div>
            <h2 className="font-bold text-lg text-gray-800 mb-1">Rajesh Kumar</h2>
            <p className="text-gray-500 text-sm mb-2">Lead Mechanic</p>
            <p className="text-gray-600 text-xs text-center">10+ years of experience in car and bike repairs. Specialist in engine diagnostics.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col items-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-4xl mb-4">👩‍🔧</div>
            <h2 className="font-bold text-lg text-gray-800 mb-1">Priya Singh</h2>
            <p className="text-gray-500 text-sm mb-2">Senior Technician</p>
            <p className="text-gray-600 text-xs text-center">Expert in electrical systems and AC servicing. Known for quick and reliable solutions.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col items-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-4xl mb-4">🧑‍🔧</div>
            <h2 className="font-bold text-lg text-gray-800 mb-1">Amit Verma</h2>
            <p className="text-gray-500 text-sm mb-2">Field Mechanic</p>
            <p className="text-gray-600 text-xs text-center">Specializes in doorstep tyre and battery services. Customer favorite for professionalism.</p>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-16 bg-gray-50 w-full">
        <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-8">Testimonials</h2>
        <p className="text-center text-gray-700 mb-12">Our Awesome Customers Valuable Feedback</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <p className="text-gray-600 mb-4">"Great service! Mechanic arrived on time and fixed my car quickly. Highly recommend."</p>
            <div className="font-bold text-blue-600">Amit S.</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <p className="text-gray-600 mb-4">"Very professional and polite staff. Booking was easy and transparent pricing."</p>
            <div className="font-bold text-blue-600">Priya V.</div>
          </div>
        </div>
      </section>
      {/* Plans/Pricing */}
      <section className="py-16 bg-white w-full">
        <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-8">Our Best Plan</h2>
        <p className="text-center text-gray-700 mb-12">Our Distinctive And Flexible Approach To Work</p>
        <div className="flex flex-wrap justify-center gap-6">
          {['Wash','Engine Service','Car Maintenance','Fuel Change','Customization','Others'].map(plan => (
            <div key={plan} className="bg-gray-50 rounded-2xl shadow-md p-6 w-48 text-center font-semibold text-gray-800">{plan}</div>
          ))}
        </div>
      </section>
      {/* Blog/News */}
      <section className="py-16 bg-gray-50 w-full">
        <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-8">Our Blog And News</h2>
        <p className="text-center text-gray-700 mb-12">Our Latest Blog And Latest News</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="font-bold text-lg text-gray-800 mb-2">How to maintain your car in summer</h3>
            <p className="text-gray-500 text-sm mb-2">Tips and tricks for keeping your vehicle in top shape during hot months.</p>
            <button className="text-blue-600 font-semibold hover:underline">Read More</button>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="font-bold text-lg text-gray-800 mb-2">5 signs your battery needs replacement</h3>
            <p className="text-gray-500 text-sm mb-2">Learn how to spot battery issues before they leave you stranded.</p>
            <button className="text-blue-600 font-semibold hover:underline">Read More</button>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="font-bold text-lg text-gray-800 mb-2">Why regular servicing matters</h3>
            <p className="text-gray-500 text-sm mb-2">Understand the importance of routine maintenance for your car's health.</p>
            <button className="text-blue-600 font-semibold hover:underline">Read More</button>
          </div>
        </div>
      </section>
      {/* Newsletter */}
      <section className="py-16 bg-white w-full">
        <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-8">Our Newsletter</h2>
        <p className="text-center text-gray-700 mb-8">Get Regular Update Please Subscribe Newsletter</p>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
          <input className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-auto" placeholder="Enter Your Email" />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Subscribe</button>
        </form>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}
