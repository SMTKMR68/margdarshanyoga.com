import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-hero"></div>
      <div className="conatct-txt">
        <h1 className="cont-hero">
          Et mollit et deserunt consectetur aliqua cupidatat labore.
        </h1>
        <p className="cont-p">
          Consectetur eu est ad nulla aliquip quis magna ea. Exercitation ipsum
          sint mollit duis aute ea et irure. Consectetur non do nostrud pariatur
          est ullamco exercitation. Eiusmod veniam elit sunt dolore anim nisi
          ullamco amet nostrud consectetur qui in minim. Dolor ex aute eiusmod
          nulla cupidatat esse do id irure ea excepteur anim incididunt. Aliqua
          eiusmod ut commodo ad consectetur sint et. Eu et dolor tempor
          cupidatat eiusmod ad Lorem nostrud est proident. Veniam duis sint
          cillum non labore labore. Commodo qui elit cupidatat sunt. Ad qui
          nulla laborum Lorem non quis. Laboris ullamco labore nostrud do aute
          deserunt.
        </p>
      </div>
      <div className="contact-container">
        <div className="contact-box">
          <img src="./location.png" alt="contact" />
          <h1>Location</h1>
          <p>Anim nostrud proident aliquip incididunt esse cupidatat.</p>
        </div>
        <div className="contact-box">
          <img src="./phone.png" alt="contact" />
          <h1>Conatct Us</h1>
          <p>Anim nostrud proident aliquip incididunt esse cupidatat.</p>
        </div>
        <div className="contact-box">
          <img src="./office.png" alt="contact" />
          <h1>Office</h1>
          <p>Anim nostrud proident aliquip incididunt esse cupidatat.</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
