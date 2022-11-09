import React from "react";
import { useState } from "react";
import {
  Container,
  Button,
  Form,
  ToggleButton,
  ButtonGroup,
} from "react-bootstrap";
import ModalImage from "react-modal-image";
import RemoveCardModal from "./common/RemoveCardModal";
import CreateNewCardBtn from "./common/CreateNewCardBtn";
import CreateNewCardModal from "./common/CreateNewCardModal";

export default function Home() {
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const handleCloseRemoveModal = () => setShowRemoveModal(false);
  const handleShowRemoveModal = () => setShowRemoveModal(true);

  const [showCreateCardModal, setShowCreateCardModal] = useState(false);
  const handleCloseCreateCardModal = () => setShowCreateCardModal(false);
  const handleShowCreateCardModal = () => setShowCreateCardModal(true);

  const [showCardFront, setShowCardFront] = useState(true);
  const handleShowFrontBack = () => setShowCardFront(!showCardFront);

  return (
    <Container>
      <Container style={{ padding: 0, textAlign: "center" }}>
        <Button
          variant="outline-danger"
          style={{ marginRight: "20%" }}
          onClick={handleShowRemoveModal}
        >
          Remove card
        </Button>
        <CreateNewCardBtn handleShow={handleShowCreateCardModal} />
      </Container>
      <h1 style={{ textAlign: "center", paddingTop: 20 }}>Card name</h1>
      <Container style={{ textAlign: "center", paddingTop: 10 }}>
        <ButtonGroup type="radio" name="options">
          <ToggleButton
            variant={showCardFront ? "success" : "secondary"}
            onClick={handleShowFrontBack}
          >
            Front
          </ToggleButton>
          <ToggleButton
            variant={showCardFront ? "secondary" : "success"}
            onClick={handleShowFrontBack}
          >
            Back
          </ToggleButton>
        </ButtonGroup>
      </Container>

      {showCardFront && (
        <Container
          style={{
            height: "250px",
            marginTop: 20,
            border: "1px solid #ced4da",
            borderRadius: "5px",
          }}
        >
          <ModalImage
            small={require("../Screenshot_18.png")}
            large={require("../Screenshot_18.png")}
            alt="picname"
          />
        </Container>
      )}

      {!showCardFront && (
        <Form.Control
          as="textarea"
          aria-label="With textarea"
          style={{ marginTop: 20, height: "250px", tabSize: 4 }}
          readOnly
          defaultValue={"aaaaaaaaaaa\n\taaaaaaaa"}
        ></Form.Control>
      )}

      <Container style={{ padding: 0, textAlign: "center", paddingTop: 30 }}>
        <Button variant="outline-success" style={{ marginRight: "30%" }}>
          Previous card
        </Button>
        <Button variant="outline-success">Next card</Button>
      </Container>
      <RemoveCardModal
        show={showRemoveModal}
        handleClose={handleCloseRemoveModal}
      />
      <CreateNewCardModal
        show={showCreateCardModal}
        handleClose={handleCloseCreateCardModal}
      />
    </Container>
  );
}
