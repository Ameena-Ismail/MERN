import React, {useState} from 'react';
import TabHeader from './components/TabHeader';
import './App.css';

function App() {
  const [tabs, setTabs] = useState([
    {
      index: 0,
      text: "hello from tab 0",
      selected: true
    },
    {
      index: 1,
      text: "hello from tab 1",
      selected: false
    },
    {
      index: 2,
      text: "hello from tab 2",
      selected: false
    },
    {
      index: 3,
      text: "hello from tab 3",
      selected: false
    }
  ])

  const clickHandler = (clickedIndex) => {
    console.log(`you clicked tab number ${clickedIndex}`);
    tabs.map((tab, i) => {
      let t = tab;
      if (clickedIndex === i){
        t.selected = true;
      }
      else{
        t.selected = false;
      }
      setTabs([...tabs.slice(0,i),
        t,
      ].concat(tabs.slice(i + 1)))
    })
  }

  return (
    <div className="App">
      {
        tabs.map((tab,i) => {
          return <TabHeader index={i} key={i} selected={tab.selected} clickHandler={clickHandler} />
        })
      }

      {
        tabs.map((tab, i) => {
          return tab.selected ? <h1 key={i}>{tab.text}</h1> : "";
        })
      }
    </div>
  );
}

export default App;