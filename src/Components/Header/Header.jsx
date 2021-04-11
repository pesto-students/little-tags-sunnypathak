import React from 'react'
import "./Header.scss"
import Logo from "../../assets/logo.png"
import {AiOutlineShoppingCart,AiOutlineUser,AiOutlineGlobal,AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'


function Header(props) {
    return (
            <header className="header">
                <div className="wrap">
                    <div className="logo">
                    <Link to="/" className="logo-link">
                        <div>
                            <img src={Logo} alt="apparel city" />
                        </div>
                    </Link>
                    </div>
                    <div className="search-input">
                    <span><AiOutlineSearch/></span>
                    <input type="text"></input>
                    </div>
                    
                    <div className="user-logo"><AiOutlineUser/></div>
                    <div className="user-signin"><Link to="/registration"><span>LogIn/SignUp</span></Link></div>
                    <div className="cart-logo"><AiOutlineShoppingCart/></div>
                    <div className="glob-logo"><AiOutlineGlobal/></div>
                    

                </div>

            </header>
    )
}

export default Header
