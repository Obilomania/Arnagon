import React from "react";
import { styled } from "styled-components";
import TheCircle from "../assets/Frame 86.png";

const About = () => {
  return (
    <AboutPage>
      <h1 className="heading">About Us</h1>
      <p className="abtContent">
        Arnagon group is a leading global influencer platform of skilled
        professionals across Europe, Asia and Africa with a track record of
        providing successful marketing services for large companies in various
        sectors such as Blockchain, NFTs, Metaverse, Gaming, Real estate,
        Fintech and more.
      </p>
      <p className="content2">
        With our high range of experience, expertise and connection, we;
      </p>
      <div className="circles">
        <div className="circle one">
          <div className="topCircle">1</div>
          <p>Introduce new products to the community</p>
        </div>
        <div className="circle one">
          <div className="topCircle">2</div>
          <p>Get the attention of global investors</p>
        </div>
        <div className="circle one">
          <div className="topCircle">3 </div>
          <p>Develop the project</p>
        </div>
      </div>
      <div className="theCircle">
        <img src={TheCircle} alt="" />
      </div>
      <p className="abtContent">
        Most importantly, we promote the projects with - PRs, advertorials,
        social media platforms, influencer channels and biggest news platforms
        at affordable rates.
      </p>
    </AboutPage>
  );
};

const AboutPage = styled.div`
  width: 100%;
  height: fit-content;
  padding: 1rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  .heading {
    font-size: 36px;
    font-weight: 600;
    text-align: center;
    color: #008080;
  }
  .abtContent {
    font-family: "Inter", sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: justified;
  }
  .content2 {
    font-family: "Inter", sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: #ef732d;
  }
  .circles {
    width: 100%;
    display: none;
    align-items: center;
    justify-content: space-between;
  }
  .circle {
    width: 350px;
    height: 350px;
    top: 73px;
    background: #0080801a;
    border-radius: 100%;
    position: relative;
  }
  .circle p {
    position: absolute;
    width: 206px;
    height: 108px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Inter", sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 36px;
    text-align: center;
  }
  .circle .topCircle {
    background: #ffa07a;
    position: absolute;
    right: 0.5rem;
    top: -1rem;
    width: 100px;
    border-radius: 20px;
    padding: 1.5rem;
    text-align: center;
    color: #f2e6d9;

    font-size: 30px;
    font-weight: 400;
    letter-spacing: 0em;
  }
  .circle .topCircle p {
    text-shadow: 2px 2px #000;
  }
  .theCircle {
    width: 100%;
    display: flex;
  }
  .theCircle img {
    margin: auto;
    width: 1550px;
    height: 500px;
  }
`;
export default About;
