import React, { useState } from "react";

function Form(props) {
    const [product, setProduct] = useState(props.data);
    const [submitted, setSubmitted] = useState(false);
    const [imagePreview, setImagePreview] = useState(""); // State to store image preview URL

    const changeFormData = (event) => {
        const { name, value } = event.target;
        setProduct({
            ...product,
            [name]: value
        });

        // If the input is a file input and it has files
        if (event.target.type === "file" && event.target.files.length > 0) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                // Set image preview URL
                setImagePreview(reader.result);
            };

            // Read the file as a data URL (base64 format)
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        // Validate form fields before submitting
        if (product.name.length >= 5 && product.price !== "" && product.category !== "") {
            props.addProduct(product);
        }
    };

    const handleCancel = (e) => {
        e.preventDefault();
        props.closeForm();
    };

    return (
        <div className="form-overlay">
            <form>
                <div className="form-group">
                    <label>Image:</label>
                    <input
                        className="form-control mt-2"
                        type="text"
                        name="image"
                        onChange={changeFormData}
                    />
                    {imagePreview && (
                        <img src={imagePreview} alt="Preview" style={{ maxWidth: "100px", marginTop: "10px" }} />
                    )}
                </div>

                <div className="form-group">
                    <label>Name:</label>
                    <input
                        className="form-control mt-2"
                        type="text"
                        name="name"
                        value={product.name}
                        placeholder="Enter Name"
                        onChange={changeFormData}
                    />
                    {submitted && product.name.length < 5 && (
                        <span className="text-danger">Product name must be 5 characters</span>
                    )}
                </div>

                {product.category === 'clothes' && (
                    <div>
                        <label>Available Sizes:</label>
                        <select name="size" value={product.size} onChange={changeFormData} required>
                            <option value="">Select size</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value='XL'>XL</option>
                        </select>
                    </div>
                )}

                <div className="form-group">
                    <label>Price:</label>
                    <input
                        className="form-control mt-2"
                        type="number"
                        name="price"
                        value={product.price}
                        placeholder="Enter Price"
                        onChange={changeFormData}
                    />
                    {submitted && product.price === "" && (
                        <span className="text-danger">Product Price required</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Category:</label>
                    <select
                        className="form-control mt-2"
                        name="category"
                        value={product.category}
                        onChange={changeFormData}
                    >
                        <option value="">Select Category</option>
                        <option value="groceries">Groceries</option>
                        <option value="clothes">Clothes</option>
                        <option value="accessories">Accessories</option>
                    </select>
                    {submitted && product.category === "" && (
                        <span className="text-danger">Product category required</span>
                    )}
                </div>

                <button className="btn btn-primary float-end" onClick={handleSubmit}>
                    Send
                </button>

                <button className="btn btn-danger float-end" onClick={handleCancel}>
                    Cancel
                </button>
            </form>
        </div>
    );
}

export default Form;
