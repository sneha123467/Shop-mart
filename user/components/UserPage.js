import React from 'react';

const UserPage = ({ products }) => {
    const renderProductsByCategory = (category) => {
        const filteredProducts = products.filter((product) => product.category === category);
        return (
            <div className="category">
                <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                {filteredProducts.length === 0 ? (
                    <p>No products in this category</p>
                ) : (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="product-item">
                            <h3>{product.name}</h3>
                            <p><strong>Price:</strong> {product.price}</p>
                            {product.category === 'clothes' && (<p><strong>Size:</strong> {product.size}</p>)}
                            {product.image && (
                                <img src={product.image} alt="Product" style={{ maxWidth: '100px' }} />
                            )}
                        </div>
                    ))
                )}
            </div>
        );
    };

    return (
        <div className="user-page">
            <h1>User Page</h1>
            {renderProductsByCategory('groceries')}
            {renderProductsByCategory('clothes')}
            {renderProductsByCategory('accessories')}
        </div>
    );
};

export default UserPage;
