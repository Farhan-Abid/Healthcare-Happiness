import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import banner1 from "../../../images/banner/banner-1.jpg";
import banner2 from "../../../images/banner/banner-2.jpg";
import banner3 from "../../../images/banner/banner-3.jpg";

const Banner = () => {
  return (
    <Carousel className="banner banner-style">
      <Carousel.Item interval={1000}>
        <img className="d-block w-100 image" src={banner1} />
        <Carousel.Caption className="banner-title">
          <h1>Delivering fast and secure medical care, with compassion.</h1>
          <p className="fs-5">
          Your mind, body and life can feel balanced again with the right adjustments and care from our side.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100 image" src={banner2} alt="Second slide" />
        <Carousel.Caption className="banner-title">
          <h1>Around-the-Clock Skilled Nursing Care</h1>
          <p className="fs-5">
          For 24/7 expert, caring support, Our's nursing professionals lead the way. Count on us to support your loved one after a stroke, orthopedic surgery, cardiac procedure, serious illness and so much more.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 image" src={banner3} alt="Third slide" />
        <Carousel.Caption className="banner-title">
          <h1>Our Approach to Healthcare</h1>
          <p className="fs-5">
          We take pride in leaving no patient behind. That means we offer a range of healthcare and rehabilitation for virtually anyone and any situation. Our purpose each day is to enrich the life of each person we serve.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
