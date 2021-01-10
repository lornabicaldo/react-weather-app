import React from "react";
import SearchForm from "./SearchForm";
import Weather from "./Weather"
import Forecast from "./Forecast"
import City from "./City"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <City />
     <SearchForm />
     <Weather />
     <Forecast />
     <hr />
     <p>
       <small>🌊 Open-source code with 🧡 by Lorna Bicaldo 🌟 |{" "}<a href="https://github.com/lornabicaldo/react-weather-app" rel="noreferrer" target="_blank">Github</a></small>
     </p>
    </div>
  );
}


