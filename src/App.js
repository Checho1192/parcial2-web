import React from "react";
import { Container, Row } from "react-bootstrap";
import "./App.css";
import Space from "./components/Space";
import getSpaces from "./helpers/getSpaces";

const urlRooms =
  "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
function App() {
  const [data] = getSpaces();
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Spaces</h1>
      </header>
      <Container className="flex-container">
        <Row className="flex-row">
          {data &&
            data.length &&
            data.map((serie) => {
              serie.img = "https://i.imgur.com/W26HJoz.jpg";
              console.log(serie);
              return (
                <Space img={serie.img}> title={serie.name} desc={serie.addres}</Space>
              );
            })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
