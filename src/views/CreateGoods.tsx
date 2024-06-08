import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ToggleSwitch from '../components/ToggleSwitch';
import DDS from "../assets/img/DDS.png";

const CreateGoods: React.FC = () => {
  return (
    <Container fluid className="p-5">
      <h1 style={{ textDecorationLine: "underline" }}>Goods</h1>
      <Form className="d-flex">
        <Container>
          <Form.Group className="mb-3">
            <Form.Label>
              Name<span style={{ color: "red", fontWeight: "bold" }}>*</span>
            </Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              Cost<span style={{ color: "red", fontWeight: "bold" }}>*</span>
            </Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              Category
              <span style={{ color: "red", fontWeight: "bold" }}>*</span>
            </Form.Label>
            <Form.Select></Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Consumption tax cost</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Quantity marketed</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
        </Container>
        <Container className="d-flex flex-column justify-content-between">
          <img src={DDS} alt="DDS File Icon"  className="img-fluid w-25 align-self-center" />
          <Button variant="secondary">Select File</Button>
          <Form.Group className="container">
            <Row>
              <Col>
                <Form.Label>Tradeable</Form.Label>
              </Col>
              <Col>
                <ToggleSwitch></ToggleSwitch>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="container">
            <Row>
              <Col>
                <Form.Label>Fixed Price</Form.Label>
              </Col>
              <Col>
                <ToggleSwitch></ToggleSwitch>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="container">
            <Row>
              <Col>
                <Form.Label>Local</Form.Label>
              </Col>
              <Col>
                <ToggleSwitch></ToggleSwitch>
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
