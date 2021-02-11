import React,{useEffect} from 'react'
import style from './Navigation.module.scss'
import NavItem from './NavItem/NavItem'
import Link from 'next/link'
import Image from 'next/image'


const Navigation = ({navigationItems}) => {

   return (
      <nav className={style.navigation}>
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className={style['main-navigation']}>
                     <Link href="/" scroll={true}>
                        <a href="/"><Image src="/Damian.svg" alt="logo" width="113" height="53"/></a>
                     </Link>
                  
                     <ul className={style['main-navigation-list']}>
                        {navigationItems.navigations.map((elem,key) => {
                           return (<NavItem key={elem.id} {...elem}/>)
                        })}
                     </ul>
                  </div>
               
               </div>
            </div>
         </div>
      </nav>
      
   )
}





export default Navigation