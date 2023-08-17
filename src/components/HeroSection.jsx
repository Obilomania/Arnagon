import React from "react";
import { styled } from "styled-components";
import heroBG from "../assets/heroBG.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const HeroSection = () => {
  return (
    <Hero>
      <div className="heroBG">
        <img src={heroBG} alt="" />
      </div>
      <div className="heroContent">
        <h1 className="mainHead">
          Elevate Your Brands To New Heights With Our global Service
        </h1>
        <p className="subHeading">
          The Best Marketing Agency For Crypto, NFT, Web3, Gaming...
        </p>
        <p className="downHeading">
          Extraordinary service for extraordinary clients.
        </p>
        <div className="heroBtn">
          <button>
            Get Started{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </button>
        </div>
      </div>
    </Hero>
  );
};

const Hero = styled.div`
  position: relative;
  width: 100%;
  height: 89vh;
  padding: 0 3rem;
  .heroBG img {
    position: absolute;
    right: 0;
    z-index: -1;
    height: 89vh;
  }
  .mainHead {
    font-family: "Lato", sans-serif;
    font-size: 8rem;
    text-align: center;
    font-weight: 800;
  }
  .heroContent {
    z-index: 5;
  }
  .subHeading {
    text-align: center;
    font-size: 36px;
    font-weight: 400;
  }
  .downHeading {
    text-align: center;
    margin-top: 1.2rem;
    font-size: 24px;
    font-weight: 400;
  }
  .heroBtn {
    width: 100%;
  }
  .heroBtn button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin: auto;
    gap: 1rem;
    background: #ef732d;
    width: 237px;
    height: 72px;
    color: white;
    font-size: 1.1rem;
    margin-top: 1.2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    span {
      margin-top: 0.4rem;
    }
  }
`;
export default HeroSection;
