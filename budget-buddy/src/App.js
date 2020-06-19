import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Mydata from './components/MyData'
import Overview from './components/Overview'
import SignIn from './components/SignInPage'

function App() {
  return (
      <Router>
          <NavBar/>
          <Switch>
              <Route exact path='/' component={SignIn} />
              <Route path='/data' component={Mydata} />
              <Route path='/overview' component={Overview} />
          </Switch>
      </Router>
    );
}

export default App;
