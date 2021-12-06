import React, { useEffect, useState } from "react";
import "./RoomsDetail.css";
import { Card, Row, Col, Container } from "react-bootstrap";
import TableDevices from "./TableDevices";
import PieGraph from "./PieGraph";
import { FormattedMessage } from "react-intl";
const RoomsDetail = ({ id }) => {
  const urlSala =
    "http://loredomuebles.com/wp-content/uploads/2017/03/Sala-de-estar-1080x675.jpg";
  const urlCocina =
    "https://wwwhatsnew.com/wp-content/uploads/2019/09/La-cocina_Un-%C3%A1rea-de-la-casa-en-peligro-de-extinci%C3%B3n-1.jpg";
  const urlComedor =
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dining-room-ideas-1252-005-1621977481.jpg";
  const urlRooms =
    "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";

  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState();
  useEffect(() => {
    if (navigator.onLine) {
      fetch(urlRooms)
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("rooms", JSON.stringify(data));
          let cuartosEspacio = data.filter((d) => d.homeId === id);
          setRooms(cuartosEspacio);
        });
    } else {
      let rooms = JSON.parse(localStorage.getItem("rooms"));
      if (rooms !== null) {
        let cuartosEspacio = rooms.filter((d) => d.homeId === id);
        setRooms(cuartosEspacio);
      }
    }
  }, [id]);

  const handleImage = (room) => {
    if (room.name.includes("Kit")) {
      return urlCocina;
    } else if (room.name.includes("Living")) {
      return urlSala;
    } else {
      return urlComedor;
    }
  };
  return (
    <Container>
      <Row>
        <h1 className="header">
          <FormattedMessage id="MyRooms" />
        </h1>
      </Row>
      <Row>
        <Col>
          <Row>
            {rooms &&
              rooms.length &&
              rooms.map((room) => {
                return (
                  <Col key={room.name + room.homeId}>
                    <Card
                      onClick={() => setSelectedRoom(room)}
                      style={{ width: "18rem" }}
                    >
                      <Card.Img
                        variant="top"
                        src={handleImage(room)}
                        alt={room.title}
                      />
                      <Card.Body>
                        <Card.Title>{room.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </Col>
        <Col>
          {selectedRoom != null ? <TableDevices room={selectedRoom} /> : null}
        </Col>
      </Row>
      <Row>
        <h1 className="header">
          <FormattedMessage id="Stats" />
        </h1>
      </Row>
      <Row>
        <PieGraph rooms={rooms} />
      </Row>
    </Container>
  );
};

export default RoomsDetail;
