import React,{useEffect} from 'react'
import style from './Navigation.module.scss'
import NavItem from './NavItem/NavItem'

const Navigation = ({navigationItems}) => {

   return (
      <nav className={style.navigation}>
         <img src="/Damian.svg" alt=""/>
         <div className={style['main-navigation']}>
            <ul className={style['main-navigation-list']}>
               {navigationItems.navigations.map((elem,key) => {
                  return (<NavItem key={elem.id} {...elem}/>)
               })}
            </ul>
         </div>
      </nav>
   )
}





export default Navigation