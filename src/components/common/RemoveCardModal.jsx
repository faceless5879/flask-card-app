import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const API_URL = process.env.REACT_APP_API_URL;

export default function RemoveCardModal(props) {
  const {
    handleClose,
    show,
    card,
    handleShowNextCard,
    handleRemoveCardFromArr,
  } = props;

  const handleDeleteCard = async () => {
    try {
      await fetch(`${API_URL}/card/${card["cardid"] || 1}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (e) {
      console.error(e);
    }
    handleClose();
    handleShowNextCard();
    handleRemoveCardFromArr(card);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remove this card?</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          This card will be removed from your collection. Are you sure?
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
              onClick={handleDeleteCard}
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
