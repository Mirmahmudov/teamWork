import React from "react";
import "./Portfolio.css";
import {
  FiArrowLeft,
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
  FiDownload,
} from "react-icons/fi";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="portfoliopage">
      <section className="portfolio-banner">
        <div className="overlay"></div>

        <div className="content">
          <h1 className="background-text">PORTFOLIO</h1>
          <h2 className="main-title">PORTFOLIO</h2>
          <p className="breadcrumbs">
            <Link to="/">Home</Link> / <Link to="/portfolio">Portfolio</Link>
          </p>
        </div>
      </section>
      <div className="container">
        <div className="portfolio-top-bar">
          <h2 className="section-title">
            <span className="orange-text">01</span> PORTFOLIO
          </h2>

          <div className="portfolio-filters">
            <button className="filter-btn active">ALL</button>
            <button className="filter-btn">UI/UX DESIGN</button>
            <button className="filter-btn">PRODUCT DESIGN</button>
            <button className="filter-btn">BRANDING</button>
            <button className="filter-btn">WEB DESIGN</button>
          </div>

          <div className="portfolio-arrows">
            <button className="arrow-btn">
              <FiArrowLeft />
            </button>
            <button className="arrow-btn">
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div className="portfolio-grid">
          <div className="portfolio-card">
            <img src="public/imgs/Rectangle 9.jpg" alt="Mobile Design" />
            <div className="portfolio-overlay">
              <h3>MOBILE DESIGN</h3>
              <p>UI/UX Design</p>
            </div>
          </div>

          <div className="portfolio-card">
            <img src="public/imgs/Image.jpg" alt="Web Design" />
            <div className="portfolio-overlay">
              <h3>WEB DESIGN</h3>
              <p>Development</p>
            </div>
          </div>

          <div className="portfolio-card">
            <img src="public/imgs/Image(1).jpg" alt="Branding" />
            <div className="portfolio-overlay">
              <h3>BRANDING</h3>
              <p>Identity</p>
            </div>
          </div>
        </div>

        <div className="portfolio-pagination">
          <span className="line active"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
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
            <i className="icon">
              <FaArrowDown />
            </i>
            Download CV
          </a>
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
      <footer class="mini-footer">
        <p>
          Copyright <strong>Banana Studio</strong> 2022 All Right Reserved
        </p>
      </footer>
    </div>
  );
}

export default Portfolio;
