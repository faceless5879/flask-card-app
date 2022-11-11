import React from "react";
import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import ModalImage from "react-modal-image";
import RemoveCardModal from "../components/RemoveCardModal";
import CreateNewCardBtn from "../components/CreateNewCardBtn";
import CreateNewCardModal from "../components/CreateNewCardModal";
import FrontBackToggle from "../components/FrontBackToggle";
import { useLocation } from "react-router-dom";
import { showHideModal } from "../actions/modal";

export default function CardDetail(props) {
  const location = useLocation();
  const { setCardArr, cardArr } = props;

  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showCreateCardModal, setShowCreateCardModal] = useState(false);
  const [showCardFront, setShowCardFront] = useState(true);
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

  return (
    <Container>
      <Container style={{ padding: 0, textAlign: "center" }}>
        <Button
          variant="outline-danger"
          style={{ marginRight: "20%", marginTop: 20 }}
          onClick={() => {
            showHideModal(showRemoveModal, setShowRemoveModal);
          }}
        >
          Remove card
        </Button>
        <CreateNewCardBtn
          showState={showCreateCardModal}
          setShowState={setShowCreateCardModal}
        />
      </Container>
      <h1 style={{ textAlign: "center", paddingTop: 20 }}>
        {currentCard["cardName"]}
      </h1>
      <Container style={{ textAlign: "center", paddingTop: 10 }}>
        <FrontBackToggle
          showState={showCardFront}
          setShowState={setShowCardFront}
        />
      </Container>
      {showCardFront && (
        <Container
          style={{
            padding: 0,
            marginTop: 20,
            border: "1px solid #ced4da",
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
        showState={showRemoveModal}
        setShowState={setShowRemoveModal}
        card={currentCard}
        cardIndex={cardIndex}
        cardArr={cardArr}
        setCardArr={setCardArr}
        handleShowNextCard={handleShowNextCard}
        handleShowPreviousCard={handleShowPreviousCard}
      />
      <CreateNewCardModal
        showState={showCreateCardModal}
        setShowState={setShowCreateCardModal}
        setCardArr={setCardArr}
        cardArr={cardArr}
      />
    </Container>
  );
}
