import React,{useState} from 'react';
import { Router } from '@reach/router';
import { navigate } from '@reach/router';
import Person from './components/Person';
import Planet from './components/Planet';
import Error from './components/Error';

import './App.css';
function App(props) {
  const[category, setCategory]=useState('People');
  const[Id, setID]=useState('');
  console.log(category);
  const search = (e)=>{
    e.preventDefault();
    navigate('/'+category+'/'+Id);
  }
const Form= ()=>{
  return(
    <form onSubmit={search}>
          <select onChange={(e)=>setCategory(e.target.value)}>
            <option value="People">People</option>
            <option value="Planets">Planets</option>
          </select>
          <input type="number"id="quantity" name="quantity" onChange={(e)=>setID(e.target.value)}/>
          <input type="submit"/>
        </form>
  );
}
  return (
    <div className="App">
      
      <Form/>
      <Router>
          <Person path="/People/:num"/>
          <Planet path="/Planets/:num"/>
          <Error path="/:anything"/>
      </Router>
    </div>
    
  );
}

export default App;
