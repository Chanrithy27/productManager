import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import ProductForm from './components/ProductForm';

function App() {
  const [ products, setProducts ] = useState([]);
  return (
    <div className="App">
      <ProductForm products = { products } setProducts = { setProducts }/>
      <h1> Products </h1>
      <Display products = { products } setProducts = { setProducts }/>
    </div>
  );
}

export default App;
