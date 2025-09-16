import { useState, useContext } from 'react';
import ProductsPageCategoriesSelection from '../Categories/ProductsPageCategoriesSelection';
import ProductCard from '../Product/ProductCard';
import ProductsContext from '../Context/ProductsContext.jsx';
import ProductCategoriesContext from '../Context/ProductCategoriesContext.jsx';

const Products = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { products, setProducts } = useContext(ProductsContext);
    const { productCategories, setProductCategories } = useContext(ProductCategoriesContext);

    // console.log("productCategories length", productCategories);
    // console.log("Products page products", products);
    // console.log("Products page productCategories", productCategories);
    return (
      <section className="relative pt-35 overflow-hidden bg-gray-2">
        <div className="w-full px-4 mx-auto max-w-7xl sm:px-8 xl:px-0">
          <div className="grid gap-6 xl:grid-cols-12">
            <div className="sidebar-content fixed xl:static bg-gray-2 xl:bg-transparent xl:translate-x-0 xl:rounded-xl left-0 top-0 xl:col-span-3 w-[290px] 
                            sm:w-[320px] xl:w-full h-full xl:h-auto  z-99 xl:z-auto transition-transform duration-300 ease-in-out -translate-x-full">
              <ProductsPageCategoriesSelection />
            </div>
            {(productCategories.length > 0) ? (<ProductCard products={productCategories} />) :  (<ProductCard products={products} />)}
          </div>
        </div>
      </section>
    );
};

export default Products;
