import React from "react";
import { Card } from "react-bootstrap";
const Room = ({ img, title }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Room;
