import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { meta, projects } from '../Content'; // Ensure this path is correct
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

/**
 * Projects component displays a list of projects with Masonry layout.
 */
function Projects() {
    const navigate = useNavigate();

    /**
     * Checks if the provided icon is an SVG.
     * @param {string|Object} icon - The icon to check.
     * @returns {boolean} True if icon is an SVG, false otherwise.
     */
    const isSvgIcon = (icon) => {
        return !(icon && icon.prefix && icon.iconName);
    };

    /**
     * Navigates back to the home page.
     */
    const handleBackClick = () => {
        navigate('/');
    };

    /**
     * Renders the project description.
     * @param {string} description - The project description text.
     * @returns {JSX.Element} The formatted description.
     */
    const renderDescription = (description) => {
        return description.split('\n').map((line, index) => (
            <React.Fragment key={index}>{line}<br /></React.Fragment>
        ));
    };

    /**
     * Sets up the Masonry layout for project cards.
     */
    useEffect(() => {
        // Initialize Masonry for the projects container
        const msnry = new Masonry('.projects-container', {
            itemSelector: '.project-card',
            columnWidth: '.project-card',
            percentPosition: true
        });

        // Layout Masonry after images have loaded
        imagesLoaded('.projects-container', () => {
            msnry.layout();
        });

        // Initialize Masonry for each button container
        document.querySelectorAll('.project-button-container').forEach(container => {
            const buttonMsnry = new Masonry(container, {
                itemSelector: '.ac_btn',
                columnWidth: 1 // Assuming equal width for all buttons
            });

            // Layout Masonry after images have loaded
            imagesLoaded(container, () => {
                buttonMsnry.layout();
            });
        });
    }, []);

    /**
     * Renders the icon, either as an image, SVG, or FontAwesome icon.
     * @param {string|Object} icon - The icon to render.
     * @returns {JSX.Element} The icon component.
     */
    const renderIcon = (icon) => {
        // Check if the icon is a string (URL to an image or SVG)
        if (typeof icon === 'string') {
            return <img src={icon} className="icon" alt="Icon" />;
        }
        // Check if the icon is a FontAwesome object
        else if (icon && icon.prefix && icon.iconName) {
            return <FontAwesomeIcon icon={icon} />;
        }
        // Handle other cases (e.g., JavaScript imported images)
        else {
            // Assuming the icon is imported as a JavaScript image
            return <img src={icon} className="icon" alt="Icon" />;
        }
    };

    /**
     * Renders a project button.
     * @param {Object} button - The button object to render.
     * @param {number} key - The key for React list rendering.
     * @returns {JSX.Element} The button component.
     */
    const renderButton = (button, key) => {
        return (
            <div className="ac_btn" key={key}
                 style={{
                     backgroundColor: button.buttonColor || 'transparent',
                     color: button.buttonTextColor || 'navajowhite'
                 }}
                 onMouseEnter={(e) => {
                     e.currentTarget.style.boxShadow = `inset 0 10vh 0 0 ${button.buttonHoverColor || 'navajowhite'}, 0.8vh 0.8vh 0 ${button.buttonBackgroundEffectColor || 'antiquewhite'}, -0.8vh -0.8vh 0 ${button.buttonBackgroundEffectColor || 'antiquewhite'}`;
                     e.currentTarget.style.color = button.buttonTextHoverColor || 'black';
                 }}
                 onMouseLeave={(e) => {
                     e.currentTarget.style.boxShadow = `inset 0 0 0 0 ${button.buttonColor || 'transparent'}, 0vh 0vh 0 ${button.buttonBackgroundEffectColor || 'antiquewhite'}, 0vh 0vh 0 ${button.buttonBackgroundEffectColor || 'antiquewhite'}`;
                     e.currentTarget.style.color = button.buttonTextHoverColor || 'black';
                     e.currentTarget.style.color = button.buttonTextColor || 'navajowhite';
                 }}>
                <a href={button.buttonLink} style={{color: 'inherit'}}>
                    {button.buttonIcon && renderIcon(button.buttonIcon)}
                    {button.buttonText}
                </a>
            </div>
        );
    };

    // Sorting projects in descending order based on hours
    const sortedProjects = projects.sort((a, b) => {
        return (b.hours || 0) - (a.hours || 0);
    });

    return (
        <div className="projects-page">
            <Helmet>
                <title>{meta.projects.title}</title>
                <meta name="description" content={meta.projects.description} />
                <meta name="keywords" content={meta.projects.keywords.join(", ")} />
                {/* Add other meta tags as needed */}
            </Helmet>
            <div className="projects-container">
                {sortedProjects.map((project, index) => (
                    <div key={index} className="project-card"
                         style={{backgroundColor: project.backgroundColor, color: project.textColor}}>
                        <div className="project-top">
                            <div className="project-image-container">
                                {isSvgIcon(project.image) ? (
                                    <img src={project.image} className="project-image" alt={project.name}/>
                                ) : (
                                    <FontAwesomeIcon icon={project.image} size="6x" className="project-image"/>
                                )}
                            </div>

                            <div className="project-header">
                                <h2 className="project-title">{project.name}</h2>
                                <p className="project-timeline">{project.timeline}</p>
                            </div>
                        </div>
                        <p className="project-description">{renderDescription(project.description)}</p>
                        <div className="project-button-container">
                            {project.buttons && project.buttons.map((button, idx) => renderButton(button, idx))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
