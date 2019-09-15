import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';

function Search() {
    const [searchField, setSearch] = useState("");

    const setData = e => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <Container>
                <InputGroup className="mb-6" size="sm">
                    <FormControl
                        placeholder="Tag Name"
                        aria-label="Tag Name"
                        aria-describedby="basic-addon2"
                        onChange={setData}
                        value={searchField}
                    />
                    <InputGroup.Append>
                        <Link
                            className="btn btn-dark"
                            role="button"
                            to={`/albums/${searchField}`}
                        >Search
                        </Link>
                    </InputGroup.Append>
                </InputGroup>
            </Container>
        </div>
    )
}

export default Search;