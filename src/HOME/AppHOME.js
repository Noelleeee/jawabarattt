import React from "react";
import "./AppHOME.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

// Import images
import logo from "./assets/images/logojbar.png";
import background from "./assets/images/background.jpg";
import gedungSate from "./assets/images/gedungsatee.jpg";
import cirebon from "./assets/images/cirebon.jpg";
import pangandaran from "./assets/images/pangandaran.jpeg";
import depok from "./assets/images/bogor.jpg";

const AppHOME = () => {
  return (
    <div
      className="containerhome"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${background})`,
      }}
    >
      <Navbar logo={logo} />
      <div className="rowhome">
        <Hero />
        <div className="colhome">
          <a href="/bandung">
            <Card
              title="BANDUNG"
              backgroundImage={gedungSate}
              className="card1home"
            />
          </a>
          <a href="/cirebon">
            <Card title="CIREBON" 
            backgroundImage={cirebon} 
            className="card2home" />
          </a>
          <a href="/pangandaran">
            <Card
              title="PANGANDARAN"
              backgroundImage={pangandaran}
              className="card3home"
            />
          </a>
          <a href="/bogor">
            <Card title="BOGOR" backgroundImage={depok} className="card4home" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppHOME;
