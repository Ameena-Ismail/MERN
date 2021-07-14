import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Nav from './components/navigation/navigation';
// import Sub from './components/sub/sub';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav/>
      <Main>
      </Main>
    </div>
  );
}

export default App;