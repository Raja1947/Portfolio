import React from "react";
import "./Services.css";
import Services_Data from "../../data/services_data";
import underline from "../../assets/nav_underline.svg";

const Services = () => {
  return (
    <div className="services">
      <div className="title-box">
        <h1>My Services</h1>
        <img src={underline} alt=""/>
      </div>
      <div className="services-container">
        {
            Services_Data.map((data)=>(
                <div className="services-format">
                    <h3>{data.s_no}</h3>
                    <h2>{data.s_name}</h2>
                    <p>{data.s_desc}</p>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Services;
