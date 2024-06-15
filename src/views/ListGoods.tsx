import { Container, Dropdown, Table } from "react-bootstrap";
import "../assets/styles/custom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const ListGoods: React.FC = () => {
  return (
    <Container fluid className="p-5">
      <h1 className="fs-2 mb-3">Goods List</h1>
      <Table>
        <thead>
          <tr>
            <th>File</th>
            <th>Good</th>
            <th>Cost</th>
            <th>Category</th>
            <th>Tradeable</th>
            <th>Fixed Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Example</td>
            <td>Bricks</td>
            <td>30£</td>
            <td>industrial</td>
            <td>Yes</td>
            <td>No</td>
            <td>
              <Dropdown>
                <Dropdown.Toggle variant="white" id="dropdown-basic">
                    <FontAwesomeIcon icon={faEllipsis} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Mark</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default ListGoods;
