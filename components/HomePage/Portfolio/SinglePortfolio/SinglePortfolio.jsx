import Link from 'next/link'
import React from 'react'
import style from './SinglePortfolio.module.scss'



const SinglePortfolio = ({company,pageImage,imagePlaceholder,website,isPageOnline}) => {
   return (
         <div className={style['single-portfolio']}>
             <div className={style["single-portfolio-image-wrapper"]}>
                  <img src={imagePlaceholder.url} alt={website}/>
             </div>
             <div className={style['single-portfolio-content']}>
                  <h3 className={style['single-portfolio-content__title']}>
                     {website}
                  </h3>
                  <div className={style['single-portfolio-content-links']}>
                     {isPageOnline?<a href={website}>icona</a>:null}
                     <Link href="/">
                        <a>icona</a>
                     </Link>
                  </div>
                  <span className={style['single-portfolio-content__category']}>motoryzacja</span>

             </div>
         </div>
   )
}

export default SinglePortfolio
