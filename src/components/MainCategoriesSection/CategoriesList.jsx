import CategoriesContext from '../Context/CategoriesContext.jsx';
import { useContext } from 'react';

const CategoriesList = () => {
  const {categories} = useContext(CategoriesContext);

  return (
    <div className="swiper-slide swiper-slide-active flex flex-row" style={{width: "213.33px"}}>
      {categories.map(
        ({category, id}) => (
          <a key={id} className="flex flex-col items-center group" href={`/categories/${category}`}>
            <div className="w-[130px] h-[130px] bg-[var(--sunflower)] rounded-full flex items-center justify-center mb-4">
              <img className="w-[inherit] h-[inherit] rounded-full bg-cover bg-center" alt={category} loading="lazy" width="80" height="80" decoding="async"  style={{color: "transparent"}} src={`almonds/BagOfAlmondSeeds.jpg`} />
            </div>
            <div className="flex justify-center">
              <h3 className="inline-block text-base font-medium text-center duration-500 text-dark group-hover:text-blue">{category}</h3>
            </div>
          </a>
        )
      )}
    </div>
  )
};

export default CategoriesList;