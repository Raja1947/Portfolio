import React from "react";
import "./Hero.css";
import profile_img from "../../assets/pro1.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Raja Dhoundiyal,</span> a frontend developer from India.
      </h1>
      <p>
        I specialize in building clean, responsive, and interactive user
        interfaces using modern web technologies like HTML, CSS, JavaScript, and
        React. As a fresher, I'm driven by my passion for coding and learning
        new technologies to create impactful digital experiences.
      </p>

      <div className="hero-action">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <div className="hero-connect">Connect With Me</div>
        </AnchorLink>

        <div
          className="hero-resume"
          onClick={() => window.open("https://github.com/Raja1947", "_blank")}
        >
          My Github
        </div>
      </div>
    </div>
  );
};

export default Hero;
