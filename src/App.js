import React from "react";
import SearchForm from "./SearchForm";
import Weather from "./Weather"
import './App.css';

export default function App() {
  return (
    <div className="App">
    <h1> Weather App </h1>
     <SearchForm />
     <Weather />
    </div>
  );
}


