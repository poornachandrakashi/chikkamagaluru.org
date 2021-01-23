import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Navigation.css';
import logo from '../../Images-Videos-GIF/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {

    return (
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  sticky="top">
            <Navbar.Brand href="./">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    style={{ padding: 1 } }
                />{' '}
                Chikkamagaluru
            </Navbar.Brand>


            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="ml-auto">
                    <Nav.Link href="./"> Home</Nav.Link>
                    <Nav.Link href="about">About</Nav.Link>
                    <Nav.Link href="blog">Blogs</Nav.Link>
                    <Nav.Link href="services">Services</Nav.Link>
                    <Nav.Link href="contact">Contact Us</Nav.Link>
                    <Button href="signin"> Sign In <FontAwesomeIcon icon={faSignInAlt}/></Button>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
