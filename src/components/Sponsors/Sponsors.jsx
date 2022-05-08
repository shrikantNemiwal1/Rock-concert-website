import React, { Component } from "react";
import "./Sponsors.css";
import lineBreak from "../../assets/images/section line break.webp";

const Sponsors = () => {
  return (
    <React.Fragment>
      <div className="sponsor-wrapper" id='sponsors'>
        <h1 className="section-title">Sponsors</h1>
        <section className="sponsor-section">
          <h2>Presented in Partnership with</h2>
          <div className="logo-wrapper">
            <img
              src="https://concertsatcommonsbeach.com/wp-content/uploads/2018/03/TCDA_Logo.jpg"
              alt=""
            />
          </div>
        </section>
        <section className="sponsor-section">
          <h2>Media and production Sponsors</h2>
          <div className="logo-wrapper">
            <img
              src="https://concertsatcommonsbeach.com/wp-content/uploads/2018/03/moonshineink-165x165.jpg"
              alt=""
            />
            <img
              src="https://concertsatcommonsbeach.com/wp-content/uploads/2018/03/basecamp-165x165.jpg"
              alt=""
            />
            <img
              src="https://concertsatcommonsbeach.com/wp-content/uploads/2018/03/1015-165x165.jpg"
              alt=""
            />
            <img
              src="https://concertsatcommonsbeach.com/wp-content/uploads/2018/03/pepper-tree-165x165.jpg"
              alt=""
            />
          </div>
        </section>
        <section className="sponsor-section">
          <h2>Community Sponsors</h2>
          <div className="logo-wrapper">
            <img
              src="https://concertsatcommonsbeach.com/wp-content/uploads/2019/05/placer-165x165.jpg"
              alt=""
            />
            <img
              src="https://concertsatcommonsbeach.com/wp-content/uploads/2018/03/rotary-international-165x165.jpg"
              alt=""
            />
          </div>
        </section>
        <img className="line-break" src={lineBreak} alt="" />
      </div>
    </React.Fragment>
  );
};

export default Sponsors;
