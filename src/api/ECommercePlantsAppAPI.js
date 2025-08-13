import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";
const BASE_URL = "http://localhost:3001";

class ECommercePlantsAppAPI {
  // token to interact with the API
  static token = null;

  static async request(endpoint, data = {}, method = "get") {
    console.debug(
        "API CALL::", endpoint, 
        "DATA::", data, 
        "METHOD::", method
        ); 

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${ECommercePlantsAppAPI.token}` };
    const params = (method === "get") ? data : {};

    try {
      console.log("API::REQUEST::", url, method, data, params, headers);
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("APP::ERROR::", err.response);
      let message = err.response.data.error.message;
      // throw array of errors
      throw Array.isArray(message) ? message : [message];
    }
  };

  // API routes

  /****** Products specific API endpoints *******/
  static async getProducts() {
    let res = await this.request(`api/v1/products`);
    console.log('%cAPI::GET_PRODUCTS::', "color: yellow; font-size: 20px;", res);
    return res;
  };

  static async getProductById(id) {
    let res = await this.request(`api/v1/products/${id}`);
    console.log('%cAPI::GET_PRODUCTS::', "color: yellow; font-size: 20px;", res);
    return res;
  };

  /****** Reveiws specific API endpoint */
  static async getProductReviews(productId) {
    let res = await this.request(`api/v1/reviews/product/${productId}`);
    console.log('%cAPI::GET_PRODUCT_REVIEWS::', "color: orange; font-size: 20px;", res);
    return res;
  };

  /**** CART specific endpoints *******/
  static async getCart(username) {
    let res = await this.request(`api/v1/cart/${username}`);
    console.log('%cAPI::GET_CART::', "color: pink; font-size: 20px;", res);
    return res;
  };

  static async clearCart(username) {
    let res = await this.request(`api/v1/cart/${username}`, {}, "delete");
    console.log('%cAPI::DELETE_CART::', "color: pink; font-size: 20px;", res);
    return res;
  };

  static async addToCart(username, productId, qty=1) {
    let res = await this.request(`api/v1/cart/${username}/${productId}`, {quantity: qty}, "post");
    console.log('%cAPI::ADD_TO_CART::', "color: pink; font-size: 20px;", res);
    return res;
  }

  static async updateCartItemQty(username, productId, qty) {
    let res = await this.request(`api/v1/cart/${username}/${productId}`, {quantity: qty}, "put");
    console.log('%cAPI::UPDATE_CART_ITEM_QTY::', "color: pink; font-size: 20px;", res);
    return res;
  };

  static async removeCartItem(username, productId) {
    let res = await this.request(`api/v1/cart/${username}/${productId}`, {}, "delete");
    console.log('%cAPI::REMOVE_CART_ITEM::', "color: pink; font-size: 20px;", res);
    return res;
  }


  // Get token for login.
  /**** AUTH specific endpoints *******/
  static async login(data) {
    let {token} = await this.request(`/api/v1/auth/authenticate`, data, "post");
    return token;
  };

  // Signup for site.
  static async signup(data) {
    let {token} = await this.request(`/api/v1/auth/register`, data, "post");
    return token;
  };


};

export default ECommercePlantsAppAPI;