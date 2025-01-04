import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Raja Dhoundiyal,</span> a frontend developer based in India.
      </h1>
      <p>
        I specialize in building clean, responsive, and interactive user
        interfaces using modern web technologies like HTML, CSS, JavaScript, and
        React. As a fresher, I'm driven by my passion for coding and learning
        new technologies to create impactful digital experiences.
      </p>

      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
