import React from "react";
import { Card } from "react-bootstrap";
const Space = ({ img, name, address }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{address}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Space;
