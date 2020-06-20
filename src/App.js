import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Seal from './images/PCWB seal.jpg'

function App() {
  return (
    <div className="App container">
      <h1>Pennsylvania Central Wind Band</h1>
      <h2>Director Dr. William Kenny</h2>
      <img src={Seal} alt='Penn Central Wind Band Official Seal'/>
    </div>
  );
}

export default App;
