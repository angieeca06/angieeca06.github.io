import React from "react";
import "../styles/AboutMe.css"

class AboutMe extends React.Component{

    render(){
        return(
            <div className="contrainer col-lg-12 col-sm-12" id="aboutMe">
            <h1 className="title">Acerca de mí</h1>
                <div className="row">
                    <div className="col col-lg-4 col-sm-4 divImg">
                        <img className="col-lg-12 col-sm-12 img" src="https://avatars2.githubusercontent.com/u/47005893?s=460&v=4" alt="..."/>
                    </div>
                    <div className="col col-lg-8 col-sm-8">
                        <h3 className="col-lg-12 col-sm-12 letter"> 
                            ¡Hola! Mi nombre es Angélica Caballero, soy una desarrolladora front end, con conocimientos de Javascript, Me considero una persona autodidacta
                            Me sumergí en el mundo de la técnologia porque me da curiosidad por la cantidad de mujeres que se encuentran en el ambito.
                            Me gusta jugar futbol porque aparte de ser un buen deporte, se desarrollan habilidades como planeación, trabajar en equipo y resolución de problemas.
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;