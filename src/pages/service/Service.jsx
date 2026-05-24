import React from "react";
import "./Service.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IoBarChartSharp } from "react-icons/io5";
import { FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Service() {
  return (
    <div className="servicepage">
      <section className="portfolio-banner">
        <div className="overlay"></div>

        <div className="content">
          <h1 className="background-text">Service</h1>
          <h2 className="main-title">Service</h2>
          <p className="breadcrumbs">
            <Link to="/">Home</Link> / <Link to="/service" className="active">Service</Link>
          </p>
        </div>
      </section>
      <section class="services-container">
        <div class="headers">
          <span class="number">01</span>
          <h2>MY SERVICE</h2>
        </div>

        <div class="cards-wrapper">
          <div class="card">
            <div class="icon">
                <img src="public/imgs/Edit Square.png" alt="" />
            </div>
            <h3>UI/UX Design</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>

          <div class="card">
            <div class="icon">
                <img src="public/imgs/Category.png" alt="" />
            </div>
            <h3>Product Design</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>

          <div class="card">
            <div class="icon">
                  <img src="public/imgs/Chart.png" alt=""></img>
            </div>
            <h3>Brand Identity</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>

          <div class="card active">
            <div class="icon"><img src="public/imgs/Activity.png" alt="" />
            </div>
            <h3>Website Design</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
        </div>
      </section>
      <div className="partners-logos">
        <div className="container">
          <div className="logo-row">
            <div className="logo-item">
              <img src="/imgs/Group.png" alt="Behance" />
            </div>
            <div className="logo-item">
              <img src="/imgs/slack.png" alt="Slack" />
            </div>
            <div className="logo-item">
              <img src="/imgs/dribbble(1).png" alt="Dribbble" />
            </div>
            <div className="logo-item">
              <img src="/imgs/twilio.png" alt="Twilio" />
            </div>
            <div className="logo-item">
              <img src="/imgs/github.png" alt="GitHub" />
            </div>
          </div>

          <div className="logo-row justify-center">
            <div className="logo-item">
              <img src="/imgs/chargebee.png" alt="Chargebee" />
            </div>
            <div className="logo-item">
              <img src="/imgs/udemy.png" alt="Udemy" />
            </div>
            <div className="logo-item">
              <img src="/imgs/instagram.png" alt="Instagram" />
            </div>
            <div className="logo-item">
              <img src="/imgs/mapbox.png" alt="Mapbox" />
            </div>
          </div>
        </div>
      </div>
      <section className="cta-section">
        <h2>Let's Work Together On Your Next Project</h2>

        <div className="buttons">
          <button className="btn-hire">HIRE ME NOW</button>
          <a href="/path-to-cv.pdf" class="btn-download" download>
            <i className="icon"><FaArrowDown /></i> Download CV
          </a>
        </div>
      </section>
      <section className="testimonial-section">
        <div className="image-container">
          <img src="public/imgs/Image(2).jpg" alt="Client" />
        </div>

        <div className="content-container">
          <div className="header-wrapper">
            <span className="number">03</span>
            <h2 className="title">TESTIMONIAL</h2>
            <span className="pagination">01/03</span>
          </div>

          <p className="quote">
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit."
          </p>

          <div className="author-info">
            <h4 className="author-name">Esther Howard</h4>
            <p className="author-role">CEO of Adobe</p>
          </div>

          <div className="controls">
            <div className="indicator-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="navigation-buttons">
              <button className="nav-btn"><FaArrowLeft/></button>
              <button className="nav-btn"><FaArrowRight /></button>
            </div>
          </div>
        </div>
      </section>
          <section className="faq-section">
              <div className="container">
                <h2 className="faq-main-title">
                  <span className="orange-text">03</span> HAVE ANY QUESTIONS?
                </h2>
      
                <div className="faq-container">
                  <div className="faq-item active">
                    <div className="faq-header">
                      <h3>Where Can I Find More Information?</h3>
                      <span className="faq-icon">
                        <FiChevronUp />
                      </span>
                    </div>
                    <div className="faq-body">
                      <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                        amet sint.
                      </p>
                    </div>
                  </div>
      
                  <div className="faq-item">
                    <div className="faq-header">
                      <h3>What Kinds of Payment Do You Accept?</h3>
                      <span className="faq-icon">
                        <FiChevronDown />
                      </span>
                    </div>
                    <div className="faq-body">
                      <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                        amet sint.
                      </p>
                    </div>
                  </div>
      
                  <div className="faq-item">
                    <div className="faq-header">
                      <h3>What Are Your Terms and Conditions?</h3>
                      <span className="faq-icon">
                        <FiChevronDown />
                      </span>
                    </div>
                    <div className="faq-body">
                      <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                        amet sint.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    </div>
  );
}

export default Service;
