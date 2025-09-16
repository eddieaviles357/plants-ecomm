import ProductDetails from './ProductDetails';
import { Link } from 'react-router-dom';

const ProductCard = ({ products }) => {
    console.debug('Products->ProductCard', products);
    return (
      <div className="w-full xl:col-span-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-6">
          {products?.map(
            ({ id, sku, productName, imageURL, productDescription, price }) => (
              <div key={id} className="group">
                <div className="relative overflow-hidden border border-gray-3 flex items-center justify-center rounded-xl bg-white min-h-[270px] mb-4">
                  <a href={`/products/${id}`}>
                    <img alt={productName} loading="lazy" src={imageURL} style={{color: "transparent"}} />
                  </a>

                  {/* Hover button */}
                  <div className="absolute left-0 bottom-0 translate-y-full w-full flex items-center justify-center gap-2.5 pb-5 ease-linear duration-200 group-hover:translate-y-0">
                    <div className="relative inline-block">
                      <button className="border border-gray-3 h-[38px] w-[38px] rounded-lg flex items-center justify-center text-dark bg-white hover:text-blue">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                          <path d="M2.46926 10.9877C2.23746 10.4851 2.23746 9.90542 2.46926 9.40283C3.78523 6.54961 6.66405 4.57019 10.0037 4.57019C13.3433 4.57019 16.2222 6.54961 17.5381 9.40284C17.7699 9.90543 17.7699 10.4851 17.5381 10.9877C16.2222 13.8409 13.3433 15.8204 10.0037 15.8204C6.66405 15.8204 3.78523 13.8409 2.46926 10.9877Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M13.0246 10.1952C13.0246 11.8636 11.6721 13.216 10.0037 13.216C8.33538 13.216 6.98291 11.8636 6.98291 10.1952C6.98291 8.52683 8.33538 7.17436 10.0037 7.17436C11.6721 7.17436 13.0246 8.52683 13.0246 10.1952Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </button>
                    </div>
                    <button className="inline-flex px-5 py-2 font-medium h-[38px] text-white duration-200 ease-out rounded-lg text-custom-sm bg-blue hover:bg-blue-dark">
                      Add to Cart
                    </button>
                    <div className="relative inline-block">
                      <button aria-label="button for favorite select" className="flex items-center justify-center duration-200 h-[38px] w-[38px] ease-out bg-white border rounded-lg border-gray-3   text-dark hover:text-blue">
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                          <path d="M5.97441 12.6073L6.43872 12.0183L5.97441 12.6073ZM7.99992 3.66709L7.45955 4.18719C7.60094 4.33408 7.79604 4.41709 7.99992 4.41709C8.2038 4.41709 8.3989 4.33408 8.54028 4.18719L7.99992 3.66709ZM10.0254 12.6073L10.4897 13.1962L10.0254 12.6073ZM6.43872 12.0183C5.41345 11.21 4.33627 10.4524 3.47904 9.48717C2.64752 8.55085 2.08325 7.47831 2.08325 6.0914H0.583252C0.583252 7.94644 1.3588 9.35867 2.35747 10.4832C3.33043 11.5788 4.57383 12.4582 5.51009 13.1962L6.43872 12.0183ZM2.08325 6.0914C2.08325 4.75102 2.84027 3.63995 3.85342 3.17683C4.81929 2.73533 6.15155 2.82823 7.45955 4.18719L8.54028 3.14699C6.84839 1.38917 4.84732 1.07324 3.22983 1.8126C1.65962 2.53035 0.583252 4.18982 0.583252 6.0914H2.08325ZM5.51009 13.1962C5.84928 13.4636 6.22932 13.7618 6.61834 13.9891C7.00711 14.2163 7.47619 14.4167 7.99992 14.4167V12.9167C7.85698 12.9167 7.65939 12.8601 7.37512 12.694C7.0911 12.5281 6.79171 12.2965 6.43872 12.0183L5.51009 13.1962ZM10.4897 13.1962C11.426 12.4582 12.6694 11.5788 13.6424 10.4832C14.641 9.35867 15.4166 7.94644 15.4166 6.0914H13.9166C13.9166 7.47831 13.3523 8.55085 12.5208 9.48717C11.6636 10.4524 10.5864 11.21 9.56112 12.0183L10.4897 13.1962ZM15.4166 6.0914C15.4166 4.18982 14.3402 2.53035 12.77 1.8126C11.1525 1.07324 9.15145 1.38917 7.45955 3.14699L8.54028 4.18719C9.84828 2.82823 11.1805 2.73533 12.1464 3.17683C13.1596 3.63995 13.9166 4.75102 13.9166 6.0914H15.4166ZM9.56112 12.0183C9.20813 12.2965 8.90874 12.5281 8.62471 12.694C8.34044 12.8601 8.14285 12.9167 7.99992 12.9167V14.4167C8.52365 14.4167 8.99273 14.2163 9.3815 13.9891C9.77052 13.7618 10.1506 13.4636 10.4897 13.1962L9.56112 12.0183Z" fill="currentColor"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* Hover button end*/}
                </div>
                {/* DESCRIPTION */}
                <h3 className="font-semibold text-dark ease-out text-base duration-200 hover:text-blue mb-1.5 line-clamp-1">
                  <Link to={`/products/${id}`} className="text-dark hover:text-blue">
                    {productName}
                  </Link>
                </h3>
                {/* PRICE */}
                <span className="flex items-center gap-2 text-base font-medium">
                  <span className="text-dark">${price}</span>
                </span>
              </div>
          ))}
          
        </div>
      </div>
    );
  };
  
  export default ProductCard;