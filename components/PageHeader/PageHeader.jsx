import React from 'react'

import style from './PageHeader.module.scss'

const PageHeader = ({title}) => {
   return (
      <header className={style['page-header']}>
         <h1 className={style['page-header__title']}>
            {title}
         </h1>
         
      </header>
   )
}

export default PageHeader
