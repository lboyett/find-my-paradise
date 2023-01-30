import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonList from "./components/ButtonList";
import { Link } from "react-router-dom";
const XMLParser = require("react-xml-parser");

const formDataURL = "http://localhost:8080/form-data";

interface props {
  updateResults: Function;
}

function Home(props: props) {
  const [continents, setContinents] = useState<object>({});
  const [landscape, setLandscape] = useState<object>({});
  const [cost, setCost] = useState<object>({});

  async function submitContents() {
    try {
      const res = await axios.post(formDataURL, {
        headers: {
          continents: continents,
          landscape: landscape,
          cost: cost,
        },
      });
      props.updateResults(res);
    } catch (err) {
      console.error(err);
    }
  }

  return (
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
        buttonData={["$0-500", "$500-2000", "$2000-5000", "$5000-10k", "$10k+"]}
        title={"Monthly Cost of Living"}
        updateData={(res: string[]) => setCost(res)}
      />
      <Link to="/results">
        <button
          onClick={() => submitContents()}
          className="selected-button search"
        >
          Search
        </button>
      </Link>
    </div>
  );
}

export default Home;
