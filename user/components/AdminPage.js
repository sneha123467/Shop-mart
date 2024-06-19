import React, { useState } from 'react';
import AddProduct from '../../admin/AddProducts/AddProducts';
import ViewProducts from '../../admin/ViewProducts/ViewProducts';

const AdminPage = () => {
    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        setProducts([...products, { ...product, id: products.length + 1 }]);
    };

    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    const editProduct = (updatedProduct) => {
        setProducts(products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)));
    };

    return (
        <div>
            <h1>Admin Page</h1>
            <AddProduct addProduct={addProduct} />
            <ViewProducts products={products} deleteProduct={deleteProduct} editProduct={editProduct} />
        </div>
    );
};

export default AdminPage;
