import React from "react";
import './Home.css'
import { Button, Jumbotron } from 'react-bootstrap';

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://chikkamagaluru.org/static/media/chikkamagaluru-desktop.dcc573e2.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>

      <div class="container-custom container">
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
    </div>
  );
}

export default Home;