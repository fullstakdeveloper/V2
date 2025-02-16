import React from "react";
import "./App.css";
import LandingPage from "./components/landPage.js";
import AboutMe from "./components/aboutMe.js";
import VantaBackground from "./components/VantaBackground.js";
import Projects from "./components/projects.js";
import Resume from "./components/resume.js";

function App() {
  return (
    <div className = "App">
      <VantaBackground/>
      <LandingPage />
      <AboutMe />
      <Projects/>
      <Resume/>
      

    </div>
  );
}

export default App;
