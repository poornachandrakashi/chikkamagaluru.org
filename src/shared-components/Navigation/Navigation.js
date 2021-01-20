import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './logo.svg';
import { Button } from 'react-bootstrap'
import './Navigation.css'

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                <Container className="custom-container">
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Navbar.Brand href="./">
                                <img
                                    src={logo}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />  Chikkamagaluru
                            </Navbar.Brand>
                            <Nav.Link href='/' exact activeStyle> Home </Nav.Link>
                            <Nav.Link href='/about' activeStyle> About </Nav.Link>
                            <Nav.Link href='/services' activeStyle> Services </Nav.Link>
                            <Nav.Link href='/contact' activeStyle> Contact  </Nav.Link>
                            <Button href='/signin'>Sign In</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation

