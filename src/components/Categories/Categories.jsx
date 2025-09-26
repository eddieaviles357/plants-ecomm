import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import ProductCategoriesContext from '../Context/ProductCategoriesContext.jsx';
import ECommercePlantsAppAPI from '../../api/ECommercePlantsAppAPI';
import ProductCard from '../Product/ProductCard.jsx';

const Categories = () => {
  const { id } = useParams();
  const [ products, setProducts ] = useState([]);
  const { setProductCategories, fetchProductCategories } = useContext(ProductCategoriesContext);
  console.log("PRODUCTS IN CATEGORIES COMPONENT", products);
  const fetchFilteredProducts = async(categoryId) => {
    try {
      const { categoryProducts } = await ECommercePlantsAppAPI.getProductCategories(categoryId);
      console.log(categoryProducts, "results from fetchFilteredProducts");
      setProducts(() => [...products, categoryProducts[0]]);
    } catch (err) {
      console.error("fetchFilteredProducts: problem_loading", err);
      // setErrors(Array.from(err || err.message));
    }
  };

  useEffect(() => {
    if (id) {
      fetchFilteredProducts(id);
    }
  }, [])

  return (
    <section className="relative pt-35 overflow-hidden bg-gray-2">
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-8 xl:px-0">
        <div className="grid gap-6 xl:grid-cols-12">
          <div className="sidebar-content fixed xl:static bg-gray-2 xl:bg-transparent xl:translate-x-0 xl:rounded-xl left-0 top-0 xl:col-span-3 w-[290px] 
                          sm:w-[320px] xl:w-full h-full xl:h-auto  z-99 xl:z-auto transition-transform duration-300 ease-in-out -translate-x-full">
          </div>
          {(products[0]) ? <ProductCard products={products} /> : <h2 className="text-2xl font-bold text-center">No products found in this category</h2>}
          {/* <ProductCard products={products} /> */}
        </div>
      </div>
    </section>
  )
}

export default Categories;