import React from "react";
import "./Skills.css"

class SoftKills extends React.Component{
    render(){
        return(
            <div className="container col-sm-12">
                <h1>Soft Kills</h1>
                <ul className="list-group list-group-flush bg-transparent">
                    <li className="list-group-item bg-transparent">
                        <h5>LeaderShip</h5>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped  leadership" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li className="list-group-item bg-transparent">
                        <h5>Effective Communication</h5>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped communication" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li className="list-group-item bg-transparent">
                        <h5>Team Work</h5>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped teamWork" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li className="list-group-item bg-transparent">
                        <h5>Self-learning</h5>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped selfLearning" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li className="list-group-item bg-transparent">
                        <h5>Resposible</h5>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped responsible" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li className="list-group-item bg-transparent">
                        <h5>Adaptability</h5>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped adaptability" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SoftKills
