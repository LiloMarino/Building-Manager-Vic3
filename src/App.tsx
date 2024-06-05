import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import BuildingManager from './views/buildingmanager';
import Header from './components/Header';
import Goods from './components/Goods';
import './assets/styles/buildingmanager.css';
import './assets/styles/themes.css'; // Importe o CSS dos temas

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-theme");
      document.documentElement.classList.remove("light-theme");
    } else {
      document.documentElement.classList.add("light-theme");
      document.documentElement.classList.remove("dark-theme");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="app">
        <Header darkMode={darkMode} handleToggle={handleToggle} />
        <div className="main-content d-flex">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<BuildingManager />} />
              <Route path="/Home" element={<BuildingManager />} />
              <Route path="/Goods" element={<Goods />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

