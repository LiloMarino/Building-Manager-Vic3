import React from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-3">
      <Navbar.Brand href="/">Building Manager Victoria 3</Navbar.Brand>
      <Form className="d-flex ms-auto">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Button variant="primary" className="ms-2">Export</Button>
      <FaUserCircle size={30} className="ms-3" />
    </Navbar>
  );
};

export default Header;
