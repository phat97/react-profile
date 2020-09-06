import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Slide } from "pure-react-carousel";

export const SafetyLine = (props) => {
  return (
    <Slide index={props.index}>
      <div className="carosuel-item">
        <h1 className="slide-title">
          SafetyLine Billing Form - <span className="secondary-text">Professional</span>
        </h1>
        <div className="carousel-grid">
          <div className="project-detail">
            <p className="project-header">Description:</p>
            <p>
              SafetyLine billing form is a 1 month long project selected as part of the BCIT curriculum
              called a practicum. It is essentially an unpaid internship to gain work experience.
            </p>
            <p>
              My team and I converted an outdate .NET desktop application into a responsible web
              application with modern UX/UI.
            </p>
            <p>
              I was the project manager of the team. I did most of the communication with the client and
              organized weekly sprints for my team. I also worked on the backend with another member.
            </p>
          </div>
          <div className="project-tech">
            <p className="project-header">Technologies Used:</p>
            <table className="tech-table">
              <tbody>
                <tr>
                  <td>&#8226; C#</td>
                  <td>&#8226; ASP.Net Core 3.0</td>
                  <td>&#8226; RazorPages</td>
                </tr>
                <tr>
                  <td>&#8226; JavaScript</td>
                  <td>&#8226; EntityFramework</td>
                  <td>&#8226; MVC</td>
                </tr>
                <tr>
                  <td>&#8226; HTML/CSS</td>
                  <td>&#8226; Microsoft Azure</td>
                  <td>&#8226; MySQL</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="project-example">
            <img
              src={process.env.PUBLIC_URL + "/images/TsunamiSolution.jpg"}
              alt="Tsunami Solutions"
            ></img>
          </div>
        </div>
      </div>
    </Slide>
  );
};
