import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export const Projects = () => {



    return (
        <div className="container" id="projects">
            {/* <h1 className="project-highlight" data-aos="fade-in" data-aos-duration="1000">Projects Highlight</h1> */}
            <div className="project-container" data-aos="fade-up" data-aos-duration="1500" >
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={45}
                    totalSlides={3}
                    infinite={true}
                >
                    <Slider classNameAnimation="slider-animation">
                        <Slide index={0}>
                            <div className="carosuel-item">
                                <h1 className="slide-title">Weather App - <span className="secondary-text">Personal</span></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis consectetur nisi ut pharetra. Aenean elit nulla, dignissim vitae urna in, ornare vulputate mi. Sed congue efficitur lectus, nec mattis mi mattis non. Vivamus est risus, dignissim sit amet nisl sed, laoreet tincidunt ipsum. Nam aliquet quis nisi vitae vehicula. Nunc quis sapien non eros convallis blandit non vitae diam. Aliquam volutpat mauris eu mi facilisis, eu dapibus arcu condimentum. Aliquam efficitur</p>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="carosuel-item">
                                <h1 className="slide-title">Tsunami Solution Billing Form - <span className="secondary-text">Professional</span>
                                </h1>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className="carosuel-item">
                                <h1 className="slide-title">TalkToVern - <span className="secondary-text">Professional</span>
                                </h1>
                            </div>
                        </Slide>
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