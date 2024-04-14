import React, { useEffect, useRef } from "react";
import "./sample-project.css";

import Transition from "../../components/transition/Transition";
import { Link } from "react-router-dom";
import gsap from "gsap";

import ProjectImg1 from "../../assets/images/projects/project-1.jpg";
import ProjectImg2 from "../../assets/images/projects/project-2.jpg";
import ProjectImg3 from "../../assets/images/projects/project-3.jpg";
import ProjectImg4 from "../../assets/images/projects/project-4.jpg";
import ProjectImg5 from "../../assets/images/projects/project-5.jpg";

const SampleProject = () => {
  const nextProjectPreview = useRef();
  const nextProjectPreviewBg = useRef();

  const handleNextProjectHover = () => {
    nextProjectPreview.current.play();
    nextProjectPreviewBg.current.play();
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const nextProjectContainer = document.querySelector(
      ".next-project-preview"
    );

    gsap.to(".next-project-preview", {
      x: clientX - nextProjectContainer.offsetWidth / 2,
      y: clientY - nextProjectContainer.offsetHeight / 2,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleNextProjectHoverOut = () => {
    nextProjectPreview.current.reverse();
    nextProjectPreviewBg.current.reverse();
  };

  useEffect(() => {
    nextProjectPreview.current = gsap
      .timeline({ paused: true })
      .to(".next-project-preview", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      });

    nextProjectPreviewBg.current = gsap
      .timeline({ paused: true })
      .to(".nextProjectPreviewBg", {
        opacity: 1,
        duration: 0.3,
      });
  }, []);

  return (
    <div className="project page">
      <section className="project-hero">
        <img src={ProjectImg2} alt="" />
      </section>

      <div className="nextProjectPreviewBg">
        <img src={ProjectImg3} alt="" />
      </div>

      <div className="container">
        <section className="project-title">
          <h1>Quantleaf</h1>
          <p>UX/UI • Website</p>
        </section>

        <section className="project-brief">
          <h2>
            Complete rebranding and digital transformation for Quanleaf, a
            cutting-edge biotech firm based in Boston, specializing in
            sustainable agricultural solutions.
          </h2>
        </section>

        <section className="project-description">
          <div className="project-row">
            <div className="project-col">
              <div className="project-sub-col">
                <p>
                  <span>Year</span>
                </p>
                <p>2023</p>
              </div>
              <div className="project-sub-col">
                <p>
                  <span>Credits</span>
                </p>
                <p>Client: Quanleaf Innovations</p>
                <p>Creative Direction: Elena Miro</p>
                <p>Art Director: Samuel Hyde</p>
                <p>Designers: Lucia Grant, Alex Moreno</p>
                <p>Brand Strategy: Orion Strategies</p>
              </div>
            </div>
            <div className="project-col">
              <p>
                <span>Goals</span>
              </p>
              <p>
                The Quanleaf project aimed to revolutionize the brand's digital
                presence, aligning it with their mission to innovate in the
                field of sustainable agriculture. Our objectives were to craft a
                brand identity that resonates with their core values of
                sustainability, innovation, and community engagement. We focused
                on developing a user-friendly, informative website that
                showcases Quanleaf's groundbreaking research and product
                offerings, while also facilitating engagement and collaboration
                within the biotech and agricultural sectors. Through strategic
                branding, engaging design, and intuitive user experience, we
                aimed to position Quanleaf as a leader in sustainable biotech
                solutions, driving awareness, and fostering a community of
                advocates and partners.
              </p>
            </div>
          </div>
        </section>

        <section className="project-images">
          <div className="project-img-row">
            <div className="project-img">
              <img src={ProjectImg1} alt="" />
            </div>

            <div className="project-img">
              <img src={ProjectImg2} alt="" />
            </div>
          </div>
          <div className="project-img-row">
            <div className="project-img">
              <img src={ProjectImg3} alt="" />
            </div>

            <div className="project-img">
              <img src={ProjectImg4} alt="" />
            </div>
          </div>
          <div className="project-img-row">
            <div className="project-img">
              <img src={ProjectImg5} alt="" />
            </div>

            <div className="project-img"></div>
          </div>
        </section>

        <section className="next-project">
          <div className="next-project-preview">
            <img src={ProjectImg3} alt="" />
          </div>
          <div className="next-project-copy">
            <p>
              <span>Next Project</span>
            </p>
            <h1
              onMouseOver={() => {
                handleNextProjectHover();
                document.addEventListener("mousemove", handleMouseMove);
              }}
              onMouseOut={() => {
                handleNextProjectHoverOut();
                document.removeEventListener("mousemove", handleMouseMove);
              }}
            >
              <Link to="/">Mystrove Leaf</Link>
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Transition(SampleProject);
