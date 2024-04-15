// NotFound.jsx
import React, { useEffect, useRef } from "react";
import "./not-found.css"; // Assuming you want to reuse the same CSS as the Home component

import Transition from "../../components/transition/Transition";

import { gsap } from "gsap";
import { Link } from "react-router-dom";

const NotFound = () => {
  const heroCopyReveal = useRef();
  const heroImageReveal = useRef();
  const heroTaglineReveal = useRef();

  useEffect(() => {
    heroCopyReveal.current = gsap
      .timeline({ paused: true })
      .to(".notfound-copy-wrapper h1, .notfound-copy-wrapper h3", {
        top: "0",
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.35,
      });

    heroImageReveal.current = gsap
      .timeline({ paused: true })
      .from(".notfound-img", {
        y: "1000",
        rotate: -10,
        duration: 1,
        ease: "power3.out",
        delay: 0.75,
      });

    heroTaglineReveal.current = gsap
      .timeline({ paused: true })
      .from(".notfound-tagline", {
        opacity: 0,
        bottom: "-5%",
        duration: 1,
        ease: "power3.out",
        delay: 1,
      });

    heroCopyReveal.current.play();
    heroImageReveal.current.play();
    heroTaglineReveal.current.play();
  }, []);

  return (
    <section className="notfound-section">
      <div className="notfound-copy">
        <div className="notfound-copy-wrapper">
          <h1>Error</h1>
        </div>
        <div className="notfound-copy-wrapper">
          <h1>404</h1>
          <h3>Page Not Found</h3>
        </div>
      </div>

      <div className="notfound-tagline">
        {/* <p>The page you are looking for does not exist.</p> */}

        <Link to="/" className="home-button">
          Return to Home
        </Link>
      </div>
    </section>
  );
};

export default Transition(NotFound);
