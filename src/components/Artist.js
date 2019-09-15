import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Artist({ match }) {
  const API_KEY = "ee6c9183ead487d06053412303bf2b8e";
  const [info, setInfo] = useState({
    bio:{},
    image: []
  });

  useEffect(() => {
    getArtistInfo();
  }, []);

  const getArtistInfo = async () => {
    const response = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${match.params.artist}&api_key=${API_KEY}&format=json`
    );
    const data = await response.json();
    setInfo(data.artist);
    console.log(data.artist);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <h2>{info.name}</h2>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={6} md={4}>
          <Image
            src={
              info.image.find(x => x.size === "extralarge")
                ? info.image.find(x => x.size === "extralarge")["#text"]
                : ""
            }
            rounded
          />
        </Col>
      </Row>
      <Row className="justify-content-md-center m-3">
        <Col xs={10} md={8}>
            <p>{info.bio.summary}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Artist;
