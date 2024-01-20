import React, { useState, useEffect } from 'react';
import './NotFoundPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { errorPage } from '../Content';

/**
 * NotFoundPage component renders a 404 error page.
 * It displays a title, subtitle, a navigational button, and rotating quotes.
 */
const NotFoundPage = () => {
    const navigate = useNavigate();
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    /**
     * Effect to hide the navbar when the page is rendered.
     */
    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        if (navbar) navbar.style.display = 'none';

        // Reset the navbar style on component unmount
        return () => {
            if (navbar) navbar.style.display = '';
        };
    }, []);

    /**
     * Navigates to the specified page when the button is clicked.
     */
    const goToPage = () => {
        navigate(errorPage.button.link);
    };

    /**
     * Effect to handle the rotation and fading of quotes.
     */
    useEffect(() => {
        const interval = setInterval(() => {
            setFadeOut(true);
            setTimeout(() => {
                setCurrentQuoteIndex(prevIndex =>
                    (prevIndex + 1) % errorPage.quotes.length
                );
                setFadeOut(false);
            }, 1000);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const currentQuote = errorPage.quotes[currentQuoteIndex];

    return (
        <div className="page">
            <h1 className="page__title">{errorPage.title}</h1>
            <p className="page__subtitle">{errorPage.subtitle}</p>
            <button className="page__button" onClick={goToPage}>
                <FontAwesomeIcon icon={faArrowCircleLeft} /> {errorPage.button.text}
            </button>
            <div className={`quote-container ${fadeOut ? 'fade-out' : ''}`}>
                <p className="page__text">{currentQuote.text}</p>
                <p className="page__text__writer">~ {currentQuote.writer}</p>
            </div>
        </div>
    );
};

export default NotFoundPage;
