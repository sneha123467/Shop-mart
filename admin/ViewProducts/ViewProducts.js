import React from 'react';

function ViewProducts({ products, deleteProduct, editProduct }) {
    return (
        <div className="products-list">
            {products.map((data) => (
                <div key={data.id} className="product-item">
                    <h3>{data.name}</h3>
                    <p><strong>Price:</strong> {data.price}</p>
                    <p><strong>Category:</strong> {data.category}</p>
                    {data.category === 'clothes' && (<p><strong>Size:</strong> {data.size}</p>) }
                    {data.image && (
                        <img src={data.image} alt="Product" style={{ maxWidth: '100px' }} />
                    )}
                    <div className="product-actions">
                        <button className='btn btn-primary m-1' onClick={() => editProduct(data)}>Edit</button>
                        <button className='btn btn-danger m-1' onClick={() => deleteProduct(data.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ViewProducts;
