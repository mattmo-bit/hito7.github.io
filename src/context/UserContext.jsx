import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true); // Por defecto en true según requerimiento

  const logout = () => {
    setToken(false);
  };

  const login = () => {
    setToken(true);
  };

  return (
    <UserContext.Provider value={{ token, logout, login }}>
      {children}
    </UserContext.Provider>
  );
};