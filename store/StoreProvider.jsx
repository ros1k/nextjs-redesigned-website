import React,{ createContext, useState,} from 'react';
export const StoreContext = createContext(null);


const StoreProvider = ({ children }) =>{

  const [navItems,setNavItems] = useState()
  const [images,setImages] = useState()
  const [portfolio,setPortfolio] = useState()
  const [skills,setSkills] = useState()
  //const [transition,setTransition] = useState({duration:0.6,ease:[0.43, 0.13, 0.23, 0.96]})
  const [transition,setTransition] = useState({ duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]})
  const [positionY,setPositionY] = useState(0)
  const [positionX,setPositionX] = useState(0)
  const [animationElement,setAnimationElement] = useState({})
  return (
    <StoreContext.Provider value={{
        navItems,
        setNavItems,
        images,
        setImages,
        portfolio,
        setPortfolio,
        skills,
        setSkills,
        transition,
        positionY,
        setPositionY,
        positionX,
        setPositionX,
        animationElement,
        setAnimationElement
      }}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider ;