import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Switch} from 'react-router-dom'

import Navigationalbar from './Navbar'
import Homepage from './Homepage'
// import About from './About'
import Director from './Director'
import Posters from './Posters'
import Audio from './Audio'
import Events from './Events'
import NoContent from './NoContent'

class App extends React.Component {

  determineCurrentLocation(urlString){
    //function will be called with window.location.href 
    let myArr = urlString.split('/')
    return myArr[myArr.length-1]
}

  render(){
    return (
      <div className="App container-fluid">
          <Navigationalbar location={this.determineCurrentLocation(window.location.href)}/>
          <Switch>
            {/* <Route exact path='/about' component={About} /> */}
            <Route exact path='/director' component={Director} />
            <Route exact path='/posters' component={Posters} />
            <Route exact path='/events' component={Events} />
            <Route exact path='/audio' component={Audio} />
            <Route exact path='/' component={Homepage} />
            <Route path='*' component={NoContent} />
          </Switch>
      </div>
    );
  }
}

export default App;
