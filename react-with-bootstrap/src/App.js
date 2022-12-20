import "./App.css";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  FormText,
  Container,
  Row,
} from "reactstrap";

function App() {
  return (
    <Container className="App bg-dark">
      <Row className="h-100 d-flex align-items-center">
        <Col className="col-sm-4"></Col>
        <Col className="col-sm-4">
          <Row className="my-4">
            <Col>
              <Label style={{ float: "left" }} className="m-0">
                First Name
              </Label>
              <Input placeholder="Enter first name"></Input>
            </Col>
            <Col>
              <Label style={{ float: "left" }} className="m-0">
                Last Name
              </Label>
              <Input placeholder="Enter last name"></Input>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <Label style={{ float: "left" }} className="m-0">
                Email
              </Label>
              <Input placeholder="Enter your mail"></Input>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <Label style={{ float: "left" }} className="m-0">
                Username
              </Label>
              <Input placeholder="Enter user name"></Input>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <Label style={{ float: "left" }} className="m-0">
                Password
              </Label>
              <Input placeholder="Enter password"></Input>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col className="col-sm-5 me-0 pe-0">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
              />
              <label className="form-check-label" for="flexCheckDefault">
                Default checkbox
              </label>
            </Col>
            <Col className="col-sm-5 ms-0 ps-0">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
              />
              <label className="form-check-label" for="flexCheckChecked">
                Checked checkbox
              </label>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col className="col-sm-5 me-0 pe-0">
              <input
                className="form-check-input me-2"
                type="radio"
                name="same"
                value=""
              />
              <label className="form-check-label" for="flexCheckDefault">
                Default checkbox
              </label>
            </Col>
            <Col className="col-sm-5 ms-0 ps-0">
              <input
                className="form-check-input me-2"
                type="radio"
                name="same"
                value=""
              />
              <label className="form-check-label" for="flexCheckChecked">
                Checked checkbox
              </label>
            </Col>
          </Row>
          <Button color="primary" className="col-12 mb-4">
            Create New Account
          </Button>

          <Button color="danger" className="col-12">
            Dummy Signup
          </Button>
        </Col>
        <Col className="col-sm-4"></Col>
      </Row>
    </Container>
  );
}

export default App;
