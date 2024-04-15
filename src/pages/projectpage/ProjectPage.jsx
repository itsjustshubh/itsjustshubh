import React, { useEffect, useRef } from "react";
import "./project-page.css";

import Transition from "../../components/transition/Transition";
import { Link } from "react-router-dom";
import { MetaLogo, XLogo } from "@phosphor-icons/react";
import gsap from "gsap";

import ProjectImg1 from "../../assets/images/projects/project-1.jpg";
import ProjectImg2 from "../../assets/images/projects/project-2.jpg";
import ProjectImg3 from "../../assets/images/projects/project-3.jpg";
import ProjectImg4 from "../../assets/images/projects/project-4.jpg";
import ProjectImg5 from "../../assets/images/projects/project-5.jpg";

const ProjectPage = ({ project, nextProject }) => {
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

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const imageRows = chunkArray(project.content.images, 2); // Split images into rows of two

  return (
    <div className="project page">
      <section className="project-hero">
        <img src={project.image} alt="" />
      </section>

      <div className="nextProjectPreviewBg">
        <img src={nextProject.image} alt="" />
      </div>

      <div className="container">
        <section className="project-title">
          <h1>{project.title}</h1>
          <p>{project.subtitle}</p>
        </section>

        <section className="project-brief">
          <h2>{project.content.title}</h2>
        </section>

        <section className="project-description">
          <div className="project-row">
            <div className="project-col">
              <div className="project-sub-col">
                <p>
                  <span>Year</span>
                </p>
                <p>{project.content.year}</p>
              </div>
              <div className="project-sub-col">
                <p>
                  <span>Credits</span>
                </p>
                {project.content.credits.map((credit, index) => (
                  <p key={index}>
                    <strong>{credit.role}</strong>: {credit.name}
                  </p>
                ))}

                <br />
                <br />

                <p>
                  <span>Goals</span>
                </p>
                {project.content.goals.map((goal, index) => (
                  <p key={index}>{goal}</p>
                ))}

                <br />
                <br />

                <p>
                  <span>Read More</span>
                  <br />
                </p>

                <p id="blog-share">
                  {project.content.buttons.map((button) => (
                    <div
                      key={button.id}
                      className="share-icon"
                      onClick={() => window.open(button.link, "_blank")}
                    >
                      <button.icon {...button.iconProps} />
                    </div>
                  ))}
                </p>
              </div>
            </div>
            <div className="project-col">
              <p>
                <span>Description</span>
              </p>
              <div
                dangerouslySetInnerHTML={{
                  __html: project.content.description,
                }}
              />
            </div>
          </div>
        </section>

        <section className="project-images">
          {imageRows.map((row, rowIndex) => (
            <div key={rowIndex} className="project-img-row">
              {row.map((img, imgIndex) => (
                <div key={imgIndex} className="project-img">
                  <img
                    src={img}
                    alt={`Project Image ${rowIndex * 2 + imgIndex + 1}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </section>

        <section className="next-project">
          <div className="next-project-preview">
            <img src={nextProject.image} alt="" />
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
              <Link to={nextProject.link}>{nextProject.title}</Link>
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Transition(ProjectPage);
