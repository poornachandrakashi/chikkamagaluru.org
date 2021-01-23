import React from 'react'
import './Hero.css';
import sample from '../../Images-Videos-GIF/sample1.mp4';

const Hero = () => {

    return (
        <div>
            <header>
                <div class="overlay"></div>
                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                    <source src={sample} type='video/mp4' />
                </video>

                <div class="container h-100">
                    <div class="d-flex h-100 text-center align-items-center">
                        <div class="w-100 text-white">
                            <h1 class="display-3">Chikkamagaluru</h1>
                            <p class="lead mb-0">The Land of coffee</p>
                        </div>
                    </div>
                </div>

            </header>
            {/* <video playsinline="playsinline" className='videoTag' autoPlay loop >
                <source src={sample} type='video/mp4' />
            </video> */}

            {/* <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4">
            </video> */}
        </div>

    )
}

export default Hero
