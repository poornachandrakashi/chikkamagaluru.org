import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Navigation.css';
import logo from '../../Images-Videos-GIF/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'



const Navigation = () => {

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="./">
                <img
                    alt=""
                    src={logo}
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    style={{ padding: 1 }}
                />{' '}
                    Chikkamagaluru
            </Navbar.Brand>


            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="mr-auto">
                    <Nav.Link href="./"> Home</Nav.Link>
                    <Nav.Link href="explore">Explore</Nav.Link> <Nav.Link href="services">Services</Nav.Link>
                    <Nav.Link href="contact">Contact Us</Nav.Link>
                </Nav>

                <Nav className="ml-auto">
                    
                    <Button variant="outline-primary" href="signin"> Sign In</Button>
                    <Button href="signin"> Sign Up</Button>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
