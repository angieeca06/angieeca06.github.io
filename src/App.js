import React from 'react';
import {HashRouter , Route , Switch} from "react-router-dom";
// import NavBarElements from './components/NavBarElements';
import "./styles/App.css"
import PrincipalPage from './components/Page-1/PrincipalPage';
import AboutMe from "./components/Page-2/AboutMe"

class App extends React.Component{
  render(){
    return(
      <HashRouter basename="/">
        <div className="App">
          <Switch>
            <Route exact path="/" component={PrincipalPage} />
            <Route exact path="/about" component={AboutMe} />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default App;
