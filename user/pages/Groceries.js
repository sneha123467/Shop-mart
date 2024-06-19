import React, { useContext } from 'react';
import './Groceries.css';
import { CartContext } from '../components/CartContext';

const Groceries = ({ products }) => {
  const { addToCart } = useContext(CartContext);

  const groceriesProducts = products.filter(product => product.category === 'groceries');

  return (
    <div className="groceries-page">
      <h1>Groceries</h1>
      <div className="products-list">
        {groceriesProducts.map(product => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p><strong>Price:</strong> ${product.price}</p>
            {product.image && <img src={product.image} alt="Product" />}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groceries;
