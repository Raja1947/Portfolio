import React, { useState } from "react";
import "./Contact.css";
import underline from "../../assets/nav_underline.svg";
import call from "../../assets/call_icon.svg";
import mail from "../../assets/mail_icon.svg";
import location from "../../assets/location_icon.svg";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const [result, setResult] = useState("");

  const notify = () => {
    toast.success("Form Submitted Successfully!", {
      autoClose: 1000,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8818ea43-5b7b-4585-b92e-f28b6977a032");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        notify();
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setResult("There was an issue with the submission.");
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={underline} alt="underline" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="email" />
              <p>rajadhoundiyalpda5@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="call" />
              <p>9521597830</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="location" />
              <p>Delhi, India</p>
            </div>
          </div>
        </div>

        <form className="contact-right" onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <label>Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Contact;
