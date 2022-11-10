import React, { useEffect, useState } from "react";
import { Container, Carousel, ListGroup, Anchor } from "react-bootstrap";
import CreateNewCardBtn from "./common/CreateNewCardBtn";
import { useNavigate } from "react-router-dom";
import CreateNewCardModal from "./common/CreateNewCardModal";

export default function Home(props) {
  const { cardArr, setCardArr } = props;

  const navigate = useNavigate();

  const [showCreateCardModal, setShowCreateCardModal] = useState(false);
  const handleCloseCreateCardModal = () => setShowCreateCardModal(false);
  const handleShowCreateCardModal = () => setShowCreateCardModal(true);

  return (
    <Container>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            style={{
              width: 350,
              height: 200,
              objectFit: "cover",
              opacity: 0.55,
            }}
            src={require("../english-alphabet-flash-cards-mrprintables.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5 className="text">Welcome to</h5>
            <h1 className="text">Flask cards</h1>
            <p>
              <b>Create your flask cards and learn everywhere!</b>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{
              width: 350,
              height: 200,
              objectFit: "cover",
              opacity: 0.55,
            }}
            src={require("../english-alphabet-flash-cards-mrprintables.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Easy to manage</h3>
            <p>
              <b>Start now!</b>
            </p>
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
