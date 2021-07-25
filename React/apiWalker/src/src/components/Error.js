import React from 'react';
import image from '../kinobi.jpeg';
const Error=(props) => {
    return (
      <div>
        <h1>Error, Path is not valid</h1>
        <img src={image}/>
      </div>
    )
  }
  
  export default Error;