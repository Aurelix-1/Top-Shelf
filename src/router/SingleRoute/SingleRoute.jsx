import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../../mock';
import logo from "../../assets/3f83dafa2e85b6dc2f53ab8b8d706623b8e05955.png";
import './SingleRoute.css';
import { HiOutlineLightningBolt, HiOutlineBadgeCheck, HiOutlineEmojiHappy } from "react-icons/hi";

const SingleRoute = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id) || products[0];
  const featuredProducts = products.slice(0, 4);

  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="single-product-page">
      <div className="top-announcement">
        LIMITED TIME OFFER: 20% OFF EVERYTHING - CODE: <strong>FALL20</strong>
      </div>

      <header className="site-header">
        <div className="header-main">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Top Shelf" style={{ height: '45px', width: 'auto' }} />
            </Link>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button className="search-btn">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </div>
          <div className="header-actions">
            <span className="account-link">Your Account</span>
            <div className="cart-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              <span className="cart-badge">0</span>
            </div>
          </div>
        </div>
        <nav className="header-nav">
          <Link to="/">Shop All</Link>
          <Link to="/">Flower</Link>
          <Link to="/">Edibles</Link>
          <Link to="/">Concentrates</Link>
          <Link to="/">Mushrooms</Link>
          <Link to="/">Promotions/Bundles</Link>
          <Link to="/">Support</Link>
          <Link to="/">Rewards</Link>
          <Link to="/">Blog</Link>
        </nav>
      </header>

      <div className="breadcrumbs">
        <Link to="/">Home</Link> &gt; <Link to="/">Concentrates</Link> &gt; <span className="current">{product.title}</span>
      </div>

      <div className="product-main-section">
        <div className="product-gallery">
          <div className="main-image-container">
            <img src={product.image} alt={product.title} className="main-image" />
          </div>
          <div className="thumbnails">
            <img src={product.image} alt="thumb" className="active" />
            <img src={product.image} alt="thumb" />
            <img src={product.image} alt="thumb" />
            <img src={product.image} alt="thumb" />
          </div>
        </div>

        <div className="product-info-details">
          <p className="product-category-title">CONCENTRATES</p>
          <h1 className="product-title">{product.title}</h1>

          <div className="tags">
            <span className="tag indica">Indica</span>
            <span className="tag sativa">Sativa 100%</span>
          </div>

          <div className="price-review-row">
            <div className="prices">
              {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
              <span className="current-price">${product.price ? product.price.toFixed(2) : '102.00'}</span>
            </div>
            <div className="meta">
              <span className="rating">★ {product.rating || '4.6'}/5</span>
              <span className="reviews-count">| <strong>{product.reviews || '135'}</strong> Reviews</span>
            </div>
          </div>

          <div className="product-attributes">
            <div className="attr-item">
              <div className="attr-icon">
                <HiOutlineLightningBolt size={24} />
              </div>
              <div className="attr-text">
                <strong>Effects</strong>
                <p>Calming, Creative, Happy, Relaxing, Sleepy, Uplifting</p>
              </div>
            </div>
            <div className="attr-item">
              <div className="attr-icon">
                <HiOutlineBadgeCheck size={24} />
              </div>
              <div className="attr-text">
                <strong>May Relieve</strong>
                <p>Anxiety, Arthritis, Chronic Pain, Depression, Fatigue, Inflammation, Insomnia, Irregular Bowel Movements, Migraines, Mood Swings</p>
              </div>
            </div>
            <div className="attr-item">
              <div className="attr-icon">
                <HiOutlineEmojiHappy size={24} />
              </div>
              <div className="attr-text">
                <strong>Aromas</strong>
                <p>Chemical, Citrus, Earthy, Pungent, Sour</p>
              </div>
            </div>
          </div>

          <div className="product-description-short">
            <p><strong>Description</strong></p>
            <p>Jungle Boys are the original creators of the Wedding Cake strain. It is a cross of Triangle Kush and Animal Mints. It has a sweet, earthy, and floral aroma with hints of vanilla.</p>
          </div>

          <div className="weight-selection">
            <div className="weight-header">
              <h4>WEIGHT</h4>
              <span>4 options available</span>
            </div>
            <div className="options">
              <button className="active">28g</button>
              <button>1/2lb</button>
              <button>1/4lb</button>
            </div>
          </div>

          <div className="mix-and-match-selection">
            <div className="selection-item">
              <span className="item-name">Add 1 Indica Strain - 7g</span>
              <span className="item-price">+$0.00</span>
            </div>
            <div className="selection-item">
              <span className="item-name">Add 1 Sativa Strain - 7g</span>
              <span className="item-price">+$0.00</span>
            </div>
          </div>

          <div className="add-to-cart-action">
            <div className="quantity-selector">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button className="btn-add-cart">
              Add to Cart | ${product.price ? product.price.toFixed(2) : '102.00'}
            </button>
          </div>

          <ul className="benefits-list">
            <li><span className="check">✓</span> Free Express Shipping on orders over $200</li>
            <li><span className="check">✓</span> Order before 12:00pm for same day dispatch</li>
            <li><span className="check">✓</span> Support & ordering open 7 days a week</li>
          </ul>

          <div className="product-meta-footer">
            <p><strong>SKU:</strong> N/A</p>
            <p><strong>Categories:</strong> Concentrates</p>
            <p><strong>Tags:</strong> Shatter, Budder, Mix and Match</p>
          </div>
        </div>
      </div>

      <div className="product-tabs-section">
        <div className="tabs-pill">
          <button
            className={activeTab === 'description' ? 'active' : ''}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            className={activeTab === 'reviews' ? 'active' : ''}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews (135)
          </button>
          <button
            className={activeTab === 'refer' ? 'active' : ''}
            onClick={() => setActiveTab('refer')}
          >
            Refer a Friend
          </button>
        </div>

        <div className="tab-content-area">
          {activeTab === 'description' && (
            <div className="description-content">
              <p>Jungle Boys are the original creators of the Wedding Cake strain. It is a cross of Triangle Kush and Animal Mints. It has a sweet, earthy, and floral aroma with hints of vanilla. The gorgeous buds are covered in trichomes, which gives it a frosty appearance. Wedding Cake is a potent strain that provides uplifting and relaxing effects. It is a perfect strain for treating pain, anxiety, and depression. The high THC content makes it a popular choice for experienced smokers. Wedding Cake is a delicious strain that will leave you wanting more.</p>
              <p>The high from Wedding Cake is described as a mellow, happy experience. This bud is a great choice for kicking back and relaxing after a long day. The high begins with an uplifting euphoria that leaves you feeling happy and hazy, completely free of any mental pain or racing thoughts. As your mind soars, your body will begin to settle into a deep physical relaxation that can quickly become sedative if you're not careful. With these effects and its high THC level (averaging 25% or more), Wedding Cake is a great choice for treating conditions such as chronic pain, insomnia, appetite loss, and chronic stress or anxiety.</p>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="reviews-placeholder">
              <p>Reviews content goes here...</p>
            </div>
          )}

          {activeTab === 'refer' && (
            <div className="refer-placeholder">
              <p>Refer a friend program details...</p>
            </div>
          )}
        </div>
      </div>

      <section className="featured-section">
        <h2>Featured Product</h2>
        <div className="products-grid">
          {featuredProducts.map((p) => (
            <div key={p.id} className={`product-card ${p.isOutOfStock ? 'out-of-stock' : ''}`}>
              {p.badge && <span className="badge">{p.badge}</span>}
              {p.isOutOfStock && <div className="overlay">Out Of Stock</div>}

              <Link to={`/product/${p.id}`} className="product-link">
                <img src={p.image} alt={p.title} />
                <p className="category">{p.category}</p>
                <h3>{p.title}</h3>
              </Link>

              <div className="meta">
                <span>★ {p.rating}/5</span>
                <span>{p.reviews} Reviews</span>
              </div>

              <p className="type">{p.type || 'Indica 70%'}</p>

              <div className="price-container">
                {p.oldPrice && <span className="old-price">${p.oldPrice}</span>}
                <span className="price">${p.price.toFixed(2)}</span>
              </div>

              <div className="weight-options">
                <button>28g</button> <button>1/2lb</button> <button>1/4lb</button>
              </div>

              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <section className="discount-banner">
        <div className="banner-content">
          <h2>UNLOCK 20% OFF YOUR<br />FIRST ORDER</h2>
          <p>Reveal coupon code by entering your email</p>
          <div className="banner-form">
            <input type="email" placeholder="Email Address" />
            <button>Reveal coupon</button>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <h2><img src={logo} alt="Top Shelf" style={{ height: '60px', width: 'auto' }} /></h2>
            <p>At Top Shelf we are redefining the dispensary experience to be more than just buying weed. We strive to educate, inspire, and create a community built on transparency and a passion for plant medicine. Our goal is to provide the highest quality products, at the best prices, across the board for everyone.</p>
          </div>

          <div className="footer-links">
            <h4>QUICK LINK</h4>
            <ul>
              <li><Link to="/">Track Your Order</Link></li>
              <li><Link to="/">Shop All</Link></li>
              <li><Link to="/">Flower</Link></li>
              <li><Link to="/">Edibles</Link></li>
              <li><Link to="/">Concentrates</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>CONTACT US</h4>
            <ul>
              <li>info@topshelfbc.cc</li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>MORE</h4>
            <ul>
              <li><Link to="/">Buy weed online in Canada</Link></li>
              <li><Link to="/">Buy weed online in New Brunswick</Link></li>
              <li><Link to="/">Buy weed online in Prince Edward Island</Link></li>
              <li><Link to="/">Buy weed online in Northwest Territories</Link></li>
              <li><Link to="/">Buy weed online in Saskatchewan</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">© 2023 Top Shelf BC. All Rights Reserved.</div>
          <div className="footer-legal">
            <Link to="/">Out of Stock</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SingleRoute;
