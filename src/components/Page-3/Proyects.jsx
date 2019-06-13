import React from "react";
import NavbarElements from "../NavBarElements";
import "../styles/Proyects.css";

class Proyects extends React.Component{
    render(){
        return(
            <div class="bd-example">
                <NavbarElements/>
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ul class="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ul>
                    <div class="carousel-inner">
                        <div class="carousel-item active col-lg-12" >
                            <img src="https://fotos.subefotos.com/e99ef11b5288d8fb6226514902509bc7o.png" class="d-block w-100 img col-lg-8" alt="..."/>
                            <div className="container col-lg-12">
                                <div className="card col-lg-8 card-color card-form d-none d-md-block">
                                    <h3 className="text-center">Organa</h3>
                                    <h5 className="text-center">Project created to Laboratoria with technologies like React, React Bootstrap, Firebase. It consists in a QR scanner to register the student assitance. I realiced this project in team.
                                        <a className="text-center letter-color" target="_blank" href="https://shareazc.github.io/open-house-organa/#/"> Ver Demo</a>
                                    </h5>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item col-lg-12">
                            <img src="https://fotos.subefotos.com/e7f8f804c5b74913372ac88bce4e38ffo.jpg" class="d-block col-lg-8 img w-100 " alt="..."/>
                            <div className="container col-lg-12">
                                <div className="card col-lg-8 card-color card-form d-none d-md-block">
                                    <h3 className="text-center">Burger Queen</h3>
                                    <h5 className="text-center">Project created for a restaurant with technologies like React, Bootstrap, Firebase. It consists of an screen where the waiter will take the order and send it to the kitchen.    
                                        <a className="text-center letter-color" target="_blank" href="https://angieeca06.github.io/GDL002-burger-queen/#/"> Ver Demo</a>
                                    </h5>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item col-lg-12">
                            <img src="https://fotos.subefotos.com/c7a3870b38c50a2857685f60f16b7326o.png" class="d-block col-lg-8 img w-100" alt="..."/>
                            <div className="container col-lg-12">
                                <div className="card col-lg-8 card-color card-form d-none d-md-block">
                                    <h3 className="text-center">Cipher</h3>
                                    <h5 className="text-center">Project created for coding and decoding a message with the Cesar Cipher, with technologies like VanillaJs, CSS, HTML.
                                        <a className="text-center letter-color" target="_blank" href="https://angieeca06.github.io/gdl-2019-01-bc-core-cipher/src/"> Ver Demo</a>
                                    </h5>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon color" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span class="carousel-control-next-icon color" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Proyects;