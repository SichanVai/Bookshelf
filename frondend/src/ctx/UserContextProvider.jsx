import React, { createContext, useState, useEffect } from 'react';

// Create a context
export const UserContext = createContext({});

// Create a provider
export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Load the user from localStorage
    const user = JSON.parse(localStorage.getItem('bookself-user'));
    // Load the token from localStorage
    const token = localStorage.getItem('bookself-token');
    if (user) {
      setUser(user);
      setIsAuthenticated(true);
      setToken(token);
    }
  }, []);

  function login(user, token) {
    // Save the user to localStorage
    localStorage.setItem('bookself-user', JSON.stringify(user));
    // Save the token to localStorage
    localStorage.setItem('bookself-token', token);
    // Set the user and token in state
    setUser(user);
    setIsAuthenticated(true);
    setToken(token);
  }

  function updateUser(user) {
    // Save the user to localStorage
    localStorage.setItem('bookself-user', JSON.stringify(user));
    // Set the user and token in state
    setUser(user);
  }

  function logout() {
    // Remove the user and token from localStorage
    localStorage.removeItem('bookself-user');
    localStorage.removeItem('bookself-token');
    // Remove the user and token from state
    setUser(null);
    setIsAuthenticated(false);
    setToken(null);
  }
  return <UserContext.Provider value={{ user, login, isAuthenticated, token, updateUser, logout }}>{children}</UserContext.Provider>;
}
