import React, { useState,useEffect } from 'react';
import axios from 'axios';

const Planet = props => {

  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    fetch('https://swapi.dev/api/planets/'+props.num)
        .then(response => response.json())
        .then(response => setPlanets(response))
}, []);
  return (
      <div>
        <h1>{planets.name}</h1>
        <p><bold>climate:</bold> {planets.climate}</p>
        <p><bold>terrain:</bold> {planets.terrain}</p>
        <p><bold>surface_water:</bold> {planets.surface_water}</p>
        <p><bold>population:</bold> {planets.population}</p>
      </div>
  );
}

export default Planet;