import React, { useState, useEffect } from "react";
import axios from "axios";
const XMLParser = require("react-xml-parser");

interface buttonData {
  buttonData: string[];
  title: string;
}

function ButtonList(props: buttonData) {
  function handleButtonClick(e: any) {
    if (e.target.classList.contains("selected-button")) {
      e.target.classList.remove("selected-button");
      e.target.classList.add("selectable-button");
    } else {
      e.target.classList.remove("selectable-button");
      e.target.classList.add("selected-button");
    }
  }
  return (
    <div className="button-div">
      <h2>{props.title}</h2>
      <div className="button-group">
        {props.buttonData.map((button) => {
          return (
            <button
              className="selectable-button"
              onClick={(event) => handleButtonClick(event)}
            >
              {button}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ButtonList;
