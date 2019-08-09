import React from "react";
import "../styles/Contact.css";

class FormContact extends React.Component {
  render() {
    return (
      <div id="contact">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className="title">Contacto</h1>
        <div className="container col-lg-10 space">
          <a href="mailto:angyalva16@gmail.com" target="_top">
            <h1 className="text-center email text-muted text-decoration-none">
              Si quieres contactarte conmigo mandame un email
            </h1>
          </a>
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col col-lg-4">
              <a
                className="bg-transparent style-btn no-gutters "
                target="_blank"
                href="https://github.com/angieeca06"
              >
                <img
                  src="https://image.flaticon.com/icons/png/512/25/25657.png"
                  className="img-fluid contact rounded mx-auto d-block"
                  alt="..."
                />
                <br />
                <h1 className="text-center text">GitHub</h1>
              </a>
            </div>
            <div className="col col-lg-4">
              <a
                className="bg-transparent style-btn no-gutters "
                target="_blank"
                href="https://www.linkedin.com/in/ang%C3%A9lica-caballero/"
              >
                <img
                  src="https://image.flaticon.com/icons/png/512/61/61109.png"
                  className="img-fluid contact rounded mx-auto d-block"
                  alt="..."
                />
                <br />
                <h1 className="text-center text">Linkedin</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormContact;
