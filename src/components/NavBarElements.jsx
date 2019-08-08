import React from "react";
import {Link} from "react-router-dom";
import "./styles/Nav.css"

class NavBarElements extends React.Component{
    render(){
        return(
            <nav className="navbar navBar navbar-expand-lg navbar-light  col-lg-12  sticky-top">
                <a className="navbar-brand col-lg-2 col-sm-2 col-2" href="#"><img className="mp" src="https://fotos.subefotos.com/a3728a632e8e2c8eefc7431043cb165co.png" alt=""/></a>
                <button className="navbar-toggler  col-sm-3 col-md-3 col-3 colorPink " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav col-lg-10 nav-pills">
                        <li className="nav-item navbar-brand col-lg-3 text-center btn letter colorPink border border-dark">
                            <a className="nav-link navLetter" href="#aboutMe">Acerca de mí</a>
                        </li>
                        <li className="nav-item navbar-brand col-lg-3 text-center btn colorGold letter border border-dark">
                            <a className="nav-link navLetter" href="#skills">Habilidades</a>
                        </li>
                        <li className="nav-item navbar-brand col-lg-3 text-center btn colorPink letter border border-dark">
                            <a className="nav-link navLetter" href="#projects">Proyectos</a>
                        </li>
                        
                        <li className="nav-item navbar-brand col-lg-3 text-center btn colorGold letter border border-dark">
                            <a className="nav-link navLetter" href="#contact">Contacto</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBarElements