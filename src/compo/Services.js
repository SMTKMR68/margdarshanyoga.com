import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  return (
    <>
      <div className="service-hero">
        <div className="service-txt">
          <h1>Yoga Services on Our Holistic Wellness Platform.</h1>
          <p style={{ color: "whitesmoke" }}>
            Elevate your well-being with our transformative yoga services.
            Expert instructors, personalized sessions, and a serene journey to
            wellness.
          </p>
        </div>
      </div>
      <div className="hero-container">
        <div className="hero-img">
          <img
            src="./meditation.png"
            className="hero-avatar"
            alt="Hero_Image"
          />
          <h2>
            Yoga <br />
            For Everyone
          </h2>
          <p>Yoga to brings physical and mental harmony.</p>
          <Link to="#" className="learn-more">
            Learn More
          </Link>
        </div>

        <div className="hero-img">
          <img src="./guruG.jpg" className="hero-avatar" alt="Hero_Image" />
          <h2>
            Our <br />
            Teachers
          </h2>
          <p>Guiding inner peace through yoga and inspires harmony.</p>
          <Link to="#" className="learn-more">
            Learn More
          </Link>
        </div>

        <div className="hero-img">
          <img src="./personal.png" className="hero-avatar" alt="Hero_Image" />
          <h2>
            Personal <br />
            Trainning
          </h2>
          <p>Receive personalized yoga training to your needs.</p>
          <Link to="#" className="learn-more">
            Learn More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Services;
