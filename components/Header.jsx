"use client";
import { useState } from "react";

const Header = (props) => {
  const [enteredIP, setEnteredIP] = useState(null);

  function handler() {
    props.setIP(enteredIP);
  }

  return (
    <>
      <h1>IP Address Tracker</h1>
      <div className="input-holder">
        <input
          type="text"
          name="ip"
          placeholder="Search for any IP address or domain"
          onChange={(e) => setEnteredIP(e.target.value)}
        />
        <img src="icon-arrow.svg" alt="arrow" onClick={handler} />
      </div>
      <div className="data">
        <div className="data-container">
          <p>IP ADDRESS</p>
          <h2>{props.ip}</h2>
        </div>
        <div className="data-container">
          <p>LOCATION</p>
          <h2>{props.location}</h2>
        </div>
        <div className="data-container">
          <p>TIMEZONE</p>
          <h2>{props.timezone}</h2>
        </div>
        <div className="data-container">
          <p>ISP</p>
          <h2>{props.isp}</h2>
        </div>
      </div>
    </>
  );
};

export default Header;
