import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about_conatiner">
        <img src="./IMG_3565.JPG" className="about_image" alt="About_Image" />
        <div className="about">
          <h1 className="about_title">About Us</h1>
          <p className="about_txt">
            At Margdarshan Yoga, we are dedicated to bringing the transformative
            power of yoga and meditation directly to your home. Our team of
            experienced and passionate instructors is committed to making
            holistic well-being accessible to everyone. Whether you prefer the
            calming ambiance of meditation or the invigorating flow of yoga, our
            personalized home classes cater to your unique needs and schedule.
            We believe that fostering a consistent practice in the comfort of
            your space enhances the mind-body connection. With a focus on
            mindfulness and tailored sessions, we guide you on a journey to
            physical vitality and inner peace. Join us at Margdarshan Yoga and
            embark on a path to a healthier, more balanced life from the comfort
            of your home.
          </p>
        </div>
      </div>
      <div className="mission">
        <div className="mission_card">
          <img
            src="./IMG_3534-1.JPG"
            className="mission_img"
            alt="Card_Image"
          />
          <div className="cardtxt">
            <h1 className="card_h1">Our Mission:</h1>
            <p className="card_p">
              At Margdarshan Yoga, we are dedicated to bringing the
              transformative power of yoga and meditation to the comfort of your
              home. Our mission is to make holistic well-being accessible to
              everyone. Through personalized home classes, we aim to nurture
              physical strength, mental clarity, and spiritual harmony.
            </p>
          </div>
        </div>
        <div className="mission_card">
          <img src="./IMG_3482.JPG" className="mission_img" alt="Card_Image" />
          <h1 className="card_h1">Home Classes:</h1>
          <p className="card_p">
            Experience the serenity of yoga in the familiar surroundings of your
            home. Our expert instructors bring tailored sessions directly to
            you, ensuring a practice that fits seamlessly into your lifestyle.
            Whether you're a beginner or an experienced yogi, our home classes
            cater to all levels, fostering a sense of peace and balance.
          </p>
        </div>{" "}
        <div className="mission_card">
          <img src="./IMG_3558.JPG" className="mission_img" alt="Card_Image" />
          <h1 className="card_h1">Meditation Classes:</h1>
          <p className="card_p">
            Embark on a journey of inner peace with our meditation classes.
            Guided by experienced meditation practitioners, these sessions offer
            a sanctuary for your mind. Learn techniques to cultivate mindfulness
            and reduce stress, promoting a calm and centered life. Join us in
            creating moments of stillness amidst life's demands
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
