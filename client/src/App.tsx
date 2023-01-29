import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonList from "./components/ButtonList";
const XMLParser = require("react-xml-parser");

function App() {
  return (
    <div className="index-page">
      <div className="header-container">
        <img
          src={require("./images/sunrise-large.jpg")}
          alt="sunrise"
          className="sunrise-img"
        />
        <h1>Welcome to the rest of your life.</h1>
      </div>
      <div className="buttons">
        <ButtonList
          buttonData={[
            "North America",
            "South America",
            "Asia",
            "Africa",
            "Europe",
            "Australia",
          ]}
          title={"Continents"}
        />
        <ButtonList
          buttonData={[
            "Beach",
            "Mountains",
            "Desert",
            "Jungle",
            "City",
            "Farmland",
          ]}
          title={"Landscape & Scenery"}
        />
        <ButtonList
          buttonData={[
            "$0-500",
            "$500-2000",
            "$2000-5000",
            "$5000-10k",
            "$10k+",
          ]}
          title={"Monthly Cost of Living"}
        />
      </div>
    </div>
  );
}

export default App;
