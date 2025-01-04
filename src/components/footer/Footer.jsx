import React from "react";
import "./Footer.css";
import user from '../../assets/user_icon.svg';
import logo from '../../assets/logo1.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt=""/>
          <p>
            I specialize in building clean, responsive, and interactive user
            interfaces using modern web technologies like HTML, CSS, JavaScript,
            and React.{" "}
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user} alt=""/>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Raja Dhoundiyal. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
