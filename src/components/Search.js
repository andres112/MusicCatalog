import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux' // import selector and dispatch to use redux mgment states
import {setQuery} from '../actions/query';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';

function Search() {
    const query = useSelector(state => state.query);
    const dispatch = useDispatch();

    const setData = e => {
        dispatch(setQuery(e.target.value)); // dispatch the action
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
                        value={query}
                    />
                    <InputGroup.Append>
                        <Link
                            className="btn btn-dark"
                            role="button"
                            to={`/albums/${query}`}
                        >Search
                        </Link>
                    </InputGroup.Append>
                </InputGroup>
            </Container>
        </div>
    )
}

export default Search;