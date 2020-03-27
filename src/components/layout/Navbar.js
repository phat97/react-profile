import React from 'react';
import { Link } from "react-scroll"
import { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'


export const Navbar = () => {
    const [navbarBackground, setNavbarBackground] = useState("inherit");
    const [highlight, setHighlight] = useState("overview");

    useScrollPosition(({ prevPos, currPos }) => {
        let position = Math.abs(currPos.y);
        const color = (position > (window.innerHeight - 100)) ? "black" : "inherit";
        setNavbarBackground(color);

        switch (true) {
            case position >= window.innerHeight * 2.9:
                setHighlight("skills");
                break;
            case position >= window.innerHeight * 1.9:
                setHighlight("projects");
                break;
            case position >= window.innerHeight * 0.9:
                setHighlight("about");
                break;
            default:
                setHighlight("overview");
                break;
        }
    }, [navbarBackground])

    return (
        <div className="navbar" style={{ backgroundColor: navbarBackground }}>
            <h1 className="portfolio text-selection-none">Personal <span className="secondary-text">Portfolio</span></h1>
            <div className="header-nav">
                <ul className="header-items text-selection-none">
                    <li className={highlight === "overview" ? 'highlight' : null}><Link to="overview" smooth={true} duration={1500}>Home</Link></li>
                    <li className={highlight === "about" ? 'highlight' : null}><Link to="about" smooth={true} duration={1500}>About</Link></li>
                    <li className={highlight === "projects" ? 'highlight' : null}><Link to="projects" smooth={true} duration={1500}>Projects</Link></li>
                    <li className={highlight === "skills" ? 'highlight' : null}><Link to="skills" smooth={true} duration={1500}>Skills</Link></li>
                </ul>
            </div >
        </div >
    )
}