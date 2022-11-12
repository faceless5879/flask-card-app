import { Modal, Container, Button, InputGroup, Form } from "react-bootstrap";
import { useState } from "react";
import FrontBackToggle from "./FrontBackToggle";
import { storage } from "../base";
import { postCard, addCardToStack } from "../actions/card";
import { showHideModal } from "../actions/modal";

export default function CreateNewCardModal(props) {
  const { showState, setShowState, setCardArr, cardArr } = props;

  const [showCardFront, setShowCardFront] = useState(true);

  const [fileUrl, setFileUrl] = useState(null);
  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const [cardName, setCardName] = useState("");
  const onNameChange = (e) => {
    const userInput = e.target.value;
    setCardName(userInput);
  };

  const [cardContent, setCardContent] = useState("");
  const onContentChange = (e) => {
    const userInput = e.target.value;
    setCardContent(userInput);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newCard = {
      cardName: cardName,
      cardContent: cardContent,
      picUrl: fileUrl,
    };
    if (!newCard["cardName"]) {
      return;
    }
    if (!newCard["cardContent"]) {
      return;
    }
    if (!newCard["picUrl"]) {
      return;
    }
    postCard(newCard);
    addCardToStack(cardArr, newCard, setCardArr);
    showHideModal(showState, setShowState);
  };

  return (
    <Modal
      show={showState}
      onHide={() => {
        showHideModal(showState, setShowState);
      }}
      backdrop="static"
      keyboard={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create new card
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Container style={{ textAlign: "center", paddingBottom: 10 }}>
            <FrontBackToggle
              showState={showCardFront}
              setShowState={setShowCardFront}
            />
          </Container>
          <InputGroup className="mb-3" hidden={!showCardFront}>
            <InputGroup.Text
              id="inputGroup-sizing-default"
              style={{ color: "white", backgroundColor: "#4169E1" }}
            >
              Card name
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={onNameChange}
              placeholder="Enter card name"
            />
          </InputGroup>
          <Form.Group
            controlId="formFile"
            className="mb-3"
            hidden={!showCardFront}
          >
            <Form.Label>Choose card front picture</Form.Label>
            <Form.Control type="file" onChange={onFileChange} />
          </Form.Group>
          <Form.Control
            hidden={showCardFront}
            as="textarea"
            aria-label="With textarea"
            style={{ tabSize: 4, height: 200 }}
            placeholder="Enter card content here"
            onChange={onContentChange}
          ></Form.Control>
          <Container style={{ textAlign: "center", paddingTop: 20 }}>
            <Button
              variant="secondary"
              onClick={() => {
                showHideModal(showState, setShowState);
              }}
              style={{ marginRight: "10%" }}
            >
              Close
            </Button>
            <Button
              type="submit"
              variant="primary"
              style={{ marginLeft: "10%" }}
            >
              Confirm
            </Button>
          </Container>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
