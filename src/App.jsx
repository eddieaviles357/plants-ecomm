import React, { useEffect, useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage.js';
// import jwt from 'jsonwebtoken';
// import { useJwt } from 'react-jwt';
import { isExpired, decodeToken } from "react-jwt";
// import { useParams } from 'react-router-dom';
import ECommercePlantsAppAPI from './api/ECommercePlantsAppAPI.js';
import { TOKEN_STORAGE_ID, PATHS } from './constants/app.js';
import UserContext from './components/Context/UserContext.jsx';
import CategoriesContext from './components/Context/CategoriesContext.jsx';
import Navigation from './components/Header/Navigation.jsx';
import BackToTopButton from './components/BackToTopButton.jsx';
import Footer from './components/Footer/Footer.jsx';
import RoutesApp from './components/RoutesApp/RoutesApp.jsx';
import './App.css'


function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [categories, setCategories] = useState([]);
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

  // Handles site logout.
  async function logout() {
    console.log("__LOGGIING_OUT__", currentUser);
    setCurrentUser(null);
    setToken(null);
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
      console.debug("login successful! token:", token);
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
        signup,
        login,
        logout
        }}>
      <CategoriesContext.Provider value={{categories}}>
        <Navigation logout={logout}/>
        <RoutesApp login={login} signup={signup}/>
        <main>
          {/* <BackToTopButton /> */}
          <Footer />
        </main>
      </CategoriesContext.Provider>
    </UserContext.Provider>
  )
}

export default App
