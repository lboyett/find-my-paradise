import React, { useState, useEffect } from "react";
import axios from "axios";
import "./results.css";
const XMLParser = require("react-xml-parser");

interface props {
  results: any;
}

function Results(props: props) {
  const [continents, setContinents] = useState<string[]>([]);
  const [landscapes, setLandscapes] = useState<string[]>([]);
  const [costs, setCosts] = useState<string[]>([]);

  useEffect(() => {
    setContinents(props.results.continents);
    setLandscapes(props.results.landscape);
    setCosts(props.results.cost);
  }, [props.results]);

  if (continents != undefined) {
    return (
      <div className="results">
        <div className="list">
          <h2>Continents</h2>
          <ul>
            {continents.map((continent, i) => {
              return <li key={i}>{continent}</li>;
            })}
          </ul>
        </div>
        <div className="list">
          <h2>Landscapes</h2>
          <ul>
            {landscapes.map((landscapes, i) => {
              return <li key={i}>{landscapes}</li>;
            })}
          </ul>
        </div>
        <div className="list">
          <h2>Monthly Cost of Living</h2>
          <ul>
            {costs.map((cost, i) => {
              return <li key={i}>{cost}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  } else {
    return <div className="results">Loading...</div>;
  }
}

export default Results;
