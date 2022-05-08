import React, { Component } from "react";
import "./About.css";
import lineBreak from "../../assets/images/section line break.webp";

const About = () => {
  return (
    <React.Fragment>
      <div className="about-wrapper">
        <h1 class="section-title" id="about">
          About us
        </h1>
        <p class="section-para">
          We THE DEMONS are the English rock band formed in London in 2015.
          Since six years, we are one of the most popular and enduring bands of
          the rock era.
        </p>
      </div>
      <div className="line-break-wrapper">
        <img className="about-line-break" src={lineBreak} alt="" />
      </div>
    </React.Fragment>
  );
};

export default About;
