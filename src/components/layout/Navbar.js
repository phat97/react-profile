import React from 'react';
import { Link } from "react-scroll"
import { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'


export const Navbar = () => {
    const [navbarBackground, setNavbarBackground] = useState("inherit")

    useScrollPosition(({ prevPos, currPos }) => {
        const color = (Math.abs(currPos.y) > (window.innerHeight - 50)) ? "black" : "inherit";
        setNavbarBackground(color);
    }, [navbarBackground])

    return (
        <div className="navbar" style={{ backgroundColor: navbarBackground }}>
            <h1 className="portfolio text-selection-none">Personal <span className="secondary-text">Portfolio</span></h1>
            <div className="header-nav">
                <ul className="header-items text-selection-none">
                    <li><Link to="overview" smooth={true} duration={1000}>Home</Link></li>
                    <li><Link to="about" smooth={true} duration={1000}>About</Link></li>
                    <li><Link to="projects" smooth={true} duration={1000}>Projects</Link></li>
                    <li><Link to="skills" smooth={true} duration={1000}>Skills</Link></li>
                </ul>
            </div >
        </div >
    )
}