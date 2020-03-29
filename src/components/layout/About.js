import React from 'react';

export const About = () => {
    return (
        <div className="container" id="about">
            <div className="left-col">
                <p className="about-title">Curious and creative, I am constantly pushing for higher goals.</p>
                <p className="about-subtitle">I enjoy exploring the complexity of web development and diving into the creative world of cooking.</p>
            </div>
            <div className="right-col">
                <img className="me" src={process.env.PUBLIC_URL + "/images/me.jpg"} alt="me"></img>
                <div className="contact-info">
                    <h3>Contact Info</h3>
                    <p><a href="https://github.com/phat97">Github</a></p>
                    <p><a href="https://www.linkedin.com/in/phat-le/">linkedin</a></p>
                    <p>phat.le@hotmail.com</p>
                    <p>(778)-318-3441</p>
                </div>
            </div>
        </div>
    )
}