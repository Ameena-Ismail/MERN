import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import AllProducts from './components/AllProducts';
import ProductDetail from './views/ProductDetail';
import EditProduct from './views/EditProduct';


function App() {
  return (
    <div className="App">
      <Router>
        <AllProducts default path="/" />
        <ProductDetail path="/products/:id" />
        <EditProduct path="/products/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
