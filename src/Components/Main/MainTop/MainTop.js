import React from "react";

// img
import mainTop from './img/mainTop.png'

// css
import './MainTop.modul.css'
import MainTopArr from "./MainTopArr";

function MainTop(){
    return(
        <section className="main-top">
            <div className="container">
                <div className="main-top">
                    <img className="top-img" src={mainTop} width='721' height='474' alt="The Japanese house is a mountain road opened for the development of creativity" />
                    <div className="top-box">
                        <p className="top-illustration">Illustration</p>
                        <h2 className="top-title">
                           Japan House opens in mountainside to foster peak creativity.
                        </h2>
                        <p className="top-text">
                            Enim omittam qui id, ex quo atqui dictas complectitur.
                            Nec ad timeam accusata, hinc justo falli id eum, ferri novum molestie eos cu.
                        </p>

                        <strong className="top-author">
                        <a className="author-link" href="/"> By Reta Torphy</a>
                        </strong>
                    </div>
                </div>

                <div>

                    <MainTopArr  />
                    
                </div>
            </div>
        </section>
    );
};

export default MainTop;