import React from "react";
import NavbarElements from "../NavBarElements";
import "../styles/Proyects.css";

class Proyects extends React.Component{
    render(){
        return(
            <div class="bd-example">
                <NavbarElements/>
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active col-lg-12 ">
                            <img src="https://fotos.subefotos.com/e99ef11b5288d8fb6226514902509bc7o.png" class="d-block w-100 img col-lg-8" alt="..."/>
                            <div class="carousel-caption d-none d-md-block ">
                                <h5>Organa</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </div>
                        <div class="carousel-item col-lg-12">
                            <img src="https://fotos.subefotos.com/e7f8f804c5b74913372ac88bce4e38ffo.jpg" class="d-block col-lg-8 img w-100 " alt="..."/>
                            <div class="carousel-caption d-none d-md-block btn">
                                <h5 className="">Burger Queen</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div class="carousel-item col-lg-12">
                            <img src="https://fotos.subefotos.com/c7a3870b38c50a2857685f60f16b7326o.png" class="d-block col-lg-8 img w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Cipher</h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Proyects;