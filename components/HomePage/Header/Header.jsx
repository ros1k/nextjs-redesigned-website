import React from 'react'
import Link from 'next/link'
import style from './Header.module.scss'

const Header = () => {
   return (
      <div className={style['header-wrapper']}>
         <header className={style.header}>
            <h1>Hi<span className="--green">!</span> My name is Damian Rosa</h1>
            <h2>and i am a frontend developer<span className="--green">.</span></h2>
            <Link href="/">Check more</Link>
         </header>
      </div>
   )
}

export default Header
