import './App.css';
import React, {useState} from 'react';
import MyComponent from './components/MyComponent';
import TapsDisplay from './components/TapsDisplay';
import TapsShow from './components/TapsShow';

function App() {
  const [data,setData] = useState("");
  //Value Passed from the form --> data = x+ " was taped"

  const newContent = (content) => {
    setData(content);
  }

  return (
    <div className="App">
      <header className="App-header">

        {/* All in one Component */}
        <MyComponent/> 

        {/*Lifting Components*/}
        <TapsShow data={newContent}/>
        <TapsDisplay content={data}/>
        
      </header>
    </div>
  );
}

export default App;
