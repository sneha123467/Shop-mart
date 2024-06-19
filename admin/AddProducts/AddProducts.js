import React, { useState } from 'react';

const AddProduct = ({ addProduct }) => {
    const [product, setProduct] = useState({
        name: '',
        category: '',
        price: '',
        size: '',
        image: ''
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(product);
        setProduct({
            name: '',
            category: '',
            price: '',
            size: '',
            image: ''
        });
    };

    return (
        <div className="add-product">
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={product.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Category:</label>
                    <select name="category" value={product.category} onChange={handleChange} required>
                        <option value="">Select Category</option>
                        <option value="groceries">Groceries</option>
                        <option value="clothes">Clothes</option>
                        <option value="accessories">Accessories</option>
                    </select>
                </div>
                {product.category === 'clothes' && (
                    <div>
                        <label>Size:</label>
                        <select name="size" value={product.size} onChange={handleChange} required>
                            <option value="">Select size</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value='XL'>XL</option>
                        </select>
                    </div>
                )}
                <div>
                    <label>Price:</label>
                    <input type="number" name="price" value={product.price} onChange={handleChange} required />
                </div>
                <div>
                    <label>Image:</label>
                    <input type="text" name="image" value={product.image} onChange={handleChange} required />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
