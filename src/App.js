import React from "react";
import SearchForm from "./SearchForm";
import Weather from "./Weather"
import Forecast from "./Forecast"
import './App.css';

export default function App() {
  return (
    <div className="App">
     <SearchForm />
     <Weather />
     <Forecast />
    </div>
  );
}


