import React, {useState} from 'react'
import axios from 'axios';
export const DisplayPokemon = (props) => {
    const [pokemons, setPokemons]= useState([]);

    const handleClick=(e)=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(response => {
        setPokemons(response.data.results);
    }).catch(err=>{
        console.log(err);
    });

    }
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            {   pokemons.map( (item, index)=>
            <p key={index}>{item.name}</p>
            )}



        </div>
    )
}
export default DisplayPokemon;