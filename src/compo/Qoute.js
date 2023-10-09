import React from "react";
import "./Qoute.css";
const Qoute = () => {
  return (
    <div className="qoute-banner">
      <img
        className="qoute-image"
        src="./logo-img1.jpg"
        alt="qoute imageis here"
      />
      <div className="qoute-txt">
        <p>
          <span className="coma">&#8220;</span>
          As gold purified in a furnace loses its impurities and achieves its
          own true nature, the mind gets rid of the impurities of the attributes
          of delusion, attachment and purity through meditation and attains
          Reality.
          <span className="coma"> &#8221;</span>
          <br />
          <br />
          <span className="adi">Adi Shankara</span>
        </p>
      </div>
    </div>
  );
};

export default Qoute;
