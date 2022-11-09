import { Modal, Container, Button, InputGroup, Form } from "react-bootstrap";
import { useState } from "react";
import FrontBackToggle from "./FrontBackToggle";
import { storage } from "../../base";

export default function CreateNewCardModal(props) {
  const { show, handleClose } = props;
  const [showCardFront, setShowCardFront] = useState(true);
  const handleShowFrontBack = () => setShowCardFront(!showCardFront);
  const [fileUrl, setFileUrl] = useState(null);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
    console.log(fileUrl);
  };
  const handleSubmit = (e) => {
    e.prevenDefault();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
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
        <Form>
          <Container style={{ textAlign: "center", paddingBottom: 10 }}>
            <FrontBackToggle
              showCardFront={showCardFront}
              handleShowFrontBack={handleShowFrontBack}
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
          ></Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Container style={{ textAlign: "center" }}>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ marginRight: "10%" }}
          >
            Close
          </Button>
          <Button
            type="submit"
            variant="primary"
            onClick={handleClose}
            style={{ marginLeft: "10%" }}
          >
            Confirm
          </Button>
        </Container>
      </Modal.Footer>
    </Modal>
  );
}
