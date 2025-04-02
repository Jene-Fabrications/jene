import React from "react";

import images from "./img/img";

import CustomSlider from "./custom-slider";

import "./slider.css";

export default function App() {
  return (
    <div className="App">
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
    </div>
  );
}
