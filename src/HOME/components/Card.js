import React from "react";

const Card = ({ title, backgroundImage, className }) => {
  const cardStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${backgroundImage})`,
  };

  return (
    <div className={`cardhome ${className}`} style={cardStyle}>
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
