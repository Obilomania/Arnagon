import React from "react";
import { styled } from "styled-components";
import ArnagonImage from "../assets/Arnagon.png";
import Map from "../assets/map.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Arnagon = () => {
  return (
    <Mapsection>
      <img src={ArnagonImage} alt="" className="arnagonImage" />
      <div className="content">
        <div className="left">
          <p>
            Boost your business with our professional influencer marketing
            platform filled with professionals across Europe, Asia and Africa.
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
        <div className="right">
          <img src={Map} alt="" />
        </div>
      </div>
    </Mapsection>
  );
};

const Mapsection = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 65vh;
  padding: 3rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .content {
    padding: 2.5rem 0;
    display: flex;
    align-items: start;
    justify-content: space-between;
    width: 100%;
    gap:4%;
  }
  .left {
    margin-top:5%;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100%;
  }
  .left p {
    font-family: Inter;
    font-size: 24px;
    font-weight: 500;
    line-height: 45px;
    letter-spacing: 0em;
    text-align: left;
  }
  .heroBtn {
    width: 20%;
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
  .right {
    width: 60%;
  }
  .right img {
    width: 1000px;
  }
`;
export default Arnagon;
