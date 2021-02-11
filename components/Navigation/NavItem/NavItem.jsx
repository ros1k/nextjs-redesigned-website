import React from 'react'
import Link from 'next/link'
import style from './NavItem.module.scss'


const NavItem = ({name,urlSlug}) => {
 
   return (
      <li className={style['nav-item']}>
         <Link className={style['nav-item','link']} href={urlSlug?`${urlSlug}`:`/`}>{name}</Link>
      </li>
   )
}

export default NavItem