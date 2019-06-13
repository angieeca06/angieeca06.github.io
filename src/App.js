import React from 'react';
import {HashRouter , Route , Switch} from "react-router-dom";
// import NavBarElements from './components/NavBarElements';
import "./components/styles/App.css"
import PrincipalPage from './components/Page-1/PrincipalPage';
import AboutMe from "./components/Page-2/AboutMe"
import Skills from './components/Page-4/Skills';
import Proyects from './components/Page-3/Proyects';

class App extends React.Component{
  render(){
    return(
      <HashRouter basename="/">
        <div className="App">
          <Switch>
            <Route exact path="/" component={PrincipalPage} />
            <Route exact path="/about" component={AboutMe} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/projects" component={Proyects} />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default App;
