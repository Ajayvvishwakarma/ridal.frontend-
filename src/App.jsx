import './index.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import ShopPage from './pages/ShopPage';
import BlogPage from './pages/BlogPage';
import BookingPage from './pages/BookingPage';
import LocationStep from './components/LocationStep';
import TrackingPage from './pages/TrackingPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';


const App = () => {
  return (
    <>
      {/* --- HEADER (GLOBAL) --- */}
      <header>
        <div className="container nav-wrapper">
          <Link to="/" className="logo">GAR<span>IX</span></Link>
          <input type="checkbox" id="menu-check" />
          <label htmlFor="menu-check" className="menu-toggle"><i className="fas fa-bars"></i></label>

          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/booking">Booking</Link>
            <Link to="/tracking">Tracking</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
            <a href="/blog">Blog</a>
            <Link to="/contact">Contact</Link>
          </nav>

          <div className="header-info">
            <div className="info-box">
              <span>We are open 7 days a week</span>
              <span>00:06AM - 08:00PM</span>
              <span>Central Park West LA87, New York</span>
            </div>
            <div className="info-box">
              <span>Call us 24/7</span>
              <a href="tel:052699256693">052 (699) 256 - 693</a>
            </div>
            <a href="#appointment-form" className="btn btn-cta-header">Make An Appointment</a>
          </div>
        </div>
      </header>

      {/* --- ROUTES --- */}
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/about"    element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/shop"     element={<ShopPage />} />
        <Route path="/blog"     element={<BlogPage />} />
        <Route path="/booking"  element={<BookingPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="/contact"  element={<ContactPage />} />
        <Route path="/cart"     element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>

      {/* --- FOOTER (GLOBAL) --- */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <Link to="/" className="logo">GAR<span>IX</span></Link>
              <p>Lorem ipsum dolor sit aimet. Quo velit eum minima id eligendi mollitia eum cupiditate velit sit voluphbtatem consequuntur.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter Your Email" />
                <button><i className="fas fa-paper-plane"></i></button>
              </div>
              <p style={{marginTop:'10px', fontSize:'12px', color:'#666'}}>Get Regular Update Please Subscribe Newsletter</p>
            </div>

            <div className="footer-col">
              <h4>Useful Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/booking">Booking</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/tracking">Tracking</Link></li>
                <li><a href="/blog">Blog</a></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Opening Hours</h4>
              <ul className="hours-list">
                <li><span>Mon</span> <span>09.00 - 06.00</span></li>
                <li><span>Tue</span> <span>10.00 - 07.00</span></li>
                <li><span>Wed</span> <span>08.00 - 05.00</span></li>
                <li><span>Thu</span> <span>09.30 - 06.30</span></li>
                <li><span>Fri</span> <span>08.30 - 05.30</span></li>
                <li><span>Sat</span> <span>09.00 - 06.00</span></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact Info</h4>
              <ul className="contact-info">
                <li><i className="fas fa-phone-alt" style={{color:'var(--primary-color)'}}></i> +880 1234 567890</li>
                <li><i className="fas fa-envelope" style={{color:'var(--primary-color)'}}></i> info@garix.com</li>
                <li><i className="fas fa-map-marker-alt" style={{color:'var(--primary-color)'}}></i> Fifth Avenue 5501, Broadway, New York</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Our Instagram</h4>
              <div className="instagram-grid">
                <img src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=150&h=150&fit=crop" alt="Instagram" className="insta-img" />
                <img src="https://images.unsplash.com/photo-1609440226919-fe7b9c25e541?w=150&h=150&fit=crop" alt="Instagram" className="insta-img" />
                <img src="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=150&h=150&fit=crop" alt="Instagram" className="insta-img" />
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop" alt="Instagram" className="insta-img" />
                <img src="https://images.unsplash.com/photo-1487754180144-351b8e906e8f?w=150&h=150&fit=crop" alt="Instagram" className="insta-img" />
                <img src="https://images.unsplash.com/photo-1552512019-4a632b6a4d82?w=150&h=150&fit=crop" alt="Instagram" className="insta-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2026 Garix. All Rights Reserved By Vecuro</p>
        </div>
      </footer>
    </>
  );
};

export default App;