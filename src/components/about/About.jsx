import React from "react";
import "./About.css";
import profile from "../../assets/profile.jpg";
import logo from "../../assets/nav_underline.svg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="title-box">
        <h1>About me</h1>
        <img src={logo} />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile} />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an aspiring Frontend Developer with a strong interest in
              creating visually appealing and highly functional web
              applications. My experience includes working on personal projects,
              where I have implemented modern frontend technologies like React,
              and responsive design principles.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>CSS</p>
              <hr style={{ width: "72%" }} />
            </div>
            <div className="about-skill">
              <p>JAVASCRIPT</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>BOOTSTRAP</p>
              <hr style={{ width: "72%" }} />
            </div>
            <div className="about-skill">
              <p>REACT JS</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
