import React, { useState } from "react";
import { Container, ListGroup, Anchor } from "react-bootstrap";
import CreateNewCardBtn from "../components/CreateNewCardBtn";
import { useNavigate } from "react-router-dom";
import CreateNewCardModal from "../components/CreateNewCardModal";
import HomeCarousel from "../components/Home/HomeCarousel";

const Home = (props) => {
  const { cardArr, setCardArr } = props;
  const navigate = useNavigate();
  const [showCreateCardModal, setShowCreateCardModal] = useState(false);

  return (
    <Container>
      <HomeCarousel />
      <CreateNewCardBtn
        showState={showCreateCardModal}
        setShowState={setShowCreateCardModal}
      />

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
        showState={showCreateCardModal}
        setShowState={setShowCreateCardModal}
        setCardArr={setCardArr}
        cardArr={cardArr}
      />
    </Container>
  );
};

export default Home;
