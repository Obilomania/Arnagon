import React from "react";
import { styled } from "styled-components";
import Polygon from "../assets/Polygon 7.png";
import Done from "../assets/done.png";
import Close from "../assets/close.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Packages = () => {
  return (
    <Package>
      <h1 className="heading">Our Packages</h1><br /><br />
      <div className="cards">
        <div className="card">
          <div className="topCard">
            <div className="topContent">
              <h2>Bronze</h2>
              <p>A Social Media Plan</p>
            </div>
            <img className="polygon" src={Polygon} alt="" />
          </div>
          <div className="cardContent">
            <div className="info">
              <img src={Done} alt="" />
              <p>10 still and 5 video graphics</p>
            </div>
            <div className="info">
              <img src={Done} alt="" />
              <p>Social Media support</p>
            </div>
            <div className="info">
              <img src={Done} alt="" />
              <p>Crypto press releases</p>
            </div>
            <div className="info">
              <img src={Close} alt="" />
              <p>Marketing strategy planning</p>
            </div>
            <div className="info">
              <img src={Close} alt="" />
              <p>Meeting with a crypto advisor</p>
            </div>
            <div className="info">
              <img src={Close} alt="" />
              <p>360 merch store setup</p>
            </div>
            <div className="info">
              <img src={Close} alt="" />
              <p>Includes guerilla marketing budget</p>
            </div>
            <div className="info">
              <img src={Close} alt="" />
              <p>Ad campaigns</p>
            </div>
            <div className="info">
              <img src={Close} alt="" />
              <p>Your logo launched into space</p>
            </div>
          </div>
          <div className="heroBtn">
            <button>
              Get started today
              <span>
                <HiOutlineArrowNarrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="topCard">
            <div className="topContent">
              <h2>Silver</h2>
              <p>An upgraded social media and content plan</p>
            </div>
            <img className="polygon" src={Polygon} alt="" />
          </div>
          <div className="cardContent">
            <div className="info">
              <img src={Done} alt="" />
              <p>10 still and 5 video graphics</p>
            </div>
            <div className="info">
              <img src={Done} alt="" />
              <p>Social Media support</p>
            </div>
            <div className="info">
              <img src={Done} alt="" />
              <p>Crypto press releases</p>
            </div>
            <div className="info">
              <img src={Done} alt="" />
              <p>Marketing strategy planning</p>
            </div>
            <div className="info">
              <img src={Done} alt="" />
              <p>Meeting with a crypto advisor</p>
            </div>
            <div className="info">
              <img src={Done} alt="" />
              <p>360 merch store setup</p>
            </div>
            <div className="info">
              <img src={Done} alt="" />
              <p>Includes guerilla marketing budget</p>
            </div>
            <div className="info">
              <img src={Done} alt="" />
              <p>Ad campaigns</p>
            </div>
            <div className="info">
              <img src={Close} alt="" />
              <p>Your logo launched into space</p>
            </div>
          </div>
          <div className="heroBtn">
            <button>
              Get started today
              <span>
                <HiOutlineArrowNarrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="topCard">
            <div className="topContent">
              <h2>Gold</h2>
              <p>An all-inclusive plan</p>
            </div>
            <img className="polygon" src={Polygon} alt="" />
          </div>
          <div className="cardContent">
            <div className="info">
              <img src={Done} alt="" />
              <p>10 still and 5 video graphics</p>
            </div>
            <div className="info">
              <img src={Done} alt="" />
              <p>Social Media support</p>
            </div>
            <div className="info">
              <img src={Done} alt="" />
              <p>Crypto press releases</p>
            </div>
            <div className="info">
              <img src={Done} alt="" />
              <p>Marketing strategy planning</p>
            </div>
            <div className="info">
              <img src={Done} alt="" />
              <p>Meeting with a crypto advisor</p>
            </div>
            <div className="info">
              <img src={Done} alt="" />
              <p>360 merch store setup</p>
            </div>
            <div className="info">
              <img src={Done} alt="" />
              <p>Includes guerilla marketing budget</p>
            </div>
            <div className="info">
              <img src={Done} alt="" />
              <p>Ad campaigns</p>
            </div>
            <div className="info">
              <img src={Done} alt="" />
              <p>Your logo launched into space</p>
            </div>
          </div>
          <div className="heroBtn">
            <button>
              Get started today
              <span>
                <HiOutlineArrowNarrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </Package>
  );
};
const Package = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 65vh;
  padding: 3rem 5rem;
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
    justify-content: space-between;
    align-items: center;
  }
  .card {
    background: #f2e6d9;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 383px;
    height: 700px;
    border-radius: 8px;
    overflow: hidden;
  }
  .card .topCard {
    background: #ffa07a;
    width: 383px;
    height: 116.27px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Lato;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    text-align: center;
    position: relative;
  }
  .polygon {
    position: absolute;
    top: 116.27px;
  }
  .topCard p {
    font-family: Lato;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
  .topContent p {
    width: 226px;
    text-align: center;
  }
  .cardContent {
    margin: 4rem 0 1.5rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    gap: 20px;
    width: 337px;
  }
  .cardContent .info {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1.5rem;
    height: 24px;
    position: relative;
    font-weight: 400;
    font-size: 20px;
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
    width: 301px;
    height: 58.13px;
    color: white;
    font-size: 24px;
    font-family: "Lato", sans-serif;
    margin-top: 1.2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    span {
      margin-top: 0.4rem;
    }
  }
`;
export default Packages;
