import React, { createContext, useContext, useRef } from "react";

const ScrollContext = createContext(null);

export const useScrollContainer = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);
  return (
    <ScrollContext.Provider value={scrollRef}>
      {children(scrollRef)}
    </ScrollContext.Provider>
  );
};
