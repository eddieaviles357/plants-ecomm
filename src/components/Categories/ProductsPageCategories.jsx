
const ProductsPageCategories = ({categories}) => {
  // console.log('ProductsPageCategories component rendered');
  return (
    <div className="flex flex-col gap-3 px-6 py-5">
      {categories.map((category, index) => ( 
        <label key={index} htmlFor={category.toLowerCase()} className="flex items-center justify-start gap-2 cursor-pointer group hover:text-blue">
        <input className="sr-only peer" id="laptop-&amp;-pc" type="checkbox" />
          <span className="flex-1 text-base font-normal peer-checked:text-blue">{category}</span>
          <span className="peer-checked:text-white peer-checked:bg-blue bg-gray-2 inline-flex rounded-[30px] text-custom-xs px-2 ease-out duration-200 group-hover:text-white group-hover:bg-blue">2</span>
      </label>
      ))}
  </div>
  )
}

export default ProductsPageCategories;