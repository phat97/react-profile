import React from 'react';

export const Skillset = () => {
    return (
        <div className="container" id="skills">
            <div className="skill-description">
                <h1 className="skill-title" data-aos="fade-right">Skills & Experience</h1>
                <p data-aos="fade-up" data-aos-delay="200">Many of my web development skills is self-taught. I follow tutorials, read documentation and
                build small and large projects to get a deeper understanding.
                </p>
                <p data-aos="fade-up" data-aos-delay="350" >I've built full-stack applications with a team and individually as well.</p>
                <p data-aos="fade-up" data-aos-delay="500">I am currently learning more modern languages/technologies such as React, C#, ASP.Net Core and trying
                    to follow industry coding practices when building my projects.</p>
            </div>
            <div className="web-skill-list" data-aos="flip-right" data-aos-delay="200" data-aos-duration="2000">
                <h1 className="skillset-title">Web Development</h1>
                <div className="icon-container">
                    <div className="skill-icon" >
                        <img src={process.env.PUBLIC_URL + "/icons/html.svg"} alt="html"></img>
                    </div>

                    <div className="skill-icon" >
                        <img src={process.env.PUBLIC_URL + "/icons/css.svg"} alt="css"></img>
                    </div>

                    <div className="skill-icon" >
                        <img src={process.env.PUBLIC_URL + "/icons/javascript.svg"} alt="JavaScript"></img>
                    </div>

                    <div className="skill-icon" >
                        <img src={process.env.PUBLIC_URL + "/icons/sql.png"} alt="SQL"></img>
                    </div>
                    <div className="skill-icon" >
                        <img src={process.env.PUBLIC_URL + "/icons/csharp.png"} alt="C#"></img>
                    </div>
                    <div className="skill-icon" >
                        <img src={process.env.PUBLIC_URL + "/icons/dotNetCore.png"} alt="ASP.Net Core"></img>
                    </div>
                    <div className="skill-icon" >
                        <img src={process.env.PUBLIC_URL + "/icons/react.png"} alt="React"></img>
                    </div>
                    <div className="skill-icon" >
                        <img src={process.env.PUBLIC_URL + "/icons/aws.png"} alt="EC2 AWS"></img>
                    </div>
                    <div className="skill-icon" >
                        <img src={process.env.PUBLIC_URL + "/icons/heroku.svg"} alt="Heroku"></img>
                    </div>
                    <div className="skill-icon" >
                        <img src={process.env.PUBLIC_URL + "/icons/node.png"} alt="Node"></img>
                    </div>
                </div>
            </div>
            <div className="other-skill-list" data-aos="flip-right" data-aos-delay="350" data-aos-duration="2000">
                <h1 className="skillset-title">Other Skills</h1>
                <div className="icon-container">
                    <div className="skill-icon" >
                        <img src={process.env.PUBLIC_URL + "/icons/java.png"} alt="Java"></img>
                    </div>

                    <div className="skill-icon" >
                        <img src={process.env.PUBLIC_URL + "/icons/c.png"} alt="C"></img>
                    </div>

                    <div className="skill-icon" >
                        <img src={process.env.PUBLIC_URL + "/icons/linux.png"} alt="Linux"></img>
                    </div>

                    <div className="skill-icon" >
                        <img src={process.env.PUBLIC_URL + "/icons/git.svg"} alt="Git"></img>
                    </div>
                    <div className="skill-icon" >
                        <img src={process.env.PUBLIC_URL + "/icons/vs.svg"} alt="Visual Studio"></img>
                    </div>
                    <div className="skill-icon" >
                        <img src={process.env.PUBLIC_URL + "/icons/vscode.svg"} alt="VS Code"></img>
                    </div>
                </div>
            </div>
        </div >
    )
}