import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/husnainhashmi5" className="copyright">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="">
          Husnian Hashmi
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="">
          HTML HINTS
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
