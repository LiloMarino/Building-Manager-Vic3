import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import BuildingManager from './views/buildingmanager';
import Header from './components/Header';
import Goods from './components/Goods';
import './assets/styles/buildingmanager.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content d-flex">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/Home" element={<BuildingManager />} />
              <Route path="/Dashboard" element={<BuildingManager />} />
              <Route path="/Orders" element={<BuildingManager />} />
              <Route path="/Products" element={<BuildingManager />} />
              <Route path="/Customers" element={<BuildingManager />} />
              <Route path="/Goods" element={<Goods />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
