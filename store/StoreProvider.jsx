import React,{ createContext, useState,useEffect} from 'react';
export const StoreContext = createContext(null);


const StoreProvider = ({ children }) =>{

  const [navItems,setNavItems] = useState()
  const [images,setImages] = useState()
  const [info,setInfo] = useState()
  const [portfolio,setPortfolio] = useState()
  const [skills,setSkills] = useState()
  //const [transition,setTransition] = useState({duration:0.6,ease:[0.43, 0.13, 0.23, 0.96]})
  const [transition,setTransition] = useState({ duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]})
  const [positionY,setPositionY] = useState(0)
  const [positionX,setPositionX] = useState(0)
  const [animationElement,setAnimationElement] = useState({})
  const [isMobile,setIsMobile] = useState(false)
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  useEffect(() => {
   
    if(getWindowDimensions().width > 600){
      setIsMobile(true)
    }else{
      setIsMobile(false)
    }
    window.addEventListener('resize', (e) => {
      if(getWindowDimensions().width > 600){
        setIsMobile(true)
      }else{
        setIsMobile(false)
      }
    })

    return () =>{
      window.removeEventListener('resize', (e) => {
      
      })
    }
  }, [getWindowDimensions])

  
  return (
    <StoreContext.Provider value={{
        navItems, setNavItems,
        images, setImages,
        info, setInfo,
        portfolio, setPortfolio,
        skills, setSkills,
        transition,
        positionY, setPositionY,
        positionX, setPositionX,
        animationElement, setAnimationElement
      }}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider ;