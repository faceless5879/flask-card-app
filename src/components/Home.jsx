import React, { useEffect, useState } from "react";
import { Container, Carousel, ListGroup, Anchor } from "react-bootstrap";
import CreateNewCardBtn from "./common/CreateNewCardBtn";
import { useNavigate } from "react-router-dom";
import CreateNewCardModal from "./common/CreateNewCardModal";

const API_URL = process.env.REACT_APP_API_URL;

export default function Home() {
  const navigate = useNavigate();

  const [showCreateCardModal, setShowCreateCardModal] = useState(false);
  const handleCloseCreateCardModal = () => setShowCreateCardModal(false);
  const handleShowCreateCardModal = () => setShowCreateCardModal(true);

  const [cardArr, setCardArr] = useState([]);

  useEffect(
    () => async () => {
      try {
        const response = await fetch(`${API_URL}/card/`);
        const data = await response.json();
        setCardArr(data);
      } catch (e) {
        console.error(e);
      }
    },
    []
  );

  return (
    <Container>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../Screenshot_18.png")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5 className="text">Welcome to</h5>
            <h1 className="text">Flask cards</h1>
            <p>Create your flask cards and learn everywhere!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../Screenshot_18.png")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Easy to manage</h3>
            <p>Start now!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <CreateNewCardBtn handleShow={handleShowCreateCardModal} />

      <ListGroup className="mt-4">
        {cardArr.map((item) => {
          const index = cardArr.indexOf(item);
          return (
            <ListGroup.Item
              key={index}
              variant="primary"
              onClick={() => {
                navigate("/card-detail", {
                  state: { index: index, data: cardArr },
                });
              }}
            >
              {item["cardName"]}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <Anchor>View all cards</Anchor>
      <CreateNewCardModal
        show={showCreateCardModal}
        handleClose={handleCloseCreateCardModal}
      />
    </Container>
  );
}
