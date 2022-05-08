import React, { Component } from "react";
import "./Header.css";
import hero from "../../assets/images/demon.png";
import fire from "../../assets/images/fire.png";
import lineBreak from "../../assets/images/section line break.webp";

const Header = () => {
  return (
    <React.Fragment>
      <header className="header">
        <div class="mainTemplate-div">
          <img
            className="mainTemplate"
            src="https://static.wixstatic.com/media/84770f_38f03f480e824db487b4403a6937c874.png/v1/fill/w_1349,h_749,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/84770f_38f03f480e824db487b4403a6937c874.png"
            alt=""
          />
          <img className="mainTemplate-hero" src={hero} />
          <img className="mainTemplate-hero hero-fire" src={fire} />
          <img
            className="mainTemplate-name"
            src="https://see.fontimg.com/api/renderfont4/54OV/eyJyIjoiZnMiLCJoIjoyMDAsInciOjEwMDAsImZzIjoyMDAsImZnYyI6IiMwMDAwMDAiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/VEhFIERFTU9OUw/demon-killer.png"
          />
        </div>
        <img className="line-break" src={lineBreak} alt="" />
      </header>
    </React.Fragment>
  );
};

export default Header;
//require("../../assets/images/mainTemplate.webp")
