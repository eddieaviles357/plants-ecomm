import { useContext, useState, useEffect } from 'react';
import CategoriesContext from '../Context/CategoriesContext';

const ProductsPageCategories = () => {
  const { categories } = useContext(CategoriesContext);
  const [ isCategoryMenuOpen, setIsCategoryMenuOpen ] = useState(false);
  
// need to fetch data associated with category clicked using form
  const toggleCategoryMenu = (e) => {
    e.preventDefault();
    setIsCategoryMenuOpen(!isCategoryMenuOpen);
  }

  return (
    <div className="flex flex-col gap-6 overflow-y-auto max-xl:h-screen max-xl:p-5">
      <div className="bg-white rounded-lg">
      {/* category menu toggler */}
        <button 
          onClick={toggleCategoryMenu}
          className="cursor-pointer flex items-center justify-between py-3 pl-6 pr-5.5 w-full shadow-filter">
          <span className="text-dark">Category</span>
          <svg className={`text-dark ease-out duration-200 ${isCategoryMenuOpen ? "rotate-180" : "rotate-0"}`}
                width="24" 
                height="24" 
                viewBox="0 0 25 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                transform="rotate(0 0 0)"
                >
              <path d="M5.54779 9.09467C5.84069 8.80178 6.31556 8.80178 6.60846 9.09467L12.3281 14.8143L18.0478 9.09467C18.3407 8.80178 18.8156 8.80178 
                      19.1085 9.09467C19.4013 9.38756 19.4013 9.86244 19.1085 10.1553L12.8585 16.4053C12.5656 16.6982 12.0907 16.6982 11.7978 16.4053L5.54779 
                      10.1553C5.2549 9.86244 5.2549 9.38756 5.54779 9.09467Z" fill="#343C54"></path>
          </svg>
        </button>
        {/* toggle menu */}
        <form className={`${isCategoryMenuOpen ? "hidden" : "flex"} flex-col gap-3 px-6 py-5`}>
          {categories.map(({category, id}) => ( 
            <label key={id} htmlFor={category.toLowerCase()} className="flex items-center justify-start gap-2 cursor-pointer group hover:text-blue">
              <input className="not-sr-only" id={category} type="checkbox" />
              <span className="flex-1 text-base font-normal peer-checked:text-blue">{category}</span>
          </label>
          ))}
        </form>
        {/* toggle menu end */}
      </div>
    </div>
  )
}

export default ProductsPageCategories;