import React from "react";
import "./Contact.css";
import underline from "../../assets/nav_underline.svg";
import call from '../../assets/call_icon.svg';
import mail from '../../assets/mail_icon.svg';
import location from '../../assets/location_icon.svg'

const Contact = () => {
  return (
    <div className="contact">
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={underline} />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
                <img src={mail}/>
                <p>rajadhoundiyalpda5@gmail.com</p>
            </div>
            <div className="contact-detail">
                <img src={call}/>
                <p>9521597830</p>
            </div>
            <div className="contact-detail">
                <img src={location}/>
                <p>Delhi, India</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" name="name"/>
            <label>Your Email</label>
            <input type="email" placeholder="Enter your email" name="email"/>
            <label>Write your message here</label>
            <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
            <button className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
