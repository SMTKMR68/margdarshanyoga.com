import React from "react";
import "./Yoga.css";
const Yoga = () => {
  return (
    <>
      <div className="yoga_container">
        <img className="yog" src="./image2.jpg" alt="Yoga_Image" />
        <div className="history">
          <h1 className="history_title">
            Elevate Your Well-being: Join Our Transformative Yoga Classes for
            Inner Balance and Physical Harmony
          </h1>
          <p className="history_txt">
            Welcome to our transformative yoga classes where tranquility meets
            strength. Immerse yourself in a journey of self-discovery and
            holistic well-being. Our experienced instructors guide you through
            invigorating postures, mindful breathing, and rejuvenating
            meditation. Whether you're a beginner or seasoned practitioner, our
            classes cater to all levels, fostering a supportive community.
            Embrace the physical, mental, and spiritual benefits of yoga in a
            serene and inclusive environment. Join us on the mat and embark on a
            path to a healthier, more balanced life. Elevate your practice,
            nurture your soul, and discover the profound joy of yoga with us.
          </p>
          <div className="class-time">
            <div className="time">
              <img src="./Mindfulness-bro.svg" alt="class_Image" />
              <h2>Yoga Classes</h2>
            </div>
            <div className="time">
              <img src="./Peace of mind-amico.svg" alt="class_Image" />
              <h2>Medication Classes</h2>
            </div>
            <div className="time">
              <img src="./Yoga with face masks-pana.svg" alt="class_Image" />
              <h2 className="timeh2">Pilate Classes</h2>
            </div>
            {/* <div className="time">
              <img src="./guruG.jpg" alt="class_Image" />
              <h2>Medication Classes</h2>
              <button>Contact Us</button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Yoga;
