import React from 'react';
import { Navbar } from './components/layout/Navbar'
import { Overview } from './components/layout/Overview'
import { About } from './components/layout/About'
import { Projects } from './components/layout/Projects'
import { Skillset } from './components/layout/Skillset'

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Overview />
      <About />
      <Projects />
      <Skillset />
    </div>
  );
}

