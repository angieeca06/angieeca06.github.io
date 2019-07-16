import React from "react";
import "./Skills.css"

class TechnicalSkills extends React.Component{
    render(){
        return(
            <div className="container  col-sm-12">
                <h1>Técnicas</h1>
                <ul className="list-group list-group-flush bg-transparent">
                    <li className="list-group-item bg-transparent">
                        <h5>Javascript Vanilla</h5>
                        {/* <div className="progress">
                            <div className="progress-bar progress-bar-striped js" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div> */}
                    </li>
                    <li className="list-group-item bg-transparent">
                        <h5>HTML 5 & CSS 3</h5>
                        {/* <div className="progress">
                            <div className="progress-bar progress-bar-striped html-css" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div> */}
                    </li>
                    <li className="list-group-item bg-transparent">
                        <h5>GitHub & Git</h5>
                        {/* <div className="progress">
                            <div className="progress-bar progress-bar-striped github" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div> */}
                    </li>
                    <li className="list-group-item bg-transparent">
                        <h5>firebase</h5>
                        {/* <div className="progress">
                            <div className="progress-bar progress-bar-striped firebase" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div> */}
                    </li>
                    <li className="list-group-item bg-transparent">
                        <h5>Node.js</h5>
                        {/* <div className="progress">
                            <div className="progress-bar progress-bar-striped node-js" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div> */}
                    </li>
                    <li className="list-group-item bg-transparent">
                        <h5>Figma</h5>
                        {/* <div className="progress">
                            <div className="progress-bar progress-bar-striped figma" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div> */}
                    </li>
                    <li className="list-group-item bg-transparent">
                        <h5>React JS</h5>
                        {/* <div className="progress">
                            <div className="progress-bar progress-bar-striped react-js" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div> */}
                    </li>
                    <li className="list-group-item bg-transparent">
                        <h5>Bootstrap</h5>
                        {/* <div className="progress">
                            <div className="progress-bar progress-bar-striped bootstrap" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div> */}
                    </li>
                </ul>
            </div>
        )
    }
}

export default TechnicalSkills;