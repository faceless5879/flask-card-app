import { Modal, Container, Button } from "react-bootstrap";

export default function CreateNewCardModal(props) {
  const { show, handleClose } = props;

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
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
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
