import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import './Navigation.css'

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Chikkamagaluru
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${props.location.pathname === "/" ? "active" : ""
                  }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${props.location.pathname === "/about" ? "active" : ""
                  }`}
              >
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li
                class={`nav-item  ${props.location.pathname === "/contact" ? "active" : ""
                  }`}
              >
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Form inline>
                  <Button type="submit">Register</Button>
                </Form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);