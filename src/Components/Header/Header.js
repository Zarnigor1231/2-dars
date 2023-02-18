import React from 'react';
import { Link } from "react-router-dom";

// img
import Logo from './Group.svg'

// css
import './Header.css'


function Header(){
    return(
        <header>
            <div className="container">
                <div className='header-display'>
                    <Link className='header-link' to = '/'>
                        <img src={Logo} alt="Logo" />
                    </Link>

                    <nav className='header-nav'>
                        <ul className='nav-box'>
                            <li className='nav-item'>
                                <a className='nav-link' href="#">
                                    Home
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href="#">
                                    Latest
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href="#">
                                    About
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <hr className='header-line' />
        </header>
    );
};

export default Header;