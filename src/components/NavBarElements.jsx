import React from "react";
import {Link} from "react-router-dom";

class NavBarElements extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light col-lg-12 bg-transparent ">
                <a class="navbar-brand col-lg-2 col-sm-2"><Link className="nav-link active" to="/">MP</Link></a>
                <button class="navbar-toggler  col-sm-1 " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav col-lg-10">
                        <li class="nav-item navbar-brand col-lg-3 text-center btn btn-link letter border border-dark">
                            <a class="nav-link"><Link className="nav-link active" to="/about">About</Link></a>
                        </li>
                        <li class="nav-item navbar-brand col-lg-3 text-center btn btn-link letter border border-dark">
                            <a class="nav-link"><Link className="nav-link active" to="/projects">Projects</Link></a>
                        </li>
                        <li class="nav-item navbar-brand col-lg-3 text-center btn btn-link letter border border-dark">
                            <a class="nav-link " ><Link className="nav-link active" to="/skills">Skills</Link></a>
                        </li>
                        <li class="nav-item navbar-brand col-lg-3 text-center btn btn-link letter border border-dark">
                            <a class="nav-link "><Link className="nav-link active" to="/contact" >Contact</Link></a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBarElements