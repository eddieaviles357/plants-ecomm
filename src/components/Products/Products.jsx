import React, { useEffect, useState } from 'react';
import ProductsPageCategories from '../Categories/ProductsPageCategories';
    //**************************************************** */
    // Needs refactoring, data should be fetched from the backend
    //**************************************************** */
const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const categories = ["Nutrients & Concentrates", "Lights", "Containers", "Soil", "Seeds", "Fertilizers", "Tools & Accessories"];
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
        <section className="relative pb-20 overflow-hidden bg-gray-2">
            <div className="w-full px-4 mx-auto max-w-7xl sm:px-8 xl:px-0">
                <div className="grid gap-6 xl:grid-cols-12">
                    <div className="sidebar-content fixed xl:static bg-gray-2 xl:bg-transparent xl:translate-x-0 xl:rounded-xl left-0 top-0 xl:col-span-3 w-[290px] sm:w-[320px] xl:w-full h-full xl:h-auto  z-99 xl:z-auto transition-transform duration-300 ease-in-out -translate-x-full xl:translate-x-0">
                        <div className="flex flex-col gap-6 overflow-y-auto max-xl:h-screen max-xl:p-5">
                            <div className="bg-white rounded-lg">
                                <button className="cursor-pointer flex items-center justify-between py-3 pl-6 pr-5.5 w-full shadow-filter">
                                    <span className="text-dark">Category</span>
                                    <svg className="text-dark ease-out duration-200 rotate-180" width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                                        <path d="M5.54779 9.09467C5.84069 8.80178 6.31556 8.80178 6.60846 9.09467L12.3281 14.8143L18.0478 9.09467C18.3407 8.80178 18.8156 8.80178 19.1085 9.09467C19.4013 9.38756 19.4013 9.86244 19.1085 10.1553L12.8585 16.4053C12.5656 16.6982 12.0907 16.6982 11.7978 16.4053L5.54779 10.1553C5.2549 9.86244 5.2549 9.38756 5.54779 9.09467Z" fill="#343C54"></path>
                                    </svg>
                                </button>
                                <ProductsPageCategories categories={categories} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
