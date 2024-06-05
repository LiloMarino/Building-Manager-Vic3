import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import BuildingManager from "./views/buildingmanager";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route index element={<BuildingManager />} />
          {/* Adicione mais rotas conforme necessário */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
