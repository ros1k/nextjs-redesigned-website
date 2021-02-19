import Link from 'next/link'
import React from 'react'
import { useContext } from 'react'
import { StoreContext } from 'store/StoreProvider'
import {motion} from 'framer-motion'
import style from './Footer.module.scss'

const Footer = () => {
   const {socialMedia} = useContext(StoreContext)

   return (
      <footer>
         <ul className={style['footer-list']}>
         {socialMedia && socialMedia.map((el,i)=>{
            return <li className={style['footer-list__item']} key={el.id}>
                     <a href={el.socialMediaLink}>
                           <motion.img 
                              
                              whileHover={{
                                 backgroundColor:'#00C896',
                                 borderColor:'#00C896'
                              }}
                              src={el.socialMediaIcon.url} alt={el.socialMediaLink}/>
                     </a>
                  </li>
         })}
         </ul>
        
      </footer>
   )
}

export default Footer
