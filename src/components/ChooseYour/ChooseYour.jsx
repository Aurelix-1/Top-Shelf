import { Link } from 'react-router-dom';
import { products } from '../../mock';
import "./ChooseYour.css";

const ChooseYourWeed = () => {
  return (
    <section className="weed-section">
      <h2>CHOOSE YOUR WEED</h2>
      
      <div className="filters">
        {['Flowers', 'Mushrooms', 'Concentrate', 'Edibles', 'Shop All Weed'].map(filter => (
          <button key={filter}>{filter}</button>
        ))}
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className={`product-card ${product.isOutOfStock ? 'out-of-stock' : ''}`}>
            {product.badge && <span className="badge">{product.badge}</span>}
            {product.isOutOfStock && <div className="overlay">Out Of Stock</div>}
            <Link to={`/product/${product.id}`} className="product-link">
              <img src={product.image} alt={product.title} />
              <p className="category">{product.category}</p>
              <h3>{product.title}</h3>
            </Link>
            
            <div className="meta">
              <span>★ {product.rating}/5</span>
              <span>{product.reviews} Reviews</span>
            </div>
            
            <p className="type">{product.type}</p>
            
            <div className="price-container">
              {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
              <span className="price">${product.price.toFixed(2)}</span>
            </div>

            <div className="weight-options">
              <button>28g</button> <button>1/2lb</button> <button>1/4lb</button>
            </div>
            
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseYourWeed;