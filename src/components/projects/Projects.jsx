import React from 'react';
import './Projects.css';
import underline from "../../assets/nav_underline.svg";
import mywork_data from '../../data/mywork_data';
import arrow from "../../assets/arrow_icon.svg"

const Projects = () => {
  return (
    <div className='mywork'>
        <div className="title-box">
              <h1>Selected Projects</h1>
              <img src={underline} alt=""/>
            </div>
            <div className='mywork-container'>
                {
                        mywork_data.map((data)=>(
                            <img src={data.w_img}/>
                        ))
                }
            </div>
            <div className='mywork-showmore'>
                <p>Show more</p>
                <img src={arrow}/>
            </div>
    </div>
  )
}

export default Projects
