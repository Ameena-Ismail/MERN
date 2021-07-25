import React, { useState } from 'react';

const Word=(props) => {
  return (
    <div style={{backgroundColor:props.color2, color:props.color1, width:'500px',height:'250px'}}>
      <p>Word is {props.word}</p>
    </div>
  )
}

export default Word;