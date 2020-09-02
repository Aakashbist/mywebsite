import React, { useEffect, useState } from "react";
import LandingPage from "./LandingPage";
import Education from "./education/Education";
import Skill from "./skill/Skill";
import Experience from "./experience/Experience";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <Experience />
      <Education />
      <Skill />
    </div>
  );
};

export default Home;
