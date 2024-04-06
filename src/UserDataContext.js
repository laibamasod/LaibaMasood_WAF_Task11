// UserDataContext.js
import React, { createContext, useState } from 'react';

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [userName, setUserName] = useState('');

  return (
    <UserDataContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserDataContext.Provider>
  );
};
