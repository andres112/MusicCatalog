import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAlbumList } from "../actions/albumList";
import { setAlbumActive } from "../actions/albumInfo";

import AlbumTracks from "./AlbumTracks";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Tweet({ match }) {
  const API_KEY = "ee6c9183ead487d06053412303bf2b8e";

  const albums = useSelector(state => state.albumList);
  const dispatch = useDispatch();

  useEffect(() => {
    getDataApi();
  }, [match]);

  const getDataApi = async () => {
    try {
      const response = await fetch(
        `http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${match.params.tag}&api_key=${API_KEY}&limit=40&format=json`
      );
      const data = await response.json();
      data.albums.album.forEach(x => {
        x.image.find(y => y.size === "large")["#text"] =
          x.image.find(y => y.size === "large")["#text"].replace(" ", "") === ""
            ? "http://www.sclance.com/pngs/no-image-png/no_image_png_935227.png"
            : x.image.find(y => y.size === "large")["#text"];
      });
      dispatch(setAlbumList(data.albums.album));
      console.log(data.albums.album);
    } catch (error) {
      console.log(error);
    }
  };

  // Set the selected album and trigger then modal
  const selectAlbum = event => {
    let selectedAlbum = {
      isActive: true,
      albumName: event.target.id
    };
    dispatch(setAlbumActive(selectedAlbum));
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <h3 className="SubTittle">{match.params.tag.toUpperCase()}</h3>
      </Row>
      <Row className="justify-content-md-center">
        {albums.map((album, index) => (
          <Col sm lg="3" key={index}>
            <Card
              style={{ width: "15rem", height: "25rem" }}
              className="text-center m-2 p-1"
              bg="dark"
              text="white"
            >
              <Card.Img
                variant="top"
                src={album.image.find(x => x.size === "large")["#text"]}
                id={album.mbid}
                onClick={selectAlbum}
              />
              <Card.Body>
                <Card.Title>{album.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <Link to={`/artist/${album.artist.name}`}>
                    {album.artist.name}
                  </Link>
                </Card.Subtitle>
                <Card.Link
                  href={album.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {album.url}{" "}
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <AlbumTracks api_key={API_KEY} />
    </Container>
  );
}

export default Tweet;
