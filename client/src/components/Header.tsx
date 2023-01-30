import React, { useState, useEffect } from "react";

function Header() {
  return (
    <div className="header-container">
      <img
        src={require("../images/sunrise-large.jpg")}
        alt="sunrise"
        className="sunrise-img"
      />
      <h1>Welcome to the rest of your life.</h1>
    </div>
  );
}

export default Header;
