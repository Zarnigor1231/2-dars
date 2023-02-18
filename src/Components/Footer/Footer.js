import React from "react";
import { Link } from "react-router-dom";

// img
import Logo from '../Header/Group.svg'

function Footer(){
    return(
        <>
            <div>
                <Link to = '/'>
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                    © 2018 Noiceland™, all rights reserved
                </p>

                <hr />
            </div>
            <div>
                <div>
                    <h3>Categories</h3>
                    <ul>
                        <li>
                            <div>
                                <p>
                                Animation
                                </p>
                                <p>
                                Interactive Design
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>
                                    Architecture
                                </p>
                                <p>
                                    Miscellaneous
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>
                                    Graphic Design
                                </p>
                                <p>
                                    Photography
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>
                                Illustration
                                </p>
                                <p>
                                    Product Design
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <form>
                        <h3>Subscribe to newsletter</h3>
                        <input type="email" placeholder="Email address" />
                        <button>Send</button>
                    </form>
                </div>
            </div>

            <div>
                <ul>
                    <li>Information</li>
                    <li>about</li>
                    <li>contact</li>
                    <li>terms</li>
                </ul>
                <ul>
                    <li>follow us</li>
                    <li>instagram</li>
                    <li>contact</li>
                    <li>terms</li>
                </ul>
                <ul>
                    <li>Information</li>
                    <li>about</li>
                    <li>contact</li>
                    <li>terms</li>
                </ul>
            </div>
        </>
    );
};
export default Footer;