"use client";

import React, { createContext, useState, useContext } from 'react';

interface SnowContextType {
  isSnowing: boolean;
  toggleSnow: () => void;
}

export const SnowContext = createContext<SnowContextType>({
  isSnowing: true,
  toggleSnow: () => {},
});

export const useSnow = () => useContext(SnowContext);

const SnowProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSnowing, setIsSnowing] = useState(false);

  const toggleSnow = () => setIsSnowing(prev => !prev);

  return (
    <SnowContext.Provider value={{ isSnowing, toggleSnow }}>
      {children}
    </SnowContext.Provider>
  );
};

export default SnowProvider;