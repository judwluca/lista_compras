import React, { useState } from 'react';
import Elemento2 from './App2';
import "./App.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (name) => {
    const newProduct = { id: Date.now(), name };
    setProducts([...products, newProduct]);
  };

  return (
    <div className="App">
      <header>
        <h2>Lista de Compras:</h2>
      </header>
      <div className="lista-compras-container">
        <ul className="lista-items">
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
      <Elemento2 addProduct={addProduct} />
    </div>
  );
}

export default ProductList;