import React from "react";
import "../styles/Proyects.css";

class Proyects extends React.Component{
    render(){
        return(
            <div className="bd-example" id="projects">
                <br/><br/><br/><br/><br/>
                <h1 className="title">Proyectos</h1>
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                    </ul>
                    <div className="carousel-inner" >
                        <div className="carousel-item active col-lg-12" data-interval="2000">
                            <a target="_blank" href="https://shareazc.github.io/open-house-organa/#/" ><img src="https://fotos.subefotos.com/e99ef11b5288d8fb6226514902509bc7o.png" className="d-block w-100 img col-lg-8" alt="..."/></a>
                            <div className="container col-lg-12">
                                <div className="card col-lg-8 card-color card-form d-md-block">
                                    <h3 className="text-center">Organa</h3>
                                    <h5 className="text-center">Proyecto creado para Laboratoria con tecnologías como React, React bootstrap, Firebase. Consiste en registrar la asistencia por medio de un código QR. Realicé éste proyecto en equipo.</h5>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item col-lg-12" data-interval="2000">
                            <a target="_blank" href="https://angieeca06.github.io/GDL002-burger-queen/#/" ><img src="https://fotos.subefotos.com/db20387c79ad521227d48addc60cfb11o.png" className="d-block col-lg-8 img w-100 " alt="..."/></a>
                            <div className="container col-lg-12">
                                <div className="card col-lg-8 card-color card-form  d-md-block">
                                    <h3 className="text-center">Burger Queen</h3>
                                    <h5 className="text-center">Proyecto creado para un restaurante con tecnologías como React, Bootstrap, Firebase. Consiste en una página donde el mesero puede tomar una orden y mandarla a la cocina, para ser preparadas.
                                        <br />
                                        <p className="instruction">
                                        <i className="fas fa-exclamation-triangle iconWarning"></i>
                                        (Para poder ingresar utiliza estos datos Email:angyalva16@gmail.com  Nombre: angie  No.empleado: 123456
                                        </p>
                                    </h5>
                                    <br/>
                                    <br/>
                                </div>
                            </div> 
                        </div>
                        <div className="carousel-item col-lg-12" data-interval="2000">
                            <a target="_blank" href="https://angieeca06.github.io/gdl-2019-01-bc-core-cipher/src/" ><img src="https://fotos.subefotos.com/c7a3870b38c50a2857685f60f16b7326o.png" className="d-block col-lg-8 img w-100" alt="..."/></a>
                            <div className="container col-lg-12">
                                <div className="card col-lg-8 card-color card-form  d-md-block">
                                    <h3 className="text-center">Cipher</h3>
                                    <h5 className="text-center">Proyecto creado para cifrar y descifrar mensajes mediante el código Cesar Cipher, con tecnologías como vanillaJs, CSS 3, HTML 5.</h5>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item col-lg-12" data-interval="2000">
                            <a target="_blank" href="https://angieeca06.github.io/GDL002-framework-social-network/#/" ><img src="https://fotos.subefotos.com/1c449586547d64d7455684d7348f3bd8o.png" className="d-block col-lg-8 img w-100" alt="..."/></a>
                            <div className="container col-lg-12">
                                <div className="card col-lg-8 card-color card-form  d-md-block">
                                    <h3 className="text-center">Red social</h3>
                                    <h5 className="text-center">Proyecto creado para madres y padres de familia que pueden compartir tips y recomendaciones sobre sus hijos, con tecnologías como React, Firebase, Bootstrap.</h5>
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