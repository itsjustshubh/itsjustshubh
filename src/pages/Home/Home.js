import React, { useState, useEffect } from "react";
import './Home.css';
import {meta, data, skills} from "../Content";
import { NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet';
import ReactTyped from "typewriter-effect";
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import imageOne from '../../assets/images/home/image-one.png';
import imageTwo from '../../assets/images/home/image-two.png';
import imageThree from '../../assets/images/home/image-three.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home({loaded}) {
  // State declarations
  const [loading, setLoading] = useState(loaded);
  const [slideLoading, setSlideLoading] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // State for current skill index remains the same
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [skillFadeOut, setSkillFadeOut] = useState(false);
  const skillsLength = skills.length; // Length of the skills array

  useEffect(() => {
    const skillInterval = setInterval(() => {
      setSkillFadeOut(true); // Start fade out
      setTimeout(() => {
        setCurrentSkillIndex((prevIndex) =>
          (prevIndex + 1) % skillsLength
        );
        setSkillFadeOut(false); // Reset for fade in
      }, 1000); // Change skill after fade out (1s duration)
    }, 4000); // Change skill every 4 seconds (includes 1s for fade out)

    return () => clearInterval(skillInterval);
  }, [skillsLength]);

  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [subtitleFadeOut, setSubtitleFadeOut] = useState(false);
  const subtitlesLength = data.animated.length; // Assuming data.animated is an array of strings

  useEffect(() => {
    const subtitleInterval = setInterval(() => {
      setSubtitleFadeOut(true); // Start fade out
      setTimeout(() => {
        setCurrentSubtitleIndex(prevIndex =>
          (prevIndex + 1) % subtitlesLength
        );
        setSubtitleFadeOut(false); // Reset for fade in
      }, 3000); // Change subtitle after fade out (1s duration)
    }, 4000); // Change subtitle every 4 seconds (includes 1s for fade out)

    return () => clearInterval(subtitleInterval);
  }, [subtitlesLength]);

  // Effects for loading and cursor movement
  useEffect(() => {
    if (!loaded) {
      // Show loading screen only if not loaded before
      const timer = setTimeout(() => {
        setSlideLoading(true);
        setTimeout(() => setLoading(false), 3000);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [loaded]); // Dependency on loaded

  // Skills rendering
  const renderSkillButtons = () => {
    return skills.map((skill, index) => (
        <button
            key={index}
            className="home_project_btn"
            style={{
                backgroundColor: skill.backgroundColor,
                color: skill.textColor
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = skill.backgroundColorHover;
                e.currentTarget.style.color = skill.textColorHover;

                // Update icon color on hover
                const iconElement = e.currentTarget.querySelector('.icon');
                if (iconElement) {
                    iconElement.style.color = skill.iconColorHover;

                    // Swap icon if iconHover is provided
                    if (skill.iconHover) {
                        iconElement.classList.remove(skill.icon);
                        iconElement.classList.add(skill.iconHover);
                    }
                }
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = skill.backgroundColor;
                e.currentTarget.style.color = skill.textColor;

                // Revert icon color and icon when not hovered
                const iconElement = e.currentTarget.querySelector('.icon');
                if (iconElement) {
                    iconElement.style.color = skill.iconColor;

                    // Revert to original icon if iconHover is provided
                    if (skill.iconHover) {
                        iconElement.classList.remove(skill.iconHover);
                        iconElement.classList.add(skill.icon);
                    }
                }
            }}
        >
            {typeof skill.icon === 'string' ? (
                <img
                    src={skill.icon}
                    alt={skill.name}
                    className="icon"
                    style={{ color: skill.iconColor }}
                />
            ) : (
                <FontAwesomeIcon
                    icon={skill.icon}
                    className="icon"
                    style={{ color: skill.iconColor }}
                />
            )}
            {skill.name}
        </button>
    ));
};

  useEffect(() => {
    // Create a link element for the favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = meta.home.favicon;

    // Append the link to the head of the document
    document.head.appendChild(link);

    // Remove the link when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Fallback logic for images
  const faviconImage = meta.home.favicon || meta.home.og.image;
  const twitterImage = meta.home.twitter.image || meta.home.og.image;
  const ogImage = meta.home.og.image;

  return (
    <div>
        <Helmet>
            <title>{meta.home.title}</title>
            <meta name="description" content={meta.home.description}/>
            <meta name="keywords" content={meta.home.keywords.join(", ")}/>
            {/* Add additional meta tags as needed */}
        </Helmet>

        {loading && (
            <div className={`loading-background ${slideLoading ? 'slide-out' : ''}`}>
            <div className="loader">
                <span className="loadTitleOne">{data.loadTitleOne} </span>
                <span className="loadTitleTwo"> {data.loadTitleTwo}</span>
            </div>
        </div>
      )}

        {!loading && (
            // Your main app content goes here
            <div style={{backgroundColor: "black"}}>
              <div className="title">
                {data.title}
              </div>

              <h1 className="subtitle">
                A&nbsp;
                <ReactTyped
                    options={{
                      strings: data.animated,
                      autoStart: true,
                      delay: 50,
                      loop: true,
                      deleteSpeed: 2,
                    }}
                />
              </h1>

              <div className="description">
                {data.description.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br/>
                    </React.Fragment>
                ))}
              </div>

              <div className="skillText_container">
                <div className="skillText">
                  {data.skill}
                </div>
              </div>

              {/* New container element */}
              <div className="home_project_btn_container">
                {renderSkillButtons()}
              </div>
            </div>
        )}
    </div>
  );
}

export default Home;
