import React from 'react'
import { useContext } from 'react'
import { StoreContext } from 'store/StoreProvider'
import SinglePortfolio from 'components/SinglePortfolio/SinglePortfolio';
import style from './PortfolioPage.module.scss'



const PortfolioPage = () => {
   const{portfolio} = useContext(StoreContext)
  
   return (
      <>
      <div className={style.PortfolioPage}>
          {portfolio?portfolio.map((values,key)=>{
                     return <SinglePortfolio key={key} {...values}/>
               }):null}
      </div>
      
      </>
   )
}

export default PortfolioPage
