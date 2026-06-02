import React from "react";
import "./Contact.css";
import {
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaPhone,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaBasketball, FaLocationDot } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="contactpage">
      <div className="contact-section">
        <div class="overlay"></div>

        <div className="content">
          <h1 className="background-text">CONTACT</h1>
          <h2 className="main-title">CONTACT</h2>
          <p className="breadcrumbs">
            <Link to="/">Home</Link> / <span>Single Portfolio</span>
          </p>
        </div>
      </div>
      <section className="contact-wrapper">
        <div className="contact-info">
          <h2 className="section-title">
            <span className="orange-text">01</span> CONTACT
          </h2>

          <div className="info-list">
            <div className="info-item">
              <div className="icon-box">
                <FiPhone />
              </div>
              <div>
                <h4>Phone</h4>
                <p>(219) 555-0114</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box">
                <FiMail />
              </div>
              <div>
                <h4>Email</h4>
                <p>robertfox@example.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box">
                <FiMapPin />
              </div>
              <div>
                <h4>Address</h4>
                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
              </div>
            </div>
          </div>

          <div className="social-icons">
            <a href="#" className="social-circle">
              <FaLinkedinIn />
            </a>
            <a href="#" className="social-circle">
              <FaDribbble />
            </a>
            <a href="#" className="social-circle">
              <FaInstagram />
            </a>
            <a href="#" className="social-circle">
              <FaFacebook />
            </a>
          </div>
        </div>

        <div className="contact-form-side">
          <h3 className="form-heading">
            I'm always open to discussing{" "}
            <span className="orange-text">product design work</span> or
            partnership
          </h3>

          <form className="form-container">
            <div className="input-row">
              <div className="input-group">
                <label>Your name*</label>
                <input type="text" placeholder="Enter your name here" />
              </div>

              <div className="input-group">
                <label>Email Address*</label>
                <input type="email" placeholder="Enter your email address" />
              </div>
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea
                placeholder="Write your message here"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>

      <div className="maps">
        <div className="container">
          <h1>
            <span>02</span>LOCATION
          </h1>
          <div className="map"></div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
