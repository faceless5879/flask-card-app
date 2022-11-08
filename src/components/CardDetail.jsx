import React from "react";
import {
  Container,
  Button,
  Form,
  ToggleButtonGroup,
  ToggleButton,
  ButtonGroup,
} from "react-bootstrap";
import CreateNewCardBtn from "./common/CreateNewCardBtn";

export default function Home() {
  return (
    <Container>
      <Container style={{ padding: 0, "text-align": "center" }}>
        <Button variant="outline-danger" style={{ marginRight: "20%" }}>
          Remove card
        </Button>
        <CreateNewCardBtn />
      </Container>
      <h1 style={{ textAlign: "center", paddingTop: 20 }}>Card name</h1>
      <Container style={{ "text-align": "center", paddingTop: 10 }}>
        <ButtonGroup type="radio" name="options">
          <ToggleButton variant="success">Front</ToggleButton>
          <ToggleButton variant="secondary">Back</ToggleButton>
        </ButtonGroup>
      </Container>

      {/* <img
        src={require("../Screenshot_18.png")}
        alt="picname"
        style={{ width: "100%", height: "100%", marginTop: 20 }}
      /> */}
      <Form.Control
        as="textarea"
        aria-label="With textarea"
        style={{ marginTop: 20, height: "250px", "tab-size": 20 }}
        readOnly
        defaultValue={"aaaaaaaaaaa\n\taaaaaaaa"}
      ></Form.Control>
      <Container style={{ padding: 0, "text-align": "center", paddingTop: 30 }}>
        <Button variant="outline-success" style={{ marginRight: "30%" }}>
          Previous card
        </Button>
        <Button variant="outline-success">Next card</Button>
      </Container>
    </Container>
  );
}
