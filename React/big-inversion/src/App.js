import './App.css';
import BigInverse from './components/BigInverse';
function App() {
  return (
    <div className="App">
      <BigInverse firstName="Ameena" lastName="Ismail" age={28} hairColor="brown"/>
      <BigInverse firstName="Ayat" lastName="Qadore" age={26} hairColor="black"/>
      <BigInverse firstName="Huda" lastName="Ali" age={30} hairColor="blonde"/>

    </div>
  );
}

export default App;