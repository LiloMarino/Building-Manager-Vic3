import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import ToggleSwitch from "../components/ToggleSwitch";
import DDS from "../assets/img/DDS.png";

const CreateGoods: React.FC = () => {
  return (
    <Container fluid className="p-5">
      <h1 style={{ textDecorationLine: "underline" }}>Goods</h1>
      <Form className="container-fluid mt-4">
        <Row>
          <Col>
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
          </Col>
          <Col>
            <Form.Group>
              <img
                src={DDS}
                alt="DDS File Icon"
                className="rounded mx-auto d-block mb-4 w-25"
              />
              <Stack className="col-md-6 mx-auto">
                <Button variant="secondary">Select File</Button>
              </Stack>
            </Form.Group>
            <Form.Group className="container m-3">
              <Row>
                <Col>
                  <Form.Label>Tradeable</Form.Label>
                </Col>
                <Col>
                  <ToggleSwitch></ToggleSwitch>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="container m-3">
              <Row>
                <Col>
                  <Form.Label>Fixed Price</Form.Label>
                </Col>
                <Col>
                  <ToggleSwitch></ToggleSwitch>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="container m-3">
              <Row>
                <Col>
                  <Form.Label>Local</Form.Label>
                </Col>
                <Col>
                  <ToggleSwitch></ToggleSwitch>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="d-flex justify-content-end">
              <Button className="me-2" variant="danger">
                Cancel
              </Button>
              <Button>Save</Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default CreateGoods;
