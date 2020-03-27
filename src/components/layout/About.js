import React from 'react';
import { FaBookReader } from 'react-icons/fa'
import { GiBrain } from 'react-icons/gi'

export const About = () => {
    return (
        <div className="container" id="about">
            <div className="left-col">
                <p className="about-title">Curious and creative, I am constantly pushing to accomplish my goal — to be more knowledgeable.</p>
                <p className="about-subtitle">I satisfy my thirst for knowledge by exploring the complexity of web development and diving into the creative world of cooking.</p>
            </div>
            <div className="right-col">
                <span className="book"><FaBookReader /></span>
                <span className="brain"><GiBrain /></span>
            </div>

        </div>
    )
}