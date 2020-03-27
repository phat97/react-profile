import React from "react";
import { FaChevronDown } from "react-icons/fa"
import { Navbar } from "../Navbar"

export const Overview = () => {
    return (
        <div className="container overview">
            <h1 className="portfolio text-selection-none">Personal <span className="secondary-text">Portfolio</span></h1>
            <div className="title">
                <h1 className="name text-selection-none">Phat Le</h1>
                <h1 className="position text-selection-none">Web <span className="secondary-text">Developer</span></h1>
            </div>
            <Navbar />
            <span className="arrow-down"><FaChevronDown /></span>

        </div>
    )
}