import React,{ createContext, useState,} from 'react';
export const StoreContext = createContext(null);


const StoreProvider = ({ children }) =>{

  const [navi,setNavi] = useState()
 


  return (
    <StoreContext.Provider value={{
       navi,
       setNavi
       }}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider ;