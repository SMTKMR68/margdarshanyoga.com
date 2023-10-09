import React from "react";
import "./App.css";
import Sidenav from "./compo/Sidenav";
import { Route, Routes } from "react-router-dom";
import Home from "./compo/Home";
import About from "./compo/About";
import Contact from "./compo/Contact";
import Meditation from "./compo/Meditation";
import NotFound from "./compo/NotFound";
import Profile from "./compo/Profile";
import Services from "./compo/Services";
import Yoga from "./compo/Yoga";
import Footer from "./compo/Footer";

function App() {
  return (
    <>
      <Sidenav />
      <div className="view">
        <Routes>
          {/* for views of app */}
          <Route exact path="/" element={<Home />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/meditation" element={<Meditation />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
