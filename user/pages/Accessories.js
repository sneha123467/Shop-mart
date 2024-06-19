import React, { useContext } from 'react';
import './Accessories.css';
import { CartContext } from '../components/CartContext';

const Accessories = ({ products }) => {
  const { addToCart } = useContext(CartContext);

  const accessoriesProducts = products.filter(product => product.category === 'accessories');

  return (
    <div className="accessories-page">
      <h1>Accessories</h1>
      <div className="products-list">
        {accessoriesProducts.map(product => (
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

export default Accessories;
