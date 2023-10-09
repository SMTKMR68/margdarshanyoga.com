import React from "react";
import "./Course.css";
const Course = () => {
  return (
    <>
      <div className="courses">
        <div className="card">
          <img src="img.jpg" alt="Avatar" style={{ width: "100%" }} />
          <div className="containerS">
            <h4>
              <b>Yoga</b>
            </h4>
            <p>Balance, Flexibility , Strength</p>
          </div>
        </div>

        <div className="card">
          <img src="yog11.png" alt="Avatar" style={{ width: "100%" }} />
          <div className="containerS">
            <h4>
              <b>Meditation</b>
            </h4>
            <p>Calm, Focus, Presence, Inner Peace</p>
          </div>
        </div>

        <div className="card">
          <img src="guruG.jpg" alt="Avatar" style={{ width: "100%" }} />
          <div className="containerS">
            <h4>
              <b>Sandeep Pal</b>
            </h4>
            <p>Yoga Instructor/Yoga Trainer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
