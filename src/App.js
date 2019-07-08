import React from 'react';
import {HashRouter} from "react-router-dom";
// import NavBarElements from './components/NavBarElements';
import "./components/styles/App.css"
import PrincipalPage from './components/Page-1/PrincipalPage';
import AboutMe from "./components/Page-2/AboutMe"
import Skills from './components/Page-4/Skills';
import Proyects from './components/Page-3/Proyects';
import Contact from './components/Page-5/Contact';
import NavBarElements from './components/NavBarElements';

class App extends React.Component{
  render(){
    return(
      <HashRouter basename="/">
        <div className="App">
          <NavBarElements />
          <PrincipalPage />
          <br/>
          <AboutMe />
          <br/>
          <Skills />
          <br/>
          <Proyects />
          <br/>
          <Contact />
        </div>
      </HashRouter>
    )
  }
}

export default App;
