import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteCard, removeCardFromStack } from "../actions/card";
import { showHideModal } from "../actions/modal";

export default function RemoveCardModal(props) {
  const {
    showState,
    setShowState,
    card,
    cardIndex,
    cardArr,
    setCardArr,
    handleShowNextCard,
    handleShowPreviousCard,
  } = props;

  const handleDeleteCard = () => {
    deleteCard(card["cardId"]);
    showHideModal(showState, setShowState);
    cardIndex < cardArr.length - 1
      ? handleShowNextCard()
      : handleShowPreviousCard();
    removeCardFromStack(cardArr, card, setCardArr);
  };

  return (
    <>
      <Modal
        show={showState}
        onHide={() => {
          showHideModal(showState, setShowState);
        }}
      >
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
              onClick={() => {
                showHideModal(showState, setShowState);
              }}
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
