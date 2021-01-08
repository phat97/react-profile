import React from "react";
import { Navbar } from "./components/layout/Navbar";
import { Overview } from "./components/layout/Overview";
import { About } from "./components/layout/About";
import { Projects } from "./components/layout/Projects";
import { Skillset } from "./components/layout/Skillset";
import { Hobbies } from "./components/layout/Hobbies";
import AOS from "aos";
import "aos/dist/aos.css";

export const App = () => {
  AOS.init({
    delay: 200,
    duration: 1000,
    once: true,
  });
  return (
    <div className="App">
      <Navbar />
      <Overview />
      <About />
      <Projects />
      <Skillset />
      {/* <Hobbies /> */}
    </div>
  );
};
