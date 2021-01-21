import React from 'react'
import desktopImage from '../../Images-Videos-GIF/chikkamagaluru-desktop.jpg';
import mobileImage from '../../Images-Videos-GIF/chikkamagaluru-mobile.jpg';
import './Hero.css';

const Hero = () => {
    const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

    return (
        <div className="Hero" style={{ backgroundImage: `url(${imageUrl})` }}>
        </div>

    )
}

export default Hero
