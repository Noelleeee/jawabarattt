import React from "react";
import "./AppABOUT.css";
import logo from "./img/logojbar.png";
import pael from "./img/Pael.jpg";
import theo from "./img/Theo.jpg";
import jipeng from "./img/Jipeng.jpg";
import er from "./img/ER.jpg";
import background from "./img/background.jpg";

function AppABOUT() {
  const cards = [
    { img: pael, description: "00000105614", title: "Raphael Vittorio" },
    { img: theo, description: "00000107586", title: "Theofililo" },
    { img: jipeng, description: "00000105634", title: "Benedict Zivent" },
    { img: er, description: "00000109229", title: "Erlangga" },
  ];

  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    paddingLeft: "8%",
    paddingRight: "8%",
  };

  return (
    <div className="about-container" style={containerStyle}>
      <div className="navbar">
        <img src={logo} className="logo" alt="Logo" />
        <nav>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/media">MEDIA</a>
            </li>
            <li>
              <a href="/search">SEARCH</a>
            </li>
            <li>
              <a href="/about">ABOUT</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="about-container2">
        <div className="card__container">
          {cards.map((card, index) => (
            <article className="card__article" key={index}>
              <img src={card.img} alt="Card" className="card__img" />
              <div className="card__data">
                <span className="card__description">{card.description}</span>
                <h2 className="card__title">{card.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppABOUT;
