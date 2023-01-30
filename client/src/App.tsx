import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonList from "./components/ButtonList";
const XMLParser = require("react-xml-parser");

const formDataURL = "http://localhost:8080/form-data";

function App() {
  const [continents, setContinents] = useState<string[]>([]);
  const [landscape, setLandscape] = useState<string[]>([]);
  const [cost, setCost] = useState<string[]>([]);

  async function submitContents() {
    try {
      const res = await axios.post(formDataURL, {
        headers: {
          continents: continents,
          landscape: landscape,
          cost: cost,
        },
      });
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  }

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
          updateData={(res: string[]) => setContinents(res)}
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
          updateData={(res: string[]) => setLandscape(res)}
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
          updateData={(res: string[]) => setCost(res)}
        />
        <button
          onClick={() => submitContents()}
          className="selected-button search"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default App;
