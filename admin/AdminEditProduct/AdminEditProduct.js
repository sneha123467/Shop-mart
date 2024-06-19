import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
//import Form from '../Form'; // Make sure to adjust the path if necessary

const AdminEditProduct = ({ products, addProduct, updateProduct, closeForm }) => {
    const { index } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        id: '',
        name: '',
        category: '',
        price: '',
        availableSizes: '',
        image: ''
    });

    useEffect(() => {
        if (products[index]) {
            setProduct(products[index]);
        }
    }, [index, products]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProduct(product);
        navigate('/adminViewProducts'); // Navigate back to admin view products
    };

    return (
        <div className="edit-product">
            <h2>Edit Product</h2>
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
                        <label>Available Sizes:</label>
                        <input type="text" name="availableSizes" value={product.availableSizes} onChange={handleChange} />
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
                    <label>Image URL:</label>
                    <input type="text" name="image" value={product.image} onChange={handleChange} required />
                </div>
                <button type="submit">Edit Product</button>
                <button type="button" onClick={closeForm}>Cancel</button>
            </form>
        </div>
    );
};

export default AdminEditProduct;
