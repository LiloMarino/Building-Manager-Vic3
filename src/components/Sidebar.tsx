import React from "react";
import { Nav } from "react-bootstrap";

const Sidebar: React.FC = () => {
  return (
    <div className="d-flex flex-column text-bg-dark sidebar">
      <Nav className="nav nav-pills flex-column mb-auto">
        <Nav.Item>
          <Nav.Link href="/Home" className="nav-link active">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Goods" className="nav-link text-white">
            Goods
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/ListGoods" className="nav-link text-white">
            List Goods
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;
