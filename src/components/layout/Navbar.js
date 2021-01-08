import React from "react";
import { Link } from "react-scroll";
import { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { animations, page } from "../../constants/";

export const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState("inherit");
  const [highlight, setHighlight] = useState("overview");

  useScrollPosition(
    ({ prevPos, currPos }) => {
      let position = Math.abs(currPos.y);
      const color = position > window.innerHeight - 100 ? "black" : "inherit";
      setNavbarBackground(color);

      switch (true) {
        case position >= window.innerHeight * 3.9:
          setHighlight(page.HOBBIES);

          break;
        case position >= window.innerHeight * 2.9:
          setHighlight(page.SKILLS);

          break;
        case position >= window.innerHeight * 1.9:
          setHighlight(page.PROJECTS);

          break;
        case position >= window.innerHeight * 0.9:
          setHighlight(page.ABOUT);
          break;
        default:
          setHighlight(page.OVERVIEW);
          break;
      }
    },
    [navbarBackground]
  );
  return (
    <div className="navbar" style={{ backgroundColor: navbarBackground }}>
      <h1 className="portfolio text-selection-none">
        Personal <span className="secondary-text">Portfolio</span>
      </h1>
      <div className="header-nav">
        <ul className="header-items text-selection-none">
          <li className={highlight === page.OVERVIEW ? "highlight" : null}>
            <Link to="overview" smooth={true} duration={animations.SCROLL_SPEED}>
              Home
            </Link>
          </li>
          <li className={highlight === page.ABOUT ? "highlight" : null}>
            <Link to="about" smooth={true} duration={animations.SCROLL_SPEED}>
              About
            </Link>
          </li>
          <li className={highlight === page.PROJECTS ? "highlight" : null}>
            <Link to="projects" smooth={true} duration={animations.SCROLL_SPEED}>
              Projects
            </Link>
          </li>
          <li className={highlight === page.SKILLS ? "highlight" : null}>
            <Link to="skills" smooth={true} duration={animations.SCROLL_SPEED}>
              Skills
            </Link>
          </li>
          {/* <li className={highlight === page.HOBBIES ? "highlight" : null}>
            <Link to="hobbies" smooth={true} duration={animations.SCROLL_SPEED}>
              Hobbies
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};
