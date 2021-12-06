import React, { useState, useEffect } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import "./App.css";
import RoomsDetail from "./components/RoomsDetail";
function App() {
  const [espacio, setClicked] = useState();
  const [espacios, setEspacios] = useState();
  const url =
    "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
  useEffect(() => {
    if (navigator.onLine) {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setEspacios(res);
          localStorage.setItem("spaces", JSON.stringify(res));
        });
    } else {
      let spaces = JSON.parse(localStorage.getItem("spaces"));
      if (spaces !== null) {
        setEspacios(spaces);
      }
    }
  }, []);
  return (
    <Container>
      <Row>
        <h1 className="header">
          <FormattedMessage id="MySpaces" />
        </h1>
      </Row>
      <Row className="flex-row">
        {espacios &&
          espacios.length &&
          espacios.map((space) => {
            if (space.name.includes("Casa")) {
              space.img = "https://i.imgur.com/W26HJoz.jpg";
            } else {
              space.img =
                "https://amarilo.com.co/sites/default/files/fachada_interior_salamanca_1111x750p.jpg";
            }
            return (
              <Card
                key={space.name}
                onClick={() => setClicked(space)}
                style={{ width: "18rem" }}
              >
                <Card.Img variant="top" src={space.img} alt={space.title} />
                <Card.Body>
                  <Card.Title>{space.name}</Card.Title>
                  <Card.Text>{space.address}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
      </Row>
      <Row>
        {espacio != null ? <RoomsDetail key={espacio} id={espacio.id} /> : null}
      </Row>
    </Container>
  );
}

export default App;
