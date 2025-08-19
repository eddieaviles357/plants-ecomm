import React, { useEffect, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { TOKEN_STORAGE_ID } from '../../constants/app';
import ECommercePlantsAppAPI from '../../api/ECommercePlantsAppAPI';
import jwt from 'jsonwebtoken';


export const UserContext = React.createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = React.useState(useLocalStorage(TOKEN_STORAGE_ID));

  useEffect(() => {
    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          // add token to api class so we can interact with
          ECommercePlantsAppAPI.token = token;
          let currentUser = await ECommercePlantsAppAPI.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      };
    }
    getCurrentUser();
  }, [token]);
    
  async function logout() {
    setCurrentUser(null);
    setToken(null);
  }

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

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}