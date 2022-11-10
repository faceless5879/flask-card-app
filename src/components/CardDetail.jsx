import React from "react";
import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import ModalImage from "react-modal-image";
import RemoveCardModal from "./common/RemoveCardModal";
import CreateNewCardBtn from "./common/CreateNewCardBtn";
import CreateNewCardModal from "./common/CreateNewCardModal";
import FrontBackToggle from "./common/FrontBackToggle";
import { useLocation } from "react-router-dom";

export default function CardDetail() {
  const location = useLocation();

  const [cardArr, setCardArr] = useState(location.state["data"]);
  const handleRemoveCardFromArr = (item) => {
    const newCardArr = cardArr;
    const itemIndex = newCardArr.indexOf(item);
    newCardArr.splice(itemIndex, 1);
    setCardArr(newCardArr);
  };
  const handleAddCardFromArr = (item) => {
    const newCardArr = cardArr;
    newCardArr.push(item);
    setCardArr(newCardArr);
  };

  const [cardIndex, setCardIndex] = useState(location.state["index"]);
  const [currentCard, setCurrentCard] = useState(cardArr[cardIndex]);
  const handleShowNextCard = () => {
    const index = cardIndex + 1;
    if (index >= cardArr.length) return;
    setShowCardFront(true);
    setCardIndex(index);
    setCurrentCard(cardArr[index]);
  };
  const handleShowPreviousCard = () => {
    const index = cardIndex - 1;
    if (index < 0) return;
    setShowCardFront(true);
    setCardIndex(index);
    setCurrentCard(cardArr[index]);
  };

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
          style={{ marginRight: "20%", marginTop: 20 }}
          onClick={handleShowRemoveModal}
        >
          Remove card
        </Button>
        <CreateNewCardBtn handleShow={handleShowCreateCardModal} />
      </Container>
      <h1 style={{ textAlign: "center", paddingTop: 20 }}>
        {currentCard["cardName"]}
      </h1>
      <Container style={{ textAlign: "center", paddingTop: 10 }}>
        <FrontBackToggle
          showCardFront={showCardFront}
          handleShowFrontBack={handleShowFrontBack}
        />
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
            small={currentCard["picUrl"]}
            large={currentCard["picUrl"]}
            alt={currentCard["cardName"]}
          />
        </Container>
      )}

      {!showCardFront && (
        <Form.Control
          as="textarea"
          aria-label="With textarea"
          style={{ marginTop: 20, height: "250px", tabSize: 4 }}
          readOnly
          defaultValue={currentCard["cardContent"]}
        ></Form.Control>
      )}

      <Container style={{ padding: 0, textAlign: "center", marginTop: 30 }}>
        <Button
          variant="outline-success"
          style={{ marginRight: "30%" }}
          onClick={handleShowPreviousCard}
        >
          Previous card
        </Button>
        <Button variant="outline-success" onClick={handleShowNextCard}>
          Next card
        </Button>
      </Container>
      <RemoveCardModal
        show={showRemoveModal}
        handleClose={handleCloseRemoveModal}
        card={currentCard}
        handleShowNextCard={handleShowNextCard}
        handleRemoveCardFromArr={handleRemoveCardFromArr}
      />
      <CreateNewCardModal
        show={showCreateCardModal}
        handleClose={handleCloseCreateCardModal}
      />
    </Container>
  );
}
