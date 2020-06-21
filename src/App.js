import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Switch} from 'react-router-dom'

import Navigationalbar from './Navbar'
import Homepage from './Homepage'
import About from './About'
import Director from './Director'
import Media from './Media'

function App() {
  return (
    <div className="App container-fluid">
        <Navigationalbar />
        <Switch>
          <Route path='/about' render={(routerProps) => <About {...routerProps}/>} />
          <Route path='/director' component={Director} />
          <Route path='/media' component={Media} />
          <Route path='/' component={Homepage} />
        </Switch>
    </div>
  );
}

export default App;
