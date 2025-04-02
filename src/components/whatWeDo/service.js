import React from "react";
import ImageCard from "./tab/tab";
import "./service.css";
import {Fabrication, Godown, Shed, Roofing, Stairs} from "./img/img"

const App = () => {
  return (
    <div className="services" style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      <ImageCard 
        title="Fabrication" 
        description="Fabrication involves cutting, bending, welding, assembling, and finishing metal or materials."
        imgSrc={Fabrication}
        imgAlt="Fabrication"
      />
      <ImageCard 
        title="GODOWN" 
        description="A godown is a large storage facility used for warehousing, inventory, and logistics."
        imgSrc={Godown}
        imgAlt="Godown"
      />
      <ImageCard 
        title="SHED CONSTRUCTION" 
        description="Shed construction requires framing, roofing, flooring, siding, insulation, and ventilation."
        imgSrc={Shed}
        imgAlt="Shed Construction"
      />
      <ImageCard 
        title="Roofing" 
        description="Roofing provides protection using shingles, metal, tiles, insulation, and ventilation."
        imgSrc={Roofing}
        imgAlt="Roofing"
      />
      <ImageCard 
        title="Stairs" 
        description="Stairs connect levels using steps, risers, treads, handrails, and balusters."
        imgSrc={Stairs}
        imgAlt="Stairs"
      />
    </div>
  );
};

export default App;
