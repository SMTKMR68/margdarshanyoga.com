import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="link_div">
          <h2 style={{ textAlign: "center" }}>Links</h2>
          <ul>
            <li>
              <img src="./home.png" className="link_img" alt="Link_Image" />
              <Link className="linkf" to="/">
                Home
              </Link>
            </li>
            <li>
              <img src="./service.png" className="link_img" alt="Link_Image" />
              <Link to="/services" className="linkf">
                Services
              </Link>
            </li>
            <li>
              <img src="./yoga.png" className="link_img" alt="Link_Image" />
              <Link to="/yoga" className="linkf">
                Yoga
              </Link>
            </li>
            <li>
              <img src="./aboutus.png" className="link_img" alt="Link_Image" />
              <Link to="/about-us" className="linkf">
                About Us
              </Link>
            </li>
            <li>
              <img src="./contact.png" className="link_img" alt="Link_Image" />
              <Link to="/contact-us" className="linkf">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="link_class">
          <h2 style={{ textAlign: "center" }}>Classes</h2>
          <ul>
            <li>
              <img src="./class.png" className="link_img" alt="Link_Image" />
              <Link to="/class_yoga" className="linkf">
                Yoga
              </Link>
            </li>
            <li>
              <img src="./class.png" className="link_img" alt="Link_Image" />
              <Link to="/class_meditation" className="linkf">
                Meditation
              </Link>
            </li>
            <li>
              <img src="./class.png" className="link_img" alt="Link_Image" />
              <Link to="/class_dance" className="linkf">
                Dance
              </Link>
            </li>
            <li>
              <img src="./class.png" className="link_img" alt="Link_Image" />
              <Link to="/class_pilate" className="linkf">
                Pilate
              </Link>
            </li>
            <li>
              <img src="./class.png" className="link_img" alt="Link_Image" />
              <Link to="/class_jumba" className="linkf">
                Jumba
              </Link>
            </li>
          </ul>
        </div>

        <div className="link_follow">
          <h2 style={{ textAlign: "center" }}>Follow Us</h2>
          <ul>
            <li>
              <img src="./twitter.png" className="link_img" alt="Link_Image" />
              <Link to="/twitter" className="linkf">
                Twitter (X)
              </Link>
            </li>
            <li>
              <img src="./facebook.png" className="link_img" alt="Link_Image" />
              <Link to="/facebook" className="linkf">
                Facebook
              </Link>
            </li>
            <li>
              <img
                src="./instagram.png"
                className="link_img"
                alt="Link_Image"
              />
              <Link to="/instagram" className="linkf">
                Instagram
              </Link>
            </li>
            <li>
              <img src="./whatsapp.png" className="link_img" alt="Link_Image" />
              <Link to="/whatsapp" className="linkf">
                Whatsapp
              </Link>
            </li>
            <li>
              <img src="./youtube.png" className="link_img" alt="Link_Image" />
              <Link to="/youtube" className="linkf">
                Youtube
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
