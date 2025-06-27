// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const AuthContext = createContext();
const BASE_URL = 'http://localhost:8000'; // Update to match backend

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() => {
    const access = localStorage.getItem('access_token');
    const refresh = localStorage.getItem('refresh_token');
    return access && refresh ? { access, refresh } : null;
  });

  const [user, setUser] = useState(() => {
    try {
      const access = localStorage.getItem('access_token');
      return access ? jwtDecode(access) : null;
    } catch (error) {
      console.error('Invalid token in initial decode:', error);
      return null;
    }
  });

  const loginUser = async (username, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/token/`, {
        username,
        password,
      });

      const data = response.data;
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      return true;
    } catch (err) {
      console.error('Login failed:', err.response?.data || err.message);
      return false;
    }
  };

  const logoutUser = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setAuthTokens(null);
    setUser(null);
  };

  useEffect(() => {
    if (authTokens?.access) {
      try {
        const decoded = jwtDecode(authTokens.access);
        setUser(decoded);
      } catch (error) {
        console.error('Token decode error in useEffect:', error);
        logoutUser();
      }
    }
  }, [authTokens]);

  return (
    <AuthContext.Provider value={{ user, authTokens, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
