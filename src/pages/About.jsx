import { useState } from 'react';

const About = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const teamMembers = [
    { name: 'James Wilson', role: 'Master Technician', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop' },
    { name: 'Robert Chen', role: 'Engine Specialist', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
    { name: 'Maria Garcia', role: 'Electrical Expert', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
    { name: 'David Kumar', role: 'Diagnostics Lead', img: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=400&fit=crop' },
  ];

  const faqs = [
    { q: 'How long does a standard service take?', a: 'A standard oil change and inspection typically takes 45–90 minutes. More complex repairs like engine overhauls may take 1–3 days depending on parts availability.' },
    { q: 'Do you offer a warranty on repairs?', a: 'Yes! All our repair work comes with a 6-month or 10,000 km warranty (whichever comes first). We use only OEM or certified aftermarket parts.' },
    { q: 'Can I drop off my car without an appointment?', a: 'Walk-ins are welcome, but we recommend booking an appointment to minimize your wait time. You can book online or call us 24/7.' },
    { q: 'What types of vehicles do you service?', a: 'We service all makes and models — domestic, European, and Asian vehicles including sedans, SUVs, trucks, and performance cars.' },
    { q: 'Do you provide a loaner car during service?', a: 'Yes, loaner vehicles are available for services expected to take more than 4 hours. Please request one when making your appointment.' },
  ];

  const skills = [
    { label: 'Engine & Transmission Repair', value: 95 },
    { label: 'Electrical & Diagnostics', value: 90 },
    { label: 'Bodywork & Painting', value: 80 },
    { label: 'AC & Cooling Systems', value: 88 },
  ];

  return (
    <>
      {/* ── HERO BANNER ── */}
      <section
        style={{
          marginTop: '70px',
          background: 'linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)) center/cover',
          backgroundImage: "linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&h=600&fit=crop')",
          padding: '80px 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h4 style={{ color: 'var(--primary-color)', fontFamily: 'var(--font-heading)', fontSize: '18px', letterSpacing: '3px', marginBottom: '12px' }}>
            WHO WE ARE
          </h4>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '60px', color: '#fff', marginBottom: '16px' }}>
            ABOUT <span style={{ color: 'var(--primary-color)' }}>GARIX</span>
          </h1>
          <p style={{ color: '#a0a0a0', fontSize: '16px', maxWidth: '600px', margin: '0 auto 24px' }}>
            Over a decade of excellence in automotive service. Trusted by thousands of customers across the city.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', color: '#666', fontSize: '14px' }}>
            <a href="/" style={{ color: 'var(--primary-color)' }}>Home</a>
            <span>/</span>
            <span style={{ color: '#fff' }}>About Us</span>
          </div>
        </div>
      </section>

      {/* ── ABOUT MAIN ── */}
      <section className="section-padding">
        <div className="container">
          <div className="about-content">

            {/* Left: Images stacked */}
            <div className="about-img-wrapper" style={{ position: 'relative', paddingBottom: '40px', paddingRight: '40px' }}>
              <img
                src="https://images.unsplash.com/photo-1487754180144-351b8e906e8f?w=600&h=420&fit=crop"
                alt="Garix Workshop"
                className="about-img"
                style={{ borderRadius: '4px', width: '100%' }}
              />
              <img
                src="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=260&h=200&fit=crop"
                alt="Garix Team"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '200px',
                  height: '160px',
                  objectFit: 'cover',
                  border: '4px solid var(--dark-bg)',
                  borderRadius: '4px',
                }}
              />
              <div className="experience-badge">
                <span>10+</span>
                <span style={{ fontSize: '14px', fontFamily: 'var(--font-body)', textAlign: 'center' }}>
                  Years of<br />Experience
                </span>
              </div>
            </div>

            {/* Right: Text */}
            <div className="about-text">
              <h4 style={{ color: 'var(--primary-color)', letterSpacing: '3px', fontSize: '14px', marginBottom: '10px' }}>
                ABOUT US
              </h4>
              <h2 style={{ fontSize: '38px', marginBottom: '18px' }}>
                Get A New Experience With <span style={{ color: 'var(--primary-color)' }}>Garix</span> Services
              </h2>
              <p style={{ color: 'var(--text-gray)', marginBottom: '16px', lineHeight: '1.8' }}>
                At Garix, we combine cutting-edge diagnostic technology with the expertise of certified master technicians to deliver automotive service you can trust. From routine oil changes to complex engine rebuilds, every job is handled with precision and care.
              </p>
              <p style={{ color: 'var(--text-gray)', marginBottom: '28px', lineHeight: '1.8' }}>
                Founded in 2014, we have grown from a small garage to a full-service automotive center — proudly serving over 10,000 satisfied clients and completing 1,499+ successful repairs.
              </p>

              {/* Skills */}
              <div className="skills-wrapper">
                {skills.map(skill => (
                  <div className="skill-item" key={skill.label}>
                    <div className="skill-title">
                      <span>{skill.label}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${skill.value}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Feature Items */}
              <div className="about-features" style={{ marginTop: '28px' }}>
                <div className="feature-item">
                  <div className="feature-icon"><i className="fas fa-tools"></i></div>
                  <div>
                    <h5>Equipped With All Latest Tools</h5>
                    <p style={{ fontSize: '13px', color: '#888' }}>We use modern OBD-II diagnostics and precision equipment for every service.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><i className="fas fa-calendar-check"></i></div>
                  <div>
                    <h5>We're Available 7 Days a Week</h5>
                    <p style={{ fontSize: '13px', color: '#888' }}>Flexible scheduling to fit your busy lifestyle — including weekends and holidays.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><i className="fas fa-shield-alt"></i></div>
                  <div>
                    <h5>6-Month Repair Warranty</h5>
                    <p style={{ fontSize: '13px', color: '#888' }}>Every repair comes backed by our industry-leading warranty on parts and labour.</p>
                  </div>
                </div>
              </div>

              <br />
              <a href="#" className="btn btn-outline">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── COUNTERS ── */}
      <section className="counters">
        <div className="container">
          <div className="counter-grid">
            {[
              { icon: 'fas fa-users', num: '10K+', label: 'Satisfied Clients' },
              { icon: 'fas fa-trophy', num: '10+', label: 'Years of Experience' },
              { icon: 'fas fa-wrench', num: '1499+', label: 'Successful Works' },
              { icon: 'fas fa-award', num: '15+', label: 'Awards Winning' },
            ].map(c => (
              <div className="counter-item" key={c.label}>
                <i className={c.icon}></i>
                <div className="counter-number">{c.num}</div>
                <div className="counter-label">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h4 style={{ color: 'var(--primary-color)', letterSpacing: '3px', fontSize: '14px', marginBottom: '10px' }}>OUR TEAM MEMBERS</h4>
            <h2>Our Expert Technician<br /><span style={{ color: 'var(--primary-color)' }}>And Mechanics</span></h2>
            <p>Our certified professionals bring years of hands-on experience and a passion for perfection to every vehicle they service.</p>
          </div>
          <div className="team-grid">
            {teamMembers.map(m => (
              <div className="team-card" key={m.name}>
                <img src={m.img} alt={m.name} className="team-img" />
                <div className="team-info">
                  <h3>{m.name}</h3>
                  <p className="team-role">{m.role}</p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '14px' }}>
                    {['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-linkedin-in'].map(icon => (
                      <a
                        key={icon}
                        href="#"
                        style={{
                          width: '34px', height: '34px', background: '#252525',
                          borderRadius: '50%', display: 'flex', alignItems: 'center',
                          justifyContent: 'center', color: 'var(--primary-color)', fontSize: '13px'
                        }}
                      >
                        <i className={icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section-padding" style={{ background: '#151515' }}>
        <div className="container">
          <div className="section-header">
            <h4 style={{ color: 'var(--primary-color)', letterSpacing: '3px', fontSize: '14px', marginBottom: '10px' }}>OUR WORK PROCESS</h4>
            <h2>Our Distinctive And Flexible<br /><span style={{ color: 'var(--primary-color)' }}>Approach To Work</span></h2>
            <p>A clear, transparent process designed to make your experience as smooth and stress-free as possible.</p>
          </div>
          <div className="process-grid">
            {[
              { num: '01', icon: 'fas fa-calendar-alt', title: 'Make An Appointment', desc: 'Book online, call us, or walk in. Pick a time that works best for you — we\'re available 7 days a week.' },
              { num: '02', icon: 'fas fa-list-alt', title: 'Select Your Services', desc: 'Choose from our wide range of services. Our advisors will help you identify exactly what your vehicle needs.' },
              { num: '03', icon: 'fas fa-check-circle', title: 'Confirm For Service', desc: 'We provide a transparent cost estimate before starting any work. No surprises — your approval comes first.' },
              { num: '04', icon: 'fas fa-car', title: 'Get Your Car', desc: 'Pick up your vehicle fresh from our certified technicians, fully serviced and ready for the road ahead.' },
            ].map((p, i) => (
              <div className="process-card" key={p.num}>
                <div
                  style={{
                    color: 'var(--primary-color)',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '2px',
                    marginBottom: '12px',
                  }}
                >
                  STEP {p.num}
                </div>
                <div className="process-icon-num">
                  <i className={p.icon} style={{ color: 'var(--primary-color)', fontSize: '22px' }}></i>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', marginBottom: '12px' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-gray)', fontSize: '14px', lineHeight: '1.7' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPOINTMENT STRIP ── */}
      <section
        id="appointment-form"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.85),rgba(0,0,0,0.85)), url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=600&fit=crop) center/cover fixed',
          padding: '80px 0',
        }}
      >
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <h4 style={{ color: 'var(--primary-color)', letterSpacing: '3px', fontSize: '14px', marginBottom: '10px' }}>BOOK A SERVICE</h4>
              <h2 style={{ fontSize: '38px', marginBottom: '16px' }}>
                Make an Appointment<br />Or <span style={{ color: 'var(--primary-color)' }}>Call Us 24/7</span>
              </h2>
              <a href="tel:052699256693" style={{ display: 'block', color: 'var(--primary-color)', fontFamily: 'var(--font-heading)', fontSize: '32px', marginBottom: '20px' }}>
                052 (699) 256 - 693
              </a>
              <p style={{ color: 'var(--text-gray)', lineHeight: '1.8' }}>
                Drop by, call, or fill out the form and one of our service advisors will get back to you within 30 minutes during business hours.
              </p>
            </div>
            <div className="appointment-form">
              <h3>Request A Quote</h3>
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" className="form-control" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" className="form-control" placeholder="john@example.com" />
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
              <div className="form-group">
                <label>Service Required</label>
                <select className="form-control">
                  <option>Engine Repair</option>
                  <option>Oil Change</option>
                  <option>Brake Service</option>
                  <option>AC Service</option>
                  <option>Electrical Diagnosis</option>
                  <option>Tyre Replacement</option>
                  <option>Full Inspection</option>
                </select>
              </div>
              <button className="btn" style={{ width: '100%' }}>Submit Request</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-padding testimonials">
        <div className="container">
          <div className="section-header">
            <h4 style={{ color: 'var(--primary-color)', letterSpacing: '3px', fontSize: '14px', marginBottom: '10px' }}>TESTIMONIALS</h4>
            <h2>Our Awesome Customers<br /><span style={{ color: 'var(--primary-color)' }}>Valuable Feedback</span></h2>
          </div>
          <div className="testimonial-grid">
            {[
              { name: 'Michael B.', role: 'BMW Owner', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', text: 'Garix completely transformed how I think about car servicing. The transparency, speed, and professionalism are unmatched. My BMW has never run better.' },
              { name: 'Sarah L.', role: 'Toyota Driver', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', text: 'I was nervous about a complex engine issue, but the team diagnosed and fixed it in under 24 hours. Honest pricing, zero hidden fees. Highly recommended!' },
              { name: 'David R.', role: 'Ford Owner', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', text: 'The 6-month warranty gave me total peace of mind. They even called to follow up a week after the repair. Real customer care — not just lip service.' },
            ].map(t => (
              <div className="testimonial-card" key={t.name}>
                <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
                <p style={{ color: 'var(--text-gray)', lineHeight: '1.8', fontSize: '14px' }}>{t.text}</p>
                <div style={{ display: 'flex', marginTop: '16px', gap: '4px' }}>
                  {[1,2,3,4,5].map(s => <i key={s} className="fas fa-star" style={{ color: 'var(--primary-color)', fontSize: '13px' }}></i>)}
                </div>
                <div className="client-info">
                  <img src={t.img} alt={t.name} className="client-img" />
                  <div>
                    <strong style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: '18px' }}>{t.name}</strong>
                    <span style={{ color: 'var(--primary-color)', fontSize: '13px' }}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            <div>
              <h4 style={{ color: 'var(--primary-color)', letterSpacing: '3px', fontSize: '14px', marginBottom: '10px' }}>FAQ</h4>
              <h2 style={{ marginBottom: '16px' }}>
                Frequently Asked<br /><span style={{ color: 'var(--primary-color)' }}>Questions</span>
              </h2>
              <p style={{ color: 'var(--text-gray)', lineHeight: '1.8', marginBottom: '28px' }}>
                Have a question before booking? We have answered the most common ones below. Still not sure? Give us a call anytime.
              </p>
              <img
                src="https://images.unsplash.com/photo-1609440226919-fe7b9c25e541?w=500&h=380&fit=crop"
                alt="FAQ"
                style={{ borderRadius: '4px', width: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              {faqs.map((faq, i) => (
                <div className="faq-item" key={i}>
                  <details open={openFaq === i} onClick={e => { e.preventDefault(); setOpenFaq(openFaq === i ? null : i); }}>
                    <summary>{faq.q}</summary>
                    {openFaq === i && <div className="faq-content"><p>{faq.a}</p></div>}
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;