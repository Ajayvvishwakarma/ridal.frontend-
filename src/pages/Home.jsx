const Home = () => {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h4>Garix Auto Service</h4>
              <h1>Make An Appointment Or Call Us 24/7</h1>
              <a href="tel:052699256693" className="contact-large"><i className="fas fa-phone-alt"></i> 052 (699) 256 - 693</a>
              <p>Professional auto repair and maintenance services. We are dedicated to providing best experience for your vehicle with our expert team.</p>
            </div>
            <div className="hero-form" id="appointment-form">
              <form className="appointment-form">
                <h3>Patient Appointment Form</h3>
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" className="form-control" placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" className="form-control" placeholder="example@mail.com" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Date</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Time</label>
                    <input type="time" className="form-control" />
                  </div>
                </div>
                <button type="submit" className="btn" style={{width:'100%'}}>Send Appointment</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="section-padding">
        <div className="container">
          <div className="about-content">
            <div className="about-img-wrapper">
              <img src="https://images.unsplash.com/photo-1487754180144-351b8e906e8f?w=600&h=500&fit=crop" alt="About Garix" className="about-img" />
              <div className="experience-badge">
                <span>10+</span>
                <span style={{fontSize: '14px', fontFamily: 'var(--font-body)'}}>Years of<br />Experience</span>
              </div>
            </div>
            <div className="about-text">
              <h4>About Us</h4>
              <h2>Get A New Experience With Garix Services</h2>
              <p>Lorem ipsum dolor sit amet. Sit quia perferendis sed earum repuiandae on The voluptatem fugiat in doloremque voluptatem aut voluptatibus aliam ad nobis officiis. Et atque assumenda vel soluta quuam aut dolores deleniti vel quae exercitationem.</p>
              
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon"><i className="fas fa-tools"></i></div>
                  <div>
                    <h5>Equipped With All Latest Tools</h5>
                    <p style={{fontSize:'13px', color:'#888'}}>We use modern technology for diagnostics.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><i className="fas fa-calendar-check"></i></div>
                  <div>
                    <h5>We’re Available 7 Days a Week</h5>
                    <p style={{fontSize:'13px', color:'#888'}}>Always open to serve your needs.</p>
                  </div>
                </div>
              </div>
              <br />
              <a href="/about" className="btn btn-outline">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="section-padding" style={{backgroundColor: '#151515'}}>
        <div className="container">
          <div className="section-header">
            <h2>Our Awesome And Super Repair Services</h2>
          </div>
          <div className="service-grid">
            <div className="service-card">
              <i className="fas fa-car-battery service-icon"></i>
              <h3>Engine Repair</h3>
              <p>Complete engine diagnostics and repair services to keep your car running smoothly.</p>
              <a href="#" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="service-card">
              <i className="fas fa-oil-can service-icon"></i>
              <h3>Oil Change</h3>
              <p>Regular oil changes to extend the life of your engine and improve performance.</p>
              <a href="#" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="service-card">
              <i className="fas fa-cogs service-icon"></i>
              <h3>Transmission</h3>
              <p>Expert transmission services including flushes, repairs, and replacements.</p>
              <a href="#" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="service-card">
              <i className="fas fa-car-crash service-icon"></i>
              <h3>Body Work</h3>
              <p>High-quality auto body repair and painting to restore your vehicle's look.</p>
              <a href="#" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="service-card">
              <i className="fas fa-snowflake service-icon"></i>
              <h3>AC Repair</h3>
              <p>Air conditioning diagnostics and repair to keep you cool in summer.</p>
              <a href="#" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="service-card">
              <i className="fas fa-brake-warning service-icon"></i>
              <h3>Brake Service</h3>
              <p>Brake inspection, pad replacement, and rotor resurfacing for your safety.</p>
              <a href="#" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* --- COUNTERS SECTION --- */}
      <section className="counters">
        <div className="container">
          <div className="counter-grid">
            <div className="counter-item">
              <i className="fas fa-smile"></i>
              <div className="counter-number">1k+</div>
              <div className="counter-label">Satisfied Clients</div>
            </div>
            <div className="counter-item">
              <i className="fas fa-history"></i>
              <div className="counter-number">10+</div>
              <div className="counter-label">Years of Experience</div>
            </div>
            <div className="counter-item">
              <i className="fas fa-check-circle"></i>
              <div className="counter-number">1499+</div>
              <div className="counter-label">Successful Work</div>
            </div>
            <div className="counter-item">
              <i className="fas fa-trophy"></i>
              <div className="counter-number">15+</div>
              <div className="counter-label">Awards Winning</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WORK PROCESS SECTION --- */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Our Distinctive And Flexible Approach To Work</h2>
          </div>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-icon-num"><i className="fas fa-wrench"></i></div>
              <h4>Latest Equipment's</h4>
              <p style={{fontSize:'14px', color:'#888', marginTop:'10px'}}>Lorem ipsum dolor sit amet. Eum voluptatem omnis et ullam nesciunt vel alias obcaecati.</p>
            </div>
            <div className="process-card">
              <div className="process-icon-num"><i className="fas fa-user-cog"></i></div>
              <h4>Expert Mechanics</h4>
              <p style={{fontSize:'14px', color:'#888', marginTop:'10px'}}>Lorem ipsum dolor sit amet. Eum voluptatem omnis et ullam nesciunt vel alias obcaecati.</p>
            </div>
            <div className="process-card">
              <div className="process-icon-num"><i className="fas fa-medal"></i></div>
              <h4>Quality Services</h4>
              <p style={{fontSize:'14px', color:'#888', marginTop:'10px'}}>Lorem ipsum dolor sit amet. Eum voluptatem omnis et ullam nesciunt vel alias obcaecati.</p>
            </div>
            <div className="process-card">
              <div className="process-icon-num"><i className="fas fa-shipping-fast"></i></div>
              <h4>Fast Delivery</h4>
              <p style={{fontSize:'14px', color:'#888', marginTop:'10px'}}>Lorem ipsum dolor sit amet. Eum voluptatem omnis et ullam nesciunt vel alias obcaecati.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section className="section-padding" style={{backgroundColor: '#151515'}}>
        <div className="container">
          <div className="section-header">
            <h2>Our Expert Technician And Mechanics</h2>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <img src="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=500&fit=crop" alt="Team Member" className="team-img" />
              <div className="team-info">
                <h3>Roger Lyod</h3>
                <span className="team-role">Senior Mechanic</span>
              </div>
            </div>
            <div className="team-card">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop" alt="Team Member" className="team-img" />
              <div className="team-info">
                <h3>Steve Roger</h3>
                <span className="team-role">Car Engineer</span>
              </div>
            </div>
            <div className="team-card">
              <img src="https://images.unsplash.com/photo-1609440226919-fe7b9c25e541?w=400&h=500&fit=crop" alt="Team Member" className="team-img" />
              <div className="team-info">
                <h3>Bony Stark</h3>
                <span className="team-role">Auto Manager</span>
              </div>
            </div>
            <div className="team-card">
              <img src="https://images.unsplash.com/photo-1487754180144-351b8e906e8f?w=400&h=500&fit=crop" alt="Team Member" className="team-img" />
              <div className="team-info">
                <h3>Bruce Wayne</h3>
                <span className="team-role">Technician</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="section-padding testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Our Awesome Customers Valuable Feedback</h2>
          </div>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <i className="fas fa-quote-left quote-icon"></i>
              <p style={{color:'#bbb'}}>"Excellent service! They fixed my car quickly and price was very reasonable. Highly recommended for anyone looking for honest mechanics."</p>
              <div className="client-info">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" alt="Client" className="client-img" />
                <div>
                  <h5 style={{marginBottom:'0'}}>Sarah Jenkins</h5>
                  <span style={{fontSize:'12px', color:'#777'}}>Car Owner</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <i className="fas fa-quote-left quote-icon"></i>
              <p style={{color:'#bbb'}}>"I was impressed by professionalism and transparency of process. No hidden fees, just great work on my suspension."</p>
              <div className="client-info">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Client" className="client-img" />
                <div>
                  <h5 style={{marginBottom:'0'}}>Mike Ross</h5>
                  <span style={{fontSize:'12px', color:'#777'}}>Local Driver</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <i className="fas fa-quote-left quote-icon"></i>
              <p style={{color:'#bbb'}}>"The team at Garix really knows their stuff. My car runs like new after their service. The 7-day availability is a lifesaver."</p>
              <div className="client-info">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Client" className="client-img" />
                <div>
                  <h5 style={{marginBottom:'0'}}>Emily Clark</h5>
                  <span style={{fontSize:'12px', color:'#777'}}>Business Woman</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Ask Anything's That You Want To Know</h2>
          </div>
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <details className="faq-item">
              <summary>How often should I schedule routine maintenance for my vehicle?</summary>
              <div className="faq-content">
                The duration of a service appointment can vary based on type of service required. Simple services like oil changes may take around 30 minutes, while more complex repairs could take several hours.
              </div>
            </details>
            <details className="faq-item">
              <summary>How long does a typical car service appointment take?</summary>
              <div className="faq-content">
                Usually, a standard service takes between 1.5 to 3 hours depending on package. We provide estimated times upon booking.
              </div>
            </details>
            <details className="faq-item">
              <summary>Can you provide a shuttle service or loaner cars?</summary>
              <div className="faq-content">
                Yes, we offer a complimentary shuttle service within a 5-mile radius. Loaner cars are available for major repairs subject to availability.
              </div>
            </details>
            <details className="faq-item">
              <summary>Is it necessary to follow the manufacturer's recommended service schedule?</summary>
              <div className="faq-content">
                Yes, following the manufacturer's schedule ensures your warranty remains valid and your vehicle performs optimally.
              </div>
            </details>
            <details className="faq-item">
              <summary>Can I schedule a service appointment online?</summary>
              <div className="faq-content">
                Absolutely! Use the form on our homepage or contact us directly to book a time that suits you.
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;