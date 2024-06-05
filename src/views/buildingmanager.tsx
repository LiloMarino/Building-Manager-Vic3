import React, { useState } from 'react';
import '../assets/styles/buildingmanager.css';

function BuildingManager() {
  const [expandable, setExpandable] = useState(false);
  const [downsizeable, setDownsizeable] = useState(false);

  return (
    <div className="building-manager min-vh-100">
      <h1>Fábrica de construção</h1>
      <div className="stats">
        <div className="stat">
          <h2>Profit</h2>
          <p>$450</p>
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
        <div className="control">
          <label>Expandable</label>
          <input
            type="checkbox"
            checked={expandable}
            onChange={() => setExpandable(!expandable)}
          />
        </div>
        <div className="control">
          <label>Downsizeable</label>
          <input
            type="checkbox"
            checked={downsizeable}
            onChange={() => setDownsizeable(!downsizeable)}
          />
        </div>
      </div>
      <div className="buttons">
        <button className="erase">Erase All</button>
        <button className="create">Create</button>
      </div>
    </div>
  );
}

export default BuildingManager;