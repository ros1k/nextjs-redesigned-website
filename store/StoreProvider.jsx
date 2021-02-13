import React,{ createContext, useState,} from 'react';
export const StoreContext = createContext(null);


const StoreProvider = ({ children }) =>{

  const [navItems,setNavItems] = useState()
  const [images,setImages] = useState()
  const [portfolio,setPortfolio] = useState()
  const [skills,setSkills] = useState()

  return (
    <StoreContext.Provider value={{
        navItems,
        setNavItems,
        images,
        setImages,
        portfolio,
        setPortfolio,
        skills,
        setSkills
      }}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider ;