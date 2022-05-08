import React, { Component } from "react";
import github from "../../assets/icons/github.svg";
import gmail from "../../assets/icons/gmail.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import twitter from "../../assets/icons/twitter.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <footer id="footer">
        <p>Contact us</p>
        <ul>
          <li>
            <a href="" alt="github">
              <i>
                <img src={github} />
              </i>
            </a>
          </li>
          <li>
            <a href="" alt="gmail">
              <i>
                <i>
                  <img src={gmail} />
                </i>
              </i>
            </a>
          </li>
          <li>
            <a href="" alt="twitter">
              <i>
                <i>
                  <img src={twitter} />
                </i>
              </i>
            </a>
          </li>
          <li>
            <a href="" alt="linkedin">
              <i>
                <i>
                  <img src={linkedin} />
                </i>
              </i>
            </a>
          </li>
        </ul>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
