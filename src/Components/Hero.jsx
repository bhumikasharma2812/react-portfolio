import React, { useState, useEffect } from 'react';
import './Hero.css';
import pic from '../assets/pic.jpg';

const Hero = () => {
    const [isFrontend, setIsFrontend] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFrontend((prev) => !prev);
        }, 3000); // Changes text every 3 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (
        <div className='hero'>
            <img src={pic} alt="" />
            <h1>
                Hello, I am Bhumika Sharma,<span> {isFrontend ? 'Front-End Developer' : 'WordPress Developer'}</span>
            </h1>
            <p>
                I'm a web developer with 1 year of front-end experience, focused on creating functional, visually appealing applications with a drive for learning and innovation.
            </p>
            <div className="hero-connect-resume">
                <div className="hero-connect">
                    Connect With Me
                </div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    );
}

export default Hero;

