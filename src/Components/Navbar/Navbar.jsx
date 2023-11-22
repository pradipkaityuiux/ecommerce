import React from 'react'
import styles from './Navbar.module.css'
import logo from "../Assets/logo.png"
import cartIcon from "../Assets/cart_icon.png"
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.navLogo}>
            <img src={logo} alt="" />
            <h1>Shopper</h1>
        </div>
        <ul className={styles.navMenu}>
            <li><NavLink to="/" >Shop</NavLink></li>
            <li><NavLink to="/men" >Men</NavLink></li>
            <li><NavLink to="/women" >Women</NavLink></li>
            <li><NavLink to="/kids" >Kids</NavLink></li>
        </ul>
        <div className={styles.navlogincart}>
            <Link to="/signup"><button>Login</button></Link>
            <Link to="/cart" className={styles.cart}>
                <span>
                    <img src={cartIcon} alt="" />
                    <span className={styles.counter}>0</span>
                </span>
            </Link>
        </div>
    </div>
  )
}
