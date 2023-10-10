import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-hero"></div>
      <div className="conatct-txt">
        <h1 className="cont-hero">Contact Us</h1>
        <p className="cont-p">
          Have a question or ready to embark on your yoga journey with us? Reach
          out for inquiries about our personalized home yoga classes,
          invigorating group yoga sessions, or tranquil meditation classes. Our
          dedicated team is here to assist you in creating a customized wellness
          experience that suits your lifestyle. Whether you're looking to
          enhance flexibility, find inner peace through meditation, or simply
          explore the profound benefits of yoga, we're here for you. Contact us
          today to begin your path to holistic well-being and bring the
          transformative power of yoga and meditation into your home.
        </p>
      </div>
      <div className="contact-container">
        <div className="contact-box">
          <img src="./location.png" alt="contact" />
          <h1>Location</h1>
          <p>
            Delhi
            <br />
            Sanatanam Marg
          </p>
        </div>
        <div className="contact-box">
          <img src="./phone.png" alt="contact" />
          <h1>Conatct Us</h1>
          <p>
            Mobile Number (+91) 8171269002
            <br />
            E-Mail sandeeppal13498@gmail.com
          </p>
        </div>
        <div className="contact-box">
          <img src="./office.png" alt="contact" />
          <h1>Office</h1>
          <p>
            B-1745, Gali No 10 Rajgarh Colony, Gandhi Nagar
            <br />
            Shahdara, East, New Delhi
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
