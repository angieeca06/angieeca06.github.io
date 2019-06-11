import React from "react";
import NavBarElements from "../NavBarElements";
import "../Page-1/PrincipalPage.css"

class PrincipalPage extends React.Component{

    render(){
        return(
            <div className="container col-md-12" >
                <NavBarElements/>
                <div className="row">
                    <div className="col col-md-4">
                        <img className="image" src="https://cdn140.picsart.com/268591153011211.png?r1024x1024" />
                    </div>
                    <div className="col col-md-8">
                        <h1 className="text-center text">Hi¡ I'm Angie and i'm a front end developer</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default PrincipalPage;