import React from 'react'
import logo from '../../assets/imgs/logo.svg'
import cartIcon from '../../assets/imgs/cartBag.svg'
import accountIcon from '../../assets/imgs/account.svg'
import {Link} from 'react-router-dom'
import './header.scss'

const Header = () => {
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="mega-menu">
                        <ul>
                            <li><Link className="menu-text" to =""> NEW RELEASES</Link></li>
                            <li><Link className="menu-text" to=""> MEN </Link></li>
                            <li><Link className="menu-text" to=""> WOMEN </Link></li>
                            <li><Link className="menu-text" to=""> KIDS </Link></li>
                            <li><Link className="menu-text" to=""> CUSTOMIZE </Link></li> 
                        </ul>
                    </div>
                    <div className="right-menu">
                        <img src={accountIcon} alt="user-account" />
                        <img src={cartIcon} alt="user-cart" />
                    </div>
                </div>
                </nav>
        </>
    )
}

export default Header
