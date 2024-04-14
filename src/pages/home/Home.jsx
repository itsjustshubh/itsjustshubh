import React, { useEffect, useRef } from "react";
import "./home.css";

import Transition from "../../components/transition/Transition";
import PortraitImg from "../../assets/images/home/portrait.jpg";
import { details } from "../../content";

import { gsap } from "gsap";

const Home = () => {
  const heroCopyReveal = useRef();
  const heroImageReveal = useRef();
  const heroTaglineReveal = useRef();

  useEffect(() => {
    heroCopyReveal.current = gsap.timeline({ paused: true }).to("h1", {
      top: "0",
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.35,
    });

    heroImageReveal.current = gsap
      .timeline({ paused: true })
      .from(".hero-img", {
        y: "1000",
        rotate: -10,
        duration: 1,
        ease: "power3.out",
        delay: 0.75,
      });

    heroTaglineReveal.current = gsap
      .timeline({ paused: true })
      .from(".hero-tagline", {
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
    <section className="hero-section">
      <div className="hero-img">
        <img src={PortraitImg} alt="" />
      </div>
      <div className="hero-copy">
        <div className="hero-copy-wrapper">
          <h1>{details.lastName}</h1>
        </div>
        <div className="hero-copy-wrapper">
          <h1>{details.firstName}</h1>
        </div>
      </div>

      <div className="hero-tagline">
        <p>{details.tagline}</p>
      </div>
    </section>
  );
};

export default Transition(Home);
