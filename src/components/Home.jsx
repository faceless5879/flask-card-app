import React from "react";
import { Container, Carousel, ListGroup, Anchor } from "react-bootstrap";
import CreateNewCardBtn from "./common/CreateNewCardBtn";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const data = [
    {
      picUrl: require("../Screenshot_18.png"),
      content: "pic 1 content",
      cardName: "card 1",
    },
    {
      picUrl: require("../Screenshot_17.png"),
      content: "pic 2 content",
      cardName: "card 2",
    },
  ];

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
      <CreateNewCardBtn className="mt-2" />

      <ListGroup className="mt-4">
        {data.map((item) => {
          const index = data.indexOf(item);
          return (
            <ListGroup.Item
              key={index}
              variant="primary"
              onClick={() => {
                navigate("/card-detail", {
                  state: { index: index, data: data },
                });
              }}
            >
              {item["cardName"]}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <Anchor>View all cards</Anchor>
    </Container>
  );
}
