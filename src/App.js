import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Switch} from 'react-router-dom'

import Navigationalbar from './Navbar'
import Homepage from './Homepage'
import About from './About'

function App(props) {
  return (
    <div className="App container-fluid">
        <Navigationalbar />
        <Switch>
          <Route path='/about' render={(routerProps) => <About {...routerProps}/>} />
          <Route path='/' component={Homepage} />
        </Switch>
    </div>
  );
}

export default App;
