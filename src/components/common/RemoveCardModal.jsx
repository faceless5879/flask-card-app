import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function RemoveCardModal(props) {
  const { handleClose, show } = props;

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remove this card?</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          This card will be removed from your collection
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
    </>
  );
}
