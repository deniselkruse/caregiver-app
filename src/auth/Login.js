import React, { useState } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import APIURL from '../helpers/env'

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/login`, {
            method: 'POST',
            body: JSON.stringify({ user: { email: email, password: password } }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            if (data.sessionToken)          // Could add message about login unsuccessful
            props.updateToken(data.sessionToken);  
        })
    }

    return (
        <div >
            <h4 className="loginHeader">Login</h4>
            <Form className="login" onSubmit={handleSubmit}>
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
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )
}

export default Login;