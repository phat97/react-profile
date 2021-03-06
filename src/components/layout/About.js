import React from "react";

export const About = () => {
  return (
    <div className="container" id="about">
      <div className="left-col">
        <p className="about-title" data-aos="fade-right">
          Curious and creative, I am constantly pushing for higher goals.
        </p>
        <p className="about-subtitle" data-aos="fade-up">
          I enjoy exploring the complexity of web development and diving into the creative world of
          cooking.
        </p>
      </div>
      <div className="right-col">
        <img
          className="me"
          src={process.env.PUBLIC_URL + "/images/me.jpg"}
          alt="me"
          data-aos="zoom-in"
          data-aos-delay="650"
          data-aos-duration="1200"
        ></img>
        <div className="contact-info">
          <h3 data-aos="zoom-in">Contact Info</h3>
          <p data-aos="fade-up" data-aos-delay="200">
            <a href="https://github.com/phat97">Github</a>
          </p>
          <p data-aos="fade-up" data-aos-delay="350">
            <a href="https://www.linkedin.com/in/phat-le/">linkedin</a>
          </p>
          <p data-aos="fade-up" data-aos-delay="500">
            phat.le@hotmail.com
          </p>
          <p data-aos="fade-up" data-aos-delay="650">
            (778)-318-3441
          </p>
        </div>
      </div>
    </div>
  );
};
