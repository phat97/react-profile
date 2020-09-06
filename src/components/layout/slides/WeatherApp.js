import React from "react";
import { FiExternalLink } from "react-icons/fi";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Slide } from "pure-react-carousel";

export const WeatherApp = (props) => {
  return (
    <Slide index={props.index}>
      <div className="carosuel-item">
        <h1 className="slide-title">
          Today's Forecast - <span className="secondary-text">Personal</span>
        </h1>
        <div className="carousel-grid">
          <div className="project-detail">
            <p className="project-header">Description:</p>
            <p>
              Today's Forecast is a web application that takes in the user input of a city and return the
              current temperature and weather condition of the location.
            </p>
            <p>
              The application is built using C#, ASP.net Core 3.1 and RazorPages. I used GooglePlaceAPI
              for the auto-complete search and OpenWeatherAPI to get the weather condition.
            </p>
            <a href="https://pl-weather-app.herokuapp.com/" target="blank">
              <p className="site-url">
                Visit The Site <FiExternalLink />
              </p>
            </a>
          </div>
          <div className="project-tech">
            <p className="project-header">Technologies Used:</p>
            <table className="tech-table">
              <tbody>
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
              </tbody>
            </table>
          </div>
          <div className="project-example">
            <img src={process.env.PUBLIC_URL + "/images/WeatherProject.jpg"} alt="Weather App"></img>
          </div>
        </div>
      </div>
    </Slide>
  );
};
