import React from "react";
import FooterBG from "../assets/footer.png";
import { styled } from "styled-components";
import FooterLogo from "../assets/logoFooter.png";
import Telegram from "../assets/Telegram.png";
import Twitter from "../assets/Twitter.png";
import anM from "../assets/M.png";

const Footer = () => {
  return (
    <Footsection>
      <img src={FooterBG} alt="" className="background" />
      <div className="footerContent">
        <div className="one">
          <img src={FooterLogo} alt="" />
          <p>
            We’re skilled professionals willing to help your company raise
            funds, increase sales, create buzz, acquire users, and grow your
            online community.
          </p>
          <div className="social">
            <img src={Twitter} alt="" />
            <img src={Telegram} alt="" />
            <img src={anM} alt="" />
          </div>
        </div>
        <div className="two group">
          <h1>Contact Us</h1>
          <div className="twoContent">
            <p>
              Address<span>Ikeja Lagos, Nigeria</span>
            </p>
            <p>
              Phone<span>+2349152320106</span>
            </p>
            <p>
              Email<span>arnagonofficial@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="three group">
          <h1>Services</h1>
          <div className="twoContent">
            <a href="/">Arnagon Labs</a>
            <a href="/">Event services</a>
            <a href="/">Head Hunting</a>
            <a href="/">Public Relations</a>
          </div>
        </div>
        <div className="four group">
          <h1>Quicklinks</h1>
          <div className="twoContent">
            <a href="/">Careers</a>
            <a href="/">Resources</a>
            <a href="/">Products</a>
            <a href="/">Blog</a>
          </div>
        </div>
      </div>
      <p className="copyright">Copyright © 2023 Arnagon Group</p>
    </Footsection>
  );
};
const Footsection = styled.div`
  width: 100%;
  height: 420px;
  position: relative;
  padding: 4rem 5rem;
  overflow: hidden;
  .background {
    position: absolute;
    right: 0;
    top: 0;
    width: 100vw;
    z-index: -1;
  }
  .footerContent {
    display: flex;
    align-items: start;
    justify-content: space-between;
    width: 100%;
  }
  .group h1 {
    color: white;
    font-family: Lato;
    font-size: 30px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: center;
  }
  .group {
    margin-top: 3.4rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    gap: 2.5rem;
  }
  .twoContent {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-family: Lato;
    font-size: 20px;
    font-weight: 400;
    line-height: 7px;
    letter-spacing: 0em;
    text-align: left;
  }
  .one {
    width: 345px;
    font-family: Lato;
    font-size: 20px;
    font-weight: 400;
    line-height: 7px;
    letter-spacing: 0em;
    text-align: left;
    line-height: 1.6rem;
  }
  .one .social {
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;
  }
  p {
    color: white;
  }
  a {
    text-decoration: none;
    color: white;
  }
  .copyright {
    position: absolute;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, -50%);
    font-size:16px;
    font-weight:400;

  }
`;
export default Footer;
