import React from "react";
import "../service.css";

const ImageCard = ({ title, description, imgSrc, imgAlt }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={imgAlt} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;