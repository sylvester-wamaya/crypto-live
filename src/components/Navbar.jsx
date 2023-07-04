/* eslint-disable */
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../public/logo.jpg'
import styles from '../styles/navbar.module.css'


const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to='/'><img className={styles.logo} src={logo}/></NavLink>
      <h2>Cryptocurrency Live</h2>
    
    </nav>
  )
}

export default Navbar
