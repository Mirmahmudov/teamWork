import React from "react";
import "./Footer.css";
import {
  FaBasketballBall,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="foot">
          <div className="left">
            <h1>
              <span>05</span>contact
            </h1>
            <div className="flex">
              <div className="apps">
                <FaPhoneAlt />
                <div className="info">
                  <h4>Phone</h4>
                  <p>(219) 555-0114</p>
                </div>
              </div>
              <div className="apps">
                <MdEmail />
                <div className="info">
                  <h4>Email</h4>
                  <p>robertfox@example.com</p>
                </div>
              </div>
              <div className="apps">
                <FaLocationDot />
                <div className="info">
                  <h4>Address</h4>
                  <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                </div>
              </div>
            </div>
            <div className="icons">
              <FaLinkedin />
              <FaBasketballBall />
              <FaInstagram />
              <FaFacebook />
            </div>
          </div>
          <div className="right">
            <h1>
              I’m always open to discussing <span>product design work</span>or
              partnership{" "}
            </h1>
            <div className="form1">
              <form action="">
                <p>Your name*</p>
                <input type="text" placeholder="Enter your name here" />
                Email Address*
                <input type="text" placeholder="Enter your email address" />
                <p>Message</p>
                <input type="text" placeholder="Write your message here" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
