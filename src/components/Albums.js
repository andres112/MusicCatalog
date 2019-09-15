import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Tweet({ match }) {
    const API_KEY = "ee6c9183ead487d06053412303bf2b8e";
    const [albums, setAlbums] = useState([]);

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
                x.image.find(y => y.size === "large")["#text"] = x.image.find(y => y.size === "large")["#text"].replace(" ", "") === "" ?
                    "http://www.sclance.com/pngs/no-image-png/no_image_png_935227.png" : x.image.find(y => y.size === "large")["#text"]
            });            
            setAlbums(data.albums.album);
            console.log(albums);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                {albums.map((album, index) => (
                    <Col sm lg="3" key={index} >
                        <Card style={{ width: '15rem', height: '25rem' }} className="text-center m-2 p-1" bg="dark" text="white">
                            <Card.Img variant="top" src={album.image.find(x => x.size === "large")["#text"]} />
                            <Card.Body>
                                <Card.Title>{album.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    <Link to={`/artist/${album.artist.name}`}>
                                        {album.artist.name}
                                    </Link>
                                </Card.Subtitle>
                                <Card.Link href={album.url} target="_blank">{album.url} </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

    )
}

export default Tweet;