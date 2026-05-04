import { useState } from 'react';

const ServicesPage = () => {
  const mainServices = [
    {
      icon: 'fas fa-car',
      title: 'Car Repair',
      desc: 'Complete bumper-to-bumper car repair by certified technicians using OEM parts and state-of-the-art diagnostic equipment.',
      price: '$49',
    },
    {
      icon: 'fas fa-wind',
      title: 'Car Exhaust Repair',
      desc: 'Full exhaust system inspection, catalytic converter service, muffler replacement and emissions testing for peak performance.',
      price: '$79',
    },
    {
      icon: 'fas fa-cogs',
      title: 'Suspension Repair',
      desc: 'Shock absorber, strut, spring and control arm repairs to restore ride comfort and handling precision on any terrain.',
      price: '$99',
    },
    {
      icon: 'fas fa-oil-can',
      title: 'Oil Change',
      desc: 'Quick, thorough oil and filter replacement using synthetic or conventional oil — keeping your engine protected mile after mile.',
      price: '$29',
    },
    {
      icon: 'fas fa-car-battery',
      title: 'Battery Change',
      desc: 'Battery testing, charging system diagnostics and fast OEM-grade battery replacement with a 2-year warranty included.',
      price: '$39',
    },
    {
      icon: 'fas fa-compass',
      title: 'Wheel Alignment',
      desc: 'Computer-assisted 4-wheel alignment to extend tyre life, improve fuel efficiency and ensure straight, safe driving.',
      price: '$59',
    },
    {
      icon: 'fas fa-snowflake',
      title: 'AC Service',
      desc: 'Full air conditioning diagnosis, refrigerant recharge, compressor inspection and cabin filter replacement for cool comfort.',
      price: '$69',
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Brake Service',
      desc: 'Brake pad and rotor inspection, disc resurfacing, fluid flush and ABS system checks for maximum stopping power.',
      price: '$89',
    },
    {
      icon: 'fas fa-bolt',
      title: 'Electrical Diagnostics',
      desc: 'Advanced OBD-II scanning, wiring fault tracing, ECU diagnostics and sensor replacement to fix any warning light fast.',
      price: '$55',
    },
  ];

  const whyUs = [
    { icon: 'fas fa-user-check', title: 'Certified Technicians', desc: 'Every mechanic is ASE-certified with 5+ years of hands-on experience across all vehicle makes and models.' },
    { icon: 'fas fa-star', title: '6-Month Warranty', desc: 'All repairs come backed by our industry-leading 6-month / 10,000 km warranty on parts and labour.' },
    { icon: 'fas fa-clock', title: 'Fast Turnaround', desc: 'Most standard services are completed same-day. We respect your time — no unnecessary delays.' },
    { icon: 'fas fa-laptop', title: 'State-of-the-Art Equipment', desc: 'Latest diagnostic tools, alignment machines and computer systems for pinpoint accurate repairs.' },
    { icon: 'fas fa-leaf', title: 'Eco-Friendly Practices', desc: 'We properly recycle oil, tyres and batteries, minimising our environmental footprint with every service.' },
    { icon: 'fas fa-smile', title: 'Customer Satisfaction', desc: 'Rated 4.9/5 by 2,000+ reviews. Transparent pricing, honest advice and zero hidden fees — always.' },
  ];

  const projects = [
    { id: 'wash',      icon: 'fas fa-tint',         label: 'Wash' },
    { id: 'cooling',   icon: 'fas fa-thermometer-half', label: 'Cooling' },
    { id: 'wheels',    icon: 'fas fa-circle-notch', label: 'Wheels' },
    { id: 'brake',     icon: 'fas fa-compact-disc',  label: 'Break' },
    { id: 'cleaning',  icon: 'fas fa-spray-can',     label: 'Cleaning' },
    { id: 'suspension',icon: 'fas fa-cogs',          label: 'Suspension' },
  ];

  const projectDetails = {
    wash: {
      img: 'https://picsum.photos/seed/wash1/700/480',
      title: 'Premium Wash Service',
      desc: 'Our full-detail wash service removes dirt, grime and contaminants from every surface — interior and exterior. Using pH-balanced, eco-friendly products, we hand-wash, clay-bar, polish and seal your paintwork to a showroom finish.',
      features: ['Hand Wash & Dry', 'Clay Bar Treatment', 'Paint Polish', 'Wax & Sealant', 'Interior Vacuum', 'Dashboard Condition'],
    },
    cooling: {
      img: 'https://picsum.photos/seed/cooling1/700/480',
      title: 'Cooling System Service',
      desc: 'Overheating causes serious engine damage. Our cooling system service covers radiator flush, thermostat inspection, coolant top-up, water pump check and hose integrity testing to keep your engine at optimal temperature.',
      features: ['Radiator Flush', 'Coolant Top-Up', 'Thermostat Check', 'Water Pump Inspect', 'Hose Inspection', 'Pressure Test'],
    },
    wheels: {
      img: 'https://picsum.photos/seed/wheels1/700/480',
      title: 'Wheel & Tyre Service',
      desc: 'From puncture repair to full tyre replacement, our wheel service covers everything. Computer-assisted balancing and 4-wheel alignment ensure even wear, better fuel economy and a smooth, safe ride.',
      features: ['4-Wheel Alignment', 'Tyre Balancing', 'Puncture Repair', 'Tyre Rotation', 'TPMS Reset', 'Rim Inspection'],
    },
    brake: {
      img: 'https://picsum.photos/seed/brake1/700/480',
      title: 'Brake System Service',
      desc: 'Your safety depends on reliable brakes. We inspect and service every component — pads, rotors, callipers, brake lines and ABS module — using OEM-grade parts backed by our 6-month warranty.',
      features: ['Pad Replacement', 'Rotor Resurface', 'Calliper Service', 'Fluid Flush', 'ABS Diagnostics', 'Handbrake Adjust'],
    },
    cleaning: {
      img: 'https://picsum.photos/seed/clean1/700/480',
      title: 'Deep Interior Cleaning',
      desc: 'Restore your cabin to factory-fresh condition. Our deep-clean package includes steam cleaning of seats and carpets, leather conditioning, odour elimination, air vent cleaning and full glass polishing inside and out.',
      features: ['Steam Clean Seats', 'Carpet Shampoo', 'Leather Condition', 'Odour Removal', 'Vent Cleaning', 'Glass Polish'],
    },
    suspension: {
      img: 'https://picsum.photos/seed/susp1/700/480',
      title: 'Suspension Overhaul',
      desc: 'A worn suspension affects handling, tyre wear and passenger comfort. Our technicians inspect and replace shocks, struts, springs, bushings and control arms — restoring precise control and a comfortable ride.',
      features: ['Shock Absorbers', 'Strut Replacement', 'Spring Inspection', 'Bushing Replace', 'Control Arms', 'Ride Height Check'],
    },
  };

  const [activeTab, setActiveTab] = useState('wash');

  const blogs = [
    { img: 'https://picsum.photos/seed/blog1/600/400', date: 'January 15, 2026', title: '10 Signs Your Car Needs an Immediate Service', tag: 'Maintenance' },
    { img: 'https://picsum.photos/seed/blog2/600/400', date: 'February 3, 2026',  title: 'Synthetic vs Conventional Oil: Which Is Right For You?', tag: 'Oil & Engine' },
    { img: 'https://picsum.photos/seed/blog3/600/400', date: 'March 20, 2026',    title: 'How to Extend the Life of Your Brakes', tag: 'Brakes' },
  ];

  const active = projectDetails[activeTab];

  return (
    <>
      {/* ── HERO BANNER ── */}
      <section
        style={{
          marginTop: '70px',
          backgroundImage: "linear-gradient(rgba(0,0,0,0.78),rgba(0,0,0,0.78)), url('https://picsum.photos/seed/servicesbanner/1920/600')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '90px 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h4 style={{ color: 'var(--primary-color)', fontFamily: 'var(--font-heading)', fontSize: '16px', letterSpacing: '4px', marginBottom: '12px' }}>
            WHAT WE OFFER
          </h4>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '62px', color: '#fff', marginBottom: '16px' }}>
            OUR <span style={{ color: 'var(--primary-color)' }}>SERVICES</span>
          </h1>
          <p style={{ color: '#a0a0a0', fontSize: '16px', maxWidth: '580px', margin: '0 auto 24px', lineHeight: '1.7' }}>
            Professional automotive services backed by certified technicians, genuine parts and an industry-leading warranty.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', color: '#666', fontSize: '14px' }}>
            <a href="/" style={{ color: 'var(--primary-color)' }}>Home</a>
            <span>/</span>
            <span style={{ color: '#fff' }}>Services</span>
          </div>
        </div>
      </section>

      {/* ── MAIN SERVICES GRID ── */}
      <section className="section-padding" style={{ backgroundColor: '#151515' }}>
        <div className="container">
          <div className="section-header">
            <h4 style={{ color: 'var(--primary-color)', letterSpacing: '3px', fontSize: '14px', marginBottom: '10px' }}>WHAT WE DO</h4>
            <h2>Our Awesome And Super<br /><span style={{ color: 'var(--primary-color)' }}>Repair Services</span></h2>
            <p>Every service is performed by certified technicians using OEM parts with a 6-month warranty included.</p>
          </div>
          <div className="service-grid">
            {mainServices.map(s => (
              <div className="service-card" key={s.title} style={{ position: 'relative' }}>
                <div
                  style={{
                    position: 'absolute', top: '20px', right: '20px',
                    background: 'var(--primary-color)', color: '#fff',
                    fontFamily: 'var(--font-heading)', fontSize: '18px',
                    padding: '4px 12px', borderRadius: '2px',
                  }}
                >
                  From {s.price}
                </div>
                <i className={`${s.icon} service-icon`}></i>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a href="#" className="read-more">Learn More <i className="fas fa-arrow-right"></i></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEST PROJECT (TABS) ── */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h4 style={{ color: 'var(--primary-color)', letterSpacing: '3px', fontSize: '14px', marginBottom: '10px' }}>OUR BEST PROJECT</h4>
            <h2>Our Distinctive And Flexible<br /><span style={{ color: 'var(--primary-color)' }}>Approach To Work</span></h2>
          </div>

          {/* Tab Buttons */}
          <div className="project-tabs" style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '36px' }}>
            {projects.map(p => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                style={{
                  background: activeTab === p.id ? 'var(--primary-color)' : 'var(--card-bg)',
                  border: `1px solid ${activeTab === p.id ? 'var(--primary-color)' : 'var(--border-color)'}`,
                  color: '#fff',
                  padding: '12px 28px',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s',
                }}
              >
                <i className={p.icon}></i> {p.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '48px',
              alignItems: 'center',
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              padding: '40px',
            }}
          >
            <img
              src={active.img}
              alt={active.title}
              style={{ width: '100%', height: '340px', objectFit: 'cover', borderRadius: '4px' }}
            />
            <div>
              <h4 style={{ color: 'var(--primary-color)', letterSpacing: '2px', fontSize: '13px', marginBottom: '10px' }}>HOW IT WORKS</h4>
              <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>{active.title}</h2>
              <p style={{ color: 'var(--text-gray)', lineHeight: '1.8', marginBottom: '24px', fontSize: '14px' }}>{active.desc}</p>
              <ul className="feature-list">
                {active.features.map(f => (
                  <li key={f}>
                    <i className="fas fa-check-circle" style={{ color: 'var(--primary-color)' }}></i>
                    <span style={{ color: 'var(--text-gray)', fontSize: '14px' }}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="btn" style={{ marginTop: '28px' }}>Book This Service</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section-padding" style={{ background: '#151515' }}>
        <div className="container">
          <div className="section-header">
            <h4 style={{ color: 'var(--primary-color)', letterSpacing: '3px', fontSize: '14px', marginBottom: '10px' }}>WHY CHOOSE US</h4>
            <h2>Why Choose Our<br /><span style={{ color: 'var(--primary-color)' }}>Services?</span></h2>
            <p>Best-in-class repair and maintenance that puts your vehicle and safety first.</p>
          </div>
          <div className="service-grid">
            {whyUs.map(w => (
              <div className="service-card" key={w.title}>
                <i className={`${w.icon} service-icon`}></i>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COUNTERS ── */}
      <section className="counters">
        <div className="container">
          <div className="counter-grid">
            {[
              { icon: 'fas fa-users',       num: '10K+',  label: 'Satisfied Clients' },
              { icon: 'fas fa-trophy',       num: '10+',   label: 'Years Experience' },
              { icon: 'fas fa-wrench',       num: '1499+', label: 'Successful Works' },
              { icon: 'fas fa-award',        num: '15+',   label: 'Awards Winning' },
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

      {/* ── PRICING ── */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h4 style={{ color: 'var(--primary-color)', letterSpacing: '3px', fontSize: '14px', marginBottom: '10px' }}>PRICING PLANS</h4>
            <h2>Transparent &amp; Affordable<br /><span style={{ color: 'var(--primary-color)' }}>Service Packages</span></h2>
            <p>No hidden fees. Choose the package that fits your vehicle and budget.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
            {[
              {
                name: 'Basic', price: '$49', period: '/visit', popular: false,
                features: ['Oil & Filter Change', 'Tyre Pressure Check', 'Fluid Top-Up', 'Visual Inspection', '20-Point Check'],
              },
              {
                name: 'Standard', price: '$129', period: '/visit', popular: true,
                features: ['Everything in Basic', 'Brake Inspection', 'Battery Test', 'Air Filter Replace', 'Wheel Alignment', 'OBD-II Scan'],
              },
              {
                name: 'Premium', price: '$249', period: '/visit', popular: false,
                features: ['Everything in Standard', 'Transmission Service', 'Coolant Flush', 'Spark Plug Replace', 'Full Detail Clean', '6-Month Warranty'],
              },
            ].map(plan => (
              <div
                key={plan.name}
                style={{
                  background: plan.popular ? 'var(--primary-color)' : 'var(--card-bg)',
                  border: `1px solid ${plan.popular ? 'var(--primary-color)' : 'var(--border-color)'}`,
                  padding: '40px 30px',
                  textAlign: 'center',
                  position: 'relative',
                  transition: '0.3s',
                }}
              >
                {plan.popular && (
                  <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#fff', color: 'var(--primary-color)', padding: '4px 18px', fontFamily: 'var(--font-heading)', fontSize: '14px', borderRadius: '2px', whiteSpace: 'nowrap' }}>
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', marginBottom: '16px', color: '#fff' }}>{plan.name}</h3>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '52px', color: '#fff', lineHeight: '1' }}>
                  {plan.price}<span style={{ fontSize: '16px', color: plan.popular ? 'rgba(255,255,255,.75)' : 'var(--text-gray)' }}>{plan.period}</span>
                </div>
                <hr style={{ border: 'none', borderTop: `1px solid ${plan.popular ? 'rgba(255,255,255,.3)' : 'var(--border-color)'}`, margin: '24px 0' }} />
                <ul style={{ listStyle: 'none', marginBottom: '30px', textAlign: 'left' }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: plan.popular ? '#fff' : 'var(--text-gray)', fontSize: '14px' }}>
                      <i className="fas fa-check" style={{ color: plan.popular ? '#fff' : 'var(--primary-color)' }}></i>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="btn"
                  style={{ background: plan.popular ? '#fff' : 'var(--primary-color)', color: plan.popular ? 'var(--primary-color)' : '#fff', width: '100%', textAlign: 'center' }}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className="section-padding" style={{ background: '#151515' }}>
        <div className="container">
          <div className="section-header">
            <h4 style={{ color: 'var(--primary-color)', letterSpacing: '3px', fontSize: '14px', marginBottom: '10px' }}>OUR BLOG AND NEWS</h4>
            <h2>Our Latest Blog And<br /><span style={{ color: 'var(--primary-color)' }}>Latest News</span></h2>
          </div>
          <div className="blog-grid">
            {blogs.map(b => (
              <div className="blog-card" key={b.title}>
                <img src={b.img} alt={b.title} className="blog-img" />
                <div className="blog-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span className="blog-date">{b.date}</span>
                    <span style={{ background: 'var(--primary-color)', color: '#fff', fontSize: '11px', padding: '3px 10px', fontFamily: 'var(--font-heading)' }}>{b.tag}</span>
                  </div>
                  <h3 className="blog-title">{b.title}</h3>
                  <a href="#" className="blog-link">Read More <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section
        style={{
          background: 'var(--primary-color)',
          padding: '50px 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h2 style={{ color: '#fff', fontSize: '36px', marginBottom: '10px' }}>
            Ready To Service Your Vehicle?
          </h2>
          <p style={{ color: 'rgba(255,255,255,.85)', marginBottom: '28px', fontSize: '16px' }}>
            Book an appointment today — same-day service available, 7 days a week.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:052699256693" className="btn" style={{ background: '#fff', color: 'var(--primary-color)', fontSize: '18px' }}>
              <i className="fas fa-phone-alt"></i> 052 (699) 256 - 693
            </a>
            <a href="#" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff', fontSize: '18px' }}>
              Book Online →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;