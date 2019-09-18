import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAlbumInfo, setAlbumActive } from "../actions/albumInfo";

import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

function AlbumTracks({ api_key }) {
  const isAlbumInfo = useSelector(state => state.albumSelected);
  const albumInfo = useSelector(state => state.albumInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    getAlbunInfo();
  }, [isAlbumInfo.isActive]);

  const getAlbunInfo = async () => {
    try {
      const response = await fetch(
        `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${api_key}&mbid=${isAlbumInfo.albumName}&format=json`
      );
      const data = await response.json();
      if (data.album) {
        dispatch(setAlbumInfo(data.album));
        console.log(data.album);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      size="sm"
      style={{ height: "50rem" }}
      show={isAlbumInfo.isActive}
      onHide={() => dispatch(setAlbumActive({ isActive: false, albumName: "" }))}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="example-modal-sizes-title-lg"
          className="justify-content-md-center"
        >
          {albumInfo.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="justify-content-sm-center">
          <Col sm={10} xs={12}>
            <Image
              src={
                albumInfo.image.find(x => x.size === "large")
                  ? albumInfo.image.find(x => x.size === "large")["#text"]
                  : ""
              }
              rounded
            />
          </Col>
        </Row>
        <Row className="justify-content-sm-center">
          <ListGroup variant="flush">
            {albumInfo.tracks.track.map((track, index) => (
              <li key={index}>
                <a
                  href={track.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "black" }}
                >
                  {track.name}{" "}
                </a>
              </li>
            ))}
          </ListGroup>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default AlbumTracks;
