import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, description, price } = service;
  return (
    <div className="service-card">
      <Col>
        <Card>
          <Card.Img variant="top" src={img} className="card-image" />
          <Card.Body>
            <Card.Title><h2>{name}</h2></Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>
              ${price}
              <small>/Day</small>
            </Card.Text>
            <Link to="/booking">
              <button className="btn btn-dark">Book now</button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
