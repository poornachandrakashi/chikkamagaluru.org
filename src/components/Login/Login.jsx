import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import './login.css'

const Login = () => {
    return (
        <div >
            <Container>
                <div className="login-form" >
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted"> We'll never share your email with anyone else. </Form.Text>

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="outline-primary" type="submit">  Submit </Button>

                        <div class="or-seperator"><i>or</i></div>
                        <p class="text-center">Login with your social media account</p>


                        <div class="text-center social-btn">
                            <a href="./" class="btn btn-dark"><i class="fa fa-google"></i>&nbsp; Google</a>
                        </div>  
                    </Form>

                </div>
            </Container>
        </div>
    )
}

export default Login
