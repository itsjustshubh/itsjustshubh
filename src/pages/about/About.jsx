import React from "react";
import "./about.css";

import Transition from "../../components/transition/Transition";
import { aboutData, details } from "../../content/content";
import Faq from "react-faq-component";
import Marquee from "react-fast-marquee";
import MagneticButton from "../../components/magneticbutton/MagneticButton";

import PortraitImg from "../../assets/images/home/portrait.jpg";

const About = () => {
  return (
    <div className="about page">
      <div className="container">
        <section className="about-marquee">
          <Marquee>
            <h1>{aboutData.marqueeText}</h1>
          </Marquee>
        </section>

        <section className="about-intro">
          <h2>{aboutData.introText}</h2>
        </section>

        <section className="about-intro-copy">
          <div className="about-row">
            <div className="about-col">
              <p>
                <span>{aboutData.introDetails.startDate}</span>
              </p>
            </div>
            <div className="about-col">
              <h3>{aboutData.introDetails.description}</h3>
              <h3 style={{ textIndent: "100px" }}>
                {aboutData.introDetails.accomplishment}
              </h3>
            </div>
          </div>
        </section>

        <section className="about-portrait">
          <div className="about-row">
            <div className="about-col">
              <p>
                <span>Contact</span>
              </p>
              <br />
              <br />
              {aboutData.contactInfo.map((info, index) => (
                <p key={index}>
                  {info.url ? (
                    <a
                      href={info.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="contact-label">{info.display}:</span>{" "}
                      {info.value}
                    </a>
                  ) : (
                    <span>
                      <span className="contact-label">{info.display}:</span>{" "}
                      {info.value}
                    </span>
                  )}
                </p>
              ))}

              <br />
              <br />
              <br />
            </div>
            <div className="about-col">
              <div className="about-portrait-img">
                <img src={PortraitImg} alt="" />
              </div>
              <div className="faqs">
                <Faq data={aboutData.faqData} />
              </div>
            </div>
          </div>
        </section>

        <section className="about-awards">
          <div className="about-row">
            <div className="about-col"></div>
            <div className="about-col award-header">
              <p>
                <span>Honors and Awards</span>
              </p>
            </div>
          </div>

          {aboutData.awardsData.map((award, index) => (
            <a
              href={award.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="about-row award-row">
                <div className="about-col">
                  <div className="award-year">
                    <p>{award.year}</p>
                  </div>
                  <div className="award-view">
                    <p>{award.awardName}</p>
                  </div>
                </div>
                <div className="about-col">
                  <div className="award-info">
                    <p>{award.awardEvent}</p>
                  </div>
                  <div className="award-project">
                    <p>{award.project}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </section>

        <section className="about-awards in-press">
          <div className="about-row">
            <div className="about-col"></div>
            <div className="about-col award-header">
              <p>
                <span>In Press</span>
              </p>
            </div>
          </div>

          {aboutData.pressData.map((item, index) => (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="about-row award-row">
                <div className="about-col">
                  <div className="award-year">
                    <p>{item.year}</p>
                  </div>
                  <div className="award-view">
                    <p>{item.event}</p>
                  </div>
                </div>
                <div className="about-col">
                  <div className="award-info">
                    <p>{item.source}</p>
                  </div>
                  <div className="award-project">
                    <p>{item.details}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </section>

        <section className="about-contact">
          <div className="about-contact-copy">
            <h2>Powered by Your Creativity</h2>
            <p>
              <span>
                For a CV, portfolio, or inquiries, please reach out to me at{" "}
                {details.email}
              </span>
            </p>

            <br />
            <p>
              <span>{details.phone}</span>
            </p>
            {/* <p>
              <span>Instagram • Twitter</span>
            </p> */}
          </div>
        </section>

        <MagneticButton />
      </div>
    </div>
  );
};

export default Transition(About);
