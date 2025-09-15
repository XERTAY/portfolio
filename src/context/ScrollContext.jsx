import React, { createContext, useContext, useRef, useState, useCallback } from "react";

const ScrollContext = createContext(null);

export const useScrollContainer = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);
  const [activeSection, setActiveSection] = useState("intro");
  
  const updateActiveSection = useCallback((sectionId) => {
    setActiveSection(sectionId);
  }, []);

  const contextValue = {
    scrollRef,
    activeSection,
    updateActiveSection
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      {children(scrollRef)}
    </ScrollContext.Provider>
  );
};
