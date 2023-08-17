import React from "react";
import { styled } from "styled-components";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import People from "../assets/people.png";
import Plug from "../assets/plug.png";
import Talent from "../assets/talent.png";
import Public from "../assets/speaker.png";

const Service = () => {
  return (
    <ServicePage>
      <h1 className="heading">Our Services</h1>
      <div className="cards">
        <div className="card">
          <div className="icon">
            <img src={Plug} alt="" />
          </div>
          <h4 className="cardHeading">Armagon Labs</h4>
          <p>
            Arnagon Group has a proven track record of securing substantial
            grant funding, surpassing $100,000, for numerous clients within our
            ecosystem.{" "}
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={People} alt="" />
          </div>
          <h4 className="cardHeading">Event Services</h4>
          <p>
            At Arnagon Group, we specialise in providing comprehensive event
            hosting and management services for organisations across Nigeria and
            the wider African region.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={Talent} alt="" />
          </div>
          <h4 className="cardHeading">Talent Sourcing</h4>
          <p>
            Arnagon Group takes great pride in curating a robust database of
            over 300 exceptionally skilled software professionals.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={Public} alt="" />
          </div>
          <h4 className="cardHeading">Public relations</h4>
          <p>
            Building and maintaining a public image that will take your business
            to the moon is what we do at Arnagon.
          </p>
        </div>
      </div>
      <div className="heroBtn">
        <button>
          Get Started{" "}
          <span>
            <HiOutlineArrowNarrowRight />
          </span>
        </button>
      </div>
    </ServicePage>
  );
};
const ServicePage = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 65vh;
  padding: 1rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .heading {
    font-size: 36px;
    font-weight: 600;
    text-align: center;
    color: #008080;
  }
  .cards {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .card {
    width: 300px;
    height: 400px;
    background: #008080;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
    color: white;
    border-radius: 1rem;
    text-align: center;
  }
  .card .icon {
    background: white;
    color: black;
    padding: 1rem;
    font-size: 1.2rem;
    border-radius: 50%;
  }
  .card h4 {
    font-family: Segoe UI;
    font-size: 24px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
  }
  .card p {
    font-family: Segoe UI;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: center;
    height: 216px;
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
export default Service;
