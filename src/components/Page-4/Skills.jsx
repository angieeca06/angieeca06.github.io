import React from "react";
import SoftSkills from "./SoftPart";
import TechnicalSkills from "./TechPart";
import "./Skills.css"

class Skills extends React.Component{
    render(){
        return(
            <div className="container col-lg-12 col-sm-12">
                {/* <NavbarElements/> */}
                <div className="row">
                    <div className="col col-lg-5 col-sm-5 text-center">
                        <SoftSkills/>
                    </div>
                    <img src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/5.png" className="img-fluid flowerImg col-lg-2 col-sm-2" alt="..."></img>
                    <div className="col col-lg-5 col-sm-5 text-center">
                        <TechnicalSkills />
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;