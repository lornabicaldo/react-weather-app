import React from "react";
import Weather from "./Weather"
import City from "./City"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <City />
     <Weather defaultCity="Valletta"/>
     <hr />
     <p>
       <small>🌊 Open-source code with 🧡 by Lorna Bicaldo 🌟 |{" "}<a href="https://github.com/lornabicaldo/react-weather-app" rel="noreferrer" target="_blank">Github</a></small>
     </p>
     </div>
    </div>
  );
}


