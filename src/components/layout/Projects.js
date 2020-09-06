import React from "react";
import { CarouselProvider, Slider, ButtonBack, ButtonNext, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { WeatherApp, SafetyLine, TalktoVern } from "./slides/ExportSlides";

export const Projects = () => {
  return (
    <div className="container" id="projects">
      <div
        className="project-container"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={45}
          totalSlides={3}
          infinite={true}
          dragEnabled={false}
        >
          <Slider classNameAnimation="slider-animation">
            <WeatherApp index={0} />
            <SafetyLine index={1} />
            <TalktoVern index={2} />
          </Slider>
          <ButtonBack className="backward-btn">
            <FaChevronLeft className="slider-btn" />
          </ButtonBack>
          <ButtonNext className="forward-btn">
            <FaChevronRight className="slider-btn" />
          </ButtonNext>
          <div className="dots">
            <DotGroup />
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};
