import './App.css';
import {Router} from '@reach/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './views/Home'
import OneProduct from './views/OneProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/"/>
        <OneProduct path="/products/:_id"/>
      </Router>
    </div>
  );
}

export default App;
