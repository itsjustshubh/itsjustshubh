import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import Transition from "../../components/transition/Transition";
import MagneticButton from "../../components/magneticbutton/MagneticButton";
import { socialMedia } from "../../content/content"; // Adjust the path as necessary

import "./contact.css";

const Contact = () => {
  // Initialize state for each form field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("ypH20sH1xs_y9jrXi"); // Your actual user ID from EmailJS
  }, []);

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const templateParams = {
      name, // name from state
      email, // email from state
      message, // message from state
    };

    emailjs.send("service_mszk77x", "template_portfolio", templateParams).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message Sent Successfully");
        // Optionally reset the form fields
        setName("");
        setEmail("");
        setMessage("");
      },
      (error) => {
        console.log("FAILED...", error);
        alert("Failed to send message, try again");
      }
    );
  };

  return (
    <div className="contact page">
      <div className="container">
        <section className="contact-hero">
          <div className="contact-row">
            <div className="contact-col"></div>
            <div className="contact-col">
              <h1>
                Feel free to write me a message <span>or let's be social!</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="section contact-form">
          <div className="contact-row">
            <div className="contact-col">
              <p>
                <span>Contact</span>
              </p>
            </div>
            <div className="contact-col">
              <form onSubmit={sendEmail}>
                <div className="input">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="input">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="6"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                  <button type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* <section className="contact-subscribe">
          <div className="contact-row">
            <div className="contact-col">
              <p>
                <span>Newsletter</span>
              </p>
            </div>
            <div className="contact-col">
              <h3>
                Subscribe to my newsletter to get insights & advice on digital
                design
              </h3>
              <p>
                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
                ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Fuga, nobis.
              </p>

              <div className="input">
                <input type="text" placeholder="Email" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </section> */}

        <section className="contact-socials">
          <div className="contact-row">
            <div className="contact-col">
              <p>
                <span>Socials</span>
              </p>
            </div>
            <div className="contact-col">
              {socialMedia.map((link, index) => (
                <div key={index} className="contact-social-link">
                  <p>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.type}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <MagneticButton />
      </div>
    </div>
  );
};

export default Transition(Contact);
