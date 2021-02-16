import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'
import style from './PageHeader.module.scss'

const PageHeader = ({title,isSubPage,client,isPageOnline,website}) => {
   
   return (
     
      <div >
         <header  className={style['page-header']}>
               <motion.h1 
                  initial={{y:20,opacity:0}} 
                  animate={{y:0,opacity:1}} 
                  tranisition={{duration:1,delay:3}} 
                  exit={{opacity:0}} 
                  className={style['page-header__title']}>
                  {title}
               </motion.h1>
               {isSubPage &&
                  <div className={style['sub-page']}>
                        <motion.p 
                           initial={{y:20,opacity:0}} 
                           animate={{y:0,opacity:1}} 
                           tranisition={{duration:1,delay:3}} 
                           exit={{opacity:0}} 
                           className={style['sub-page__text']}>
                              <span className={style['sub-page__title']+' --green'}>client</span>: {client}
                           </motion.p>
                        {isPageOnline && 
                           <motion.p 
                              initial={{y:20,opacity:0}} 
                              animate={{y:0,opacity:1}} 
                              tranisition={{duration:1,delay:3}} 
                              exit={{opacity:0}}
                              className={style['sub-page__text']}>
                                 <span className={style['sub-page__title']+' --green'}>Website</span>: <Link href={"https://"+website} passHref={true}><button>{website}</button></Link>
                            </motion.p>
                        }
                  </div>
               }
         </header>
        
      </div>
   
   )
}

export default PageHeader
