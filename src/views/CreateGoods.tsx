import { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const CreateGoods: React.FC = () => {
  return (
    <Container fluid className="p-5">
      <h1 style={{ textDecorationLine: "underline" }}>Goods</h1>
      <Form className="d-flex">
        <Container>
          <Form.Group>
            <Form.Label>
              Name<span style={{ color: "red", fontWeight: "bold" }}>*</span>
            </Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Cost<span style={{ color: "red", fontWeight: "bold" }}>*</span>
            </Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Category
              <span style={{ color: "red", fontWeight: "bold" }}>*</span>
            </Form.Label>
            <Form.Select></Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Consumption tax cost</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Quantity marketed</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
        </Container>
        <Container className="d-flex flex-column justify-content-evenly">
          <Form.Group>
            <Form.Control type="file"></Form.Control>
          </Form.Group>
          <Form.Group className="container">
            <Row>
              <Col>
                <Form.Label>Tradeable</Form.Label>
              </Col>
              <Col>
                <Form.Switch></Form.Switch>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="container">
            <Row>
              <Col>
                <Form.Label>Fixed Price</Form.Label>
              </Col>
              <Col>
                <Form.Switch></Form.Switch>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="container">
            <Row>
              <Col>
                <Form.Label>Local</Form.Label>
              </Col>
              <Col>
                <Form.Switch></Form.Switch>
              </Col>
            </Row>
          </Form.Group>
          <Container>
            <Button className="m-1 float-end">Save</Button> 
            <Button className="m-1 float-end" variant="danger">
              Cancel
            </Button>
          </Container>  
        </Container>
      </Form>
    </Container>
  );
};

export default CreateGoods;
