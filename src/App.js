import React from 'react';
import {HashRouter , Route , Switch} from "react-router-dom";
// import NavBarElements from './components/NavBarElements';
import "./styles/App.css"
import PrincipalPage from './components/Page-1/PrincipalPage';

class App extends React.Component{
  render(){
    return(
      <HashRouter basename="/">
        <div className="App">
          <Switch>
            {/* <Route exact path="/" component={NavBarElements} /> */}
            <Route exact path="/" component={PrincipalPage} />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default App;
