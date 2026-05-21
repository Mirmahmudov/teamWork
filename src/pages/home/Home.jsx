import React from "react";
import "./Home.css";
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn, FaDribbble } from "react-icons/fa";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <>
      <section className="home">
        <div className="container">
          <div className="homeContent">
            <div className="homeText">
              <h4>
                <span>Hello,</span> I’m
              </h4>

              <h1>ROBERT FOX</h1>

              <p>Professional Product Designer</p>

              <button>Let’s Talk</button>
            </div>

            <div className="homeImg">
              <img src="/imgs/man.png" alt="" />
            </div>
          </div>
        </div>

        <h2 className="bgText">ROBERT FOX</h2>

        <div className="socialIcons">
          <FaInstagram className="icon" />

          <RiFacebookFill className="icon" />

          <FaLinkedinIn className="icon" />

          <FaDribbble className="icon" />
        </div>
      </section>

      <section className="aboutme">
        <div className="container">
          {/* Chap blok */}
          <div className="about-images">
            <div className="aboutmeimg">
              <img src="./imgs/Image.png" alt="" />

              <div className="aboutmetxt">
                <h4>
                  Satisfied
                  <br /> Customers
                </h4>
                <span>25</span>
              </div>
            </div>

            {/* O'rta blok */}
            <div className="aboutmeimg aboutmeimg2">
              <div className="aboutmetxt">
                <span>8</span>

                <h4>
                  Year <br />
                  of experience
                </h4>
              </div>

              <img src="./imgs/Image (1).png" alt="" />
            </div>
          </div>

          <div className="about-info">
            <div className="about-title">
              <span>01</span>

              <h1>ABOUT ME</h1>
            </div>

            <div className="about-text">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>

              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="brands">
          <img src="./imgs/behance.svg" alt="" />
          <img src="./imgs/slack.svg" alt="" />
          <img src="./imgs/dribbble.svg" alt="" />
          <img src="./imgs/twilio.svg" alt="" />
          <img src="./imgs/github.svg" alt="" />
        </div>

        <div className="contact-box">
          <h1>Let’s Work Together On Your Next Project</h1>

          <button className="hire-btn">HIRE ME NOW</button>

          <button className="cv-btn">
            <img src="./imgs/Icon.svg" alt="" />
            Download CV
          </button>
        </div>
      </section>
      <section className="home-ser">
        <div className="home-ser-top">
          <span>02</span>

          <h1>MY SERVICE</h1>
        </div>

        <div className="home-ser-box">
          <div className="home-card">
            <img src="./imgs/Edit Square.svg" alt="" />

            <h3>UI/UX Design</h3>

            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Vuis enim velit ullamco
            </p>
          </div>

          <div className="home-card">
            <img src="./imgs/Category.svg" alt="" />

            <h3>Product Design</h3>

            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Vuis enim velit ullamco
            </p>
          </div>

          <div className="home-card">
            <img src="./imgs/Chart.svg" alt="" />

            <h3>Brand Identity</h3>

            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Vuis enim velit ullamco
            </p>
          </div>

          <div className="home-card ">
            <img src="./imgs/Edit Square.svg" alt="" />

            <h3>Website Design</h3>

            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Vuis enim velit ullamco
            </p>
          </div>
        </div>
      </section>

      <section className="home_port">
        <div className="container">
          <div className="home_top">
            <div className="home_tit">
              <span>03</span>
              <h1>PORTFOLIO</h1>
            </div>

            <div className="home_nav">
              <button className="home_on">ALL</button>

              <button>UI/UX DESIGN</button>
              <button>PRODUCT DESIGN</button>
              <button>BRANDING</button>
              <button>WEB DESIGN</button>
            </div>

            <div className="home_arr">
              <img src="./imgs/Button.svg" />

              <img src="./imgs/Button (1).svg" />
            </div>
          </div>

          <div className="home_box">
            <div className="home_card">
              <img src="./imgs/Rectangle 9.png" />

              <div className="home_txt">
                <h2>MOBILE DESIGN</h2>

                <p>UI/UX Design</p>
              </div>
            </div>

            <div className="home_card">
              <img src="./imgs/Image (2).png" />
            </div>

            <div className="home_card">
              <img src="./imgs/Image (3).png" />
            </div>
          </div>
        </div>
      </section>

      <section className="home_test">
        <div className="container">
          <div className="home_test_img">
            <img src="./imgs/Image (4).png" alt="" />
          </div>

          <div className="home_test_info">
            <div className="home_test_top">
              <div className="home_test_tit">
                <span>04</span>

                <h1>TESTIMONIAL</h1>
              </div>

              <h3>
                <span>01</span>/03
              </h3>
            </div>
            <div className="home_test_txt">
              <h2>,,</h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              Replace All <h4>Esther Howard</h4>
              Replace All <span>CEO of Adebe</span>
            </div>
            <div className="home_test_btn">
              <img src="./imgs/Button.svg" alt="" />
              <img src="./imgs/Button .svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
