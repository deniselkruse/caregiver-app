import React, { useState } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/user/create", {
            method: 'POST',
            body: JSON.stringify({ user: { email: email, password: password } }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (res) => res.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return (
        <div>
            <h4 className="registerHeader">Register</h4>
            <Form className="register" onSubmit={handleSubmit}>
                <FormGroup>
                    <div className="input-group mb-3">
                        <Input className="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
                        <div className="input-group-append">
                            <span className="input-group-text" id="basic-addon2">@example.com</span>
                        </div>
                    </div>
                </FormGroup>
                <FormGroup>
                    <Input className="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                </FormGroup>
                <Button type="submit">Register</Button>
            </Form>
        </div>
    )
}

export default Register;