import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import './App.css';
function App(props) {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Number path="/:id"/>
        <Word path="/:word/:color1/:color2"/>
      </Router>
    </div>
    
  );
}

export default App;
