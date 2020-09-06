import React from "react";
import { FiExternalLink } from "react-icons/fi";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Slide } from "pure-react-carousel";

export const Timewatch = (props) => {
  return (
    <Slide index={props.index}>
      <div className="carosuel-item">
        <h1 className="slide-title">
          Time Watch - <span className="secondary-text">Personal</span>
        </h1>
        <div className="carousel-grid">
          <div className="project-detail">
            <p className="project-header">Description:</p>
            <p>
              I built timewatch as a personal project to improve my understanding of React hook and state
              management. The functionalities are quite basic but the main focus of this project was to
              improve my code structure and design.
            </p>
            <p>The application is built using React.js and the states are stored in LocalData.</p>
            <a href="http://pl-timewatch.herokuapp.com/" target="blank">
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
                  <td>&#8226; React</td>
                  <td>&#8226; JavaScript</td>
                  <td>&#8226; HTML/CSS</td>
                  <td>&#8226; Heroku</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="project-example">
            <img src={process.env.PUBLIC_URL + "/images/timewatch.PNG"} alt="Time watch"></img>
          </div>
        </div>
      </div>
    </Slide>
  );
};
