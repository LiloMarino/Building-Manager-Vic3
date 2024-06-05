import React from 'react';

const BuildingManager: React.FC = () => {
  return (
    <div className="building-manager">
      <h1>Fábrica de construção</h1>
      <div className="stats">
        <div className="stat">
          <h2>Profit</h2>
          <p>$450</p>
          <p>Profit = Output - Input - Manpower</p>
        </div>
        <div className="stat">
          <h2>Manpower</h2>
          <p>2,405 Total Workers</p>
        </div>
        <div className="stat">
          <h2>Input Materials</h2>
          <p>10,353 Total Input</p>
        </div>
        <div className="stat">
          <h2>Output Materials</h2>
          <p>10,353 Total Output</p>
        </div>
      </div>
      <div className="controls">
        <label>
          Expandable
          <input type="checkbox" />
        </label>
        <label>
          Downsizeable
          <input type="checkbox" />
        </label>
      </div>
      <div className="actions">
        <button className="erase">Erase All</button>
        <button className="create">Create</button>
      </div>
    </div>
  );
};

export default BuildingManager;