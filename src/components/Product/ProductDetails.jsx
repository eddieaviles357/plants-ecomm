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

  if (!productDetails) {
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
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-8 xl:px-0 mb-30">
        <div className="max-w-[570px] w-full mx-auto rounded-2xl bg-white shadow-1 p-4 sm:p-7.5 xl:p-11">
          <div className="text-center mb-11">
                      <h2 className="font-bold text-xl sm:text-2xl xl:text-heading-5 text-dark mb-1.5">{productName}</h2>
                      <img alt={productName} loading="lazy" src={`../${imageURL}`} style={{color: "transparent"}} />
                      <div className="pt-10">
                        <p className="text-lg">{description}</p>
                        <p className="text-xl font-semibold">Price: ${price}</p>
                        <p className="text-md">SKU: {sku}</p>
                        <p className="text-md">{stock > 0 ? `Stock: ${stock}` : 'Out of stock'}</p>
                        <div className="text-md">
                          Categories: {categories && categories.length > 0 ? (
                            <ul className="list-disc list-inside">
                              {categories.map((category, i) => (
                                <li key={i + i}>{category}</li>
                              ))}
                            </ul>
                          ) : (
                            <span>No categories available</span>
                          )}
                        </div>
                      </div>
                      {/* Add more product details as needed */}
                      {/* For example, you could add an image, reviews, etc. */}
                      {/* <img src={productDetails.imageUrl} alt={productName} /> */}
                      {/* <Reviews reviews={productDetails.reviews} /> */}
                      {/* Add to cart button or other actions */}
                      {/* <button onClick={() => addToCart(productDetails.id)}>Add to Cart</button> */}
                      <div>
                        {reviewsData.reviews.length > 0 ? (
                          <div className="mt-10">
                            <h3 className="font-semibold text-lg mb-4">Customer Reviews</h3>
                            <span className="text-sm text-gray-500">Total Reviews: {reviewsData.reviews.length}</span>
                            <span className="block mb-4 text-sm text-yellow-500">Average Rating: {'★'.repeat(reviewsData.averageRating)}{'☆'.repeat(5 - reviewsData.averageRating)}</span>
                            <ul className="space-y-4">
                              {reviewsData.reviews.map((review) => (
                                <li key={review.userId + 1} className="border-b pb-4">
                                  <p className="font-medium">{review.firstName} - <span className="text-sm text-gray-500">{new Date(review.createdAt).toLocaleDateString()}</span></p>
                                  <p className="mt-1">{review.review}</p>
                                  <p className="mt-1 text-sm text-yellow-500">Rating: {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
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
      </div> 
    </section>
  );
};

export default ProductDetails;