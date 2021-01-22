import React from "react";
import "./Footer.css";
import logo from "./logo.png";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { index } from "../../variables/content";

function Footer() {
  function navListItemsRender(head){
    return head.map((items)=>(
        <li>
          <a href="https://chikkamagaluru.org/">{items}</a>
        </li>
    ));
  }
  const navListHeads = index.footer.navigation.map((nav) => (
    <div className="col-sm-2 col-md-2 item">
      <h3>{nav.head}</h3>
      <ul>
        {navListItemsRender(nav.items)}
      </ul>
    </div>
  ));
  return (
    <div className="footer">
      {/* fixed-bottom */}
      <footer className="py-5 bg-dark">
        <div className="container">
          <div className="row">
            {navListHeads}
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
                {index.footer.description}
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
