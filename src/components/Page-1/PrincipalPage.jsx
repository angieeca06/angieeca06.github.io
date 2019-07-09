import React from "react";
import "../Page-1/PrincipalPage.css"

class PrincipalPage extends React.Component{

    render(){
        return(
            <div className="container col-md-12 principalPage" >
                <div className="row">
                    <div className="col col-lg-4 col-md-4 col-sm-4 col-0">
                        <img className="image img-fluid" src="https://cdn140.picsart.com/268591153011211.png?r1024x1024" alt="..." />
                    </div>
                    <div className="col col-lg-8 col-md-8 col-sm-8 col-12">
                        <h1 className="text-center letterquery col-sm-12">¡Hola! Soy Angie y soy desarrolladora Front End</h1>
                    </div>
                </div>
                <br />
                <h2 className="instruccion">¡Desliza para saber un poco más de mi!</h2>
            </div>
        )
    }
}

export default PrincipalPage;