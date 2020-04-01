import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { FiExternalLink } from 'react-icons/fi'

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
                    dragEnabled={false}
                >
                    <Slider classNameAnimation="slider-animation">
                        <Slide index={0}>
                            <div className="carosuel-item">
                                <h1 className="slide-title">Today's Forecast - <span className="secondary-text">Personal</span></h1>
                                <div className="carousel-grid">
                                    <div className="project-detail">
                                        <p className="project-header">Description:</p>
                                        <p>Today's Forecast is a web application that takes in the user input of a city and return the current
                                        temperature and weather condition of the location. </p>
                                        <p>The application is built using C#, ASP.net Core 3.1 and RazorPages.
                                        I used GooglePlaceAPI for the auto-complete search and OpenWeatherAPI to get the weather condition.</p>
                                        <a href="https://pl-weather-app.herokuapp.com/"><p className="site-url">Visit The Site <FiExternalLink /></p></a>
                                    </div>
                                    <div className="project-tech">
                                        <p className="project-header">Technologies Used:</p>
                                        <table className="tech-table">
                                            <tr>
                                                <td>&#8226; C#</td>
                                                <td>&#8226; ASP.Net Core 3.1</td>
                                                <td>&#8226; RazorPages</td>
                                                <td>&#8226; MVC</td>
                                            </tr>
                                            <tr>
                                                <td>&#8226; JavaScript</td>
                                                <td>&#8226; GooglePlaceAPI</td>
                                                <td>&#8226; Heroku</td>
                                            </tr>
                                            <tr>
                                                <td>&#8226; HTML/CSS</td>
                                                <td>&#8226; OpenWeatherAPI</td>
                                                <td>&#8226; Docker</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className="project-example">
                                        <img src={process.env.PUBLIC_URL + "/images/WeatherProject.jpg"} alt="Weather App"></img>
                                    </div>

                                </div>
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