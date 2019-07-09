import React from "react";
import "./Skills.css"

class TechnicalSkills extends React.Component{
    render(){
        return(
            <div className="container  col-sm-12">
                <h1>Técnicas</h1>
                <ul className="list-group list-group-flush bg-transparent">
                    <li className="list-group-item bg-transparent">
                        <h6>Javascript Vanilla</h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped js" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li className="list-group-item bg-transparent">
                        <h6>HTML 5 & CSS 3</h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped html-css" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li className="list-group-item bg-transparent">
                        <h6>GitHub & Git</h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped github" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li className="list-group-item bg-transparent">
                        <h6>firebase</h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped firebase" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li className="list-group-item bg-transparent">
                        <h6>Node.js</h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped node-js" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li className="list-group-item bg-transparent">
                        <h6>Figma</h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped figma" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li className="list-group-item bg-transparent">
                        <h6>React JS</h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped react-js" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li className="list-group-item bg-transparent">
                        <h6>Bootstrap</h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bootstrap" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default TechnicalSkills;