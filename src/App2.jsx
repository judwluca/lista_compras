import React, { useState } from 'react';

function App2({ addProduct }) {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct(itemName);
    setItemName('');
  };

  return (
    <form className="form-add-item" onSubmit={handleSubmit}>
      <fieldset>
        <div className="form-group mb-3">
          <label htmlFor="item">Adicionar novo item na lista:</label>
          <input
            type="text"
            className="form-control"
            id="item"
            value={itemName}
            onChange={(event) => setItemName(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          A d i c i o n a r
        </button>
      </fieldset>
    </form>
  );
}

export default App2;