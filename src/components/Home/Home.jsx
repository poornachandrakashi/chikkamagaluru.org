import React from "react";
import './Home.css'
import { Button, Jumbotron } from 'react-bootstrap';
import nature from '../../Images-Videos-GIF/nature.mp4'
import coffee from '../../Images-Videos-GIF/coffee.mp4'
import Hero from "../../shared-components/Hero Section - Mobile Friendly/Hero";

function Home() {
  return (
    <div className="home">
      <Hero />
      <div className="container">
        <div className="row align-items-center my-4">
          <div className="col-lg-5 align-items-center">
            <div className="container align-items-center">
              <video className='videoTag' autoPlay loop muted height="350" width="350">
                <source src={nature} type='video/mp4' />
              </video>
            </div>
          </div>
          <div className="col-lg-7">
            <h1 className="font-weight-light">About Chikkamagaluru</h1>
            <p >
              Chikmagalur or Chikkamagaluru, is a district in the state of Karnataka. Coffee was first
              cultivated in India in Chikmagalur.The mountains in Chikmagalur which are a part of
              the Western Ghats are the source of rivers like Tunga and Bhadra. Mullayanagiri, which
              is the highest peak in Karnataka is located in the district. It is also a tourist's
              paradise containing hill stations like Kemmanagundi and Kudremukh and waterfalls like
              Manikyadhara, Hebbe, Kallathigiri
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <Jumbotron>
          <h2>Volunteer Registration</h2>
          <p>
            Volunteer registration forms are the documents that organizations
            provide their applicants when they execute volunteer recruitment
            Join The Global Movement Of Young Leaders Developing Innovative Solutions.
            Learn More! Rotary Is 1.2 Million Passionate Individuals In 35,000+ Clubs Worldwide.
            Learn About Our Causes. Highlights: Donation Option Available, Press Center Available.
          </p>
          <p>
            <Button variant="primary">Join Today</Button>
          </p>
        </Jumbotron>
      </div>


      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-5 align-items-center">
            <div className="container align-items-center">
              <video className='videoTag' autoPlay loop muted height="350" width="350">
                <source src={coffee} type='video/mp4' />
              </video>
            </div>
          </div>
          <div className="col-lg-7">
            <h1 className="font-weight-light">Chikkamagaluru - The Land of Coffee</h1>
            <p >
              Located at the foothills of the Mullayanagiri range, and just south of Baba Budangiris, 
              Chikmagalur is famous for its forests, mountains wildlife and in particular peacocks. 
              Widely known as the “coffee land” of Karnataka, it is one of the largest producers of coffee in India
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;