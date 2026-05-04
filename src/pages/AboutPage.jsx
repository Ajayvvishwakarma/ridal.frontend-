import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="font-sans w-full min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-black text-white text-xs py-2 px-4 flex flex-wrap justify-between items-center">
        <div className="flex gap-6">
          <span>We'are Open: Fri - Sat 6:00 - 18:00</span>
          <span>052 (699) 256 - 693</span>
          <span>mail@garix.com</span>
        </div>
        <span className="font-bold text-lg tracking-widest">Garix</span>
      </div>
      {/* Navbar */}
      <Navbar />
      {/* Hero/Appointment Section */}
      <section className="bg-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
        <div className="flex flex-wrap justify-center gap-2 text-sm mb-2">
          <span className="text-white/80">Home</span>
          <span className="text-white/40">/</span>
          <span className="text-white">About Us</span>
        </div>
      </section>
      {/* About Section */}
      <section className="py-16 bg-white w-full">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
          <div className="flex flex-col gap-4">
            <div className="bg-gray-100 rounded-2xl shadow-md p-6 flex items-center justify-center">about img 1</div>
            <div className="bg-gray-100 rounded-2xl shadow-md p-6 flex items-center justify-center">about img 2</div>
            <div className="bg-gray-100 rounded-2xl shadow-md p-6 flex items-center justify-center">about img 3</div>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">10+</div>
              <div className="text-gray-700 font-bold">Years of Experience</div>
            </div>
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
        </div>
      </section>
      {/* Counters */}
      <section className="py-12 bg-gray-50 w-full">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {[
            { icon: '🏆', value: '1k+', label: 'Satisfied Clients' },
            { icon: '⏳', value: '10+', label: 'Years of Experience' },
            { icon: '🔧', value: '1499+', label: 'Successful Work' },
            { icon: '🎖️', value: '15+', label: 'Awards Wining' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-2xl font-bold text-blue-600 mb-1">{item.value}</div>
              <div className="text-gray-700 text-sm">{item.label}</div>
            </div>
          ))}
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
      {/* Work Process */}
      <section className="py-16 bg-gray-50 w-full">
        <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-8">Our Work Process</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 px-4">
          {["Make An Appointment","Select Your Services","Confirm For Services","Get Your Car"].map((step, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl mb-4">{i+1}</div>
              <h3 className="font-bold text-lg text-gray-800 mb-1">{step}</h3>
              <p className="text-gray-500 text-sm mb-2">Lorem ipsum dolor sit amet. Sit quia perfrendis on the sed erarum repuiandae on The voluptatem fugiat in aut aliam doloremque voluptatem aut voluptatibus.</p>
            </div>
          ))}
        </div>
      </section>
      {/* Appointment Form */}
      <section className="py-16 bg-white w-full">
        <div className="max-w-2xl mx-auto bg-gray-50 rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Make an Appointment Or Call Us 24/7</h2>
          <p className="mb-4 text-gray-700 font-semibold text-lg">052 (699) 256 - 693</p>
          <form className="grid gap-4">
            <input className="border border-gray-300 rounded-lg px-4 py-2" placeholder="Your Name" />
            <input className="border border-gray-300 rounded-lg px-4 py-2" placeholder="Email Address" />
            <input className="border border-gray-300 rounded-lg px-4 py-2" placeholder="dd-mm-yyyy" />
            <input className="border border-gray-300 rounded-lg px-4 py-2" placeholder="--:--" />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Submit Message</button>
          </form>
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
