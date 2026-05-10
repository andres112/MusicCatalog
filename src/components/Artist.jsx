import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setArtist } from "../actions/artistInfo";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Artist() {
  const API_KEY = "ee6c9183ead487d06053412303bf2b8e";

  const { artist: artistName } = useParams();
  const artist = useSelector(state => state.artistInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    const getArtistInfo = async () => {
      const response = await fetch(
        `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${API_KEY}&format=json`
      );
      const data = await response.json();
      dispatch(setArtist(data.artist));
      console.log(data.artist);
    };

    getArtistInfo();
  }, [artistName, dispatch]);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <h2>{artist.name}</h2>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={6} md={4}>
          <Image
            src={
              artist.image.find(x => x.size === "extralarge")
                ? artist.image.find(x => x.size === "extralarge")["#text"]
                : ""
            }
            rounded
          />
        </Col>
      </Row>
      <Row className="justify-content-md-center m-3">
        <Col xs={10} md={8}>
          <p>{artist.bio.summary}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Artist;
