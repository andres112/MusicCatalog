import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function User({ setUser, setRed }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const setData = e => {
        switch (e.target.name) {
            case "name":
                setName(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;

            default:
                break;
        }
    }

    const addUser = async e => {
        e.preventDefault();
        let newUser = {
            name: name,
            email: email,
            password: password,
            likes: 0
        }
        setUser(userList => [...userList, newUser]);
        console.log(name + " " + email + " " + password);
    }

    return (
        <Form onSubmit={addUser} style={{ width: '20rem' }} >
            <Form.Group controlId="formBasicText">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    placeholder="Enter Name" value={name}
                    onChange={setData} name="name" required>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                    value={email} onChange={setData} name="email" required />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control type="password" placeholder="Password"
                    value={password} onChange={setData} name="password" required />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Activate Delete" onChange={e =>
                    setRed(e.target.checked)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Send
        </Button>
        </Form>
    )
}

export default User;
