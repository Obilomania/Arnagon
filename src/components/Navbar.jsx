import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <Navigation>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="/">Services</Link>
        <Link to="/">About Us</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Partners</Link>
      </div>
    </Navigation>
  );
};

const Navigation = styled.div`
  width: 100%;
  height: 11vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10rem;
  a {
    text-decoration: none;
    font-family: "Lato", sans-serif;
    font-size: 20px;
  }
  .navigation {
    display: flex;
    align-items: cnter;
    justify-content: space-between;
    width: 50%;
  }
`;
export default Navbar;
