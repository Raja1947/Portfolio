import React from "react";
import "./Projects.css";
import underline from "../../assets/nav_underline.svg";
import mywork_data from "../../data/mywork_data";
import arrow from "../../assets/arrow_icon.svg";

const Projects = () => {
  return (
    <div className="mywork" id="portfolio">
      <div className="title-box">
        <h1>My Projects</h1>
        <img src={underline} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((data) => (
          <div
            key={data.w_no}
            className="project-card"
            onClick={() => window.open(data.link, "_blank")}
          >
            <img src={data.w_img} alt={data.w_name} />
            <div className="project-overlay">
              <p>{data.w_name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show more</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default Projects;
