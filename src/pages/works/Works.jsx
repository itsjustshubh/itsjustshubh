import React, { useRef, useEffect } from "react";
import "./works.css";

import Transition from "../../components/transition/Transition";
import { Link } from "react-router-dom";

import Marquee from "react-fast-marquee";
import MagneticButton from "../../components/magneticbutton/MagneticButton";
import { gsap } from "gsap";

// Import the projects from the projects content file
import { projects } from "../../content/projectsContent";

const Works = () => {
  const workCopyReveal = useRef();

  useEffect(() => {
    workCopyReveal.current = gsap.timeline({ paused: true }).to("h1", {
      top: "0",
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.35,
    });

    workCopyReveal.current.play();
  }, []);

  let lastHoveredIndex = null;
  const projectPreviewContainer = document.querySelector(".project-preview");

  const handleResetPreview = () => {
    const projectPreviewContainer = document.querySelector(".project-preview");

    gsap.to(".project-preview img", {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        lastHoveredIndex = -1;
      },
    });
  };

  const handleMouseOver = (index) => {
    const projectPreviewContainer = document.querySelector(".project-preview");

    if (index !== lastHoveredIndex) {
      console.log(`Hovered ${index}`);

      const img = document.createElement("img");
      img.src = projects[index - 1].image; // Use the image from the projects array
      projectPreviewContainer.appendChild(img);

      gsap.to(img, {
        opacity: 1,
        duration: 0.3,
        onComplete: () => {
          const allPrevImages = projectPreviewContainer.querySelectorAll("img");

          if (allPrevImages.length > 1) {
            Array.from(allPrevImages)
              .slice(0, -1)
              .forEach((img) => {
                setTimeout(() => {
                  img.remove();
                }, 1000);
              });
          }
        },
      });

      lastHoveredIndex = index;
    }
  };

  useEffect(() => {
    const projectItems = document.querySelectorAll(".project-item");

    projectItems.forEach((item, index) => {
      item.addEventListener("mouseover", () => handleMouseOver(index + 1));
    });

    return () => {
      projectItems.forEach((projectItem) => {
        projectItem.removeEventListener("mouseover", () =>
          handleMouseOver(index + 1)
        );
      });
    };
  }, []);

  const getYearRange = (projects) => {
    const years = projects.map((project) => project.content.year);
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);
    return { minYear, maxYear };
  };

  const { minYear, maxYear } = getYearRange(projects);

  return (
    <div className="works page">
      <div className="project-preview"></div>
      <div className="container">
        <section
          className="works-hero"
          onMouseOver={() => {
            handleResetPreivew();
          }}
        >
          <div className="work-copy-wrapper">
            <h1>CASES</h1>
          </div>
          <div className="work-copy-wrapper">
            <h1>
              {minYear} • {maxYear}
            </h1>
          </div>
        </section>

        <section className="project-list">
          {projects.map((project, index) => (
            <div key={project.id} className="project-list-row">
              {/* Conditionally render whitespace before or after the project based on index */}
              {index % 2 === 0 ? null : (
                <div className="project-list-col whitespace-col"></div>
              )}
              <div className="project-list-col">
                <Link to={project.link}>
                  <div
                    className="project-item"
                    onMouseOver={() => handleMouseOver(project.id)}
                  >
                    <div className="project-img">
                      <img src={project.image} alt="" />
                    </div>
                    <div
                      className={`project-copy ${
                        index % 2 === 0 ? "copy-pos-right" : "copy-pos-left"
                      }`}
                    >
                      <h2>{project.title}</h2>
                    </div>
                  </div>
                </Link>
              </div>
              {/* Render whitespace on the opposite side based on index */}
              {index % 2 === 0 ? (
                <div className="project-list-col whitespace-col"></div>
              ) : null}
            </div>
          ))}
        </section>

        {/* <div
          className="works-marquee"
          onMouseOver={() => {
            handleResetPreivew();
          }}
        >
          <Marquee>
            <h1>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
              odit?
            </h1>
          </Marquee>
        </div> */}

        {/* <div
          className="magnetic-btn"
          onMouseOver={() => {
            handleResetPreivew();
          }}
        >
          <MagneticButton />
        </div> */}
      </div>
    </div>
  );
};

export default Transition(Works);
