import React, { useState,useEffect } from 'react';
import { Router } from '@reach/router';
import App from '../App'
import axios from 'axios';
const Home=(props) => {
  const [people, setPeople] = useState([]);
  const getPeople = () => {
    fetch('https://swapi.dev/api/people/'+props.num)
        .then(response => response.json())
        .then(response => setPeople(response))
};
useEffect( () => {
  getPeople();
}, [people]);
console.log(people);
  return (
    <div>
      <h1>{people.name}</h1>
      <p><bold>Height:</bold> {people.height}</p>
      <p><bold>Mass:</bold> {people.mass}</p>
      <p><bold>Hair Color:</bold> {people.hair_color}</p>
      <p><bold>Skin Color:</bold> {people.skin_color}</p>
    </div>
  )
}

export default Home;