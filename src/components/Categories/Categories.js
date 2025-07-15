import React, { useEffect, useState } from 'react';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://api.example.com/categories');
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="categories">
            <h2>Product Categories</h2>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>
                        <a href={`/products?category=${category.id}`}>{category.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;