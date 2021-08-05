import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';
import Chat from './components/Chat'

function App() {

  const [socket, setState] = useState(io(":8000"));

  useEffect(() => {
    console.log("Is the App working?")
    socket.on("Welcome", data => console.log(data));
  })
  const Style = {
    borderWidth: 1,
    borderStyle: 'dashed',


  }
  return (
    <div className="App" style={{ width: "90%" }}>
      {/* , marginLeft: "600px" */}
      <h1 style={Style} >Chat App</h1>
      <hr />
      <div ><h1>Get Started Right now !</h1>
        <h3>I want start with this name .....</h3></div>
        <Chat  />


    </div>
  );
}

export default App;

