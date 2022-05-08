import React, { Component } from "react";
import "./Events.css";
import rock from "../../assets/images/rock-event.webp";
import lineBreak from "../../assets/images/section line break.webp";

const Events = () => {
  return (
    <React.Fragment>
      <div className="event-wrapper" id="events">
        <h1 className="section-title">Events</h1>
        <p className="section-para">
          Join with us on these thrilling, all night long concerts
        </p>
      </div>
      <div className="event-card">
        <img src={rock} alt="" />
        <h1 className="card-title">DEMON ART FEST</h1>
        <p>
          Europe’s leading stoner rock collective DEMON ART FESTIVAL returns to
          MANIT in 2022. THE DEMONS is firmly planting their feet back into
          MANIT's underbelly with a mammoth line-up celebrating the very best of
          heavy music.
        </p>
        <button class="event-card-btn">Book ticket</button>
      </div>
      <div className="map-wrapper">
        <h1 className="section-title">Venue</h1>
        <p className="section-para">On 15 June from 8PM till the world's end</p>
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6636.379746595424!2d77.40076909997651!3d23.21690292234669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42e6172cd895%3A0x4db3061b2d53709c!2sMANIT!5e1!3m2!1sen!2sin!4v1651950613547!5m2!1sen!2sin"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <img className="line-break" src={lineBreak} alt="" />
      </div>
    </React.Fragment>
  );
};

export default Events;
