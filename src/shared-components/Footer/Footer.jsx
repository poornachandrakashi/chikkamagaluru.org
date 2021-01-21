import React from "react";
import "./Footer.css";
import logo from "./logo.png";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      {/* fixed-bottom */}
      <footer className="py-5 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-2 col-md-2 item">
              <h3>Things to do</h3>
              <ul>
                <li>
                  <a href="https://chikkamagaluru.org/">A</a>
                </li>
                <li>
                  <a href="https://chikkamagaluru.org/">B</a>
                </li>
                <li>
                  <a href="https://chikkamagaluru.org/">C</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2 col-md-2 item">
              <h3>Things to know</h3>
              <ul>
                <li>
                  <a href="https://chikkamagaluru.org/">A</a>
                </li>
                <li>
                  <a href="https://chikkamagaluru.org/">B</a>
                </li>
                <li>
                  <a href="https://chikkamagaluru.org/">C</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2 col-md-2 item">
              <h3>Community</h3>
              <ul>
                <li>
                  <a href="https://chikkamagaluru.org/">A</a>
                </li>
                <li>
                  <a href="https://chikkamagaluru.org/">B</a>
                </li>
                <li>
                  <a href="https://chikkamagaluru.org/">C</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>
                <img
                  alt=""
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  style={{ padding: 1 }}
                />{" "}
                <span>Chikkamagaluru, Karnataka</span>
              </h3>
              <p>
                Located at the foothills of the Mullayanagiri range, and just
                south of Baba Budangiris, Chikmagalur is famous for its forests,
                mountains wildlife and in particular peacocks. Widely known as
                the “coffee land” of Karnataka, it is one of the largest
                producers of coffee in India.
              </p>
            </div>
            <div className="col item social">
              <a href="https://chikkamagaluru.org/">
                <AiFillFacebook />
              </a>
              <a href="https://chikkamagaluru.org/">
                <AiOutlineTwitter />
              </a>
              <a href="https://www.instagram.com/chikkamagaluru/">
                <AiFillInstagram />
              </a>
            </div>
          </div>
          <p className="m-0 mt-4 text-center text-white">
            &copy; {new Date().getFullYear()} Copyright :{" "}
            <a href="http://chikkamagaluru.org/">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                style={{ padding: 1 }}
              />{" "}
              chikkamagaluru.org{" "}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
