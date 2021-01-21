import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast"
import "./Weather.css";

export default function Weather(props) {
  
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
    });
  }
  
  function search() {
  const apiKey = "8faad2c6827a8ece72c2320ecccefbdb";
  
  let units = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);

  }

  function handleSubmit(event) {
    event.preventDefault();
    search()
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
   return( 
      <div className="weather">
      <div className="search-form">
            <form onSubmit={handleSubmit}>
             <div className="row">
             <div className="col-6">
             <input type="Search" placeholder="Enter a city" className="form-control" autoFocus="on" onChange={handleCityChange} />
             </div>
             <div className="col-3">
             <button type="submit" className="btn btn-primary">Submit</button>
             </div>
             </div>
            </form>
        </div>
   <WeatherInfo data={weatherData} />
   <WeatherForecast city={weatherData.city} />
    </div>
  );
  } else {
    search();
  return "Loading...";
  }
}