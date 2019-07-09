import React from "react";
import "./Skills.css"

class SoftKills extends React.Component{
    render(){
        return(
            <div className="container col-sm-12">
                <h1>Blandas</h1>
                <ul className="list-group list-group-flush bg-transparent">
                    <li className="list-group-item bg-transparent">
                        <h5>Liderazgo</h5>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped  leadership" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li className="list-group-item bg-transparent">
                        <h5>Comunicación efectiva</h5>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped communication" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li className="list-group-item bg-transparent">
                        <h5>Trabajo en equipo</h5>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped teamWork" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li className="list-group-item bg-transparent">
                        <h5>Autoaprendizaje</h5>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped selfLearning" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li className="list-group-item bg-transparent">
                        <h5>Responsable</h5>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped responsible" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li className="list-group-item bg-transparent">
                        <h5>Adaptable</h5>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped adaptability" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SoftKills
