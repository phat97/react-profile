import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Slide } from "pure-react-carousel";

export const TalktoVern = (props) => {
  return (
    <Slide index={props.index}>
      <div className="carosuel-item">
        <h1 className="slide-title">
          TalkToVern - <span className="secondary-text">Professional</span>
        </h1>
        <div className="carousel-grid">
          <div className="project-detail">
            <p className="project-header">Description:</p>
            <p>
              TalkToVern is a 4 month long project selected as part of the BCIT curriculum called a
              practicum. It is essentially an unpaid internship to gain work experience.
            </p>
            <p>
              The task was to design and create a web application that plays audio clip to the user and
              record the user. The recordings are then uploaded to the server and sent to an admin.
            </p>
            <p>
              My team and I spent the first month designing the aritechure of the system. I was
              responsible for working on the backend and dealing with the intergration and testing. The
              project took over 700 man hours to complete by the end of the 4 month.
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
            <img src={process.env.PUBLIC_URL + "/images/VERN Logo.jpg"} alt="TalkToVern Logo"></img>
          </div>
        </div>
      </div>
    </Slide>
  );
};
