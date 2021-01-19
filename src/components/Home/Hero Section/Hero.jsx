import React from 'react'
import Image from 'react-bootstrap/Image'
import { Container, Row } from 'react-bootstrap';
import desktopImage from '../../../Images-Videos-GIF/chikkamagaluru-desktop.jpg';
import mobileImage from '../../../Images-Videos-GIF/chikkamagaluru-mobile.jpg';
import './Hero.css';

const Hero = () => {
    const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

    return (
        <div className="Hero" style={{ backgroundImage: `url(${imageUrl})` }}>
             <div className="Hero-content">
            <h2>asfs</h2>
        </div>
        </div>

    )
}

export default Hero
