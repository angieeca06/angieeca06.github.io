import React from "react";
import NavBarElements from "../NavBarElements";
import "../styles/Contact.css"
import Btn_contact from "./Btn-contact";

class FormContact extends React.Component{
    render(){
        return(
            <div>
                <NavBarElements/>
                <div className="container col-lg-10 space">
                    <div className="row">
                        <div className="col col-lg-4">
                            <a className="bg-transparent style-btn no-gutters" target="_blank" href="https://github.com/angieeca06">
                                <img src="https://image.flaticon.com/icons/png/512/25/25657.png" class="img-fluid" alt="Responsive image" />
                                <h1 className="text-center text">GitHub</h1>
                            </a>
                        </div>
                        <div className="col col-lg-4">
                            <a className="bg-transparent style-btn no-gutters" target="_blank" href="https://www.linkedin.com/in/ang%C3%A9lica-caballero/">
                                <img src="https://image.flaticon.com/icons/png/512/61/61109.png" className="img-fluid" alt="Responsive image" />
                                <h1 className="text-center text">linkedin</h1>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <form className="style col-lg-8">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control col-lg-12 color" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input type="text" class="form-control color" id="exampleInputPassword1" placeholder="Name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Telephone number</label>
                        <input type="text" class="form-control color" id="exampleInputPassword1" placeholder="Telephone number" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea class="form-control color" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                    </div>
                    <Btn_contact />
                    
                </form> */}
            </div>       
        )
    }
}

export default FormContact;