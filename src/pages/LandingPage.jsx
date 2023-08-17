import React from "react";
import { styled } from "styled-components";
import HeroSectionm from "../components/HeroSection";
import About from "../components/About";
import Service from "../components/Service";
import Packages from "../components/Packages";
import Arnagon from "../components/Arnagon";

const LandingPage = () => {
  return (
    <Landing>
      <HeroSectionm />
      <About />
      <Service />
          <Packages />
          <Arnagon/>
    </Landing>
  );
};

const Landing = styled.div``;
export default LandingPage;
