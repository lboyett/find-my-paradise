import React, { useState, useEffect } from "react";
import axios from "axios";
const XMLParser = require("react-xml-parser");

interface props {
  buttonData: string[];
  title: string;
  updateData: Function;
}

function ButtonList(props: props) {
  const [selected, setSelected] = useState<string[]>([]);

  function handleButtonClick(e: any, button: string) {
    if (e.target.classList.contains("selected-button")) {
      e.target.classList.remove("selected-button");
      e.target.classList.add("selectable-button");
      selected.forEach((item) => {
        if (item === button) {
          const i = selected.indexOf(item);
          selected.splice(i, 1);
          setSelected([...selected]);
        }
      });
    } else {
      e.target.classList.remove("selectable-button");
      e.target.classList.add("selected-button");
      setSelected([...selected, button]);
    }
  }

  useEffect(() => {
    props.updateData(selected);
  }, [selected]);

  return (
    <div className="button-div">
      <h2>{props.title}</h2>
      <div className="button-group">
        {props.buttonData.map((button) => {
          return (
            <button
              key={button}
              className="selectable-button"
              onClick={(event: any) => handleButtonClick(event, button)}
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
