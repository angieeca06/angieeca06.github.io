import React from "react";
import NavbarElements from "../NavBarElements";
import SoftSkills from "./SoftPart";
import TechnicalSkills from "./TechPart";
import "./Skills.css"

class Skills extends React.Component{
    render(){
        return(
            <div className="container col-lg-12 col-sm-12">
                <NavbarElements/>
                <div className="row">
                    <div className="col col-lg-5 col-sm-6 text-center">
                        <SoftSkills/>
                    </div>
                    <div className="col col-lg-2 col-sm<-0 img">
                        <img className="img" src="http://www.patrise.es/wp-content/uploads/2015/12/IMG_6419-400x400.png" />
                    </div>
                    <div className="col col-lg-5 col-sm-6 text-center">
                        <TechnicalSkills />
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;