import { Carousel } from "react-bootstrap";

const HomeCarousel = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          style={{
            width: 350,
            height: 200,
            objectFit: "cover",
            opacity: 0.55,
          }}
          src={require("../../english-alphabet-flash-cards-mrprintables.jpg")}
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
          src={require("../../english-alphabet-flash-cards-mrprintables.jpg")}
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
  );
};

export default HomeCarousel;
