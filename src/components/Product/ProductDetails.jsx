import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ECommercePlantsAppAPI from '../../api/ECommercePlantsAppAPI';

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const { success, product } = await ECommercePlantsAppAPI.getProductById(id);
        console.log('%cAPI::GET_PRODUCT_BY_ID::', "color: yellow; font-size: 20px;", product);
        if (!success) {
          throw new Error('Network response was not ok');
        }
        setProductDetails(product);
      } catch (error) {
        console.error('Error fetching product details:', error);
        // Handle error appropriately, e.g., set an error state
      }
    };
    fetchProductDetails();
  }, [id, setProductDetails]); // Add id to the dependency array to refetch
  if (!productDetails) {
    return <div>Loading...</div>; // Show loading state while fetching
  }
  const { id: ID, categories, description, image_url, name, price, sku, stock } = productDetails;
  // Render product details
  return (
    <section className="pb-20 mt-35 overflow-hidden bg-gray-2">
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-8 xl:px-0 mb-30">
        <div className="max-w-[570px] w-full mx-auto rounded-2xl bg-white shadow-1 p-4 sm:p-7.5 xl:p-11">
          <div className="text-center mb-11">
            <h2 className="font-bold text-xl sm:text-2xl xl:text-heading-5 text-dark mb-1.5">{name}</h2>
                      <p className="text-lg">{description}</p>
                      <p className="text-xl font-semibold">Price: ${price}</p>
                      {/* Add more product details as needed */}
                      {/* For example, you could add an image, reviews, etc. */}
                      {/* <img src={productDetails.imageUrl} alt={productName} /> */}
                      {/* <Reviews reviews={productDetails.reviews} /> */}
                      {/* Add to cart button or other actions */}
                      {/* <button onClick={() => addToCart(productDetails.id)}>Add to Cart</button> */}
          </div>
          <div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default ProductDetails;