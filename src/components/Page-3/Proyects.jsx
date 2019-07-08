import React from "react";
import "../styles/Proyects.css";

class Proyects extends React.Component{
    render(){
        return(
            <div className="bd-example">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active col-lg-12" >
                            <img src="https://fotos.subefotos.com/e99ef11b5288d8fb6226514902509bc7o.png" className="d-block w-100 img col-lg-8" alt="..."/>
                            <div className="container col-lg-12">
                                <div className="card col-lg-8 card-color card-form d-md-block">
                                    <h3 className="text-center">Organa</h3>
                                    <h5 className="text-center">Project created to Laboratoria with technologies like React, React Bootstrap, Firebase. It consists in a QR scanner to register the student assitance. I realiced this project in team.
                                        <a className="text-center letter-color" target="_blank" href="https://shareazc.github.io/open-house-organa/#/"> Ver Demo</a>
                                    </h5>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item col-lg-12">
                            <img src="https://fotos.subefotos.com/db20387c79ad521227d48addc60cfb11o.png" className="d-block col-lg-8 img w-100 " alt="..."/>
                            <div className="container col-lg-12">
                                <div className="card col-lg-8 card-color card-form  d-md-block">
                                    <h3 className="text-center">Burger Queen</h3>
                                    <h5 className="text-center">Project created for a restaurant with technologies like React, Bootstrap, Firebase. It consists of an screen where the waiter will take the order and send it to the kitchen.    
                                        <a className="text-center letter-color" target="_blank" href="https://angieeca06.github.io/GDL002-burger-queen/#/"> Ver Demo</a>
                                    </h5>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item col-lg-12">
                            <img src="https://fotos.subefotos.com/c7a3870b38c50a2857685f60f16b7326o.png" className="d-block col-lg-8 img w-100" alt="..."/>
                            <div className="container col-lg-12">
                                <div className="card col-lg-8 card-color card-form  d-md-block">
                                    <h3 className="text-center">Cipher</h3>
                                    <h5 className="text-center">Project created for coding and decoding a message with the Cesar Cipher, with technologies like VanillaJs, CSS, HTML.
                                        <a className="text-center letter-color" target="_blank" href="https://angieeca06.github.io/gdl-2019-01-bc-core-cipher/src/"> Ver Demo</a>
                                    </h5>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon color" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon color" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Proyects;