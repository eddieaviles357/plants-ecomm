import React, { useEffect, useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage.js';
// import jwt from 'jsonwebtoken';
// import { useJwt } from 'react-jwt';
import { isExpired, decodeToken } from "react-jwt";
// import { useParams } from 'react-router-dom';
import ECommercePlantsAppAPI from './api/ECommercePlantsAppAPI.js';
import { TOKEN_STORAGE_ID, PATHS } from './constants/app.js';
import AppContext from './components/Context/AppContext.jsx';
import UserContext from './components/Context/UserContext.jsx';
import CategoriesContext from './components/Context/CategoriesContext.jsx';
import ProductsContext from './components/Context/ProductsContext.jsx';
import ProductCategoriesContext from './components/Context/ProductCategoriesContext.jsx';
import Navigation from './components/Header/Navigation.jsx';
import BackToTopButton from './components/BackToTopButton.jsx';
import Footer from './components/Footer/Footer.jsx';
import RoutesApp from './components/RoutesApp/RoutesApp.jsx';
import './App.css';

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [products, setProducts] = useState([]);
  const [productCategories, setProductCategories] = useState({});
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [errors, setErrors] = useState(null);
  // const { isExpired, decodeToken } = useJwt(token);
  const decodedToken = decodeToken(token);
  const isTokenExpired = isExpired(token);
  
  useEffect(() => {
    console.debug("App useEffect LOAD_USER_INFO\n", "token=", token);
    
    async function getCurrentUser() {
      if (token) {
        try {
          let userData = decodeToken(token);
          let {username} = userData
          console.debug("DECODED_TOKEN", decodedToken);
          console.debug("IS_TOKEN_EXPIRED", isTokenExpired);
          console.debug("userData=", userData);
          // add token to api class so we can interact with
          ECommercePlantsAppAPI.token = token;
          let currentUser = username || null;
          console.debug("App LOAD_USER_INFO: currentUser=", currentUser);
          setCurrentUser(currentUser);
        } catch (err) {
          console.error("App LOAD_USER_INFO: problem_loading", err);
          setErrors(Array.from(err || err.message));
          setCurrentUser(null);
        }
      };
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        let {categories} = await ECommercePlantsAppAPI.getCategories();
        setCategories(categories);
      } catch (err) {
        setErrors(Array.from(err || err.message));
      }
    }
    fetchCategories();
  }, [categories.length]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        let {products} = await ECommercePlantsAppAPI.getProducts();
        setProducts(products);
      } catch (err) {
        setErrors(Array.from(err || err.message));
      }
    }
    fetchProducts();
  }, [products.length]);
  
  // Handles site logout.
  const logout = async() => {
    console.log("__LOGGIING_OUT__", currentUser);
    setCurrentUser(null);
    setToken(null);
  }

  /** Handles site SIGNUP.
 *
 * Automatically logs them in (set token) upon SIGNUP.
 *
 */
  const signup = async(signupData) =>{
    try {
      let token = await ECommercePlantsAppAPI.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup_failed", errors);
      return { success: false, errors };
    }
  };
  
  // Handles site LOGIN.
  const login = async(loginData) =>{
    try {
      let token = await ECommercePlantsAppAPI.login(loginData);
      setToken(token);
      console.debug("login successful! token:", token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors: errors };
    }
  };

  // fetches product categories based on category selected
  const fetchProductCategories = async(category) =>{
    try {
      console.log("fetchProductCategories category", category);
      let { categoryProducts } = await ECommercePlantsAppAPI.getFilteredProductCategories(category);
      setProductCategories(categoryProducts);
    } catch (err) {
      setErrors(Array.from(err || err.message));
    }
  };

  if (!infoLoaded) return <div className="text-center">Loading...</div>;
  
  return (
    <AppContext.Provider value={{ errors,setErrors }}>
      <UserContext.Provider value={{ 
          currentUser, 
          setCurrentUser,
          signup,
          login,
          logout
          }}>
        <ProductsContext.Provider value={{products, setProducts}}>
          <CategoriesContext.Provider value={{ categories }}>
            <ProductCategoriesContext.Provider value={{ productCategories, setProductCategories, fetchProductCategories, isCategorySelected, setIsCategorySelected }}>
              <Navigation logout={logout}/>
              <main>
              <RoutesApp login={login} signup={signup}/>
                {/* <BackToTopButton /> */}
                <Footer />
              </main>
            </ProductCategoriesContext.Provider>
          </CategoriesContext.Provider>
        </ProductsContext.Provider>
      </UserContext.Provider>
    </AppContext.Provider>
  )
}

export default App;