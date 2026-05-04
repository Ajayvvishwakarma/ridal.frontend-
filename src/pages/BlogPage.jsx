import { useState } from 'react';

const allPosts = [
  { id: 1,  date: '04 Sep, 2023', author: 'Rivanur', comments: 2, category: 'Maintenance', img: 'https://picsum.photos/seed/blog1/800/500',  title: 'Comprehensive Car Care for Peak Performance',          excerpt: 'Discover the essential steps every car owner should take to maintain peak performance year-round. From fluid checks to tyre pressure — we cover it all.' },
  { id: 2,  date: '12 Oct, 2023', author: 'James W',  comments: 5, category: 'Engine',      img: 'https://picsum.photos/seed/blog2/800/500',  title: 'How to Modify Your Car Engine Properly',              excerpt: 'Engine modifications can unlock serious power — but only when done right. Our master technicians share safe, legal and effective upgrade strategies.' },
  { id: 3,  date: '21 Nov, 2023', author: 'Rivanur', comments: 3, category: 'Tips',        img: 'https://picsum.photos/seed/blog3/800/500',  title: 'The Ultimate Car Servicing Checklist',                excerpt: 'Never miss a service item again. This comprehensive checklist covers every point your mechanic should inspect at every scheduled service.' },
  { id: 4,  date: '08 Dec, 2023', author: 'Maria G',  comments: 7, category: 'Maintenance', img: 'https://picsum.photos/seed/blog4/800/500',  title: 'A Holistic Approach to Super Car Maintenance',        excerpt: 'High-performance vehicles demand a different level of attention. Learn the specialised maintenance routines that keep supercars at their best.' },
  { id: 5,  date: '15 Jan, 2024', author: 'David K',  comments: 4, category: 'Tips',        img: 'https://picsum.photos/seed/blog5/800/500',  title: 'Insider Tips for Effective Car Maintenance',          excerpt: 'Professional mechanics share their best-kept secrets for keeping your car in showroom condition without breaking the bank.' },
  { id: 6,  date: '02 Feb, 2024', author: 'Rivanur', comments: 6, category: 'Engine',      img: 'https://picsum.photos/seed/blog6/800/500',  title: 'Modern Strategies for Super Car Maintenance',         excerpt: 'Technology is changing how we service cars. Explore the latest diagnostic tools, OBD-II scanners and AI-assisted maintenance planning.' },
  { id: 7,  date: '19 Mar, 2024', author: 'James W',  comments: 2, category: 'Service',     img: 'https://picsum.photos/seed/blog7/800/500',  title: 'The Science of Effective Car Servicing',              excerpt: 'What actually happens during a professional service? We break down each step and explain the science behind why it matters for longevity.' },
  { id: 8,  date: '05 Apr, 2024', author: 'Maria G',  comments: 9, category: 'Tips',        img: 'https://picsum.photos/seed/blog8/800/500',  title: 'Insider Tips for Keeping Your Car Like New',          excerpt: 'Small habits make a big difference. From parking habits to wash techniques, these pro tips will keep your car looking and running like new.' },
  { id: 9,  date: '22 May, 2024', author: 'David K',  comments: 3, category: 'Service',     img: 'https://picsum.photos/seed/blog9/800/500',  title: 'Unlocking the Secrets of Efficient Car Servicing',    excerpt: 'Efficient servicing saves time and money. Learn how Garix streamlines every job with precision planning, genuine parts and expert hands.' },
  { id: 10, date: '10 Jun, 2024', author: 'Rivanur', comments: 5, category: 'Maintenance', img: 'https://picsum.photos/seed/blog10/800/500', title: 'Why Regular Oil Changes Are Non-Negotiable',           excerpt: 'Skipping an oil change can cost you thousands. We explain exactly what happens inside your engine when oil goes past its service life.' },
  { id: 11, date: '28 Jul, 2024', author: 'James W',  comments: 4, category: 'Engine',      img: 'https://picsum.photos/seed/blog11/800/500', title: 'Turbocharger Maintenance: Everything You Need to Know', excerpt: 'Turbocharged engines deliver incredible performance — but they need specific care. Here is your complete guide to turbo maintenance.' },
  { id: 12, date: '14 Aug, 2024', author: 'Maria G',  comments: 8, category: 'Tips',        img: 'https://picsum.photos/seed/blog12/800/500', title: 'Brake Maintenance: Safety Tips Every Driver Must Know', excerpt: 'Your brakes are your most critical safety system. Learn the warning signs of worn brakes and how to stay safe on every journey.' },
];

const categories = ['All', 'Maintenance', 'Engine', 'Tips', 'Service'];
const POSTS_PER_PAGE = 9;

const recentPosts = allPosts.slice(0, 4);
const tags = ['Car Repair', 'Oil Change', 'Engine', 'Brakes', 'Tyres', 'Suspension', 'AC Service', 'Diagnostics', 'Turbo', 'Maintenance'];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage]       = useState(1);
  const [search, setSearch]                 = useState('');

  let filtered = activeCategory === 'All'
    ? allPosts
    : allPosts.filter(p => p.category === activeCategory);

  if (search.trim()) {
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase())
    );
  }

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated  = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  return (
    <>
      {/* ── HERO BANNER ── */}
      <section style={{
        marginTop: '70px',
        backgroundImage: "linear-gradient(rgba(0,0,0,0.78),rgba(0,0,0,0.78)), url('https://picsum.photos/seed/blogbanner/1920/600')",
        backgroundSize: 'cover', backgroundPosition: 'center', padding: '90px 0', textAlign: 'center',
      }}>
        <div className="container">
          <h4 style={{ color: 'var(--primary-color)', fontFamily: 'var(--font-heading)', fontSize: '16px', letterSpacing: '4px', marginBottom: '12px' }}>
            LATEST ARTICLES
          </h4>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '62px', color: '#fff', marginBottom: '16px' }}>
            OUR <span style={{ color: 'var(--primary-color)' }}>BLOG</span>
          </h1>
          <p style={{ color: '#a0a0a0', fontSize: '16px', maxWidth: '560px', margin: '0 auto 24px', lineHeight: '1.7' }}>
            Expert tips, industry insights and automotive news from the Garix team of certified technicians.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', fontSize: '14px' }}>
            <a href="/" style={{ color: 'var(--primary-color)' }}>Home</a>
            <span style={{ color: '#555' }}>/</span>
            <span style={{ color: '#fff' }}>Blog</span>
          </div>
        </div>
      </section>

      {/* ── MAIN LAYOUT ── */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '48px', alignItems: 'start' }}>

            {/* ── POSTS ── */}
            <div>
              {/* Category Pills */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                    style={{
                      padding: '8px 20px', border: 'none', cursor: 'pointer',
                      fontFamily: 'var(--font-heading)', fontSize: '16px', textTransform: 'uppercase',
                      background: activeCategory === cat ? 'var(--primary-color)' : '#1a1a1a',
                      color: '#fff', transition: '0.3s',
                    }}
                  >
                    {cat}
                    <span style={{ marginLeft: '6px', fontSize: '12px', opacity: 0.7 }}>
                      ({cat === 'All' ? allPosts.length : allPosts.filter(p => p.category === cat).length})
                    </span>
                  </button>
                ))}
              </div>

              {/* Posts Grid */}
              {paginated.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-gray)' }}>
                  <i className="fas fa-search" style={{ fontSize: '48px', color: '#333', marginBottom: '16px', display: 'block' }}></i>
                  <p>No posts found for "<strong style={{ color: '#fff' }}>{search}</strong>"</p>
                </div>
              ) : (
                <div className="blog-grid">
                  {paginated.map(post => (
                    <div className="blog-card" key={post.id} style={{ position: 'relative', overflow: 'hidden' }}>
                      {/* Date Badge */}
                      <div style={{
                        position: 'absolute', top: '16px', left: '16px', zIndex: 2,
                        background: 'var(--primary-color)', color: '#fff', textAlign: 'center',
                        padding: '8px 12px', fontFamily: 'var(--font-heading)', lineHeight: '1.2',
                      }}>
                        <div style={{ fontSize: '28px', fontWeight: '700' }}>{post.date.split(' ')[0]}</div>
                        <div style={{ fontSize: '13px' }}>{post.date.split(' ').slice(1).join(' ')}</div>
                      </div>

                      {/* Category Badge */}
                      <div style={{
                        position: 'absolute', top: '16px', right: '16px', zIndex: 2,
                        background: '#111', color: 'var(--primary-color)', fontSize: '11px',
                        fontFamily: 'var(--font-heading)', padding: '4px 12px', letterSpacing: '1px',
                      }}>
                        {post.category.toUpperCase()}
                      </div>

                      {/* Image */}
                      <div style={{ overflow: 'hidden', height: '220px' }}>
                        <img
                          src={post.img}
                          alt={post.title}
                          className="blog-img"
                          style={{ transition: '0.4s', height: '220px', objectFit: 'cover' }}
                          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                      </div>

                      <div className="blog-body">
                        {/* Meta */}
                        <div style={{ display: 'flex', gap: '18px', marginBottom: '12px', flexWrap: 'wrap' }}>
                          <span style={{ color: 'var(--text-gray)', fontSize: '12px' }}>
                            <i className="fas fa-user" style={{ color: 'var(--primary-color)', marginRight: '5px' }}></i>{post.author}
                          </span>
                          <span style={{ color: 'var(--text-gray)', fontSize: '12px' }}>
                            <i className="fas fa-comment" style={{ color: 'var(--primary-color)', marginRight: '5px' }}></i>{post.comments} Comments
                          </span>
                          <span style={{ color: 'var(--text-gray)', fontSize: '12px' }}>
                            <i className="fas fa-calendar" style={{ color: 'var(--primary-color)', marginRight: '5px' }}></i>{post.date}
                          </span>
                        </div>

                        <h3 className="blog-title" style={{ fontSize: '20px', marginBottom: '10px', lineHeight: '1.3' }}>{post.title}</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '13px', lineHeight: '1.7', marginBottom: '16px' }}>{post.excerpt}</p>
                        <a href="#" className="blog-link read-more">
                          Read Details <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '48px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    style={{
                      padding: '9px 18px', fontFamily: 'var(--font-heading)', fontSize: '16px',
                      background: currentPage === 1 ? '#1a1a1a' : 'var(--primary-color)',
                      border: '1px solid #333', color: currentPage === 1 ? '#555' : '#fff', cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                    }}
                  >← Prev</button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      style={{
                        width: '40px', height: '40px', fontFamily: 'var(--font-heading)', fontSize: '16px',
                        background: currentPage === page ? 'var(--primary-color)' : '#1a1a1a',
                        border: `1px solid ${currentPage === page ? 'var(--primary-color)' : '#333'}`,
                        color: '#fff', cursor: 'pointer',
                      }}
                    >{page}</button>
                  ))}

                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    style={{
                      padding: '9px 18px', fontFamily: 'var(--font-heading)', fontSize: '16px',
                      background: currentPage === totalPages ? '#1a1a1a' : 'var(--primary-color)',
                      border: '1px solid #333', color: currentPage === totalPages ? '#555' : '#fff', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                    }}
                  >Next →</button>
                </div>
              )}
            </div>

            {/* ── SIDEBAR ── */}
            <aside style={{ position: 'sticky', top: '90px' }}>

              {/* Search */}
              <div style={{ marginBottom: '36px' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', color: '#fff', marginBottom: '16px', borderBottom: '2px solid var(--primary-color)', paddingBottom: '8px', display: 'inline-block' }}>
                  SEARCH
                </h4>
                <div style={{ display: 'flex' }}>
                  <input
                    type="text" placeholder="Search articles..."
                    value={search}
                    onChange={e => { setSearch(e.target.value); setCurrentPage(1); }}
                    style={{ flex: 1, padding: '10px 14px', background: '#1a1a1a', border: '1px solid #333', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '13px', outline: 'none' }}
                  />
                  <button style={{ padding: '10px 14px', background: 'var(--primary-color)', border: 'none', color: '#fff', cursor: 'pointer' }}>
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div style={{ marginBottom: '36px' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', color: '#fff', marginBottom: '16px', borderBottom: '2px solid var(--primary-color)', paddingBottom: '8px', display: 'inline-block' }}>
                  CATEGORIES
                </h4>
                <ul style={{ listStyle: 'none' }}>
                  {categories.filter(c => c !== 'All').map(cat => (
                    <li key={cat} style={{ borderBottom: '1px solid #222', padding: '10px 0' }}>
                      <button
                        onClick={() => { setActiveCategory(cat); setCurrentPage(1); window.scrollTo(0, 400); }}
                        style={{
                          background: 'none', border: 'none', cursor: 'pointer', width: '100%',
                          display: 'flex', justifyContent: 'space-between',
                          color: activeCategory === cat ? 'var(--primary-color)' : 'var(--text-gray)',
                          fontFamily: 'var(--font-body)', fontSize: '14px', transition: '0.2s',
                        }}
                      >
                        <span><i className="fas fa-angle-right" style={{ marginRight: '8px', color: 'var(--primary-color)' }}></i>{cat}</span>
                        <span style={{ background: '#252525', color: '#aaa', fontSize: '11px', padding: '2px 8px', borderRadius: '10px' }}>
                          {allPosts.filter(p => p.category === cat).length}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div style={{ marginBottom: '36px' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', color: '#fff', marginBottom: '16px', borderBottom: '2px solid var(--primary-color)', paddingBottom: '8px', display: 'inline-block' }}>
                  RECENT POSTS
                </h4>
                {recentPosts.map(p => (
                  <div key={p.id} style={{ display: 'flex', gap: '12px', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #222' }}>
                    <img src={p.img} alt={p.title} style={{ width: '70px', height: '60px', objectFit: 'cover', flexShrink: 0 }} />
                    <div>
                      <a href="#" style={{ color: '#fff', fontSize: '13px', lineHeight: '1.4', fontWeight: '500', display: 'block', marginBottom: '4px' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--primary-color)'}
                        onMouseLeave={e => e.currentTarget.style.color = '#fff'}
                      >
                        {p.title.slice(0, 42)}...
                      </a>
                      <span style={{ color: 'var(--primary-color)', fontSize: '11px' }}>{p.date}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div style={{ marginBottom: '36px' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', color: '#fff', marginBottom: '16px', borderBottom: '2px solid var(--primary-color)', paddingBottom: '8px', display: 'inline-block' }}>
                  TAGS
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {tags.map(tag => (
                    <button key={tag} style={{
                      background: '#1a1a1a', border: '1px solid #333', color: 'var(--text-gray)',
                      padding: '6px 14px', fontSize: '12px', cursor: 'pointer', fontFamily: 'var(--font-body)',
                      transition: '0.2s',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary-color)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--primary-color)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#1a1a1a'; e.currentTarget.style.color = 'var(--text-gray)'; e.currentTarget.style.borderColor = '#333'; }}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ad Banner */}
              <div style={{
                background: 'var(--primary-color)', padding: '32px 24px', textAlign: 'center',
              }}>
                <i className="fas fa-wrench" style={{ fontSize: '36px', color: '#fff', marginBottom: '12px', display: 'block' }}></i>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', color: '#fff', marginBottom: '8px' }}>NEED A SERVICE?</h4>
                <p style={{ color: 'rgba(255,255,255,.85)', fontSize: '13px', marginBottom: '16px' }}>Book an appointment today — same day service available.</p>
                <a href="#" className="btn" style={{ background: '#fff', color: 'var(--primary-color)', width: '100%', textAlign: 'center', display: 'block' }}>
                  Book Now →
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section style={{ background: 'var(--primary-color)', padding: '50px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontSize: '36px', marginBottom: '10px' }}>Stay Updated With Garix</h2>
          <p style={{ color: 'rgba(255,255,255,.85)', marginBottom: '28px', fontSize: '16px' }}>Subscribe to our newsletter for the latest tips, offers and automotive news.</p>
          <div style={{ display: 'flex', maxWidth: '480px', margin: '0 auto' }}>
            <input type="email" placeholder="Enter your email address" style={{ flex: 1, padding: '14px 18px', border: 'none', fontFamily: 'var(--font-body)', fontSize: '14px', outline: 'none' }} />
            <button className="btn" style={{ background: '#111', borderRadius: '0', whiteSpace: 'nowrap' }}>Subscribe →</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;