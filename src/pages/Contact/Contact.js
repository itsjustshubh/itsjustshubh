import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialProfiles } from '../Content'; // Ensure this path is correct
import './Contact.css'; // Ensure you have a Contact.css for styling
import { useNavigate } from 'react-router-dom';

/**
 * Contact component that displays social profile links.
 */
function Contact() {
    const navigate = useNavigate();

    /**
     * Navigate back to the home page.
     */
    const handleBackClick = () => {
        navigate('/');
    };

    /**
     * Determines if the provided icon is an SVG.
     * 
     * @param {string|Object} icon - The icon to check.
     * @returns {boolean} - True if the icon is an SVG, false otherwise.
     */
    const isSvgIcon = (icon) => {
        return typeof icon === 'string';
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="social-links">
                    {socialProfiles.map((profile, index) => (
                        <a key={index}
                           href={profile.link}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="social-link"
                           style={{ backgroundColor: profile.color }}>
                            {isSvgIcon(profile.icon) ?
                                <img src={profile.icon} className="icon" alt={profile.name} /> :
                                <FontAwesomeIcon icon={profile.icon} className="icon" />
                            }
                            {profile.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Contact;
