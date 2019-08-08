import React from "react";
import "./Skills.css";

class TechnicalSkills extends React.Component {
  render() {
    return (
      <div className="container  col-sm-12">
        <ul className="list-group list-group-flush bg-transparent">
          <li className="list-group-item bg-transparent">
            <h5>Javascript</h5>
          </li>
          <li className="list-group-item bg-transparent">
            <h5>HTML 5 & CSS 3</h5>
          </li>
          <li className="list-group-item bg-transparent">
            <h5>GitHub & Git</h5>
          </li>
          <li className="list-group-item bg-transparent">
            <h5>React JS</h5>
          </li>
          <li className="list-group-item bg-transparent">
            <h5>Firebase</h5>
          </li>
          <li className="list-group-item bg-transparent">
            <h5>Node.js</h5>
          </li>
          <li className="list-group-item bg-transparent">
            <h5>Figma</h5>
          </li>

          <li className="list-group-item bg-transparent">
            <h5>Bootstrap</h5>
          </li>
        </ul>
      </div>
    );
  }
}

export default TechnicalSkills;
