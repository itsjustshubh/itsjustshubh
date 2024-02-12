import React, { useEffect, useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import { styling } from "../Content";
import { useLocation, NavLink } from 'react-router-dom';
import { FaHome, FaGraduationCap, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'
import './Layout.css';

/**
 * Layout component used to structure the main layout of the application.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The children elements to be rendered within the layout.
 * @param {boolean} props.loading - The loading state of the application.
 * @returns {React.ReactElement} - The rendered layout component.
 */
function Layout({ children, loading }) {
  // Initialize isMobile state with a function to ensure window object is available
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 600;
    }
    return false; // Default value if window is not available
  });

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 600);
      }
    };

    window.addEventListener('resize', handleResize);
    // Call handleResize initially in case the initial width is not < 600
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Configuration for the animated cursor
  const cursorConfig = {
    innerSize: 0.007 * window.innerHeight + 0.007 * window.innerWidth,
    outerSize: 0.02 * window.innerHeight + 0.02 * window.innerWidth,
    color: '256, 256, 256', // RGB equivalent of orangered
    outerAlpha: 0.4,
    innerScale: 0.5,
    outerScale: 2,
  };

  // Hook to access the current location
  const location = useLocation();

  /**
   * Determines if the provided path is the active route.
   *
   * @param {string} path - The path to check against the current location.
   * @returns {boolean} - True if the path is active, false otherwise.
   */
  const isActive = (path) => location.pathname === path;

  return (
      <div className="layout-background">
        <ShaderGradientCanvas
            importedFiber={{...fiber, ...drei, ...reactSpring}}
            style={{
              position: 'absolute',
              top: 0,
              width: '100%',
              height: '100%',
              zIndex: -1,
              pointerEvents: 'none' // Disabling pointer events
            }}
        >
          <ShaderGradient
              control='query'
              urlString=
                  'https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.1&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23c45c00&color2=%23b20000&color3=%237b0e00&destination=onCanvas&embedMode=off&envPreset=dawn&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=env&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=waterPlane&uDensity=1.3&uFrequency=5.5&uSpeed=0.2&uStrength=4&uTime=0&wireframe=false'
          />
        </ShaderGradientCanvas>
        <div className="navbar">
          <ul>
            <li>
              <NavLink to="/" className={isActive('/') ? 'nav-link nav-link-active' : 'nav-link'}>
                Home&nbsp;
              </NavLink>
            </li>
            <li>
              <NavLink to="/education" className={isActive('/education') ? 'nav-link nav-link-active' : 'nav-link'}>
                Education
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={isActive('/projects') ? 'nav-link nav-link-active' : 'nav-link'}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={isActive('/contact') ? 'nav-link nav-link-active' : 'nav-link'}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {!isMobile && <AnimatedCursor {...cursorConfig} />}
        {/*<video className="background-video" autoPlay muted loop playsInline>*/}
        {/*  <source src={styling.background} type="video/mp4"/>*/}
        {/*</video>*/}
        {children}

        {isMobile && (
            <div className="mobile-icon-navbar">
              <NavLink to="/" className={isActive('/') ? 'active' : ''}>
                <FaHome/>
                <span>Home</span>
              </NavLink>
              <NavLink to="/education" className={isActive('/education') ? 'active' : ''}>
                <FaGraduationCap/>
                <span>Education</span>
              </NavLink>
              <NavLink to="/projects" className={isActive('/projects') ? 'active' : ''}>
                <FaBriefcase/>
                <span>Projects</span>
              </NavLink>
              <NavLink to="/contact" className={isActive('/contact') ? 'active' : ''}>
                <FaEnvelope/>
                <span>Contact</span>
              </NavLink>
            </div>
        )}
      </div>
  );
}

export default Layout;
