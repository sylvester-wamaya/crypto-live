/* eslint-disable */
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../public/logo.jpg'
import styles from '../styles/navbar.module.css'


const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink><img className={styles.logo} src={logo}/></NavLink>
    
    </nav>
  )
}

export default Navbar
