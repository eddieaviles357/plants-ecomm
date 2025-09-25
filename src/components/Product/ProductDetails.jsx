import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ECommercePlantsAppAPI from '../../api/ECommercePlantsAppAPI';

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [reviewsData, setReviewsData] = useState(null);
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const { success, product } = await ECommercePlantsAppAPI.getProductById(id);
        const reviewResponse = await ECommercePlantsAppAPI.getProductReviews(id);
        if (!success) {
          throw new Error('Network response was not ok');
        }
        setProductDetails(product);
        setReviewsData(reviewResponse);
      } catch (error) {
        console.error('Error fetching product details:', error);
        // Handle error appropriately, e.g., set an error state
      }
    };
    fetchProductDetails();
  }, [id, setProductDetails, setReviewsData]); // Add id to the dependency array to refetch

  if (!productDetails || !reviewsData) {
    return (
      <section className="pb-20 mt-35 overflow-hidden bg-gray-2">
        <div className="text-center">Loading...</div> 
      </section>// Show loading state while fetching
    )
  }
  const { 
    id: ID, 
    categories, 
    description, 
    image_url: imageURL, 
    name: productName, 
    price, 
    sku, 
    stock } = productDetails;

    // Render product details
  return (
    <section className=" mt-35 overflow-hidden bg-gray-2">
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-8 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7.5 xl:gap-17.5">
          <div className="w-full lg:col-span-6">
            <div className="lg:min-h-[512px] rounded-lg shadow-1 bg-gray-2 p-4 sm:p-7.5 relative flex items-center lg:justify-end">
              <div>
                <img alt="iPhone 16 Pro - 8/128GB" loading="lazy" width="400" height="400" src={`/${imageURL}`} />
              </div>
            </div>
          </div>
          <div className="w-full lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center justify-between mb-3">
              <h1 className="text-xl font-semibold sm:text-2xl xl:text-custom-3 text-[var(--black)]">{productName}</h1>
            </div>
            <div className="flex flex-wrap items-center gap-5.5 mb-4.5">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1">
                  <p className="mt-1 text-lg text-yellow-500">{'★'.repeat(reviewsData.averageRating)}{'☆'.repeat(5 - reviewsData.averageRating)}</p>
                </div>
                <span> ( {`${reviewsData.reviews.length} customer ${(reviewsData.reviews.length > 1) ? "reviews" : "review"}`} ) </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[var(--black)]">{stock > 0 ? "In Stock" : "Out of Stock"}</span>
              </div>
            </div>
            <div className="text-xl mb-3 sm:text-2xl">{description}</div>
            <h3 className="text-xl sm:text-2xl mb-4.5">
              <span className="mr-2 font-semibold text-[var(--black)]">Price: </span><span className="font-semibold text-[var(--black)]">$89</span>
            </h3>
            <form>
              <div className="flex flex-wrap items-center gap-4.5">
                <div className="flex items-center border rounded-lg border-gray-3">
                  <button aria-label="button for remove product" className="flex items-center justify-center w-12 h-12 duration-200 ease-out hover:bg-[var(--vibrantrose)]" disabled="">
                    <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M-6.411e-08 1.00006C-2.8703e-08 0.595048 0.328325 0.266724 0.733333 0.266724L11.2667 0.266725C11.6717 0.266725 12 0.595049 12 1.00006C12 1.40507 11.6717 1.73339 11.2667 1.73339L0.733333 1.73339C0.328324 1.73339 -9.9517e-08 1.40507 -6.411e-08 1.00006Z" fill="#1C274C"></path>
                    </svg>
                  </button>
                  <span className="flex items-center justify-center w-16 h-12 border-x border-gray-3">1</span>
                  <button aria-label="button for add product" className="flex items-center justify-center w-12 h-12 duration-200 ease-out hover:bg-[var(--sunflower)]" >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.06667 0C6.47168 1.77035e-08 6.8 0.328325 6.8 0.733333L6.8 11.2667C6.8 11.6717 6.47167 12 6.06667 12C5.66166 12 5.33333 11.6717 5.33333 11.2667V0.733333C5.33333 0.328325 5.66166 -1.77035e-08 6.06667 0Z" fill="currentColor"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 5.93333C3.5407e-08 5.52833 0.328325 5.2 0.733333 5.2L11.2667 5.2C11.6717 5.2 12 5.52833 12 5.93333C12 6.33834 11.6717 6.66667 11.2667 6.66667L0.733333 6.66667C0.328324 6.66667 -3.5407e-08 6.33834 0 5.93333Z" fill="currentColor"></path>
                    </svg>
                  </button>
                </div>
                <button disabled="" className="inline-flex py-3 font-medium text-black duration-200 ease-out rounded-lg bg-emerald-600 px-7 hover:bg-emerald-700">Purchase Now</button>
                <button className="flex items-center justify-center w-12 h-12 duration-200 ease-out border rounded-lg border-gray-3 hover:text-white hover:bg-red-700 hover:border-transparent ">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.62436 4.4241C3.96537 5.18243 2.75 6.98614 2.75 9.13701C2.75 11.3344 3.64922 13.0281 4.93829 14.4797C6.00072 15.676 
                      7.28684 16.6675 8.54113 17.6345C8.83904 17.8642 9.13515 18.0925 9.42605 18.3218C9.95208 18.7365 10.4213 19.1004 10.8736 19.3647C11.3261 19.6292 11.6904 19.7499 12 
                      19.7499C12.3096 19.7499 12.6739 19.6292 13.1264 19.3647C13.5787 19.1004 14.0479 18.7365 14.574 18.3218C14.8649 18.0925 15.161 17.8642 15.4589 17.6345C16.7132 16.6675 
                      17.9993 15.676 19.0617 14.4797C20.3508 13.0281 21.25 11.3344 21.25 9.13701C21.25 6.98614 20.0346 5.18243 18.3756 4.4241C16.7639 3.68739 14.5983 3.88249 12.5404 
                      6.02065C12.399 6.16754 12.2039 6.25054 12 6.25054C11.7961 6.25054 11.601 6.16754 11.4596 6.02065C9.40166 3.88249 7.23607 3.68739 5.62436 4.4241ZM12 4.45873C9.68795 
                      2.39015 7.09896 2.10078 5.00076 3.05987C2.78471 4.07283 1.25 6.42494 1.25 9.13701C1.25 11.8025 2.3605 13.836 3.81672 15.4757C4.98287 16.7888 6.41022 17.8879 7.67083 
                      18.8585C7.95659 19.0785 8.23378 19.292 8.49742 19.4998C9.00965 19.9036 9.55954 20.3342 10.1168 20.6598C10.6739 20.9853 11.3096 21.2499 12 21.2499C12.6904 21.2499 
                      13.3261 20.9853 13.8832 20.6598C14.4405 20.3342 14.9903 19.9036 15.5026 19.4998C15.7662 19.292 16.0434 19.0785 16.3292 18.8585C17.5898 17.8879 19.0171 16.7888 20.1833 
                      15.4757C21.6395 13.836 22.75 11.8025 22.75 9.13701C22.75 6.42494 21.2153 4.07283 18.9992 3.05987C16.901 2.10078 14.3121 2.39015 12 4.45873Z" fill="currentColor">
                    </path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div className="w-full col-span-6 mt-10">
            {reviewsData.reviews.length > 0 ? (
              <div className="mt-10">
                <h3 className="font-semibold text-lg mb-4">Customer Reviews</h3>
                <span className="text-lg text-gray-500">Total Reviews: {reviewsData.reviews.length}</span>
                <span className="block mb-4 text-lr text-yellow-500">Average Rating: {'★'.repeat(reviewsData.averageRating)}{'☆'.repeat(5 - reviewsData.averageRating)}</span>
                <ul className="space-y-4">
                  {reviewsData.reviews.map((review) => (
                    <li key={review.userId + 1} className="border-b pb-4">
                      <p className="font-medium text-lg">{review.firstName} - <span className="text-sm text-gray-500">{new Date(review.createdAt).toLocaleDateString()}</span></p>
                      <p className="mt-1">{review.review}</p>
                      <p className="mt-1 text-lg text-yellow-500">Rating: {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
                    </li>
                  ))}
                </ul>   
              </div>
            ) : (
              <p className="mt-10">No reviews available for this product.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

      // <div className="w-full px-4 mx-auto max-w-7xl sm:px-8 xl:px-0 mb-30">
      //   <div className="max-w-[570px] w-full mx-auto rounded-2xl bg-white shadow-1 p-4 sm:p-7.5 xl:p-11">
      //     <div className="text-center mb-11">
      //                 <h2 className="font-bold text-xl sm:text-2xl xl:text-heading-5 text-[var(--black)] mb-1.5">{productName}</h2>
      //                 <img alt={productName} loading="lazy" src={`../${imageURL}`} style={{color: "transparent"}} />
      //                 <div className="pt-10">
      //                   <p className="text-lg">{description}</p>
      //                   <p className="text-xl font-semibold">Price: ${price}</p>
      //                   <p className="text-md">SKU: {sku}</p>
      //                   <p className="text-md">{stock > 0 ? `Stock: ${stock}` : 'Out of stock'}</p>
      //                   <div className="text-md">
      //                     Categories: {categories && categories.length > 0 ? (
      //                       <ul className="list-disc list-inside">
      //                         {categories.map((category, i) => (
      //                           <li key={i + i}>{category}</li>
      //                         ))}
      //                       </ul>
      //                     ) : (
      //                       <span>No categories available</span>
      //                     )}
      //                   </div>
      //                 </div>
      //                 {/* Add more product details as needed */}
      //                 {/* For example, you could add an image, reviews, etc. */}
      //                 {/* <img src={productDetails.imageUrl} alt={productName} /> */}
      //                 {/* <Reviews reviews={productDetails.reviews} /> */}
      //                 {/* Add to cart button or other actions */}
      //                 {/* <button onClick={() => addToCart(productDetails.id)}>Add to Cart</button> */}
      //                 <div>
      //                   {reviewsData.reviews.length > 0 ? (
      //                     <div className="mt-10">
      //                       <h3 className="font-semibold text-lg mb-4">Customer Reviews</h3>
      //                       <span className="text-sm text-gray-500">Total Reviews: {reviewsData.reviews.length}</span>
      //                       <span className="block mb-4 text-sm text-yellow-500">Average Rating: {'★'.repeat(reviewsData.averageRating)}{'☆'.repeat(5 - reviewsData.averageRating)}</span>
      //                       <ul className="space-y-4">
      //                         {reviewsData.reviews.map((review) => (
      //                           <li key={review.userId + 1} className="border-b pb-4">
      //                             <p className="font-medium">{review.firstName} - <span className="text-sm text-gray-500">{new Date(review.createdAt).toLocaleDateString()}</span></p>
      //                             <p className="mt-1">{review.review}</p>
      //                             <p className="mt-1 text-sm text-yellow-500">Rating: {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
      //                           </li>
      //                         ))}
      //                       </ul>   
      //                     </div>
      //                   ) : (
      //                     <p className="mt-10">No reviews available for this product.</p>
      //                   )}
      //                 </div>
      //     </div>
      //   </div>
      // </div> 