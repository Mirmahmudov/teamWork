import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <section className="aboutnav">
        <img src="./imgs/Rober Fox (1).png" alt="" className="aboutimg" />
        <h1 className="abouthead">ABOUT</h1>
      </section>
      <section className="about_section">
        <div className="image_container">
          <img
            src="./imgs/Image (5).png"
            alt="Professional Designer & Front-End Developer"
          />
        </div>

        <div className="content_container">
          <div className="section_header">
            <span className="header_number">01</span>
            <h2 className="header_title">About Me</h2>
          </div>

          <h1 className="main_heading">
            I'm Professional Designer And Front-End Web Developer That Solve
            Your Problems
          </h1>

          <p className="description_text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <p className="description_text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>

          <div className="stats_container">
            <div className="stat_item">
              <span className="stat_number">8</span>
              <span className="stat_label">
                Year <br />
                of experience
              </span>
            </div>
            <div className="stat_item">
              <span className="stat_number">25</span>
              <span className="stat_label">
                Saticfied <br />
                Customers
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="skills_section">
        <div className="skills_info_box">
          <div className="section_header">
            <span className="header_number">02</span>
            <h2 className="header_title">My Skills</h2>
          </div>

          <p className="description_text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <a href="#" className="download_btn">
            Download CV
          </a>
        </div>

        <div className="skills_progress_box">
          <div className="progress_item">
            <div className="progress_labels">
              <span className="skill_name">UI/UX Design</span>
              <span className="skill_percentage">90%</span>
            </div>
            <div className="progress_bar_bg">
              <div className="progress_bar_fill" style={{ width: "90%" }}></div>
            </div>
          </div>

          <div className="progress_item">
            <div className="progress_labels">
              <span className="skill_name">Front End Developer</span>
              <span className="skill_percentage">95%</span>
            </div>
            <div className="progress_bar_bg">
              <div className="progress_bar_fill" style={{ width: "95%" }}></div>
            </div>
          </div>

          <div className="progress_item">
            <div className="progress_labels">
              <span className="skill_name">Graphic Design</span>
              <span className="skill_percentage">90%</span>
            </div>
            <div className="progress_bar_bg">
              <div className="progress_bar_fill" style={{ width: "90%" }}></div>
            </div>
          </div>

          <div className="progress_item">
            <div className="progress_labels">
              <span className="skill_name">Product Design</span>
              <span className="skill_percentage">85%</span>
            </div>
            <div className="progress_bar_bg">
              <div className="progress_bar_fill" style={{ width: "85%" }}></div>
            </div>
          </div>
        </div>
      </section>
      <section className="experience_section">
        {/* Chiziqlar va kontent bitta asosiy Grid konteyner ichida bo'lishi shart! */}
        <div className="experience_container">
          {/* 1. Orqa fondagi 5 ta chiziq */}
          <div className="bg_lines">
            <div className="grid_line"></div>
            <div className="grid_line"></div>
            <div className="grid_line"></div>
            <div className="grid_line"></div>
            <div className="grid_line"></div>
          </div>

          {/* 2. Sarlavha (Grid tizimidan mustaqil bo'lishi uchun tepada turadi) */}
          <div className="section_header_center">
            <span className="header_number">03</span>
            <h2 className="header_title">My Experiences</h2>
          </div>

          {/* 3. Tajribalar paneli */}
          <div className="experience_grid">
            {/* 1-ustun: LinkedIn */}
            <div className="experience_card card_pos_1">
              <div className="company_logo logo_linkedin"><img src="./imgs/linkedin.svg" alt="" /></div>
              <div className="card_title_row">
                <span className="card_number">01</span>
                <div className="title_box">
                  <h3 className="job_title">Lead Web Developer</h3>
                  <span className="job_date">2016-2020</span>
                </div>
              </div>
              <p className="description_text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Vuis enim velit ullamco
              </p>
            </div>

            {/* 2-ustun: Yahoo */}
            <div className="experience_card card_pos_2">
              <div className="company_logo logo_yahoo"><img src="./imgs/yahoo.svg" alt="" /></div>
              <div className="card_title_row">
                <span className="card_number">02</span>
                <div className="title_box">
                  <h3 className="job_title">Lead Web Developer</h3>
                  <span className="job_date">2016-2020</span>
                </div>
              </div>
              <p className="description_text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Vuis enim velit ullamco
              </p>
            </div>

            {/* 3-ustun: Zendesk */}
            <div className="experience_card card_pos_3">
              <div className="company_logo logo_zendesk"><img src="./imgs/zendesk.svg" alt="" /></div>
              <div className="card_title_row">
                <span className="card_number">03</span>
                <div className="title_box">
                  <h3 className="job_title">Lead Web Developer</h3>
                  <span className="job_date">2016-2020</span>
                </div>
              </div>
              <p className="description_text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Vuis enim velit ullamco
              </p>
            </div>

            {/* 4-ustun: Webflow (Ortiqcha inline style olib tashlandi, hammasi CSSda boshqariladi) */}
            <div className="experience_card card_pos_4">
              <div className="company_logo logo_webflow"><img src="./imgs/webflow.svg" alt="" /></div>
              <div className="card_title_row">
                <span className="card_number">04</span>
                <div className="title_box">
                  <h3 className="job_title">Lead Web Developer</h3>
                  <span className="job_date">2016-2020</span>
                </div>
              </div>
              <p className="description_text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Vuis enim velit ullamco
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <section className="partners_section">
          <div className="partners_container">
            {/* Yuqori qism: Sarlavha */}
            <div className="section_header_center">
              <span className="header_number">04</span>
              <h2 className="header_title">My Partners</h2>
            </div>

            {/* Logotiplar tarmog'i */}
            <div className="brands_grid">
              <div className="brand_item">
                <img src="./imgs/behance.svg" alt="Behance" />
              </div>
              <div className="brand_item">
                <img src="./imgs/slack.svg" alt="Slack" />
              </div>
              <div className="brand_item">
                <img src="./imgs/dribbble.svg" alt="Dribbble" />
              </div>
              <div className="brand_item">
                <img src="./imgs/twilio.svg" alt="Twilio" />
              </div>
              <div className="brand_item">
                <img src="./imgs/github.svg" alt="GitHub" />
              </div>

              {/* Ikkinchi qator elementlari avtomatik ravishda o'rtadagi bo'shliqlarga to'g'rilanadi */}
              <div className="brand_item">
                <img src="./imgs/chargebee.svg" alt="Chargebee" />
              </div>
              <div className="brand_item">
                <img src="./imgs/udemy.svg" alt="Udemy" />
              </div>
              <div className="brand_item">
                <img src="./imgs/instagram.svg" alt="Instagram" />
              </div>
              <div className="brand_item">
                <img src="./imgs/mapbox.svg" alt="Mapbox" />
              </div>
            </div>
          </div>
        </section>

        <div className="contact-box">
          <h1>Let’s Work Together On Your Next Project</h1>

          <button className="hire-btn">HIRE ME NOW</button>

          <button className="cv-btn">
            <img src="./imgs/Icon.svg" alt="" />
            Download CV
          </button>
        </div>
      </section>
      <section className="footer_section">
        <div className="footer_container">
          <p className="footer_text">
            Copyright <span className="brand_bold">Banana Studio</span> 2022 All
            Right Reserved
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
