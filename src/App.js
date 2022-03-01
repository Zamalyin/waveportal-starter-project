import * as React from "react";
import { ethers } from "ethers";
import "./App.css";

export default function App() {
  const wave = () => {};

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">
          <span role="img" aria-label="Reunion island flag">
            🇷🇪
          </span>
          Zamalia! La Reynion lé la
        </div>

        <div className="bio">
          Hi! I'm Zamalyin, following a tutorial on buildspace.so =). Connect
          your Ethereum wallet and wave at me!
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
