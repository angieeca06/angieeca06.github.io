import React from "react";
import "./Skills.css";

class SoftKills extends React.Component {
  render() {
    return (
      <div className="container col-sm-12">
        <ul className="list-group list-group-flush bg-transparent">
          <li className="list-group-item bg-transparent">
            <h5>Liderazgo</h5>
          </li>
          <li className="list-group-item bg-transparent">
            <h5>Comunicación efectiva</h5>
          </li>
          <li className="list-group-item bg-transparent">
            <h5>Trabajo en equipo</h5>
          </li>
          <li className="list-group-item bg-transparent">
            <h5>Autoaprendizaje</h5>
          </li>
          <li className="list-group-item bg-transparent">
            <h5>Adaptable</h5>
          </li>
          <li className="list-group-item bg-transparent">
            <h5>Resolución de problemas</h5>
          </li>
          <li className="list-group-item bg-transparent">
            <h5>Planeación</h5>
          </li>
          <li className="list-group-item bg-transparent">
            <h5>Manejo del tiempo</h5>
          </li>
        </ul>
      </div>
    );
  }
}

export default SoftKills;
