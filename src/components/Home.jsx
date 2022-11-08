import React from "react";
import { Container, Carousel, ListGroup, Anchor } from "react-bootstrap";
import CreateNewCardBtn from "./common/CreateNewCardBtn";

export default function Home() {
  return (
    <Container className="mt-2">
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
        <ListGroup.Item variant="primary">Cras justo odio</ListGroup.Item>
        <ListGroup.Item variant="primary">
          Dapibus ac facilisis in
        </ListGroup.Item>
        <ListGroup.Item variant="primary">Morbi leo risus</ListGroup.Item>
        <ListGroup.Item variant="primary">
          Porta ac consectetur ac
        </ListGroup.Item>
        <ListGroup.Item variant="primary">Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Anchor>View all cards</Anchor>
    </Container>
  );
}
