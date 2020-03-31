import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export const Projects = () => {



    return (
        <div className="container" id="projects">
            <h1 className="project-highlight" data-aos="fade-in" data-aos-duration="1000">Projects Highlight</h1>
            <div className="project-container" data-aos="fade-up" >
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={38}
                    totalSlides={3}
                    infinite={true}
                >
                    <Slider classNameAnimation="slider-animation">
                        <Slide index={0}><div className="carosuel-item"><h1 className="slide-title">Weather App - <span className="secondary-text">Personal</span></h1></div></Slide>
                        <Slide index={1}><div className="carosuel-item"><h1 className="slide-title">Tsunami Solution Billing Form - <span className="secondary-text">Professional</span></h1></div></Slide>
                        <Slide index={2}><div className="carosuel-item"><h1 className="slide-title">TalkToVern - <span className="secondary-text">Professional</span></h1></div></Slide>
                    </Slider>
                    <ButtonBack className="backward-btn"><FaChevronLeft className="slider-btn" /></ButtonBack>
                    <ButtonNext className="forward-btn"><FaChevronRight className="slider-btn" /></ButtonNext>
                    <div className="dots">
                        <DotGroup />
                    </div>
                </CarouselProvider>

            </div>
        </div >
    )
}