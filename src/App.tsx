import React from 'react';
import Sidebar from './components/Sidebar';
import BuildingManager from './views/buildingmanager';
import Header from './components/Header';
import './assets/styles/buildingmanager.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-content d-flex">
        <Sidebar />
        <BuildingManager />
      </div>
    </div>
  );
};

export default App;
