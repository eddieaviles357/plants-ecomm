import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

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
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("APP::ERROR::", err.response);
      let message = err.response.data.error.message;
      // throw array of errors
      throw Array.isArray(message) ? message : [message];
    }
  };

  // API routes

  /****** News specific API endpoints *******/
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

  // Get token for login.
  /**** AUTH specific endpoints *******/
  static async login(data) {
    let res = await this.request(`/api/v1/auth/authenticate`, data, "post");
    return res.token;
  };

  // Signup for site.
  static async signup(data) {
    let res = await this.request(`/api/v1/auth/register`, data, "post");
    return res.token;
  };


};

export default ECommercePlantsAppAPI;