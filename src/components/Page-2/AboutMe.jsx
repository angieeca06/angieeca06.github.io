import React from "react";
import NavbarElments from "../NavBarElements"

class AboutMe extends React.Component{

    render(){
        return(
            <div className="contrainer col-lg-12 col-sm-12">
                <NavbarElments/>
                <div className="row">
                    <div className="col col-lg-4 col-sm-4">
                        <img className="col-lg-12 col-sm-12" src="https://avatars2.githubusercontent.com/u/47005893?s=460&v=4"/>
                    </div>
                    <div className="col col-lg-8 col-sm-8">
                        <h3 className="col-lg-12 col-sm-12"> 
                            Hello¡ My name is Angelica Caballero, i live in Guadalajara the land of Tequila and Mariachi.
                            I am currently studying as a Front End Developer at Laboratoria bootcamp. I am passionate about the food process and its analysis, I love acquiring knowledge and sharing it.
                            I am in the tech world because I am curious because few women are invlved in this area. I would love to keep learning more and more about programming.
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;