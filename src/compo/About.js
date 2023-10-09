import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about_conatiner">
        <img src="./IMG_3565.JPG" className="about_image" alt="About_Image" />
        <div className="about">
          <h1 className="about_title">
            Anim labore sint cillum irure reprehenderit proident consectetur.
          </h1>
          <p className="about_txt">
            Sint ullamco elit irure minim ut tempor enim eu adipisicing deserunt
            proident eu. Velit nostrud elit culpa aute consectetur irure non
            anim ut deserunt tempor. Consequat fugiat elit consequat laboris.
            Sint minim reprehenderit ipsum laboris labore cillum cupidatat velit
            irure commodo aliqua magna. Tempor officia in eu irure ea. Laboris
            consequat deserunt excepteur ut ullamco eiusmod non proident labore
            laboris veniam voluptate in. Adipisicing eu pariatur voluptate elit
            ipsum tempor nisi proident officia proident.
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
            <h1 className="card_h1">
              Officia nulla aliquip consequat excepteur reprehenderit irure
              culpa esse mollit adipisicing occaecat eu veniam.
            </h1>
            <p className="card_p">
              Enim irure ad tempor anim veniam non quis. Sit consequat mollit
              culpa exercitation duis laborum ipsum esse duis labore mollit
              voluptate sit exercitation. Ea proident dolor quis in est nulla
              fugiat proident consectetur Lorem fugiat. Et eiusmod proident aute
              velit aute consequat ex magna nisi nulla.
            </p>
          </div>
        </div>
        <div className="mission_card">
          <img src="./IMG_3482.JPG" className="mission_img" alt="Card_Image" />
          <h1 className="card_h1">
            Voluptate incididunt consectetur ullamco ipsum cillum culpa amet
            reprehenderit ex enim nulla cupidatat.
          </h1>
          <p className="card_p">
            Enim irure ad tempor anim veniam non quis. Sit consequat mollit
            culpa exercitation duis laborum ipsum esse duis labore mollit
            voluptate sit exercitation. Ea proident dolor quis in est nulla
            fugiat proident consectetur Lorem fugiat. Et eiusmod proident aute
            velit aute consequat ex magna nisi nulla.
          </p>
        </div>{" "}
        <div className="mission_card">
          <img src="./IMG_3558.JPG" className="mission_img" alt="Card_Image" />
          <h1 className="card_h1">
            Voluptate incididunt consectetur ullamco ipsum cillum culpa amet
            reprehenderit ex enim nulla cupidatat.
          </h1>
          <p className="card_p">
            Enim irure ad tempor anim veniam non quis. Sit consequat mollit
            culpa exercitation duis laborum ipsum esse duis labore mollit
            voluptate sit exercitation. Ea proident dolor quis in est nulla
            fugiat proident consectetur Lorem fugiat. Et eiusmod proident aute
            velit aute consequat ex magna nisi nulla.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
