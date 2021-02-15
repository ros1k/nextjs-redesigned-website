import React from 'react'

import style from './PageHeader.module.scss'

const PageHeader = ({title,isSubPage,client,isPageOnline,website}) => {
   
   return (
     
      <div>
         <header className={style['page-header']}>
               <h1 className={style['page-header__title']}>
                  {title}
               </h1>
               {isSubPage &&
                  <div className={style['sub-page']}>
                        <p className={style['sub-page__text']}><span className={style['sub-page__title']+' --green'}>client</span>: {client}</p>
                        {isPageOnline && 
                           <p className={style['sub-page__text']}><span className={style['sub-page__title']+' --green'}>Website</span>: <a href={website}>{website}</a></p>
                        }
                  </div>
               }
         </header>
        
      </div>
   
   )
}

export default PageHeader
