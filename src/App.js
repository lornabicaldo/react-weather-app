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
    </div>
  );
}


