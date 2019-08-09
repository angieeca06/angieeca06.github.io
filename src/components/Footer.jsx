import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div class="container footer col-lg-12 col-md-12 col-sm-12 col-12 sticky-top text-center">
        <div class="row">
          <div class="col col-lg-5 col-md-5 col-sm-5 col-10 letterFooter">
            Angélica Caballero
          </div>
          <div className="col col-lg-5 col-md-5 col-sm-5 col-10 letterFooter">
            angyalva16@gmail.com
          </div>
          <div className="col col-lg-2 col-md-2 col-sm-2 col-10 letterFooter">
            3314457206
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
