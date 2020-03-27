import React from "react";
import { FaChevronDown } from "react-icons/fa"
import { Link } from 'react-scroll'

export const Overview = () => {
    return (
        <div className="container" id="overview">

            <div className="title">
                <h1 className="name text-selection-none">Phat Le</h1>
                <h1 className="position text-selection-none">WEB <span className="secondary-text">DEVELOPER</span></h1>
            </div>
            <span className="arrow-down"><Link to="about" smooth={true} duration={900}><FaChevronDown /></Link></span>

        </div >
    )
}