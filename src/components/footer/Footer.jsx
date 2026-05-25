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
    <section className="home_foot">
      <div className="container">
        {/* LEFT */}
        <div className="home_foot_l">
          <div className="home_foot_tit">
            <span>05</span>

            <h1>CONTACT</h1>
          </div>

          <div className="home_foot_info">
            <div className="home_foot_item">
              <img src="./imgs/Call.svg" />

              <div>
                <h4>Phone</h4>
                <p>(219) 555-0114</p>
              </div>
            </div>

            <div className="home_foot_item">
              <img src="./imgs/Message.svg" />

              <div>
                <h4>Email</h4>
                <p>robertfox@example.com</p>
              </div>
            </div>

            <div className="home_foot_item">
              <img src="./imgs/location (3) 1.svg" />

              <div>
                <h4>Address</h4>

                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
              </div>
            </div>
          </div>

          <div className="home_foot_soc">
            <button>
              <img src="./imgs/Frame (1).svg" />
            </button>

            <button>
              <img src="./imgs/Frame (2).svg" />
            </button>

            <button>
              <img src="./imgs/Frame (4).svg" />
            </button>

            <button>
              <img src="./imgs/Frame (3).svg" />
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="home_foot_r">
          <h2>
            I’m always open to discussing
            <span>product design work </span>
            or partnership
          </h2>

          <form className="home_form">
            <div className="home_form_top">
              <div>
                <label>Your name*</label>

                <input placeholder="Enter your name here" />
              </div>

              <div>
                <label>Email Address*</label>

                <input placeholder="Enter your email address" />
              </div>
            </div>

            <div>
              <label>Message</label>

              <textarea placeholder="Write your message here" />
            </div>

            <button className="home_send">SEND MESSAGE</button>
          </form>
        </div>
      </div>

      <div className="home_copy">
        Copyright Banana Studio 2022 All Right Reserved
      </div>
    </section>
  );
}

export default Footer;
