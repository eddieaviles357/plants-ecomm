import React, { useEffect, useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage.js';
// import jwt from 'jsonwebtoken';
import { useJwt } from 'react-jwt';
// import { useParams } from 'react-router-dom';
import ECommercePlantsAppAPI from './api/ECommercePlantsAppAPI.js';
import { Routes, Route } from 'react-router-dom';
import { TOKEN_STORAGE_ID, PATHS } from './constants/app.js';
import UserContext from './components/Auth/UserContext.jsx';
import Navigation from './components/Header/Navigation.jsx';
import Home from './components/Pages/Home.jsx';
import Products from './components/Pages/Products.jsx';
import BackToTopButton from './components/BackToTopButton.jsx';
import Footer from './components/Footer/Footer.jsx';
import Login from './components/Pages/Login.jsx';
import Signup from './components/Pages/Signup.jsx';
import About from './components/Pages/About.jsx';
import ProductDetails from './components/Product/ProductDetails.jsx';
import './App.css'


function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [errors, setErrors] = useState(null);
  const { decodeToken, isExpired } = useJwt(token);
  
  useEffect(() => {
    console.debug("App useEffect LOAD_USER_INFO\n", "token=", token);

    async function getCurrentUser() {
      if (token) {
        try {
          // let { username } = jwt.decode(token);
          let { username } = decodeToken(token);
          // add token to api class so we can interact with
          ECommercePlantsAppAPI.token = token;
          let currentUser = await ECommercePlantsAppAPI.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (err) {
          console.error("App LOAD_USER_INFO: problem_loading", err);
          setCurrentUser(null);
        }
      };
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  useEffect(() => {
    async function fetchRecents() {
      if(token && currentUser) {
        try {
          const {username} = currentUser;
          const {recents} = await ECommercePlantsAppAPI.getRecents( username ) || [];
          setVisitedNews( JSON.stringify(recents) );
        } catch (err) {
          setErrors(Array.from(err || err.message));
          console.log(err);
        };
      }
    };
    fetchRecents();
  }, [currentUser]);

  // Handles site logout.
  async function logout() {
    const { username } = currentUser;
    console.log("__LOGGIING_OUT__", username);
    setCurrentUser(null);
    setToken(null);
    setVisitedNews(null);
  }

  /** Handles site SIGNUP.
 *
 * Automatically logs them in (set token) upon SIGNUP.
 *
 */
  async function signup(signupData) {
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

  async function login(loginData) {
    try {
      let token = await ECommercePlantsAppAPI.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors: errors };
    }
  };

  if (!infoLoaded) return <div className="text-center">Loading...</div>;
  
  return (
    <UserContext.Provider value={{ 
        currentUser, 
        setCurrentUser,
        errors,
        setErrors,
        }}>
      <Navigation />
      <Routes>
        <Route path={PATHS.HOME} element={<Home />} />
        <Route path={PATHS.PRODUCTS} element={<Products />} />
        <Route path={PATHS.LOGIN} element={<Login />} />
        <Route path={PATHS.SIGNUP} element={<Signup />} />
        <Route path={PATHS.ABOUT}element={<About />} />
        <Route path={PATHS.PRODUCT_DETAILS} element={<ProductDetails />} />
        <Route path={PATHS.NOT_FOUND} element={<h1>404 Not Found</h1>} />
      </Routes>
      <main>
        {/* <BackToTopButton /> */}
        <Footer />
      </main>
    </UserContext.Provider>
  )
}

export default App
