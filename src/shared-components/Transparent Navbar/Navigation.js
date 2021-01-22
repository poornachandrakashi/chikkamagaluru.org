import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap'
import './navigation.css' 
import logo from '../../Images-Videos-GIF/logo.png'


const Navigation = () => {

    const location = useLocation();
    console.log(location.pathname);

    const [navbar, setnavbar] = useState(false);


    const changeNavbarBackground = () => {
        console.log(window.scrollY);
        if (window.scrollY >400 ) {
            setnavbar(true);
        }else {
            setnavbar(false);
        }
    }

    window.addEventListener('scroll', changeNavbarBackground);

    return (

        <Navbar collapseOnSelect expand="lg" bg={`${location.pathname === "/" ? "trans" : "dark"} ${navbar ? "navbar-active" : ""}`} variant="dark" fixed="top" >
            <Navbar.Brand href="./">
                <img
                    alt=""
                    src={logo}
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    style={{ padding: 1 }}
                />{' '}
                {/* Chikkamagaluru */}
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
        </Navbar >
    )
}

export default Navigation
