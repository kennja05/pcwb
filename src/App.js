import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Switch} from 'react-router-dom'

import Navigationalbar from './Navbar'
import Homepage from './Homepage'
import About from './About'
import Director from './Director'
import Media from './Media'
import NoContent from './NoContent'

function App() {
  return (
    <div className="App container-fluid">
        <Navigationalbar />
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/director' component={Director} />
          <Route exact path='/media' component={Media} />
          <Route exact path='/' component={Homepage} />
          <Route path='*' component={NoContent} />
        </Switch>
    </div>
  );
}

export default App;
