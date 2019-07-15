import React from 'react'
import { Link } from 'gatsby'
import headerStyles from '../styles/header.module.scss'

const Header = () => {
  return (
    <div>
      <header>
        <h1 className={headerStyles.logo}><Link className={headerStyles.logoLink}to="/">M</Link></h1>
        <nav>
          <ul className={headerStyles.navigationBar}>
            <li className={headerStyles.navigationBarLinks}><Link className={headerStyles.link} to="/projects">PROJECTS</Link></li>
            <li className={headerStyles.navigationBarLinks}><Link className={headerStyles.link} to="/about">ABOUT</Link></li>
            <li className={headerStyles.navigationBarLinks}><Link className={headerStyles.link} to="/">HOME</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
