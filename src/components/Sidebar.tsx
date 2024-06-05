import React from "react";
import { Nav, Navbar } from "react-bootstrap";

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
          <Nav.Link href="/Dashboard" className="nav-link text-white">
            Dashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Orders" className="nav-link text-white">
            Orders
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Products" className="nav-link text-white">
            Products
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Customers" className="nav-link text-white">
            Customers
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;
