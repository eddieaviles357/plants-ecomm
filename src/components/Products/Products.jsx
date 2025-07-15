import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/v1/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    console.log(products); // For debugging purposes
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
        <div className="products">
            <h2>Products</h2>
            <div className="product-list">
                {products.products.map(product => (
                    <div key={product.id} className="product-item">
                        <h3>Name: {product.productName}</h3>
                        <h3>ID: {product.id}</h3>
                        <h4>SKU: {product.sku}</h4>
                        <p>Description: {product.productDescription}</p>
                        <p>Stock: {product.stock}</p>
                        <p>Price: ${product.price}</p>
                        <p>ImageURL: ${product.imageURL}</p>
                        <ul>Categories: {product.categories.map(category => (
                            <li key={product.id + category} className="category">{category}</li>
                        ))}</ul>
                        <br />
                        <br />
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
