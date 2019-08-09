import React from "react";
import "../styles/Proyects.css";

class Proyects extends React.Component {
  render() {
    return (
      <div className="bd-example" id="projects">
        <br /><br /><br /><br /><br />
        <h1 className="title">Proyectos</h1>
        <div class="card mb-3 col-lg-8 col-md-8 col-sm-8 col-8 mx-auto bg-transparent border-0">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img
                src="https://fotos.subefotos.com/e99ef11b5288d8fb6226514902509bc7o.png"
                class="card-img img-fluid"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Organa</h5>
                <p class="card-text">
                  Proyecto creado para Laboratoria con tecnologías como React,
                  React bootstrap, Firebase. Consiste en registrar la asistencia
                  por medio de un código QR. Realicé éste proyecto en equipo.
                </p>
                <p class="card-text">
                  <a
                    target="_blank"
                    href="https://shareazc.github.io/open-house-organa/#/"
                  >
                    Demo
                  </a>
                </p>
                <p class="card-text">
                  <a
                    target="_blank"
                    href="https://github.com/shareazc/open-house-organa"
                  >
                    Repositorio
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 col-lg-8 col-md-8 col-sm-8 col-8 mx-auto bg-transparent border-0">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img
                src="https://fotos.subefotos.com/db20387c79ad521227d48addc60cfb11o.png"
                class="card-img img-fluid"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Burguer Queen</h5>
                <p class="card-text">
                  Proyecto creado para un restaurante con tecnologías como
                  React, Bootstrap, Firebase. Consiste en una página donde el
                  mesero puede tomar una orden y mandarla a la cocina, para ser
                  preparadas.
                </p>
                <p class="card-text">
                  <a
                    target="_blank"
                    href="https://angieeca06.github.io/GDL002-burger-queen/#/"
                  >
                    Demo
                  </a>
                </p>
                <p class="card-text">
                  <a
                    target="_blank"
                    href="https://github.com/angieeca06/GDL002-burger-queen"
                  >
                    Repositorio
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 col-lg-8 col-md-8 col-sm-8 col-8 mx-auto bg-transparent border-0">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img
                src="https://fotos.subefotos.com/c7a3870b38c50a2857685f60f16b7326o.png"
                class="card-img img-fluid"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Cipher</h5>
                <p class="card-text">
                  Proyecto creado para cifrar y descifrar mensajes mediante el
                  código Cesar Cipher, con tecnologías como vanillaJs, CSS 3,
                  HTML 5.
                </p>
                <p class="card-text">
                  <a
                    target="_blank"
                    href="https://angieeca06.github.io/gdl-2019-01-bc-core-cipher/src/"
                  >
                    Demo
                  </a>
                </p>
                <p class="card-text">
                  <a
                    target="_blank"
                    href="https://github.com/angieeca06/gdl-2019-01-bc-core-cipher"
                  >
                    Repositorio
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 col-lg-8 col-md-8 col-sm-8 col-8 mx-auto bg-transparent border-0">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img
                src="https://fotos.subefotos.com/1c449586547d64d7455684d7348f3bd8o.png"
                class="card-img img-fluid"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Parentips</h5>
                <p class="card-text">
                  Proyecto creado para madres y padres de familia que pueden
                  compartir tips y recomendaciones sobre sus hijos, con
                  tecnologías como React, Firebase, Bootstrap.
                </p>
                <p class="card-text">
                  <a
                    target="_blank"
                    href="https://angieeca06.github.io/GDL002-framework-social-network/#/"
                  >
                    Demo
                  </a>
                </p>
                <p class="card-text">
                  <a
                    target="_blank"
                    href="https://github.com/angieeca06/GDL002-framework-social-network"
                  >
                    Repositorio
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Proyects;
