import { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1,  title: 'BMW Car Lexus GS Steering Wheel Black Color',       price: 154, old: 200, img: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&h=300&fit=crop',  category: 'Steering', tag: 'Sale' },
  { id: 2,  title: 'Luxury Car Custom Wheel Rim Alloy Black Color',      price: 189, old: 250, img: 'https://images.unsplash.com/photo-1609440226919-fe7b9c25e541?w=400&h=300&fit=crop',  category: 'Wheels',   tag: 'New' },
  { id: 3,  title: 'Automobile And Car Tire Brake (Black & Red)',        price: 120, old: 180, img: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop',  category: 'Brakes',   tag: 'Sale' },
  { id: 4,  title: 'Chevrolet Buick Sonic Car Engine (ECOTECH)',         price: 499, old: 650, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',  category: 'Engine',   tag: 'Hot' },
  { id: 5,  title: 'BMW Car Lexus GS Steering Wheel Chrome Edition',     price: 210, old: 280, img: 'https://images.unsplash.com/photo-1487754180144-351b8e906e8f?w=400&h=300&fit=crop',  category: 'Steering', tag: '' },
  { id: 6,  title: 'Custom Nice Car Shock Absorber Suspension',          price: 154, old: 200, img: 'https://images.unsplash.com/photo-1552512019-4a632b6a4d82?w=400&h=300&fit=crop',  category: 'Suspension', tag: 'Sale' },
  { id: 7,  title: 'BMW Premium Alloy Sport Steering Wheel',             price: 175, old: 220, img: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=400&h=300&fit=crop',  category: 'Steering', tag: '' },
  { id: 8,  title: 'Toyota Car Hankook Tire Wheel',                     price: 98,  old: 140, img: 'https://images.unsplash.com/photo-1638913662196-0201872e8e8d?w=400&h=300&fit=crop',  category: 'Wheels',   tag: 'Sale' },
  { id: 9,  title: 'BMW Car Lexus GS Steering Carbon Fiber',            price: 230, old: 300, img: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=400&h=300&fit=crop',  category: 'Steering', tag: 'New' },
  { id: 10, title: 'Luxury Car Custom Wheel Rim Alloy Gold Color',       price: 210, old: 270, img: 'https://images.unsplash.com/photo-1606664515524-2ddc6298996f?w=400&h=300&fit=crop', category: 'Wheels',   tag: '' },
  { id: 11, title: 'BMW Awesome And Nice Car Air Filter',                price: 45,  old: 75,  img: 'https://images.unsplash.com/photo-1608231917486-849be73231dc?w=400&h=300&fit=crop', category: 'Engine',   tag: 'Sale' },
  { id: 12, title: 'Automobile And Car Tire Brake Sport Edition',        price: 135, old: 190, img: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=400&h=300&fit=crop', category: 'Brakes',   tag: '' },
  { id: 13, title: 'Performance Exhaust System Stainless Steel',         price: 320, old: 420, img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop', category: 'Engine',   tag: 'Hot' },
];

const categories = ['All', 'Steering', 'Wheels', 'Brakes', 'Engine', 'Suspension'];
const ITEMS_PER_PAGE = 12;

const tagColor = { Sale: '#dc2626', New: '#16a34a', Hot: '#d97706' };

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage]       = useState(1);
  const [cart, setCart]                     = useState([]);
  const [sortBy, setSortBy]                 = useState('default');
  const [search, setSearch]                 = useState('');
  const [wishlist, setWishlist]             = useState([]);
  const [toast, setToast]                   = useState('');

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 2500);
  };

  const addToCart = (p) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === p.id);
      if (exists) return prev.map(i => i.id === p.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...p, qty: 1 }];
    });
    showToast(`"${p.title.slice(0, 30)}..." added to cart!`);
  };

  const toggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  let filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  if (search.trim()) {
    filtered = filtered.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
  }

  if (sortBy === 'low')    filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sortBy === 'high')   filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sortBy === 'name')   filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated  = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const cartTotal  = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const cartCount  = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <>
      {/* ── TOAST ── */}
      {toast && (
        <div style={{
          position: 'fixed', bottom: '30px', right: '30px', zIndex: 9999,
          background: 'var(--primary-color)', color: '#fff', padding: '14px 22px',
          borderRadius: '4px', fontFamily: 'var(--font-body)', fontSize: '14px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)', maxWidth: '320px',
        }}>
          <i className="fas fa-check-circle" style={{ marginRight: '8px' }}></i>{toast}
        </div>
      )}

      {/* ── HERO BANNER ── */}
      <section style={{
        marginTop: '70px',
        backgroundImage: "linear-gradient(rgba(0,0,0,0.78),rgba(0,0,0,0.78)), url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=600&fit=crop')",
        backgroundSize: 'cover', backgroundPosition: 'center', padding: '90px 0', textAlign: 'center',
      }}>
        <div className="container">
          <h4 style={{ color: 'var(--primary-color)', fontFamily: 'var(--font-heading)', fontSize: '16px', letterSpacing: '4px', marginBottom: '12px' }}>
            AUTO PARTS & ACCESSORIES
          </h4>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '62px', color: '#fff', marginBottom: '16px' }}>
            OUR <span style={{ color: 'var(--primary-color)' }}>SHOP</span>
          </h1>
          <p style={{ color: '#a0a0a0', fontSize: '16px', maxWidth: '560px', margin: '0 auto 24px', lineHeight: '1.7' }}>
            Genuine OEM and aftermarket parts for all makes and models. Fast shipping. 30-day returns.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', fontSize: '14px' }}>
            <a href="/" style={{ color: 'var(--primary-color)' }}>Home</a>
            <span style={{ color: '#555' }}>/</span>
            <span style={{ color: '#fff' }}>Shop</span>
          </div>
        </div>
      </section>

      {/* ── MAIN SHOP LAYOUT ── */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '40px', alignItems: 'start' }}>

            {/* ── SIDEBAR ── */}
            <aside>
              {/* Search */}
              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', marginBottom: '16px', color: '#fff', borderBottom: '2px solid var(--primary-color)', paddingBottom: '8px', display: 'inline-block' }}>
                  SEARCH
                </h4>
                <div style={{ display: 'flex' }}>
                  <input
                    type="text"
                    placeholder="Search products..."
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
              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', marginBottom: '16px', color: '#fff', borderBottom: '2px solid var(--primary-color)', paddingBottom: '8px', display: 'inline-block' }}>
                  CATEGORIES
                </h4>
                <ul style={{ listStyle: 'none' }}>
                  {categories.map(cat => (
                    <li key={cat} style={{ marginBottom: '10px' }}>
                      <button
                        onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                        style={{
                          background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left',
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          color: activeCategory === cat ? 'var(--primary-color)' : 'var(--text-gray)',
                          fontFamily: 'var(--font-body)', fontSize: '14px', padding: '8px 0',
                          borderBottom: '1px solid #222', transition: '0.2s',
                        }}
                      >
                        <span><i className="fas fa-angle-right" style={{ marginRight: '8px', color: 'var(--primary-color)' }}></i>{cat}</span>
                        <span style={{ background: '#252525', color: '#aaa', fontSize: '11px', padding: '2px 8px', borderRadius: '10px' }}>
                          {cat === 'All' ? products.length : products.filter(p => p.category === cat).length}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Filter */}
              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', marginBottom: '16px', color: '#fff', borderBottom: '2px solid var(--primary-color)', paddingBottom: '8px', display: 'inline-block' }}>
                  PRICE RANGE
                </h4>
                <input type="range" min="0" max="700" defaultValue="700" style={{ width: '100%', accentColor: 'var(--primary-color)' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-gray)', fontSize: '13px', marginTop: '8px' }}>
                  <span>$0</span><span style={{ color: 'var(--primary-color)', fontWeight: '700' }}>$700</span>
                </div>
              </div>

              {/* Cart Summary */}
              <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', padding: '20px' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', marginBottom: '16px', color: '#fff', borderBottom: '2px solid var(--primary-color)', paddingBottom: '8px', display: 'inline-block' }}>
                  MY CART <span style={{ color: 'var(--primary-color)' }}>({cartCount})</span>
                </h4>
                {cart.length === 0 ? (
                  <p style={{ color: 'var(--text-gray)', fontSize: '13px' }}>Your cart is empty.</p>
                ) : (
                  <>
                    {cart.map(item => (
                      <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '12px', color: 'var(--text-gray)', borderBottom: '1px solid #222', paddingBottom: '8px' }}>
                        <span style={{ maxWidth: '160px', lineHeight: '1.4' }}>{item.title.slice(0, 28)}...</span>
                        <span style={{ color: 'var(--primary-color)', whiteSpace: 'nowrap' }}>{item.qty} × ${item.price}</span>
                      </div>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-heading)', fontSize: '18px', color: '#fff', marginTop: '12px' }}>
                      <span>TOTAL</span>
                      <span style={{ color: 'var(--primary-color)' }}>${cartTotal}</span>
                    </div>
                    <Link to="/checkout" className="btn" style={{ width: '100%', marginTop: '14px', textAlign: 'center', display: 'block' }}>
                      Checkout →
                    </Link>
                  </>
                )}
              </div>
            </aside>

            {/* ── PRODUCT AREA ── */}
            <div>
              {/* Toolbar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                <p style={{ color: 'var(--text-gray)', fontSize: '14px' }}>
                  Showing <strong style={{ color: '#fff' }}>{(currentPage - 1) * ITEMS_PER_PAGE + 1}–{Math.min(currentPage * ITEMS_PER_PAGE, filtered.length)}</strong> of <strong style={{ color: '#fff' }}>{filtered.length}</strong> results
                </p>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  style={{ padding: '8px 14px', background: '#1a1a1a', border: '1px solid #333', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '13px', cursor: 'pointer', outline: 'none' }}
                >
                  <option value="default">Default Sorting</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>

              {/* Products Grid */}
              {paginated.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-gray)' }}>
                  <i className="fas fa-search" style={{ fontSize: '48px', color: '#333', marginBottom: '16px', display: 'block' }}></i>
                  <p>No products found for "<strong style={{ color: '#fff' }}>{search}</strong>"</p>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '24px' }}>
                  {paginated.map(p => (
                    <div
                      key={p.id}
                      style={{
                        background: 'var(--card-bg)', border: '1px solid var(--border-color)',
                        transition: '0.3s', position: 'relative', overflow: 'hidden',
                      }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary-color)'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
                    >
                      {/* Tag Badge */}
                      {p.tag && (
                        <div style={{
                          position: 'absolute', top: '12px', left: '12px', zIndex: 2,
                          background: tagColor[p.tag] || 'var(--primary-color)',
                          color: '#fff', fontSize: '11px', fontWeight: '700',
                          padding: '3px 10px', fontFamily: 'var(--font-heading)',
                        }}>
                          {p.tag}
                        </div>
                      )}

                      {/* Wishlist */}
                      <button
                        onClick={() => toggleWishlist(p.id)}
                        style={{
                          position: 'absolute', top: '12px', right: '12px', zIndex: 2,
                          background: wishlist.includes(p.id) ? 'var(--primary-color)' : 'rgba(0,0,0,0.5)',
                          border: 'none', color: '#fff', width: '32px', height: '32px',
                          borderRadius: '50%', cursor: 'pointer', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}
                      >
                        <i className={wishlist.includes(p.id) ? 'fas fa-heart' : 'far fa-heart'}></i>
                      </button>

                      {/* Image */}
                      <div style={{ overflow: 'hidden', height: '200px' }}>
                        <img
                          src={p.img}
                          alt={p.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.4s' }}
                          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                      </div>

                      {/* Info */}
                      <div style={{ padding: '18px' }}>
                        <p style={{ color: 'var(--text-gray)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
                          {p.category}
                        </p>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', color: '#fff', marginBottom: '10px', lineHeight: '1.3' }}>
                          {p.title}
                        </h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', color: 'var(--primary-color)' }}>${p.price}.00</span>
                          <span style={{ fontSize: '13px', color: '#555', textDecoration: 'line-through' }}>${p.old}</span>
                        </div>
                        {/* Stars */}
                        <div style={{ marginBottom: '14px' }}>
                          {[1,2,3,4,5].map(s => (
                            <i key={s} className={s <= 4 ? 'fas fa-star' : 'far fa-star'} style={{ color: '#f59e0b', fontSize: '12px' }}></i>
                          ))}
                        </div>
                        <button
                          className="btn"
                          onClick={() => addToCart(p)}
                          style={{ width: '100%', textAlign: 'center', fontSize: '14px', padding: '10px' }}
                        >
                          <i className="fas fa-cart-plus" style={{ marginRight: '8px' }}></i>Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ── PAGINATION ── */}
              {totalPages > 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '48px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    style={{
                      padding: '9px 18px', background: currentPage === 1 ? '#1a1a1a' : 'var(--primary-color)',
                      border: '1px solid #333', color: currentPage === 1 ? '#555' : '#fff',
                      fontFamily: 'var(--font-heading)', fontSize: '16px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                    }}
                  >
                    ← Prev
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      style={{
                        width: '40px', height: '40px',
                        background: currentPage === page ? 'var(--primary-color)' : '#1a1a1a',
                        border: `1px solid ${currentPage === page ? 'var(--primary-color)' : '#333'}`,
                        color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '16px', cursor: 'pointer',
                      }}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    style={{
                      padding: '9px 18px', background: currentPage === totalPages ? '#1a1a1a' : 'var(--primary-color)',
                      border: '1px solid #333', color: currentPage === totalPages ? '#555' : '#fff',
                      fontFamily: 'var(--font-heading)', fontSize: '16px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                    }}
                  >
                    Next →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES STRIP ── */}
      <section style={{ background: '#151515', padding: '48px 0', borderTop: '1px solid #222' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px', textAlign: 'center' }}>
            {[
              { icon: 'fas fa-truck', title: 'Free Shipping', desc: 'On orders over $199' },
              { icon: 'fas fa-undo', title: '30-Day Returns', desc: 'Hassle-free returns' },
              { icon: 'fas fa-shield-alt', title: 'Genuine Parts', desc: 'OEM & certified aftermarket' },
              { icon: 'fas fa-headset', title: '24/7 Support', desc: 'Expert advice anytime' },
            ].map(f => (
              <div key={f.title}>
                <i className={f.icon} style={{ fontSize: '32px', color: 'var(--primary-color)', marginBottom: '12px', display: 'block' }}></i>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', color: '#fff', marginBottom: '6px' }}>{f.title}</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '13px' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section style={{ background: 'var(--primary-color)', padding: '50px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontSize: '36px', marginBottom: '10px' }}>Need Help Choosing The Right Part?</h2>
          <p style={{ color: 'rgba(255,255,255,.85)', marginBottom: '28px', fontSize: '16px' }}>
            Our expert team is available 24/7 to help you find exactly what your vehicle needs.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:052699256693" className="btn" style={{ background: '#fff', color: 'var(--primary-color)', fontSize: '17px' }}>
              <i className="fas fa-phone-alt"></i> 052 (699) 256 - 693
            </a>
            <a href="#" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff', fontSize: '17px' }}>
              Browse All Parts →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;