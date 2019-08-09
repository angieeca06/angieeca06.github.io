import React from "react";
import "../styles/Contact.css";

class FormContact extends React.Component {
  render() {
    return (
      <div id="contact">
        <br /><br /><br /><br /><br />
        <h1 className="title">Contacto</h1>
        <br /><br /><br />
        <div class="container">
          <div class="row">
            <div class="col col-lg-8 col-md-8 col-sm-10 col-10">
              <a href="mailto:angyalva16@gmail.com" target="_top">
                <h1 className="text-center email text-muted text-decoration-none" title="Click y enviame e-mail">
                  Si quieres contactarte conmigo mandame un email
                </h1>
              </a>
            </div>
            <div class="col col-lg-2 col-md-2 col-sm-2 col-6">
              <div className="col">
                <a
                  className="bg-transparent style-btn no-gutters d-block"
                  target="_blank"
                  href="https://github.com/angieeca06"
                >
                  <img
                    src="https://image.flaticon.com/icons/png/512/25/25657.png"
                    className="img-fluid contact rounded mx-auto d-block"
                    alt="..."
                    title="GitHub"
                  />
                </a>
              </div>
            </div>
            <div class="col col-lg-2 col-md-2 col-sm-2 col-6">
            <div className="col ">
            <a
                  className="bg-transparent style-btn no-gutters d-block"
                  target="_blank"
                  href="https://www.linkedin.com/in/ang%C3%A9lica-caballero/"
                >
                  <img
                    src="https://image.flaticon.com/icons/png/512/61/61109.png"
                    className="img-fluid contact rounded mx-auto d-block"
                    alt="..."
                    title="Linkedln"
                  />
                </a>
                </div>
            </div>
          </div>
        </div>
        <br /><br /><br />
      </div>
    );
  }
}

export default FormContact;
